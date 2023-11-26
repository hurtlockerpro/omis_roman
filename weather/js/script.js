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

    constructor(url) {
        //this.#getData(url)
        this.data = ''
    }

    getData(url){

        fetch(url).then(response => {

            return response.json()
        }).then(response => {
            this.data = response
            console.log(response);
        })
        
        

    }

    getWeather(rowSeparator = ''){

        let weatherDescription = ''
        this.data.weather.forEach(element => {
            weatherDescription += element.main + '(' + element.description + ') ' + rowSeparator 
        });
        return weatherDescription
    }

    getTemp(){
        return this.data.main.temp
    }


    getCity(){
        return this.data.name
    }

}


let con = new Connection()
let json = new JSON()
json.getData(con.generateApiUrl())
//json.getWeather()
//json.getTemp()
//json.getCity()