import "./styles.css";

let myConversion = " ° F";
let convLabel = "";
let myResult = "kenosha";

const img = document.querySelector('img')
async function findWeather(myResult) {
    try {
        const response = await fetch(('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + myResult + '?key=MPPQ75L93HTYRPELWSEMXXGA9'), {mode: 'cors'})
        const someData = await response.json();
        todaysWeather.innerText = someData.description;
        zone.innerText = someData.timezone;
        myLocation.innerText = someData.resolvedAddress;
        humid.innerText = someData.days[0].humidity;
        sunIndex.innerText = someData.days[0].uvindex;
        let myTemp = tempConvert(someData.days[0].temp);
        let myHigh = tempConvert(someData.days[0].tempmax);
        let myLow = tempConvert(someData.days[0].tempmin);
        currentTemp.innerText = myTemp + myConversion;
        highTemp.innerText = myHigh + myConversion;
        lowTemp.innerText = myLow + myConversion;
    } catch (error) {
    alert(error);
    }
}

function mySearch() {
    let input = document.getElementById('searchbar').value.toLowerCase();
}

/*Event listener for search bar*/
const form = document.getElementById('myForm');                    
form.addEventListener('submit', function(event) {
event.preventDefault(); // Prevent form submission
myResult = form.elements.searchbar.value;
findWeather(myResult);
});


document.getElementById("convChange").onclick = function() {wasClicked()};

function wasClicked() {
    convLabel = myConversion == " ° C" ? convChange.innerText = "Celsius" : convChange.innerText = "Farenheight";
    myConversion = myConversion == " ° F" ? " ° C" : " ° F";
    findWeather(myResult);
}

/*Convert farenheight to celsius*/
function tempConvert(someTemp) {
        if (myConversion == " ° C") {
            someTemp = ((someTemp - 32) * (5/9)).toFixed(2);
        } 
        return someTemp;
}

findWeather(myResult);
