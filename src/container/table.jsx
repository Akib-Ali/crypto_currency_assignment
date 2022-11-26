import { useEffect, useState } from "react"
import { TableUi } from "./tableui"
import { Flex } from "@chakra-ui/react"
import "./table.css"
import axios from "axios"



export const TableFetch=()=>{

const [data,setData]= useState([])
const [loading,setLoading] = useState(false)


   useEffect(()=>{
   fetchdata()
   setLoading(true)
    },[])

   const fetchdata=()=>{
        axios({
            method:"get",
            url:"https://api.coincap.io/v2/assets"
        }).then((res)=>{
            setData(res.data.data)
            setLoading(false)

        }).catch((err)=>{
            console.log(err)
            setLoading(false)

        })
    }

    console.log(data)


    return(
        <div className="tablecontroll">

            {loading && <div style={{textAlign : "center" , fontSize:"25px"}}>  ...loading </div>}
                   

              <table border="2">
             <thead>
                <tr style={{fontSize:"16px"}}>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Price</th>
                  
                   <th>SUPPLY</th> 
                  <th>Change 24 Hour</th>
                </tr>
            </thead>
            

           {data.map((elem,index)=>{

                let profit = elem.changePercent24Hr >= 0;


                return(
                    <TableUi elem={elem} key={index} profit={profit}/>
                )

             })}
             </table>
         
         </div>
    )
}