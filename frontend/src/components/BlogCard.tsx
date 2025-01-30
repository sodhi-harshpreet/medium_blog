import { Link } from "react-router-dom"

interface BlogCardProps{
    authorName:string,
    title:string,
    content:string,
    publishedDate:string,
    id:string
}

export const BlogCard=({
    authorName,title,content,publishedDate,id
}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border border-b-1 border-t-0 border-l-0 border-r-0 border-slate-200 pb-4 pt-4 min-w-md cursor-pointer">
            <div className="flex">
                <div className="">
                    <Avatar name={authorName}></Avatar>
                </div>
                <div className="font-light px-2 text-sm flex justify-center flex-col">{authorName}
                </div> 
                <div className="flex justify-center flex-col">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div> 
            </div>
            
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,130)+"..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4 ">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
            
        </div>
    </Link>
}
export function Circle(){
    return <div className="h-1 w-1 rounded-full bg-slate-200"></div>
}
export function Avatar({name}:{name:string}){
    return <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
</div>
}