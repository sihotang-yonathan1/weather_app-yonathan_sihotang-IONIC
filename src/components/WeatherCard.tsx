import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

export function WeatherCard({temp, description, imageUrl, city}: 
    {temp: number, description: string, imageUrl: string, city: string}){
        return (
            <IonCard className="ion-margin-top">
                <IonCardHeader>
                    <IonCardTitle className="ion-text-capitalize ion-text-center">
                            {city}
                    </IonCardTitle>
                </IonCardHeader>
                <div>
                    <p>{imageUrl}</p>
                </div>
                <IonCardContent className="ion-text-center">
                    <p>{description}</p>
                    <p>{temp}</p>
                </IonCardContent>
            </IonCard>
        )
}