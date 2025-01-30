import { Circle } from "./BlogCard"

export const BlogSkeleton=()=>{
    return <div className="flex justify-center">
        
<div role="status" className="max-w-sm animate-pulse">
            <div className="border border-b-1 border-t-0 border-l-0 border-r-0 border-slate-200 pb-4 pt-4 min-w-md cursor-pointer">
                <div className="flex">
                    
                    <div className="h-4 w-4 bg-gray-200 rounded-full  w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    
                    <div className="flex justify-center flex-col">
                        <Circle/>
                    </div>
                    <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div> 
                </div>
                
                <div className="text-xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-md font-thin">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="text-slate-500 text-sm font-thin pt-4 ">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                
            </div>
    <span className="sr-only">Loading...</span>
</div>





    </div>
}