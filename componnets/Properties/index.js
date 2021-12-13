import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import DefaultImage from '../../images/default.jpg'
import Classes from './index.module.css'

function Property(props){
    const { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID} = props.property
    return(
        <Link href={`/property/${externalID}`} passHref>
            <Flex className={Classes.MainFlex}>
                <Box>
                    <Image src={coverPhoto ? coverPhoto.url: DefaultImage} width={400} height={260}/>
                </Box>
                <Box w='full'>
                    <Flex className={Classes.Details} >
                        <Flex className={Classes.AlignItems}>
                            <Box className={Classes.GoBox}>{isVerified && <GoVerified />}</Box>
                            <Text className={Classes.Price}>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                        </Box>
                    </Flex>
                    <Flex className={Classes.RoomInfo} >
                        {rooms}
                        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text className={Classes.RoomTitle}>
                        {title.length > 30 ? title.substring(0, 30) + '...' : title}
                    </Text>
                </Box>
            </Flex>

        </Link>
    )
}

export default  Property