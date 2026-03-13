"use client"

import CalendarHeatmap from "react-calendar-heatmap"
import "react-calendar-heatmap/dist/styles.css"

type Props = {
  dates: string[]
}

export default function StreakCalendar({ dates }: Props) {

  const values = dates.map((date) => ({
    date,
    count: 1
  }))

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Study Activity
      </h2>
<CalendarHeatmap
  startDate={new Date(new Date().setMonth(new Date().getMonth() - 3))}
  endDate={new Date()}
  values={values}
  classForValue={(value) => {
    if (!value) return "color-empty"
    return "color-filled"
  }}
/>

    </div>
  )
}