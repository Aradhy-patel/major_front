import { getQuestions } from "@/lib/question-bank"

export async function POST(req) {
  try {
    const { topic, difficulty, count } = await req.json()
    
    const questions = getQuestions(topic, difficulty, count)
    
    if (questions.length === 0) {
      return Response.json(
        { error: "No questions found for the selected criteria" },
        { status: 404 }
      )
    }
    
    return Response.json({ questions })
  } catch (error) {
    console.error("Error generating questions:", error)
    return Response.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    )
  }
}
