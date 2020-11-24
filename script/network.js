

//API URL
const serverEndpoint = "https://www.ncdc.noaa.gov/cag/global/time-series/globe/land_ocean/ytd/12/1880-2016.json";


let customHeaders = new Headers();

//Add a few Headers UITZONDERING

customHeaders.append('Accept', 'application/json');


//globaal
const xLabels = [];
const yTemps = [];



chartIt();
async function chartIt() {
    await getData(serverEndpoint);

    const ctx = document.getElementById('chart').getContext('2d');



    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Global Temperature Anomaly',
                data: yTemps,
                backgroundColor: '#63BBC5',
                borderColor: ['rgb(132, 201, 209)'],
                borderWidth: 1,
                fill: false
            }]
        },
        //
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        responsive: true,

                        //graden teken toevoegen
                        callback: function (value, index, values) {
                            return value + '°';
                        }
                    }
                }]
            }
        }

    });
}



//Fetch data from API
async function getData(endpoint) {
    const response = await fetch(endpoint);
    const data = await response.json();

    //await getData(serverEndpoint);



    /*ga 1 niveau dieper binnen de object*/
    data2 = data.data;
    console.log(data2);




    //years en values maar enkel binnen loop, als ik jaren of values return krijg ik maar 1 jaar, value buiten de for-loop


    let allYears = [];
    let allYearsTemp = [];

    let yearCount = 0;
    //console.log(data.data['1880']);

    for (let dataProp in data2) {
        const year = dataProp;
        //console.log(year);

        allYears[yearCount] = year;
        allYearsTemp[yearCount] = data2[year];
        yearCount++;
    }

    //check allYears and allYearsTemp values
    for (i = 0; i < allYears.length; i++) {
        console.log("yearArray: " + allYears[i]);
        console.log("yearTempArray: " + allYearsTemp[i]);
    }

    //jaren voor x-as van chart
    for (i = 0; i < allYears.length; i++) {
        xLabels[i] = allYears[i];
    }

    //jaren voor y-as van chart
    for (i = 0; i < allYearsTemp.length; i++) {
        yTemps[i] = allYearsTemp[i];
    }


}





// Fetch API endpoint in a function

/*
const getAPI = async function (endpoint) {
    try {
        const response = await fetch(endpoint, { headers: customHeaders });
        const data = await response.json();
        console.log(data);
        //console.log(data.data)

        const rows = data.split('\n');
        console.log(rows);


    } catch (error) {
        console.error("An error occured, we handled it", error);
    }

};*/





