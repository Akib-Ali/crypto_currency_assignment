import Styles from "./header.module.css"
import { Box ,Flex,Text} from "@chakra-ui/react"
export const Header = () => {

    var data = [
        {
            title: "MARKETCAP",
            value: "$1.15T"
        },
        {
            title: "EXCHANGE VOL",
            value: "$50.69"
        },
        {
            title: "ASSESTS",
            value: "2,295"
        }, {
            title: "EXCHANGES",
            value: "73"
        }, {
            title: "MARKETS",
            value: "14,054"
        },
        {
            title: "BTC DOM INDEX",
            value: "31.9%"
        },

    ]
    return (
        // <div className={Styles.container}>

        //     {data.map((elem,index) => (
        //         <div className={Styles.data} key={index}>

        //             <Box>{elem.title}</Box>
        //             <Box>{elem.value}</Box>
        //         </div>

        //     ))}
        // </div>
        <Box bg="#184b8d" height={"200px"}>
        <Flex    border="2px solid red" w={["100%", "90%"]} m="auto" justifyContent={"space-between"} 
        flexWrap  ="wrap" height={"100px"} pt="15px">
          {data.map((elem,index)=>(
            <Box key={index}> 
                <Text color={"white"}>{elem.title}</Text>
                <Text color={"white"}>{elem.value}</Text>
            </Box>

          ))}
        </Flex>
        </Box>
    )
}
