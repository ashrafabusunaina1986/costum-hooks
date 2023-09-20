import { NextResponse } from "next/server"
import fs from 'fs'
import path from "path"

export const GET=async(request)=>{
    const filename=path.join(__dirname,'../../../../../public/data.json')
    if(fs.existsSync(filename)){
        fs.openSync(filename)
        try {
            const info=fs.readFileSync(filename,'utf-8')
            fs.existsSync(filename)
            const data=JSON.parse(info)
            return NextResponse.json({data},{status:200})
        } catch (error) {
            return NextResponse.json({error},{status:404})
        }
        
    }
}