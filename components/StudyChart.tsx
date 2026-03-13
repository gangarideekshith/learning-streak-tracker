"use client"

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

type Props = {
 dates:string[]
}

export default function StudyChart({dates}:Props){

 const data = dates.map((date,index)=>({
  day:index+1,
  studies:index+1
 }))

 return(

 <div className="bg-white rounded-xl shadow p-6">

 <h2 className="text-xl font-semibold mb-4">
 Study Progress
 </h2>

 <ResponsiveContainer width="100%" height={250}>
   <LineChart data={data}>
     <XAxis dataKey="day"/>
     <YAxis/>
     <Tooltip/>
     <Line type="monotone" dataKey="studies"/>
   </LineChart>
 </ResponsiveContainer>

 </div>

 )
}