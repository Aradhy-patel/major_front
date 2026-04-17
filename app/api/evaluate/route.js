export async function POST(req) {
  try {
    const { code, testCases, questionTitle } = await req.json()

    const results = []
    let passedCount = 0

    for (const testCase of testCases) {
      try {
        const functionMatch = code.match(/function\s+(\w+)/)
        if (!functionMatch) {
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: "Error",
            passed: false,
            error: "No function found in code"
          })
          continue
        }

        const functionName = functionMatch[1]
        
        const wrappedCode = `
          ${code}
          const __input = [${testCase.input}];
          const __result = ${functionName}(...__input);
          JSON.stringify(__result);
        `

        let result
        try {
          result = eval(wrappedCode)
        } catch (e) {
          results.push({
            input: testCase.input,
            expected: testCase.expected,
            actual: "Runtime Error",
            passed: false,
            error: e.message
          })
          continue
        }

        const normalizedResult = normalizeOutput(result)
        const normalizedExpected = normalizeOutput(testCase.expected)
        const passed = normalizedResult === normalizedExpected

        if (passed) passedCount++

        results.push({
          input: testCase.input,
          expected: testCase.expected,
          actual: result,
          passed,
          error: null
        })
      } catch (error) {
        results.push({
          input: testCase.input,
          expected: testCase.expected,
          actual: "Error",
          passed: false,
          error: error.message
        })
      }
    }

    const allPassed = passedCount === testCases.length
    
    const timeComplexity = analyzeTimeComplexity(code)
    const spaceComplexity = analyzeSpaceComplexity(code)
    
    const feedback = generateFeedback(allPassed, passedCount, testCases.length, code)
    const suggestions = generateSuggestions(code, allPassed)

    return Response.json({
      testResults: results,
      summary: {
        totalTests: testCases.length,
        passed: passedCount,
        failed: testCases.length - passedCount,
        allPassed
      },
      complexity: {
        time: timeComplexity,
        space: spaceComplexity
      },
      feedback,
      suggestions
    })
  } catch (error) {
    console.error("Error evaluating code:", error)
    return Response.json(
      { error: "Failed to evaluate code" },
      { status: 500 }
    )
  }
}

function normalizeOutput(output) {
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output)
      return JSON.stringify(parsed)
    } catch {
      return output.replace(/['"]/g, "").replace(/\s/g, "")
    }
  }
  return JSON.stringify(output).replace(/\s/g, "")
}

function analyzeTimeComplexity(code) {
  const hasNestedLoops = /for\s*\([^)]*\)[^}]*for\s*\([^)]*\)/.test(code) || 
                         /while\s*\([^)]*\)[^}]*while\s*\([^)]*\)/.test(code)
  const hasRecursion = /function\s+(\w+)[^}]*\1\s*\(/.test(code)
  const hasSingleLoop = /for\s*\(|while\s*\(|\.forEach|\.map|\.filter|\.reduce/.test(code)
  const hasSorting = /\.sort\(/.test(code)
  const hasBinarySearch = /Math\.floor\s*\(\s*\([^)]*\)\s*\/\s*2\s*\)/.test(code)

  if (hasNestedLoops) return "O(n²)"
  if (hasSorting) return "O(n log n)"
  if (hasBinarySearch) return "O(log n)"
  if (hasRecursion) return "O(2^n) - consider memoization"
  if (hasSingleLoop) return "O(n)"
  return "O(1)"
}

function analyzeSpaceComplexity(code) {
  const hasNewArray = /new Array|\.slice\(|\.map\(|\.filter\(|\[\.\.\.|Array\.from/.test(code)
  const hasObject = /new Map|new Set|\{\}/.test(code)
  const hasRecursion = /function\s+(\w+)[^}]*\1\s*\(/.test(code)

  if (hasRecursion) return "O(n) - recursion stack"
  if (hasNewArray || hasObject) return "O(n)"
  return "O(1)"
}

function generateFeedback(allPassed, passed, total, code) {
  if (allPassed) {
    return "Excellent work! All test cases passed. Your solution is correct."
  }
  
  if (passed === 0) {
    return "None of the test cases passed. Check your logic and make sure you're returning the correct type."
  }
  
  return `${passed} out of ${total} test cases passed. Review the failed cases and check edge cases.`
}

function generateSuggestions(code, allPassed) {
  const suggestions = []
  
  if (!allPassed) {
    suggestions.push("Review the failed test cases carefully")
    suggestions.push("Consider edge cases like empty arrays, single elements, or negative numbers")
  }
  
  if (/\.sort\(\)/.test(code)) {
    suggestions.push("When using sort(), provide a compare function for numbers: sort((a, b) => a - b)")
  }
  
  if (/for.*for/.test(code)) {
    suggestions.push("Consider using a hash map to reduce nested loops and improve time complexity")
  }
  
  if (!code.includes("//") && !code.includes("/*")) {
    suggestions.push("Add comments to explain your approach")
  }

  if (suggestions.length === 0) {
    suggestions.push("Great job! Consider optimizing further or trying alternative approaches")
  }
  
  return suggestions
}
