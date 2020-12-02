function getData(cb) {
    var settings = {
        "url": "https://api.covid19api.com/summary",
        "method": "GET",
        "timeout": 0,
    };


    $.ajax(settings).done(function(response) {
        cb(response);
    });
}

getData(function(data) {
    console.log(data);
    console.dir(data);
});

function writeToDocument() {
    getData(function(data) {
        document.getElementById("cases-number").innerHTML = data.Global.TotalConfirmed;
        document.getElementById("active-number").innerHTML = data.Global.NewConfirmed;
        document.getElementById("deaths-number").innerHTML = data.Global.TotalDeaths;
        document.getElementById("recovered-number").innerHTML = data.Global.TotalRecovered;
    });
}

writeToDocument();