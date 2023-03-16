import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <Box bg='black' h='70px' w='100%' p={4} color='white'>
            <Flex>
                <Heading as='h2' size='2xl'>
                    Welcome to this Web Site
                </Heading>
                <Spacer />
                <Link to={"/"}><Button id='back' colorScheme='messenger'>Back</Button></Link>
            </Flex>
        </Box>
    )
}

export default Navbar;