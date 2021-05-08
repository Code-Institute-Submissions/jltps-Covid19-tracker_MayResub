google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': config.MAPS_API_KEY
});
google.charts.setOnLoadCallback(drawRegionsMap);

async function drawRegionsMap() {
    let countryData = await getData();
    let countryList = [['Country code', 'Country name', 'Total Cases']];
    for(let i = 1; i < countryData.Countries.length; i++) {
    countryList.push([countryData.Countries[i].CountryCode, countryData.Countries[i].Country, countryData.Countries[i].TotalConfirmed]);
    }
    
    var data = google.visualization.arrayToDataTable(countryList);

    var options = {
        colorAxis: { colors: ['yellow', '#ef7a06', '#cf2626'] }, 
        legend: 'none'
    };

    var geoChart = new google.visualization.GeoChart(document.getElementById('geochart'));

    $(window).resize(function(){
        geoChart.draw(data, options);
    });
    geoChart.draw(data, options);
}
