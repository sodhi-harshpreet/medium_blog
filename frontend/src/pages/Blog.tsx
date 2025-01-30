import { useParams } from "react-router-dom"
import { BlogCard } from "../components/BlogCard"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { AppBar } from "../components/AppBar";

export const Blog=()=>{
    const {id}=useParams();
    const {loading,blog}=useBlog({
        id:id||""
    })
    if(loading){
        return <div>
             <AppBar/> 
             <div className="h-screen flex justify-center flex-col">
                <BlogSkeleton/>
             </div>
            
            
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}