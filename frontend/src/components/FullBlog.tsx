import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog=({blog}:{blog:Blog})=>{
    return <div>
        <AppBar/>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 ">
            <div className="col-span-8 px-20">
                <div className="text-5xl font-extrabold ">
                    {blog.title}
                </div>
                <div className="text-slate-500 pt-2">
                    Posted on 2nd Dec 2023
                </div>
                <div className="pt-4">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4 ">
                <div className="text-lg font-semibold text-slate-700">
                    Author
                </div>
               
                <div className="flex">
                    
                    <div>
                        <div className="flex">
                                <div className="flex justify-center flex-col pr-3">
                                <Avatar name={blog.author.name||"Anonymous"}/>
                                </div>
                            <div className="text-2xl font-bold">
                            {blog.author.name||"Anonymous"}
                            </div>  
                        </div>
                        <div className="text-slate-500 pt-2 pr-20">
                            Random catch phrase about the author to grab the user's attention 
                        </div>
                    </div>
                </div>
                
                
            </div>
                    
            </div>
        </div>
    </div>
    
}