function getSummary(cb) {
    var settings = {
        "url": "https://api.covid19api.com/summary",
        "method": "GET",
        "timeout": 0,
    };


    $.ajax(settings).done(function(response) {
        cb(response);
    });
}

// function getCountriesList() {
//     let url = "https://api.covid19api.com/countries";
//     let cl = $.getJSON(url);
//     let clparsed = JSON.parse(cl);
//     console.log("CL is: " + clparsed);
// }

// getCountriesList();

function writeToDocument() {
    getSummary(function(data) {
        document.getElementById("cases-number").innerHTML = data.Global.TotalConfirmed.toLocaleString();
        document.getElementById("active-number").innerHTML = data.Global.NewConfirmed.toLocaleString();
        document.getElementById("deaths-number").innerHTML = data.Global.TotalDeaths.toLocaleString();
        document.getElementById("recovered-number").innerHTML = data.Global.TotalRecovered.toLocaleString();
    });
}

writeToDocument();
