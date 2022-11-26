import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const TableUi=(props)=>{


    return(

         <tr>
           <td>{props.elem.rank}</td>
          <td>{props.elem.name}</td>
          <td>{`$${Math.round(props.elem.priceUsd * 100) / 100}`}</td>
          
          <td>{`$${Math.round(props.elem.vwap24Hr * 100) / 100}`}</td>
        
          <td style={{ color: props.profit > 0 ? "green" : "red" }}>
                    
           {`${Math.round(props.elem.changePercent24Hr * 100) / 100} %`}
             </td>
        </tr>
       
        
    )
}