import { WeatherCard } from "./WeatherCard"

// TODO: de-coupling this function from UI file
async function getCityPosition({city}: {city: string}){
    // retrieve data from Geocoder API
    let response = await fetch(``)
    return await response.json()
}

async function getCurrentWeather({latitude, longitude}: {latitude: number, longitude: number}){
    // retrieve data from current weather API
}

async function getWeatherDetail({weather_id}: {weather_id: number}){
    // retrieve data from weather API
}

export default function HomeContentContainer(){
    return (
        <div>
            {/* Dummy Data */}
            <WeatherCard temp={30} imageUrl="uri" description="desc" city="manado" />
        </div>
    )
}