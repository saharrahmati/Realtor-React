import Link from 'next/link';
import Image from 'next/image';
import {Box, Button, Flex, Text} from "@chakra-ui/react";
import Classes from './index.module.css'


function Banner(props) {
    const {purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl} = props
    return(
        <Flex className={Classes.BannerBox}>
            <Image src={imageUrl} width={500} height={300} />
            <Box className={Classes.MainBox}>
                <Text className={Classes.Purpose}>{purpose}</Text>
                <Text className={Classes.Title} >{title1}<br />{title2}</Text>
                <Text className={Classes.Description}>{desc1}<br />{desc2}</Text>
                <Button colorScheme='teal' variant='solid'>
                    <Link href={linkName}><a>{buttonText}</a></Link>
                </Button>
            </Box>
        </Flex>
    )
}

export default Banner

