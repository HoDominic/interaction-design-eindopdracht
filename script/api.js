



getData();

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

        //enkel jaar en waarde geven
        const year = columns[0]
        const temp = columns[1]

        console.log(year, temp);

    })

}




