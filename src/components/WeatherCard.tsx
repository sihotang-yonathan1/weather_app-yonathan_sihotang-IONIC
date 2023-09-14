import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

export function WeatherCard({temp, description, imageUrl, city}: 
    {temp: number, description: string, imageUrl: string, city: string}){
        return (
            <IonCard className="ion-margin-top">
                <IonCardHeader>
                    <IonCardTitle className="ion-text-capitalize">{city}</IonCardTitle>
                </IonCardHeader>
                <p>{imageUrl}</p>
                <IonCardContent>
                    <p>Suhu: {temp}</p>
                    <p>{description}</p>
                </IonCardContent>
            </IonCard>
        )
}