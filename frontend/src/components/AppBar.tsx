import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar=()=>{
    return <div className="border-b flex justify-between px-10 py-3 border-slate-300">
        <Link to={"/blogs"}>
        <div className="cursor-pointer flex justify-center flex-col mt-1">
            Medium
        </div>
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center  mr-4">new</button>

            </Link>
            <Avatar name={"Harsh"}/>
        </div>
        
    </div>
}