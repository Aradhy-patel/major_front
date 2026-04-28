"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  HardDrive, 
  MessageSquare, 
  Lightbulb,
  Trophy,
  AlertCircle
} from "lucide-react"

export function ResultsPanel({ evaluation }) {
  if (!evaluation) {
    return (
      <Card className="h-full border-border bg-card flex items-center justify-center">
        <div className="text-center p-8">
          <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Submit your code to see results</p>
        </div>
      </Card>
    )
  }

  const { testResults, summary, complexity, feedback, suggestions } = evaluation

  return (
    <Card className="h-full border-border bg-card flex flex-col">
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm text-foreground">Results</CardTitle>
          <Badge 
            variant="outline" 
            className={summary.allPassed 
              ? "bg-green-500/20 text-green-400 border-green-500/30" 
              : "bg-red-500/20 text-red-400 border-red-500/30"
            }
          >
            {summary.passed}/{summary.totalTests} Passed
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-6">
            {/* Summary Banner */}
            <div className={`rounded-lg p-4 ${
              summary.allPassed 
                ? "bg-green-500/10 border border-green-500/20" 
                : "bg-red-500/10 border border-red-500/20"
            }`}>
              <div className="flex items-center gap-3">
                {summary.allPassed ? (
                  <CheckCircle2 className="h-8 w-8 text-green-500" />
                ) : (
                  <XCircle className="h-8 w-8 text-red-500" />
                )}
                <div>
                  <p className={`font-medium ${summary.allPassed ? "text-green-400" : "text-red-400"}`}>
                    {summary.allPassed ? "All Tests Passed!" : "Some Tests Failed"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {summary.passed} passed, {summary.failed} failed
                  </p>
                </div>
              </div>
            </div>

            {/* Test Results */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-blue-400" />
                Test Cases
              </h4>
              <div className="space-y-2">
                {testResults.map((result, idx) => (
                  <div 
                    key={idx} 
                    className={`rounded-lg p-3 border ${
                      result.passed 
                        ? "bg-green-500/5 border-green-500/20" 
                        : "bg-red-500/5 border-red-500/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        Test Case {idx + 1}
                      </span>
                      {result.passed ? (
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      <div>
                        <span className="text-muted-foreground">Input: </span>
                        <span className="text-foreground">{result.input}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected: </span>
                        <span className="text-green-400">{result.expected}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Output: </span>
                        <span className={result.passed ? "text-green-400" : "text-red-400"}>
                          {result.actual}
                        </span>
                      </div>
                      {result.error && (
                        <div className="text-red-400 mt-1">
                          Error: {result.error}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity Analysis */}
            {complexity && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground">Complexity Analysis</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-secondary/50 p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Clock className="h-3 w-3" />
                      Time Complexity
                    </div>
                    <p className="font-mono text-sm text-primary">{complexity.time}</p>
                  </div>
                  <div className="rounded-lg bg-secondary/50 p-3">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <HardDrive className="h-3 w-3" />
                      Space Complexity
                    </div>
                    <p className="font-mono text-sm text-primary">{complexity.space}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Feedback */}
            {feedback && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-400" />
                  Feedback
                </h4>
                <p className="text-sm text-muted-foreground bg-secondary/30 rounded-lg p-3">
                  {feedback}
                </p>
              </div>
            )}

            {/* Suggestions */}
            {suggestions && suggestions.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-yellow-400" />
                  Suggestions
                </h4>
                <ul className="space-y-2">
                  {suggestions.map((suggestion, idx) => (
                    <li 
                      key={idx} 
                      className="text-sm text-muted-foreground bg-secondary/30 rounded-lg p-3 flex items-start gap-2"
                    >
                      <span className="text-primary">•</span>
                      {suggestion}
                    </li>
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
