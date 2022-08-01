function attachEvents() {
    let weatherSymbols = {
        "Sunny": "\u2600",
        "Partly sunny": "\u26C5",
        "Overcast": "\u2601",
        "Rain": "\u2614",
        "Degrees": "\xB0",
    }
    // console.log(weatherSymbols["Sunny"], weatherSymbols["Partly sunny"], weatherSymbols["Overcast"], weatherSymbols["Rain"], weatherSymbols["Degrees"]);

    let inputElement = document.getElementById('location');
    let buttonElement = document.getElementById('submit');
    let forecastElement = document.getElementById('forecast');
    let currentDivElement = document.getElementById('current');
    let upcomingDivElement = document.getElementById('upcoming');

    buttonElement.addEventListener('click', getWeatherF);

    function getWeatherF() {
        let locationInput = inputElement.value;
        inputElement.value = '';
        Array.from(currentDivElement.children).forEach((el, i) => {
            if(i !== 0) {
                el.remove();
            }
        });
        Array.from(upcomingDivElement.children).forEach((el, i) => {
            if(i !== 0) {
                el.remove();
            }
        });
        Array.from(forecastElement.children).forEach((el, i) => {
            if(i > 1) {
                el.remove();
            }
        });      

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(res => res.json())
            .then(locations => {
                let locationNameCode = locations.find(l => l.name === locationInput);

                let currentPromise = fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationNameCode.code}`)
                    .then(res => res.json())
                    .then(locationForecast => {
                        createCurrentConditions(locationForecast);
                    })

                let upcomingPromise = fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationNameCode.code}`)
                        .then(res => res.json())
                        .then(upcomingForecast => {
                            let forecastsDivEl = createEl('div', '', 'forecast-info'); 
                            upcomingForecast.forecast.forEach(d => {
                                createUpcoming(d, forecastsDivEl);
                            })
                            upcomingDivElement.appendChild(forecastsDivEl); 
                        })

                Promise.all([currentPromise, upcomingPromise])
                        .then(r => forecastElement.style.display = 'block')
                        .catch(err => errHandler(err))
                
            })
            .catch(err => errHandler(err))
    }

    function createUpcoming(day, parent) {
        let degreesData = `${day.low}${weatherSymbols["Degrees"]}/${day.high}${weatherSymbols["Degrees"]}`;
        let conditionData = weatherSymbols[day.condition];

        let upcomingSpanEl = createEl('span', '', 'upcoming', parent); 
        let symbolSpanEl = createEl('span', conditionData,'symbol', upcomingSpanEl);
        let drgreesSpanElement = createEl('span', degreesData, 'forecast-data', upcomingSpanEl);
        let weatherSpanElement = createEl('span', day.condition, 'forecast-data', upcomingSpanEl);
    }

    function createCurrentConditions(locationForecast) {
        let degreesData = `${locationForecast.forecast.low}${weatherSymbols["Degrees"]}/${locationForecast.forecast.high}${weatherSymbols["Degrees"]}`;
        let conditionData = weatherSymbols[locationForecast.forecast.condition];

        let forecastsDivEl = createEl('div', '', 'forecast');  
        let symbolSpanEl = createEl('span', conditionData,'condition symbol', forecastsDivEl);
        let conditionSpanEl = createEl('span', '', 'condition', forecastsDivEl);
        let citySpanElement = createEl('span', locationForecast.name, 'forecast-data', conditionSpanEl); 
        let drgreesSpanElement = createEl('span', degreesData, 'forecast-data', conditionSpanEl);
        let weatherSpanElement = createEl('span', locationForecast.forecast.condition, 'forecast-data', conditionSpanEl);

        currentDivElement.appendChild(forecastsDivEl);        
    }

    function createEl(type, text, className, parent) {
        let element = document.createElement(type);

        if(text) {
            element.textContent = text;
        } 

        if(className) {
            element.className = className;
        }

        if(parent) {
            parent.appendChild(element);
        }

        return element;
    }

    function errHandler(err) {
        forecastElement.style.display = 'block';
        createEl('div', 'Error', 'label', forecastElement);
    }
}   

attachEvents();