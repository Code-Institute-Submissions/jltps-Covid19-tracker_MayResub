const summaryURL = "https://api.covid19api.com/summary";
const activeURL = "https://api.covid19api.com/total/country/"

const getData = async (url = null) => {
    const apiURL = url || summaryURL;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
}


const writeSummaryToDocument = async () => {
    const data = await getData();
    document.getElementById("cases-number").innerHTML = data.Global.TotalConfirmed.toLocaleString();
    document.getElementById("active-number").innerHTML = data.Global.NewConfirmed.toLocaleString();
    document.getElementById("deaths-number").innerHTML = data.Global.TotalDeaths.toLocaleString();
    document.getElementById("recovered-number").innerHTML = data.Global.TotalRecovered.toLocaleString();
}
  

writeSummaryToDocument();


const fetchCountryName = async (event) => {
    const data = await getData();
    let countryNameInput = $("#coutryNameInput").val();
    
    if (!countryNameInput) {
        $("#searchCountryData").html(`<h5>Please enter a Country name</h5>`);
        return;
    }

    let foundCountries = [];
    for(let i = 0; i < data.Countries.length; i++) {
        if(data.Countries[i].Country.toLowerCase().includes(countryNameInput.toLowerCase()))
            foundCountries.push(data.Countries[i]);
    }
    
    if(foundCountries.length > 0) {
        $("#searchCountryData").html(
            `<div id="loader">
                <img src="assets/css/loader.gif" alt="loading..." />
                <h6><i class="fas fa-long-arrow-alt-down"></i> Please click an option below <i class="fas fa-long-arrow-alt-down"></i></h6>
            </div>`);
        } else {
            $("#searchCountryData").html(
                `<div id="loader">
                    <h6><i class="fas fa-exclamation-triangle"></i> No Country found</h6>
                </div>`);
    }
    
    for(let i=0; i < foundCountries.length; i++) {
        $("#searchCountryData").append(
            `<button class="btn btn-info search-country-button" onclick="selectCountry('${foundCountries[i].Slug}')">${foundCountries[i].Country}</button>`)
    }
}


const selectCountry = async (selectedCountry) => {
    const data = await getData(`https://api.covid19api.com/country/${selectedCountry}`);
    const countrySelectedData = data[data.length - 1];
    //Define url (API) argument for selected country
    const url = selectedCountry + "/status/confirmed";

    // if(!response.ok) {
    //     throw new Error(`HTTP Error! Status: ${response.status}`);
    //     flash("ERROR");
    // }
    

    //Render HTML for selected country stats inside modal
    $("#searchCountryData").html(
        `<div class="row">
            <div class="col-12 col-m6 offset-m3 text-center">
                <h4 class="border border-primary border-5 rounded-pill bg-light">COVID-19 info for ${countrySelectedData.Country}:</h4>
            </div>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div class="col">
                    <div id="total-cases" class="card h-100 bg-light text-center">
                        <div class="card-header">CASES</div>
                        <div class="card-body">
                            <h5 id="cases-number" class="card-title">${countrySelectedData.Confirmed}</h5>
                        </div>
                    </div>
                </div>    
                <div class="col">
                    <div id="active-cases" class="card h-100 bg-light text-center">
                        <div class="card-header">ACTIVE</div>
                        <div class="card-body">
                            <h5 id="active-number" class="card-title">${countrySelectedData.Active}</h5>
                        </div>
                    </div>
                </div>   
                <div class="col">
                    <div id="deaths" class="card h-100 bg-light text-center">
                        <div class="card-header">DEATHS</div>
                        <div class="card-body">
                            <h5 id="deaths-number" class="card-title">${countrySelectedData.Deaths}</h5>
                        </div>
                    </div>
                </div>    
                <div class="col">
                    <div id="recovered" class="card h-100 bg-light text-center">
                        <div class="card-header">RECOVERED</div>
                        <div class="card-body">
                            <h5 id="recovered-number" class="card-title">${countrySelectedData.Recovered}</h5>
                        </div>
                    </div>
                </div>    
            </div>
        </div>`);
    

    //Render Google Charts timeline graph inside modal
    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var chartData = new google.visualization.DataTable();
        chartData.addColumn('number', 'Day');
        chartData.addColumn('number', 'Total Cases');
        chartData.addColumn('number', 'New Cases');
        
        //Record no.39 is for March 1st 2020
        let casesRows = [[1, data[39].Confirmed, (data[39].Confirmed - data[38].Confirmed)]];

        //Push API data to graph's data table
        for(let i=40; i < data.length; i++) {
            casesRows.push([i-38, data[i].Confirmed, (data[i].Confirmed - data[i-1].Confirmed)]);
        }

        chartData.addRows(casesRows);

        var options = {
            chart: {
                title: 'Pandemic Evolution since March 1st 2020 until today',
                subtitle: 'in number of cases', 
            },
            //Make graph dual-Y 
            series: {
                0: {axis: 'TotalCases'},
                1: {axis: 'NewCases'}
            },

            axes: {
                x: {
                    0: { side: 'bottom' }
                }, 
                y: {
                    TotalCases: {label: 'Total Cases'},
                    NewCases: {label: 'New Cases'}
                }
            },
            vAxis: {
                viewWindow: {
                    min: 0
                }
            }
        };

        var timelineChart = new google.charts.Line(document.getElementById('timeline'));

        timelineChart.draw(chartData, google.charts.Line.convertOptions(options));

        //Make graph responsive to window resizing
        $(window).resize(function() {
            timelineChart.draw(chartData, google.charts.Line.convertOptions(options));
        });
    }
}
