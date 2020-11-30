

/*DATA SOURCE: https://data.giss.nasa.gov/gistemp/*/


//GRAFIEK


const xLabels = [];
const yLabels = [];


loadChart();



//Chart wacht tot de data is geladen 

async function loadChart() {
    await getData();

    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Global Temperature Anomaly (in °C)',
                data: yLabels,
                backgroundColor:
                    '#63BBC5',
                borderColor: [
                    'rgb(132, 201, 209)'
                ],
                borderWidth: 1,
                fill: false
            }]
        },
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




//DATA FROM CSV


async function getData() {
    const response = await fetch("GLB.Ts+dSST.csv");
    const data = await response.text();
    //console.log(data)


    //data sorteren per rij met split
    // eerste rij (Year,Jan,Feb,Mar)(index 0) verwijderen met slice en beginnen vanaf eerste data rij 
    const table = data.split('\n').slice(1);

    //alle rows overlopen en per jaar een array hebben
    table.forEach(row => {
        const columns = row.split(',');

        //enkel jaar en temperatuur geven
        const year = columns[0]
        const temp = columns[1]

        //years toevoegen aan x-as van grafiek
        //temperatuur toevoegen aan y-as van grafiek
        xLabels.push(year);
        yLabels.push(temp);

        console.log(year, temp);

    })

}




