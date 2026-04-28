// "use client"

// import { useState, useCallback } from "react"
// import { QuestionForm } from "@/components/question-form"


// import { QuestionDisplay } from "@/components/question-display"
// import { CodeEditor } from "@/components/code-editor"
// import { ResultsPanel } from "@/components/results-panel"
// import { QuestionNavigator } from "@/components/question-navigator"
// import { Terminal } from "lucide-react"

// export default function Home() {
//   const [questions, setQuestions] = useState([])
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const [currentDifficulty, setCurrentDifficulty] = useState("easy")
//   const [codes, setCodes] = useState({})
//   const [evaluations, setEvaluations] = useState({})
//   const [completedQuestions, setCompletedQuestions] = useState(new Set())
//   const [isGenerating, setIsGenerating] = useState(false)
//   const [isEvaluating, setIsEvaluating] = useState(false)
//   const [error, setError] = useState(null)

//   const currentQuestion = questions[currentQuestionIndex]
//   const currentCode = codes[currentQuestionIndex] || currentQuestion?.starterCode || ""
//   const currentEvaluation = evaluations[currentQuestionIndex]

//   const handleGenerate = useCallback(async (topic, difficulty, count) => {
//     setIsGenerating(true)
//     setError(null)
//     try {
//       const response = await fetch("/api/generate-questions", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ topic, difficulty, count }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to generate questions")
//       }

//       const data = await response.json()

//       if (data.error) {
//         throw new Error(data.error)
//       }

//       if (data.questions) {
//         setQuestions(data.questions)
//         setCurrentDifficulty(difficulty)
//         setCurrentQuestionIndex(0)
//         setCodes({})
//         setEvaluations({})
//         setCompletedQuestions(new Set())
//       }
//     } catch (err) {
//       setError(err.message || "Failed to generate questions. Please try again.")
//     } finally {
//       setIsGenerating(false)
//     }
//   }, [])

//   const handleCodeChange = useCallback((code) => {
//     setCodes(prev => ({ ...prev, [currentQuestionIndex]: code }))
//   }, [currentQuestionIndex])

//   const handleReset = useCallback(() => {
//     if (currentQuestion) {
//       setCodes(prev => ({ ...prev, [currentQuestionIndex]: currentQuestion.starterCode }))
//       setEvaluations(prev => {
//         const newEvals = { ...prev }
//         delete newEvals[currentQuestionIndex]
//         return newEvals
//       })
//     }
//   }, [currentQuestionIndex, currentQuestion])

//   const handleSubmit = useCallback(async () => {
//     if (!currentQuestion || !currentCode.trim()) return

//     setIsEvaluating(true)
//     try {
//       const response = await fetch("/api/evaluate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           code: currentCode,
//           testCases: currentQuestion.testCases,
//           questionTitle: currentQuestion.title,
//           questionDescription: currentQuestion.description,
//         }),
//       })

//       if (!response.ok) {
//         throw new Error("Failed to evaluate code")
//       }

//       const data = await response.json()

//       if (data.error) {
//         throw new Error(data.error)
//       }

//       setEvaluations(prev => ({ ...prev, [currentQuestionIndex]: data }))

//       if (data.summary?.allPassed) {
//         setCompletedQuestions(prev => new Set([...prev, currentQuestionIndex]))
//       }
//     } catch (err) {
//       setEvaluations(prev => ({
//         ...prev,
//         [currentQuestionIndex]: {
//           testResults: [],
//           summary: { totalTests: 0, passed: 0, failed: 0, allPassed: false },
//           feedback: err.message || "Failed to evaluate code",
//           suggestions: ["Check your code syntax", "Make sure you are returning the correct value"]
//         }
//       }))
//     } finally {
//       setIsEvaluating(false)
//     }
//   }, [currentQuestion, currentCode, currentQuestionIndex])

//   const handleNavigate = useCallback((index) => {
//     if (index >= 0 && index < questions.length) {
//       setCurrentQuestionIndex(index)
//     }
//   }, [questions.length])

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Header */}
//       <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center gap-3">
//             <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
//               <Terminal className="h-5 w-5 text-primary-foreground" />
//             </div>
//             <div>
//               <h1 className="text-lg font-semibold text-foreground">DSA Practice</h1>
//               <p className="text-xs text-muted-foreground">Master Data Structures & Algorithms</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       {questions.length === 0 ? (
//         <div className="container mx-auto px-4 py-12">
//           <div className="max-w-md mx-auto">
//             <QuestionForm onGenerate={handleGenerate} isGenerating={isGenerating} />
//             {error && (
//               <div className="mt-4 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
//                 {error}
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="container mx-auto px-4 py-4">
//           {/* Question Navigator */}
//           <div className="mb-4">
//             <QuestionNavigator
//               questions={questions}
//               currentIndex={currentQuestionIndex}
//               onNavigate={handleNavigate}
//               completedQuestions={completedQuestions}
//             />
//           </div>

//           {/* Three Column Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-4" style={{ height: "calc(100vh - 180px)" }}>
//             {/* Question Panel */}
//             <div className="lg:col-span-1 h-full overflow-hidden">
//               <QuestionDisplay question={currentQuestion} difficulty={currentDifficulty} />
//             </div>

//             {/* Code Editor Panel */}
//             <div className="lg:col-span-1 h-full overflow-hidden">
//               <CodeEditor
//                 code={currentCode}
//                 onChange={handleCodeChange}
//                 onSubmit={handleSubmit}
//                 onReset={handleReset}
//                 isEvaluating={isEvaluating}
//                 starterCode={currentQuestion?.starterCode}
//               />
//             </div>

//             {/* Results Panel */}
//             <div className="lg:col-span-1 h-full overflow-hidden">
//               <ResultsPanel evaluation={currentEvaluation} />
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   )
// }


"use client"

import { useState, useCallback } from "react"
import { QuestionForm } from "@/components/question-form"
import { QuestionDisplay } from "@/components/question-display"
import { CodeEditor } from "@/components/code-editor"
import { ResultsPanel } from "@/components/results-panel"
import { QuestionNavigator } from "@/components/question-navigator"
import { Terminal } from "lucide-react"

export default function Home() {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [codes, setCodes] = useState({})
  const [evaluations, setEvaluations] = useState({})
  const [completedQuestions, setCompletedQuestions] = useState(new Set())
  const [isGenerating, setIsGenerating] = useState(false)
  const [isEvaluating, setIsEvaluating] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const currentCode =
    codes[currentQuestionIndex] || currentQuestion?.starterCode || ""
  const currentEvaluation = evaluations[currentQuestionIndex]

  // ✅ RECEIVE DATA FROM QuestionForm
  const handleGenerate = useCallback((generatedQuestions) => {
    setQuestions(generatedQuestions)
    setCurrentQuestionIndex(0)
    setCodes({})
    setEvaluations({})
    setCompletedQuestions(new Set())
  }, [])

  // ✅ CODE CHANGE
  const handleCodeChange = useCallback(
    (code) => {
      setCodes((prev) => ({
        ...prev,
        [currentQuestionIndex]: code,
      }))
    },
    [currentQuestionIndex]
  )

  // ✅ RESET CODE
  const handleReset = useCallback(() => {
    if (currentQuestion) {
      setCodes((prev) => ({
        ...prev,
        [currentQuestionIndex]: currentQuestion.starterCode || "",
      }))

      setEvaluations((prev) => {
        const copy = { ...prev }
        delete copy[currentQuestionIndex]
        return copy
      })
    }
  }, [currentQuestionIndex, currentQuestion])

  // ✅ SUBMIT CODE (dummy or your backend)
  const handleSubmit = useCallback(async () => {
    if (!currentQuestion || !currentCode.trim()) return

    setIsEvaluating(true)

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: currentCode,
          testCases: currentQuestion.testCases || [],
          questionTitle: currentQuestion.title,
          questionDescription: currentQuestion.description,
        }),
      })

      const data = await res.json()

      setEvaluations((prev) => ({
        ...prev,
        [currentQuestionIndex]: data,
      }))

      if (data?.summary?.allPassed) {
        setCompletedQuestions(
          (prev) => new Set([...prev, currentQuestionIndex])
        )
      }
    } catch (err) {
      setEvaluations((prev) => ({
        ...prev,
        [currentQuestionIndex]: {
          testResults: [],
          summary: { totalTests: 0, passed: 0, failed: 0, allPassed: false },
          feedback: "Evaluation failed",
          suggestions: ["Check logic", "Check syntax"],
        },
      }))
    } finally {
      setIsEvaluating(false)
    }
  }, [currentQuestion, currentCode, currentQuestionIndex])

  // ✅ NAVIGATION
  const handleNavigate = useCallback(
    (index) => {
      if (index >= 0 && index < questions.length) {
        setCurrentQuestionIndex(index)
      }
    },
    [questions.length]
  )

  return (
    <main className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Terminal className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                DSA Practice
              </h1>
              <p className="text-xs text-muted-foreground">
                Master Data Structures & Algorithms
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* IF NO QUESTIONS */}
      {questions.length === 0 ? (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto">
            <QuestionForm
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-4">
          {/* NAVIGATOR */}
          <div className="mb-4">
            <QuestionNavigator
              questions={questions}
              currentIndex={currentQuestionIndex}
              onNavigate={handleNavigate}
              completedQuestions={completedQuestions}
            />
          </div>

          {/* MAIN GRID */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            style={{ height: "calc(100vh - 180px)" }}
          >
            {/* QUESTION */}
            <div className="lg:col-span-1 h-full overflow-hidden">
              <QuestionDisplay
                question={currentQuestion}
                difficulty={currentQuestion?.difficulty}
              />
            </div>

            {/* CODE EDITOR */}
            <div className="lg:col-span-1 h-full overflow-hidden">
              <CodeEditor
                code={currentCode}
                onChange={handleCodeChange}
                onSubmit={handleSubmit}
                onReset={handleReset}
                isEvaluating={isEvaluating}
                starterCode={currentQuestion?.starterCode}
              />
            </div>

            {/* RESULTS PANEL */}
            <div className="lg:col-span-1 h-full overflow-hidden">
              <ResultsPanel evaluation={currentEvaluation} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
