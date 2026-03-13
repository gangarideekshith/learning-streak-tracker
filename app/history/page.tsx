"use client"

import { useEffect,useState } from "react"
import Navbar from "@/components/Navbar"

export default function History(){

const [dates,setDates]=useState([])

useEffect(()=>{
 fetch("/api/history")
 .then(res=>res.json())
 .then(data=>setDates(data))
},[])

return(

<div className="min-h-screen bg-gray-100">

<Navbar/>

<div className="p-10">

<h1 className="text-3xl font-bold text-gray-800 mb-6">
Study History
</h1>

{dates.length === 0 ? (

  <div className="bg-white p-6 rounded-xl shadow text-center">

    <p className="text-gray-500">
      No study history yet.
    </p>

    <p className="text-sm text-gray-400 mt-2">
      Start your streak by studying today!
    </p>

  </div>

) : (

<ul className="bg-white rounded-xl shadow p-6 divide-y">

{dates.map((date,i)=>(
<li
 key={i}
 className="flex justify-between py-3"
>
<span className="font-medium">{date}</span>

<span className="text-green-500">
✓ Studied
</span>

</li>
))}

</ul>
)}
</div>
</div>

)
}