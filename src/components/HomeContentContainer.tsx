import { useContext, useEffect, useState } from "react"
import { WeatherCard } from "./WeatherCard"
import { AppConfig } from "../SettingContext"

// TODO: set api as secret
const apiInfo = {
    'apiKey': 'd0803559f03dafe4ee9b2515f4dc8c21',
}

type SettingType = {
    'language': string,
    'apiKey': string,
    'metric': string
}

// TODO: de-coupling this function from UI file
async function getCityPosition({city, setting}: {city: string | null, setting: SettingType}){
    // retrieve data from Geocoder API
    if (city !== null){
        let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${setting?.apiKey}`) || []
        const json_response = await response.json()
        return json_response
    }
    return [];
}

async function getCurrentWeather({latitude, longitude, setting}: 
    {latitude: number | null, longitude: number | null, setting: SettingType}){
    // retrieve data from current weather API
    if (latitude && longitude){
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${setting.apiKey}&units=${setting.metric}&lang=${setting.language}`)
        let json_data = await response.json()
        console.log(json_data)
        return json_data
    }
}


export default function HomeContentContainer({city, setting}: {city: string | null, setting: SettingType}){
    const [weatherApiInfo, setWeatherApiInfo] = useState<{
        'city': string | null,
        'latitude': number | null,
        'longitude': number | null,
        'temp': number | null,
        'weather': {
            'id': number | null,
            'main': string | null,
            'description': string | null,
            'icon': string | null
        }

    }>({
        'city': null,
        'latitude': null,
        'longitude': null,
        'temp': null,
        'weather': {
            'id': null,
            'main': null,
            'description': null,
            'icon': null
        }
    })

    useEffect(() => {
        console.log(`city selected: ${city}`)
        const dataFetching = async () =>{
            const city_location = await getCityPosition({city: city, setting: setting})
            const weather_info_data = await getCurrentWeather({
                latitude: city_location?.[0]?.lat,
                longitude: city_location?.[0]?.lon,
                setting: setting
            })
            
            setWeatherApiInfo({
                'city': city_location?.[0]?.name,
                'latitude': city_location?.[0]?.lat,
                'longitude': city_location?.[0]?.lon,
                'temp': weather_info_data?.main?.temp,
                'weather': weather_info_data?.weather?.[0]
            })
        }
        dataFetching()
    }, [city, setting])

    useEffect(() => {
        console.log(weatherApiInfo)
    }, [weatherApiInfo])

    return (
        <div>
            {/* Dummy Data */}
            <WeatherCard 
                temp={weatherApiInfo?.temp} 
                imageUrl={`https://openweathermap.org/img/wn/${weatherApiInfo?.weather?.icon}@2x.png`} 
                description={weatherApiInfo?.weather?.description} 
                city={weatherApiInfo?.city} 
                units={setting.metric}
            />
        </div>
    )
}