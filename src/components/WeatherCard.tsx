import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonImg, 
    IonItem, 
    IonRow, 
    IonText
} from "@ionic/react";

import "./WeatherCard.css";

export function WeatherCard({temp, description, imageUrl, city, units, name}: 
    {
        temp: number | null, 
        description: string | null, 
        imageUrl: string | null, 
        city: string | null,
        units: string,
        name: string | null,
    }){
        return (
            <IonCard className="ion-margin-top" color="light">
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
                    <IonText>
                        <h1>{name}</h1>
                    </IonText>
                    <IonText>
                        <h3 className="ion-text-capitalize">{description}</h3>
                    </IonText>
                    <IonText>
                        <p>{temp} {
                            units === "standard" 
                            ? "K" 
                            : units === "metric"
                                ? "C"
                                : "F"
                        }</p>
                    </IonText>
                </IonCardContent>
            </IonCard>
        )
}