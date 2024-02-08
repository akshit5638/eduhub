import { Heading, Stack, Link, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <Stack w={'100vw'} bgColor={'black'} color={'white'} py={'10'} px={'4'} direction={{ base: 'column', lg: 'row' }} justifyContent={{ base: 'center', lg: 'space-between' }} alignItems={'center'} >
            <VStack>
                <Heading>All Rights Reserved</Heading>
                <Text color={'yellow'} >@AKSHIT TYAGI</Text>
            </VStack>

            <Stack fontSize={'50'} direction={'row'} w={{ base: 'full', lg: '50%' }} justifyContent={'space-evenly'} alignItems={'center'}>
                <a href="https://www.youtube.com" target="_blank">  < FaYoutube /></a>
                <a href="https://www.youtube.com" target="_blank">      <FaInstagram /></a>
                <a href="https://www.youtube.com" target="_blank"><FaTwitter /> </a>




            </Stack>
        </Stack >
    )
}

export default Footer