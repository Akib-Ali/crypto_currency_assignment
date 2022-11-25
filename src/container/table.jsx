import { useEffect, useState } from "react"


export const TableUi=()=>{

const [data,setData]= useState([])


   useEffect(()=>{
   fetchdata()
    },[])


    

    const fetchdata = async()=>{

        const responce = await fetch("https://api.coincap.io/v2/assets")
        setData(await responce.json())
    }


    console.log(data)


    return(
        <div>
            <h1>Datanjn</h1>
        </div>
    )
}