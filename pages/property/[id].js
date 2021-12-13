import Details from "../../componnets/DetailsProperty";

import { baseUrl, fetchApi } from '../../utils/api';

function PropertyDetails({propertyDetails}) {
    return(
        <Details propertyDetails={propertyDetails}/>
    )}

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            propertyDetails: data,
        },
    };
}