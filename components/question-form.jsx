// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Slider } from "@/components/ui/slider"
// import { Spinner } from "@/components/ui/spinner"
// import { Code2, Sparkles } from "lucide-react"

// const topics = [
//   { value: "arrays", label: "Arrays" },
//   { value: "strings", label: "Strings" },
//   { value: "linkedlists", label: "Linked Lists" },
//   { value: "trees", label: "Trees" },
//   { value: "graphs", label: "Graphs" },
//   { value: "dp", label: "Dynamic Programming" },
//   { value: "sorting", label: "Sorting & Searching" },
// ]

// const difficulties = [
//   { value: "easy", label: "Easy", color: "text-green-500" },
//   { value: "medium", label: "Medium", color: "text-yellow-500" },
//   { value: "hard", label: "Hard", color: "text-red-500" },
// ]

// export function QuestionForm({ onGenerate, isGenerating }) {
//   const [topic, setTopic] = useState("arrays")
//   const [difficulty, setDifficulty] = useState("easy")
//   const [count, setCount] = useState(3)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     onGenerate(topic, difficulty, count)

//     const payload = {
//       userId: "guest@test.com",
//       testId: 112, // unique test id
//       timeStamp: new Date().toISOString(),
//       testType: "testByGenAI",
//       params: {
//         dataStructure: topic,
//         difficultyLevel: difficulty,
//         companies: [],
//         numberOfQuestions: count,
//         seed: 42,
//         timeLimit: "custom"
//       },
//     }

//     console.log("Sending Payload:", payload)

//     try {
//       const res = await fetch("http://127.0.0.1:5000/get_questions_genai", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//         credentials: "include",
//       })

//       console.log('Res', res)

//       if (!res.ok) throw new Error("Failed to fetch questions")

//       const data = await res.json()
//       console.log("Received Data:", data)

//       // if (data) {
//       //   setTopicQue(data)

//       // }
//     } catch (err) {
//       console.error("Error generating test:", err)
//     } finally {
//       // setIsGenerating(false)
//     }
//   }

//   console.log("topic-", topic, "difficulty-", difficulty, "count-", count)



//   return (
//     <Card className="border-border bg-card">
//       <CardHeader className="pb-4">
//         <div className="flex items-center gap-3">
//           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
//             <Code2 className="h-5 w-5 text-primary" />
//           </div>
//           <div>
//             <CardTitle className="text-foreground">DSA Practice</CardTitle>
//             <CardDescription>Select your preferences and generate questions</CardDescription>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="topic" className="text-foreground">Topic</Label>
//             <Select value={topic} onValueChange={setTopic}>
//               <SelectTrigger id="topic" className="bg-input border-border">
//                 <SelectValue placeholder="Select a topic" />
//               </SelectTrigger>
//               <SelectContent>
//                 {topics.map((t) => (
//                   <SelectItem key={t.value} value={t.value}>
//                     {t.label}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="difficulty" className="text-foreground">Difficulty</Label>
//             <Select value={difficulty} onValueChange={setDifficulty}>
//               <SelectTrigger id="difficulty" className="bg-input border-border">
//                 <SelectValue placeholder="Select difficulty" />
//               </SelectTrigger>
//               <SelectContent>
//                 {difficulties.map((d) => (
//                   <SelectItem key={d.value} value={d.value}>
//                     <span className={d.color}>{d.label}</span>
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="space-y-3">
//             <div className="flex items-center justify-between">
//               <Label htmlFor="count" className="text-foreground">Number of Questions</Label>
//               <span className="text-sm font-medium text-primary">{count}</span>
//             </div>
//             <Slider
//               value={[count]}
//               onValueChange={(value) => setCount(value[0])}
//               min={1}
//               max={5}
//               step={1}
//               className="w-full"
//             />
//             <div className="flex justify-between text-xs text-muted-foreground">
//               <span>1</span>
//               <span>5</span>
//             </div>
//           </div>

//           <Button
//             type="submit"
//             className="w-full"
//             disabled={isGenerating}
//           >
//             {isGenerating ? (
//               <>
//                 <Spinner className="mr-2 h-4 w-4" />
//                 Generating...
//               </>
//             ) : (
//               <>
//                 <Sparkles className="mr-2 h-4 w-4" />
//                 Generate Questions
//               </>
//             )}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }










"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Spinner } from "@/components/ui/spinner"
import { Code2, Sparkles } from "lucide-react"

const topics = [
  { value: "arrays", label: "Arrays" },
  { value: "strings", label: "Strings" },
  { value: "linkedlists", label: "Linked Lists" },
  { value: "trees", label: "Trees" },
  { value: "graphs", label: "Graphs" },
  { value: "dp", label: "Dynamic Programming" },
  { value: "sorting", label: "Sorting & Searching" },
]

const difficulties = [
  { value: "easy", label: "Easy", color: "text-green-500" },
  { value: "medium", label: "Medium", color: "text-yellow-500" },
  { value: "hard", label: "Hard", color: "text-red-500" },
]

export function QuestionForm({ onGenerate, isGenerating, setIsGenerating }) {
  const [topic, setTopic] = useState("arrays")
  const [difficulty, setDifficulty] = useState("easy")
  const [count, setCount] = useState(3)

  const transformQuestion = (q) => ({
    title: "DSA Problem",
    description: q.question,
    difficulty: q.difficultyLevel,
    examples: q.examples ? Object.values(q.examples) : [],
    constraints: q.constraints ? Object.values(q.constraints) : [],
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // ✅ IMPORTANT: check exists
    if (!setIsGenerating) {
      console.error("setIsGenerating not received")
      return
    }

    setIsGenerating(true)

    const payload = {
      userId: "guest@test.com",
      testId: Date.now(),
      timeStamp: new Date().toISOString(),
      testType: "testByGenAI",
      params: {
        dataStructure: topic,
        difficultyLevel: difficulty,
        companies: [],
        numberOfQuestions: count,
        seed: 42,
        timeLimit: "custom",
      },
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/get_questions_genai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      console.log("data-", data)

      if (data?.questionsDict) {
        const transformed = Object.values(data.questionsDict).map(transformQuestion)

        onGenerate(transformed) // ✅ send to parent
      }

    } catch (err) {
      console.error(err)
    } finally {
      setIsGenerating(false) // ✅ stop loading
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-foreground">DSA Practice</CardTitle>
            <CardDescription>Select your preferences and generate questions</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* TOPIC */}
          <div className="space-y-2">
            <Label>Topic</Label>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* DIFFICULTY */}
          <div className="space-y-2">
            <Label>Difficulty</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((d) => (
                  <SelectItem key={d.value} value={d.value}>
                    <span className={d.color}>{d.label}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* COUNT */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label>Number of Questions</Label>
              <span className="text-primary">{count}</span>
            </div>

            <Slider
              value={[count]}
              onValueChange={(val) => setCount(val[0])}
              min={1}
              max={5}
              step={1}
            />

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1</span>
              <span>5</span>
            </div>
          </div>

          {/* BUTTON */}
          <Button type="submit" className="w-full" disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Spinner className="mr-2 h-4 w-4" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Questions
              </>
            )}
          </Button>

        </form>
      </CardContent>
    </Card>
  )
}
