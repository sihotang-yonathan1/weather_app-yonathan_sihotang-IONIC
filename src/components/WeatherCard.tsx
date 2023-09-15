import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle, 
    IonImg, 
    IonItem, 
    IonRow 
} from "@ionic/react";

export function WeatherCard({temp, description, imageUrl, city, units}: 
    {
        temp: number | null, 
        description: string | null, 
        imageUrl: string, 
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
                    <IonImg
                        src={imageUrl}
                    />
                </IonRow>
                <IonCardContent className="ion-text-center">
                    <p>{description}</p>
                    <p>{temp}</p>
                </IonCardContent>
            </IonCard>
        )
}