import { Badge, Box, Center, Image, Button } from "@chakra-ui/react"
import React from "react"
import { selectedId } from '../Store/Slices/rocketslice'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

export const LaunchListItem = ({ data }) => {

    const dispatch = useDispatch();

    return (
        <Box minW={'300px'} borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Center>
                <Image src={'../logo192.png'} />
            </Center>
            <Box p='6' bg={"gray.50"}>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h6'
                    lineHeight='tight'
                    display='flex' alignItems='baseline'
                >
                    {data.name}
                    <Badge ml={2} borderRadius='full' px='2' colorScheme='teal'>
                        {data.status.name}
                    </Badge>
                </Box>
                <Center mt={4}>
                   <Link to={"/details"}><Button onClick={() => { dispatch(selectedId(data.id)) }} colorScheme="messenger"> Show details</Button></Link>
                </Center>
            </Box>
        </Box>
    )
}