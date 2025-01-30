import axios from "axios"
import { AppBar } from "../components/AppBar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const navigate=useNavigate()
    return <div>
        <AppBar/>
        <div className="flex justify-center py-4">
            <textarea onChange={(e)=>{
                setTitle(e.target.value)
            }} id="message" rows={1} className="focus:outline-none block p-2.5 w-5xl text-sm text-gray-900 bg-gray-50 rounded-lg border border-slate-300 focus:ring-slate-500 focus:border-slate-400 " placeholder="Title"></textarea>
        </div>
        <div className="flex justify-center py-1">
            <textarea onChange={(e)=>{
                setContent(e.target.value)
            }} id="message" rows={9} className=" focus:outline-none block p-2.5 w-5xl text-sm text-gray-900 bg-gray-50 rounded-lg border border-slate-300 focus:ring-slate-500 focus:border-slate-400 " placeholder="Write your content here"></textarea>
        </div>
        <div className="flex justify-center mt-3 ">
            <button onClick={async()=>{ 
                const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content
                }, {
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
                navigate(`/blog/${response.data.id}`)
            }} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">Publish Blog</button>  
        </div>
    </div>
} 