import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton defaultHref="/home"/>
            </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        <IonInput
            label="API KEY" 
            labelPlacement="stacked"
            fill="outline"
            disabled={true}
            className="ion-margin-bottom"
        />
        <IonSelect label="Language" className="ion-margin-top ion-margin-bottom">
            <IonSelectOption value="id">id</IonSelectOption>
        </IonSelect>

        {/* ref: https://openweathermap.org/weather-data#with_units */}
        <IonSelect label="Metric" className="ion-margin-top ion-margin-bottom">
            <IonSelectOption value="standard">Standard</IonSelectOption>
            <IonSelectOption value="metric">Metric</IonSelectOption>
            <IonSelectOption value="imperial">Imperial</IonSelectOption>
        </IonSelect>

        <IonRow className="ion-justify-content-center">
            <IonButton className="ion-justify-content-center">
                <p>Save</p>
            </IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
