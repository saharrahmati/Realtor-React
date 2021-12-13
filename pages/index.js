import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Banner from '../componnets/Banners'
import buyPic from '../images/buy.jpeg'
import rentPic from '../images/rent.jpeg'
import {baseUrl,fetchApi} from "../utils/api";
import Property from '../componnets/Properties'

function Home({propertiesForSale,propertiesForRent}){
    return(
        <Box>
            <Banner
                purpose='RENT A HOME'
                title1='Rental Homes for'
                title2='Everyone'
                desc1=' Explore from Apartments, builder floors, villas'
                desc2='and more'
                buttonText='Explore Renting'
                linkName='/search?purpose=for-rent'
                imageUrl={rentPic}
            />
            <Flex flexWrap='wrap'>
                {propertiesForRent && propertiesForRent.map( property=> <Property property={property} key={property.id}/>)}
            </Flex>
            <Banner
                purpose='BUY A HOME'
                title1=' Find, Buy & Own Your'
                title2='Dream Home'
                desc1=' Explore from Apartments, land, builder floors,'
                desc2=' villas and more'
                buttonText='Explore Buying'
                linkName='/search?purpose=for-sale'
                imageUrl={buyPic}
            />
            <Flex flexWrap='wrap'>
                {propertiesForSale && propertiesForSale.map( property=> <Property property={property} key={property.id}/>)}
            </Flex>
        </Box>
    )
}

export default Home;

export async function getStaticProps() {
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
    const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

    return {
        props: {
            propertiesForSale: propertyForSale?.hits,
            propertiesForRent: propertyForRent?.hits,
        },
    };
}