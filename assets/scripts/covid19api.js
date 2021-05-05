const summaryURL = "https://api.covid19api.com/summary";
const countryListURL = "https://api.covid19api.com/countries";

const getData = async () => {
    const response = await fetch(summaryURL);
    const data = await response.json();
    console.log(data, 'data');
    countries = data.Countries;
    return data;
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

const fetchCountryName = async (event) => {
    const response = await fetch(countryListURL);
    const data = await response.json();
    let countryNameInput = $("#coutryNameInput").val();
    console.log(data, 'countryName');
    
    if (!countryNameInput) {
        $("#searchCountryData").html(`<h5>Please enter a Country name</h5>`);
        return;
    }
    
    $("#searchCountryData").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    let foundCountries = [];
    for(let i = 0; i < data.length; i++) {
        if(data[i].Country.toLowerCase().includes(countryNameInput.toLowerCase()))
            foundCountries.push(data[i]);
    }
    
    for(let i=0; i < foundCountries.length; i++) {
        $("#searchCountryData").append(`<button class="btn">${foundCountries[i].Country}</button>`)
    }
    console.log(foundCountries, "found country")
    
}
