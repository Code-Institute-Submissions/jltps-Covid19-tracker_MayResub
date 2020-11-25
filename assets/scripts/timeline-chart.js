google.charts.load('current', { 'packages': ['line'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Recovered');
    data.addColumn('number', 'Deaths');
    data.addColumn('number', 'Active');

    data.addRows([
        [1, 37.8, 80.8, 41.8],
        [2, 30.9, 69.5, 32.4],
        [3, 25.4, 57, 25.7],
        [4, 11.7, 18.8, 10.5],
        [5, 11.9, 17.6, 10.4],
        [6, 8.8, 13.6, 7.7],
        [7, 7.6, 12.3, 9.6],
        [8, 12.3, 29.2, 10.6],
        [9, 16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11, 5.3, 7.9, 4.7],
        [12, 6.6, 8.4, 5.2],
        [13, 4.8, 6.3, 3.6],
        [14, 4.2, 6.2, 3.4],
        [15, 37.8, 80.8, 41.8],
        [16, 30.9, 69.5, 32.4],
        [17, 25.4, 57, 25.7],
        [18, 11.7, 18.8, 10.5],
        [19, 11.9, 17.6, 10.4],
        [20, 8.8, 13.6, 7.7],
        [21, 7.6, 12.3, 9.6],
        [22, 12.3, 29.2, 10.6],
        [23, 16.9, 42.9, 14.8],
        [24, 12.8, 30.9, 11.6],
        [25, 5.3, 7.9, 4.7],
        [26, 6.6, 8.4, 5.2],
        [27, 4.8, 6.3, 3.6],
        [28, 4.2, 6.2, 3.4],
        [29, 12.3, 29.2, 10.6],
        [30, 16.9, 42.9, 14.8]
    ]);

    var options = {
        chart: {
            title: 'Pandemic Evolution in the last 30 days',
            subtitle: 'in number of cases'
        },
        // width: 600,
        // height: 400,
        axes: {
            x: {
                0: { side: 'top' }
            }
        }
    };

    var chart = new google.charts.Line(document.getElementById('timeline'));

    chart.draw(data, google.charts.Line.convertOptions(options));

    $(window).resize(function() {
        chart.draw(data, google.charts.Line.convertOptions(options));
    });
}