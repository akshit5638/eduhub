import { Box, Button, HStack, Heading, Input, Stack, Text, VStack, Image, Link } from '@chakra-ui/react'
import React, { useState } from 'react'

const Courses = () => {
    const [Keyword, setKeyword] = useState('');
    const [Category, setCategory] = useState('');
    const addToPlaylistHandler = () => (console.log('added to playlist'));// just for now will update later
    const courseNames = [
        'Math Marvels',
        'Communication Skills',
        'Science Explorers',
        'Creative Writing Workshop',
        'Introduction to Programming',
        'Financial Literacy',
        'Mindful Learning',
        'Business Basics'
    ];
    return (
        <Box w={{ base: '100vw', lg: '60vw' }} mx={'auto'} my={'75'} px={'1px'}>
            <Heading my={'8'}>All Courses {Keyword}</Heading>
            <Input value={Keyword} placeholder='Search a Course' onChange={(e) => setKeyword(e.target.value)} />
            <HStack overflowX={'auto'} py={'8'} css={{ "&::-webkit-scrollbar": { display: 'none' } }} >
                {
                    courseNames.map((item, index) => (
                        <Button key={index} minW={'60'} onClick={() => setCategory(item)}>
                            <Text>{item}</Text>
                        </Button>
                    )
                    )
                }
            </HStack>
            <Stack direction={{ base: 'column', lg: 'row' }}
                justifyContent={{ base: 'flex-start', lg: 'space-evenly' }}
                alignItems={'center'} >
                <Course

                    title={"title"}
                    description={"this is description"}
                    views={"10M views"}
                    imageSrc={'imageurl'}
                    id={'2021uch1825'}
                    creator={'akshit'}
                    lectureCount={7}
                    addToPlaylistHandler={addToPlaylistHandler}
                    loading={false}
                />


            </Stack>
        </Box>
    )
}
const Course = (
    {
        views,
        title,
        imageSrc,
        id,
        addToPlaylistHandler,
        creator,
        description,
        lectureCount,
        loading,
    }
) => {
    return (
        <VStack alignItems={'flex-start'}>
            <Image boxSize={'60'} src={imageSrc} objectFit={'contain'} />
            <Heading textTransform={'uppercase'} fontSize={'large'}>{title}</Heading>
            <Text children={description} />
            <HStack justifyContent={'flex-start'} >
                <Text fontWeight={'bold'} textTransform={'uppercase'}>
                    creator-
                </Text>
                <Text>{creator}</Text>
            </HStack>
            <Heading
                textAlign={'center'}
                size="large"
                children={`Lectures - ${lectureCount}`}
                textTransform="uppercase"
            />

            <Heading
                size="large"
                children={`Views - ${views}`}
                textTransform="uppercase"
            />
            <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
                <Link to={`/course/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Button
                    isLoading={loading}
                    variant={'ghost'}
                    colorScheme={'yellow'}
                    onClick={() => addToPlaylistHandler(id)}
                >
                    Add to playlist
                </Button>
            </Stack>



        </VStack>
    );
};
export default Courses