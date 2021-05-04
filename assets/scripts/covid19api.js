const summaryURL = "https://api.covid19api.com/summary"

const getData = async () => {
  const response = await fetch(summaryURL);
  const data = await response.json();
  console.log(data, 'data');
  countries = data.Countries;
  return data
//   {
//     countries: data.Countries,
//     globalData: data.Global,
//   };
}

const writeSummaryToDocument = async () => {
    const data = await getData();
    document.getElementById("cases-number").innerHTML = data.Global.TotalConfirmed.toLocaleString();
    document.getElementById("active-number").innerHTML = data.Global.NewConfirmed.toLocaleString();
    document.getElementById("deaths-number").innerHTML = data.Global.TotalDeaths.toLocaleString();
    document.getElementById("recovered-number").innerHTML = data.Global.TotalRecovered.toLocaleString();
}
  
writeSummaryToDocument();

// function getCountriesList() {
//     let url = "https://api.covid19api.com/countries";
//     let cl = $.getJSON(url);
//     let clparsed = JSON.parse(cl);
//     console.log("CL is: " + clparsed);
// }

// getCountriesList();

// function writeToDocument() {
//     getSummary(function(data) {
//         document.getElementById("cases-number").innerHTML = data.Global.TotalConfirmed.toLocaleString();
//         document.getElementById("active-number").innerHTML = data.Global.NewConfirmed.toLocaleString();
//         document.getElementById("deaths-number").innerHTML = data.Global.TotalDeaths.toLocaleString();
//         document.getElementById("recovered-number").innerHTML = data.Global.TotalRecovered.toLocaleString();
//     });
// }

// writeToDocument();
