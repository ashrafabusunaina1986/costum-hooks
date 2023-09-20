import { NextResponse } from "next/server"
import meals from '../../../../public/data.json'
import path from "path"
import fs from 'fs'

export async function POST(req) {
    const body = await req.json()
    const meal = await body
    const filename = path.join(__dirname, '..', '..', '..', '../../public/data.json')
    console.log(await body, filename)
    meals.push(meal)
    fs.writeFile(filename, JSON.stringify(meals, null, 2), 'utf-8', error => {
        if (error) return NextResponse.json({ message: error }, { status: 404 })
        console.log('yes')
        fs.openSync(filename)
        try {
            const info = fs.readFileSync(filename, 'utf-8')
            fs.closeSync(filename)
            const data = JSON.parse(info)
             NextResponse.json({ data }, { status: 200 })
        } catch (error) {
             NextResponse.json({ message: error }, { status: 404 })
        }
    })
    // fs.readFile(filename,'utf-8',(error,result)=>{
    //     if(error)return NextResponse.json({message:error},{status:404})
    //     else return NextResponse.json({data:JSON.parse(result)},{status:200})
    // })
}