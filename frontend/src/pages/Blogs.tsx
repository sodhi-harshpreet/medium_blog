import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

export const Blogs=()=>{
    const {loading,blogs}=useBlogs()
    if(loading){
        return <div>
             <AppBar/> 
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }
    return <div >
         <AppBar/> 
         <div className="flex justify-center">
            <div className=" max-w-xl">
                {blogs.map(blog=><BlogCard
                    id={blog.id}
                    authorName={blog.author.name||"Annonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                    />)}   
                
            </div>
        </div> 
    </div>
    
}