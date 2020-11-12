

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
        console.log(data.description.title)


    } catch (error) {
        console.error("An error occured, we handled it", error);
    }

};





// call function
getAPI(serverEndpoint);



//CHART

/*
//x-axis
const xLabels = [];

const ytemps = [];

createChart();

async function createChart() {
    await getAPI();
    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Global Temperature Anomaly ',
                data: ytemps,
                backgroundColor: ['rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        }

    });
};
createChart();
*/
