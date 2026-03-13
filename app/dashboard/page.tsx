"use client"
import StreakCalendar from "@/components/StreakCalendar"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import StatsCard from "@/components/StatsCard"
import StudyChart from "@/components/StudyChart"
export default function Dashboard() {
    const [dates, setDates] = useState([])
    const [stats, setStats] = useState<any>({})
    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("success")
    const [loading, setLoading] = useState(true)
    async function loadStats() {

        setLoading(true)

        const res = await fetch("/api/streak")
        const data = await res.json()

        setStats(data)

        setLoading(false)
    }
    async function loadHistory() {
        const res = await fetch("/api/history")
        const data = await res.json()
        setDates(data)
    }
    async function markStudy() {
        const res = await fetch("/api/study", {
            method: "POST"
        })

        const data = await res.json()

        if (data.message.includes("already")) {
            setMessageType("error")
        } else {
            setMessageType("success")
        }

        setMessage(data.message)

        loadStats()
    }
    useEffect(() => {
        loadStats()
        loadHistory()
    }, [])
    return (

        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100">

            <Navbar />

            <div className="p-10">

                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Dashboard
                </h1>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Study Analytics
                </h2>
                {loading ? (

                    <p className="text-gray-500">
                        Loading stats...
                    </p>

                ) : (

                    <div className="grid md:grid-cols-3 text-gray-700 gap-6">

                        <StatsCard
                            title="Current Streak 🔥"
                            value={stats.currentStreak}
                        />

                        <StatsCard
                            title="Total Study Days 📚"
                            value={stats.totalDays}
                        />

                        <StatsCard
                            title="Last Studied 📅"
                            value={stats.lastStudied || "None"}
                        />
                        <StreakCalendar dates={dates} />
                        <StudyChart dates={dates} />
                    </div>

                )}

                <button
                    onClick={markStudy}
                    className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
                >
                    I Studied Today
                </button>
            </div>
        </div>

    )
}