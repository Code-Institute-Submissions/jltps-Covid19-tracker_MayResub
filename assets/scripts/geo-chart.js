google.charts.load('current', {
    'packages': ['geochart'],
    'mapsApiKey': 'AIzaSyD2iZgjyJvZ8Om7Mr8_i0_aiDc4ZOk9xhw'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Active cases'],
        ['Germany', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['Portugal', 700]
    ]);

    var options = {
        colorAxis: { colors: ['yellow', '#ef7a06', '#cf2626'] },
        width: 1200,
        height: 800,
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart'));

    chart.draw(data, options);

}