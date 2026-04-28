// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { FileText, Lightbulb, AlertTriangle, TestTube } from "lucide-react"
// import { QuestionForm } from "./question-form"

// export function QuestionDisplay({ question, difficulty }) {
//   if (!question) {
//     return (
//       <Card className="h-full border-border bg-card flex items-center justify-center">
//         <div className="text-center p-8">
//           <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//           <p className="text-muted-foreground">Select options and generate questions to begin</p>
//         </div>
//       </Card>
//     )
//   }

//   const difficultyColor = {
//     easy: "bg-green-500/20 text-green-400 border-green-500/30",
//     medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
//     hard: "bg-red-500/20 text-red-400 border-red-500/30",
//   }

//   return (
//     <Card className="h-full border-border bg-card flex flex-col">
//       <CardHeader className="pb-3 flex-shrink-0">
//         <div className="flex items-start justify-between gap-4">
//           <CardTitle className="text-lg text-foreground leading-tight">
//             {question.title}
//           </CardTitle>
//           <Badge variant="outline" className={difficultyColor[difficulty]}>
//             {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
//           </Badge>
//         </div>
//       </CardHeader>
//       <CardContent className="flex-1 overflow-hidden">
//         <ScrollArea className="h-full pr-4">
//           <div className="space-y-6">
//             <div>
//               <p className="text-sm text-foreground/90 whitespace-pre-wrap leading-relaxed">
//                 {question.description}
//               </p>
//             </div>

//             {question.examples && question.examples.length > 0 && (
//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-sm font-medium text-foreground">
//                   <Lightbulb className="h-4 w-4 text-primary" />
//                   Examples
//                 </div>
//                 {question.examples.map((example, idx) => (
//                   <div key={idx} className="rounded-lg bg-secondary/50 p-3 space-y-2">
//                     <div className="font-mono text-xs">
//                       <span className="text-muted-foreground">Input: </span>
//                       <span className="text-foreground">{example.input}</span>
//                     </div>
//                     <div className="font-mono text-xs">
//                       <span className="text-muted-foreground">Output: </span>
//                       <span className="text-primary">{example.output}</span>
//                     </div>
//                     {example.explanation && (
//                       <div className="text-xs text-muted-foreground pt-1 border-t border-border/50">
//                         {example.explanation}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {question.constraints && question.constraints.length > 0 && (
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm font-medium text-foreground">
//                   <AlertTriangle className="h-4 w-4 text-yellow-500" />
//                   Constraints
//                 </div>
//                 <ul className="space-y-1">
//                   {question.constraints.map((constraint, idx) => (
//                     <li key={idx} className="text-xs text-muted-foreground font-mono">
//                       {constraint}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {question.testCases && question.testCases.length > 0 && (
//               <div className="space-y-2">
//                 <div className="flex items-center gap-2 text-sm font-medium text-foreground">
//                   <TestTube className="h-4 w-4 text-blue-400" />
//                   Test Cases
//                 </div>
//                 <div className="space-y-2">
//                   {question.testCases.slice(0, 2).map((tc, idx) => (
//                     <div key={idx} className="rounded-lg bg-secondary/30 p-2 font-mono text-xs">
//                       <div>
//                         <span className="text-muted-foreground">Input: </span>
//                         <span className="text-foreground">{tc.input}</span>
//                       </div>
//                       <div>
//                         <span className="text-muted-foreground">Expected: </span>
//                         <span className="text-primary">{tc.expected}</span>
//                       </div>
//                     </div>
//                   ))}
//                   {question.testCases.length > 2 && (
//                     <p className="text-xs text-muted-foreground">
//                       + {question.testCases.length - 2} hidden test cases
//                     </p>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//         </ScrollArea>
//       </CardContent>
//     </Card>
//   )
// }


"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { FileText, Lightbulb, AlertTriangle } from "lucide-react"

export function QuestionDisplay({ question, difficulty }) {
  if (!question) {
    return (
      <Card className="h-full border-border bg-card flex items-center justify-center">
        <div className="text-center p-8">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Generate questions to begin</p>
        </div>
      </Card>
    )
  }

  const difficultyColor = {
    easy: "bg-green-500/20 text-green-400 border-green-500/30",
    medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    hard: "bg-red-500/20 text-red-400 border-red-500/30",
  }

  return (
    <Card className="h-full border-border bg-card flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg text-foreground">
            {question.title}
          </CardTitle>
          <Badge className={difficultyColor[difficulty]}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">

            {/* Description */}
            <p className="text-sm text-foreground whitespace-pre-wrap">
              {question.description}
            </p>

            {/* Examples */}
            {question.examples.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  <span>Examples</span>
                </div>

                {question.examples.map((ex, idx) => (
                  <div key={idx} className="bg-gray-800 p-3 rounded mb-2">
                    <p>Input: {ex.input}</p>
                    <p>Output: {ex.output}</p>
                    <p className="text-sm text-gray-400">{ex.explanation}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Constraints */}
            {question.constraints.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Constraints</span>
                </div>

                <ul className="list-disc ml-4">
                  {question.constraints.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
