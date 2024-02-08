import { Box, Container, Stack, Text, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import imgurl from '../assets/video/vid1.mp4'
import { useState } from 'react'
const CoursePage = () => {
    const [lectureNumber, setLectureNumber] = useState(0);
    const lectures = [
        {
            _id: 'aslkdfjklasd',
            title: 'Lecture 1',
            description: 'Big Buck Bunny is a short animated film produced by the Blender Institute, part of the Blender Foundation. It is a popular test video for video players and streaming services.',
            video: {
                url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            }
        },
        {
            _id: 'aslkdfjklsdjdfksdasd',
            title: 'Lecture 2',
            description: 'This is a sample MP4 video file commonly used for testing purposes.',
            video: {
                url: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
            }
        },
        {
            _id: 'aslkdfdfdfjklasd',
            title: 'Lecture 3',
            description: 'This is another sample MP4 video file commonly used for testing video playback.',
            video: {
                url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4",
            }
        },
        {
            _id: 'aslkdfjklassdfsdd',
            title: 'Lecture 4',
            description: 'A sample video demonstrating video playback.',
            video: {
                url: "https://www.sample-videos.com/video123/mp4/480/big_buck_bunny_480p_5mb.mp4",
            }
        }
    ];


    return (
        <Box width={'100vw'} minH={'95vh'} >
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Box minH={'100vh'} width={{ base: '100vw', md: '70vw' }} >

                    <video
                        width={'100%'}
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        src={lectures[lectureNumber].video.url}

                    ></video>
                    <Heading
                        m="4"
                        children={`#${lectureNumber + 1} ${lectures[lectureNumber].title
                            }`}
                    />

                    <Heading m="4" children="Description" />
                    <Text m="4" children={lectures[lectureNumber].description} />
                </Box>

                <VStack width={{ base: 'auto', md: '30%' }} alignItems={'center'}>

                    {lectures.map((element, index) => (
                        <button
                            onClick={() => setLectureNumber(index)}
                            key={element._id}
                            style={{
                                width: '100%',
                                padding: '1rem',
                                textAlign: 'center',
                                margin: 0,
                                borderBottom: '1px solid rgba(0,0,0,0.2)',
                            }}
                        >
                            <Text noOfLines={1}>
                                #{index + 1} {element.title}
                            </Text>
                        </button>
                    ))}
                </VStack>

            </Stack>
        </Box>
    )
}

export default CoursePage