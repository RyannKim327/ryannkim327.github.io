import type { feedbackInterface } from "@/interface"
import Title from "../widgets/title"

export default function Feedback({ feedbacks }: { feedbacks: feedbackInterface[] }) {

  if (feedbacks.length <= 0) {
    return null
  }

  return (
    <div className="bg-bg flex flex-col items-center w-full min-h-full">
      <Title id="feedback">Feedback</Title>
      <div id="feedback_section" className="flex flex-wrap justify-center w-full gap-2 p-3 py-5">
        {feedbacks.map((feedback: feedbackInterface, i: number) => {
          return (
            <div
              className="flex flex-col justify-between group w-[calc(90%-0.5rem)] lg:w-[calc(33.333%-1rem)] card p-3 aspect-video gap-3 overflow-hidden"
              key={`${i + 1}. ${feedback.application}`}>
              <div className="flex flex-col">
                <span className="w-full text-center text-[1.25rem]">{feedback.application}</span>
                <span>{feedback.message}</span>
              </div>
              <span className="w-full text-end text-xs">{feedback.userId}: {feedback.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
