import { Stack, HStack, Heading, Image, VStack, Text, Button, Box } from '@chakra-ui/react'
import React from 'react'
import vg from '../assets/images/bg.png';
import '../styles/home.css'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
const Home = () => {
    return (
        <>
            <Stack direction={{ base: 'column', md: 'row' }} p={'3'} w={'full'} h={'80vh'} justifyContent={{ base: 'center', md: 'space-around' }} alignItems={'center'}>
                <VStack spacing={'8'} alignItems={{ base: 'center', md: 'flex-end' }}>
                    <Heading textTransform={'uppercase'}>learn from the best</Heading>
                    <Text>
                        Find Valuable Knowledege At Reasonable Price
                    </Text>
                    <Button colorScheme='yellow'>Explore Now</Button>
                </VStack>
                <Image
                    filter={'drop-shadow(0 40px 10px rgba(0,0,0,0.3))'}
                    className="vector-graphics"
                    boxSize={{ base: '250', md: '230', lg: 'md' }}
                    src={vg}
                    objectFit="contain"
                />
            </Stack>


        </>
    )
}

export default Home