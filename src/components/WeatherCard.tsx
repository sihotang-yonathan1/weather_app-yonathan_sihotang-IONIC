import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonImg, 
    IonItem, 
    IonRow 
} from "@ionic/react";

import "./WeatherCard.css";

export function WeatherCard({temp, description, imageUrl, city, units}: 
    {
        temp: number | null, 
        description: string | null, 
        imageUrl: string | null, 
        city: string | null,
        units: string
    }){
        return (
            <IonCard className="ion-margin-top">
                <IonCardHeader>
                    <IonCardTitle className="ion-text-capitalize ion-text-center">
                            {city}
                    </IonCardTitle>
                </IonCardHeader>
                <IonRow className="ion-justify-content-center">
                    { imageUrl && <IonImg
                        src={`https://openweathermap.org/img/wn/${imageUrl}@2x.png`}
                        className="image_container"
                    />}
                </IonRow>
                <IonCardContent className="ion-text-center">
                    <p>{description}</p>
                    <p>{temp}</p>
                </IonCardContent>
            </IonCard>
        )
}