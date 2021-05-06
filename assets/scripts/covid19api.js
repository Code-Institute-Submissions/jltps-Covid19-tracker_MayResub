const summaryURL = "https://api.covid19api.com/summary";
const activeURL = "https://api.covid19api.com/total/country/"

const getData = async () => {
    const response = await fetch(summaryURL);
    const data = await response.json();
    console.log(data, 'data');
    return data;
}

const getActive = async () => {
    const response = await fetch(activeURL);
    const data = await response.json();
    console.log(data, 'active');
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
            `<button class="btn btn-info search-country-button" onclick="selectCountry(this.innerHTML)">${foundCountries[i].Country}</button>`)
    }
    console.log(foundCountries, "found country")
}


const selectCountry = async (selectedCountry) => {
    console.log(selectedCountry);
    const data = await getData();
    const active = await getActive();

    let selectedIndex = data.Countries.findIndex(function(currentValue) {
        return (currentValue.Country == selectedCountry);
    });
    
    $("#searchCountryData").html(
        `<h6>COVID-19 info for ${selectedCountry}:</6>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                <div class="col">
                    <div id="total-cases" class="card h-100 bg-light text-center">
                        <div class="card-header">CASES</div>
                        <div class="card-body">
                            <h5 id="cases-number" class="card-title">${data.Countries[selectedIndex].TotalConfirmed}</h5>
                        </div>
                    </div>
                </div>    
                <div class="col">
                    <div id="active-cases" class="card h-100 bg-light text-center">
                        <div class="card-header">ACTIVE</div>
                        <div class="card-body">
                            <h5 id="active-number" class="card-title">${data.Countries[selectedIndex].NewConfirmed}</h5>
                        </div>
                    </div>
                </div>   
                <div class="col">
                    <div id="deaths" class="card h-100 bg-light text-center">
                        <div class="card-header">DEATHS</div>
                        <div class="card-body">
                            <h5 id="deaths-number" class="card-title">${data.Countries[selectedIndex].TotalDeaths}</h5>
                        </div>
                    </div>
                </div>    
                <div class="col">
                    <div id="recovered" class="card h-100 bg-light text-center">
                        <div class="card-header">RECOVERED</div>
                        <div class="card-body">
                            <h5 id="recovered-number" class="card-title">${data.Countries[selectedIndex].TotalRecovered}</h5>
                        </div>
                    </div>
                </div>    
            </div>
        </div>`);
}