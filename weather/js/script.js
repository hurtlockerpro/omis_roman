// weather api  key = e94a06c22c14c9ab3059f89372eb2541

// https://api.openweathermap.org/data/2.5/weather?q={city name}&lat={lat}&lon={lon}&appid={API key}


/*
1. API connection class -> to openweathermap
2. JSON parser
3. draw fron-end + data
4. switch button + jquery (javascript)
*/

class Connection {
    
    url = 'https://api.openweathermap.org/data/2.5/weather' //[[0 => key, 1 => value ]]

    options = {
        appid: 'e94a06c22c14c9ab3059f89372eb2541',
        q: 'Tallinn',
        lat: 0, // number
        lon: 0 // number
    }

    generateApiUrl()
    {
        let urlOptions = ''

        for (let key in this.options) 
        { 
            if (typeof this.options[key] == 'string' && this.options[key].length >= 1)
            {
                //console.log(this.options[key]);
                urlOptions += key +  '=' + this.options[key] + '&'
            } 
            else if (typeof this.options[key] == 'number' && this.options[key] > 0)
            {
                //console.log('string: ', this.options[key]);
                urlOptions += key +  '=' + this.options[key] + '&'
            }
        }

        return this.url + '?' + urlOptions.slice(0, -1)
    }

    addNewOption(key, value)
    {
        this.options[key] = value
    }

}

class JSON {

    data = ''
    url = ''
    icon = 'http://openweathermap.org/img/w/{icon_name}.png'

    constructor(url) {      
        this.url = url
        console.log(url);
    }

    async getData(){

        const response = await fetch(this.url) // Promise
        const weatherData = await response.json() // -> then()
        return weatherData

        // fetch().then().then()
    }

    async getWeather(rowSeparator = ''){

        this.data = await this.getData(this.url)
        let weatherDescription = ''
        await this.data.weather.forEach(element => {
            weatherDescription += element.main + ' (' + element.description + ') ' + rowSeparator 
        });
        return weatherDescription
    }

    async getTemp(){
        this.data = await this.getData(this.url)
        return this.data.main.temp
    }


    async getCity(){
        this.data = await this.getData(this.url)
        return this.data.name
    }

    async getIcon() {
        this.data = await this.getData(this.url)
        return this.icon.replace('{icon_name}', this.data.weather[0].icon)
    }
}


let con = new Connection()
let json = new JSON(con.generateApiUrl())

json.getWeather().then(weatherData => {
    let divWeatherDescription = document.getElementsByClassName('card-text')
    if (divWeatherDescription.length != 0 && divWeatherDescription !== undefined)
    {
        console.log('weatherData: ', weatherData)
        divWeatherDescription[0].innerText = weatherData
    } else {
        //console.log(new Error('No div (html) found'));
        throw new Error('No div (html) found')
    }
    
})

json.getTemp().then(weatherTemp => {
    let divWeatherTemp = document.getElementById('temp')
    if (divWeatherTemp.length != 0 && divWeatherTemp !== undefined)
    {
        console.log('weatherTemp: ', weatherTemp)
        divWeatherTemp.innerText = weatherTemp
    } else {
        //console.log(new Error('No div (html) found'));
        throw new Error('No div (html) found')
    }
    //console.log('temp: ' , weatherData );
})

json.getCity().then(cityData => {
    let divCity = document.getElementsByClassName('card-title')
    if (divCity.length != 0 && divCity !== undefined)
    {
        divCity[0].innerText = cityData
    } else {
        //console.log(new Error('No div (html) found'));
        throw new Error('No div (html) found')
    }
    console.log('cityData: ' , cityData );
})


json.getIcon().then(iconData => {
    let divIcon = document.getElementsByClassName('card-img-top')
    if (divIcon.length != 0 && divIcon !== undefined)
    {
        divIcon[0].src = iconData
        divIcon[0].alt= 'My weather'

    } else {
        //console.log(new Error('No div (html) found'));
        throw new Error('No div (html) found')
    }
    console.log('divIcon: ' , divIcon );
})


/* SWITCH BUTTON */

let switchButton = document.getElementById('flexSwitchCheckDefault')
switchButton.addEventListener('change', event => {

    let con = new Connection()
    let divText = document.querySelector('label[for="flexSwitchCheckDefault"]')
    
    if (switchButton.checked){
        //console.log('checked');
        console.log(event.target.checked);
        con.addNewOption('units', 'metric') // imperial
        
        divText.innerText = 'Change to Fahrenheit'
    } else {
        console.log('unchecked');
        con.addNewOption('units', 'standart') // 
        divText.innerText = 'Change to Celcious'
    }

    let json = new JSON(con.generateApiUrl())
    json.getTemp().then(weatherTemp => {
        let divWeatherTemp = document.getElementById('temp')
        if (divWeatherTemp.length != 0 && divWeatherTemp !== undefined)
        {
            console.log('weatherTemp: ', weatherTemp)
            divWeatherTemp.innerText = weatherTemp
        } else {
            //console.log(new Error('No div (html) found'));
            throw new Error('No div (html) found')
        }
    })
    

})
