const summaryURL = "https://api.covid19api.com/summary";

const getData = async () => {
    const response = await fetch(summaryURL);
    const data = await response.json();
    console.log(data, 'data');
    countries = data.Countries;
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
    console.log(data, 'countryName');
    
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
            `<button class="btn btn-info search-country-button" onclick="selectCountry(this.innerHTML)" data-bs-dismiss="modal">${foundCountries[i].Country}</button>`)
    }
    console.log(foundCountries, "found country")
}

const selectCountry = async (selectedCountry) => {
    console.log(selectedCountry);
    const data = await getData();
    let a = data.Countries.findIndex(function(currentValue) {
        return (currentValue.Country == selectedCountry);
    });
    $("body").html(
        `<h1>${data.Countries[a].Country}</h1>`);
    console.log(a);
    console.log(data.Countries[a].Country);
}