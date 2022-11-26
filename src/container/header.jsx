
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
        
        <Box bg="#184b8d" height={"280px"} position="relative" z-zIndex={"-1"} opacity={"0.9"}>
        <Flex   w={["100%", "90%"]} m="auto" justifyContent={"space-between"} 
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
