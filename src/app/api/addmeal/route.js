import { NextResponse } from "next/server"
import meals from '../../../../public/data.json'
import path from "path"
import fs from 'fs'

export async function POST(req){
    const body=await req.json()
    const meal=await body
    const filename=path.join(__dirname,'..','..','..','../../public/data.json')
    console.log(await body,filename)
    meals.push(meal)
    fs.writeFile(filename,JSON.stringify(meals,null,2),'utf-8',error=>{
        if(error) return NextResponse.json({message:error},{status:404})
    })
    // fs.readFile(filename,'utf-8',(error,result)=>{
    //     if(error)return NextResponse.json({message:error},{status:404})
    //     else return NextResponse.json({message:'Ok',meals:JSON.parse(result)},{status:200})
    // })
    return NextResponse.json({message:'Saved meal'},{status:200})
}