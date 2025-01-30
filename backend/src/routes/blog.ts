import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@sodhi_harsh/medium-common";

export const blogRouter=new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
      };
      Variables: {
        userId: string;
      };
}>()
blogRouter.use('/*', async (c,next)=>{
    const header=c.req.header("authorization")||""
    const token=header.split(" ")[1]
    const response=await verify(token,c.env.JWT_SECRET)
    if(response.id){
    //@ts-ignore
      c.set("userId",response.id)
      await next()
    }else{
      c.status(403)
      return c.json({
        error: "unauthorised"
      })
    }
    
  })
  
blogRouter.post('/', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
      const body= await c.req.json()
      const {success}=createBlogInput.safeParse(body)
      if(!success){
        c.status(411)
        return c.json({
            message:"Inputs are not correct"
        })
      }
      const userId=c.get("userId")

      const blog=await prisma.post.create({
        data: {
            title:body.title,
            content:body.content,
            authorId: userId,
        }
      })
      return c.json({
        id:blog.id
      })
  })


blogRouter.put('/', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
      const body= await c.req.json()
      const {success}= updateBlogInput.safeParse(body)
      if(!success){
        c.status(411)
        c.json({
            message:"Invalid inputs"
        })
      }

      const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data: {
            title:body.title,
            content:body.content,
            
        }
      })
      return c.json({
        id:blog.id
      })
  })

  blogRouter.get('/bulk', async (c)=>{
    const prisma=new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    const blogs= await prisma.post.findMany({
      select:{
        content:true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    })
    return c.json({
        blogs
    })
})

blogRouter.get('/:id', async (c) => {
    const prisma=new PrismaClient({
        datasourceUrl:  c.env.DATABASE_URL,
      }).$extends(withAccelerate())
      
      const id= c.req.param("id")
      try{
        const blog=await prisma.post.findFirst({
            where:{
                id:id
            },
            select:{
              id:true,
              title:true,
              content:true,
              author:{
                select:{
                  name:true
                }
              }
            }
            
          })
          return c.json({
            blog
          })
      }catch(e){
        c.status(411)
        return c.json({
            message:"error while fetching"
        })
      }
      
  })

// todo: add pagination
