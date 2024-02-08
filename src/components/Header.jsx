import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Link } from 'react-router-dom';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerFooter,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    VStack,
    HStack,

    textDecoration
} from '@chakra-ui/react';

import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isAuthenticated = false
    return (

        <>

            <Button pos={'fixed'} top={'4'} left={'4'} onClick={onOpen} colorScheme='teal' width={'12'} height={'12'} rounded={'full'}><RiMenu5Fill /> </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose} // this will cause drawer to disappear is we click outside it
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottom={'1px'} color={'#fca103'}>Eduaction stars</DrawerHeader>

                    <DrawerBody>
                        <VStack alignItems={'flex-start'}>

                            <LinkButton onClose={onClose} url="/" title="Home" />
                            <LinkButton onClose={onClose} url="/courses" title="All Courses" />
                            <LinkButton onClose={onClose} url="/request" title="Buy Course" />
                            <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
                            <LinkButton onClose={onClose} url="/about" title="About" />

                        </VStack>

                    </DrawerBody>
                    <DrawerFooter>
                        {
                            isAuthenticated ? (<>
                                <VStack>
                                    <HStack spacing={'12'} justifyContent={'space-between'}>
                                        <Link onClick={onClose} to="/profile">
                                            <Button variant={'ghost'} colorScheme={'yellow'}>
                                                Profile
                                            </Button>
                                        </Link>
                                        <Button variant={'ghost'} onClick={onClose}>
                                            <RiLogoutBoxLine />
                                            Logout
                                        </Button>
                                    </HStack>
                                    <HStack>
                                        <Link onClick={onClose} to="/admin/dashboard">
                                            <Button colorScheme={'purple'} variant="ghost">
                                                <RiDashboardFill style={{ margin: '4px' }} />
                                                Dashboard
                                            </Button>
                                        </Link>
                                    </HStack>
                                </VStack>
                            </>) : (<>
                                <HStack> <Link onClick={onClose} to="/login">
                                    <Button colorScheme={'yellow'}>Login</Button>
                                </Link>



                                    <Link onClick={onClose} to="/register">
                                        <Button colorScheme={'yellow'} variant={'outline'}>Sign Up</Button>
                                    </Link></HStack>
                            </>)
                        }

                    </DrawerFooter>
                </DrawerContent>

            </Drawer>
        </>

    )
}
const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
    <Link onClick={onClose} to={url}>
        <Button variant={'ghost'}>{title}</Button>
    </Link>
);

export default Header