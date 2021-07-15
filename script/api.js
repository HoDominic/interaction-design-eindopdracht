

/*DATA SOURCE: https://data.giss.nasa.gov/gistemp/*/


//GRAFIEK



const xLabels = [];
const yLabels = [];


loadChart();
setModal();
/*toggleLoadingButton();*/



//Chart wacht tot de data is geladen 

async function loadChart() {
    await getData();

    const ctx = document.getElementById('chart').getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Global Average Temperature (in °C)',
                data: yLabels,
                backgroundColor:
                    '#ff5b00',
                borderColor: [
                    '#ff5b00'
                ],
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
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

/*SPINNER ANIMATION*/

function spinner() {

    const loadingButton = document.querySelector('.c-button-modal')

    loadingButton.addEventListener('click', function () {
        loadingButton.classList.add("button--loading");




    })
};

function setModal() {
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    const modal = document.querySelector('.modal-container');
    const loadingButton = document.querySelector('.c-button-modal')



    open.addEventListener('click', function () {

        /*Modal laten verschijnen*/
        loadingButton.classList.add("button--loading");
        console.log('clicked')

        /* modal.classList.add('show')*/
        setTimeout(function () {
            modal.classList.add('show');
        }, 1800);



        /*spinner stoppen wanneer modal verschijnt!*/
        setTimeout(function () {
            loadingButton.classList.remove("button--loading");
        }, 1800);



    });


    close.addEventListener('click', function () {
        console.log('clicked close')
        modal.classList.remove('show')

        loadingButton.classList.remove("button--loading");
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
        yLabels.push(parseFloat(temp) + 14);

        console.log(year, temp);

    })

}




