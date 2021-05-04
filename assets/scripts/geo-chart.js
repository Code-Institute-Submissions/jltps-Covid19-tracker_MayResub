google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': config.MAPS_API_KEY
});
google.charts.setOnLoadCallback(drawRegionsMap);

async function drawRegionsMap() {
    let countryData = await getData()
    let countryList = [['Country', 'Total Cases']]
    for(let i = 1; i < countries.length; i++) {
    countryList.push([countryData.Countries[i].CountryCode, countryData.Countries[i].TotalConfirmed])
        }
    var data = google.visualization.arrayToDataTable(countryList);

    var options = {
        colorAxis: { colors: ['yellow', '#ef7a06', '#cf2626'] },
        width: 1200,
        height: 800,
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));

    chart.draw(data, options);

}
