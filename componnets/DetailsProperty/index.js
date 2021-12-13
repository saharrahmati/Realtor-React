import {Box, Flex, Spacer, Text} from "@chakra-ui/layout";
import {GoVerified} from "react-icons/go";
import {Avatar} from "@chakra-ui/avatar";
import {FaBath, FaBed} from "react-icons/fa";
import millify from "millify";
import {BsGridFill} from "react-icons/bs";
import ImageScroll from "./_components/ImageScroll";
import Classes from './index.module.css'

function Details(props){
    const { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } = props.propertyDetails

    return(
        <Box className={Classes.MainBox}>
            {photos && <ImageScroll data={photos} />}
            <Box w='full' p='6'>
                <Flex className={Classes.Frequency}>
                    <Box className={Classes.Frequency__Box}>{isVerified && <GoVerified/>}</Box>
                    <Text className={Classes.Frequency__Text}>
                        AED {price} {rentFrequency && `/${rentFrequency}`}
                    </Text>
                    <Spacer/>
                    <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                </Flex>
                <Flex className={Classes.RoomInfo}>
                    {rooms}<FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
                </Flex>
            </Box>
            <Box marginTop='2'>
                <Text className={Classes.Title}>{title}</Text>
                <Text className={Classes.Description}>{description}</Text>
            </Box>
            <Flex className={Classes.MoreInfo}>
                <Flex className={Classes.MoreInfo__title}>
                    <Text>Type</Text>
                    <Text fontWeight='bold'>{type}</Text>
                </Flex>
                <Flex className={Classes.MoreInfo__title}>
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex className={Classes.MoreInfo__title} >
                        <Text>Furnishing Status</Text>
                        <Text fontWeight='bold'>{furnishingStatus}</Text>
                    </Flex>
                )}
            </Flex>
            <Box>
                {amenities.length && <Text className={Classes.Facilites}>Facilites:</Text>}
                <Flex flexWrap='wrap'>
                    {amenities?.map((item) => (
                        item?.amenities?.map((amenity) => (
                            <Text key={amenity.text} className={Classes.Facilites__text}>
                                {amenity.text}
                            </Text>
                        ))
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default Details