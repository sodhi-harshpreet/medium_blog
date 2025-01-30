import { SignupInput } from "@sodhi_harsh/medium-common"
import { ChangeEventHandler, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"


export const Auth=({type}:{type: "signup"|"signin"})=>{
    const navigate=useNavigate()
    const [postInputs,setPostInputs]=useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/${type=="signup"?"signup":"signin"}`,postInputs)
            const jwt=response.data.jwt
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        }catch(e){
            alert("Error while signing up")
        }
       
    }

    return <div className=" h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="  text-3xl font-bold px-10">
                        Create an account
                    </div>
                    <div className="text-slate-500 px-10">
                        {type=="signup"?"Already have an account?":"Don't have an account?"}
                        
                        <Link className="pl-2 underline" to={type=="signup"?"/signin":"/signup"}>
                            {type=="signup"?"Sign in":"Sign up"}
                        </Link>
                    </div>
                    {type=="signup"?<LabelledInput label="Name" text="enter your name" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            name:e.target.value
                        })
                    }}></LabelledInput>:null}
                    
                    <LabelledInput label="email" text="enter your email" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            email:e.target.value
                        })
                    }}></LabelledInput>
                    <LabelledInput label="Password" type={"password"} text="password" onChange={(e)=>{
                        setPostInputs({
                            ...postInputs,
                            password:e.target.value
                        })
                    }}></LabelledInput>
                    <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type=="signup"? "sign up": "sign in"}</button>
                </div>
            </div>
        </div>
                
    </div>
}

interface LabelledInputType{
    label:string,
    text:string,
    onChange:(e: any)=> void;
    type?:string
}
function LabelledInput({label,text,onChange,type}:LabelledInputType){
    return <div>
        <label  className="block mb-2 text-sm font-semibold text-black pt-4">{label}</label>
        <input onChange={onChange} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 " placeholder={text} required />
    </div>
}