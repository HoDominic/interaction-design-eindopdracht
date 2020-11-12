

//API URL
const serverEndpoint = "https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json";


let customHeaders = new Headers();

//Add a few Headers UITZONDERING

customHeaders.append('Accept', 'application/json');




// Fetch API endpoint in a function


const getAPI = async function (endpoint) {
    try {
        const response = await fetch(endpoint, { headers: customHeaders });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("An error occured, we handled it", error);
    }

};





// call function
getAPI(serverEndpoint);




