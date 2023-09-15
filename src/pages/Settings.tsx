import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect } from 'react';
import { AppConfig } from '../SettingContext';

const Settings: React.FC = () => {
  const {setting, setSettings} = useContext(AppConfig)
  
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
            // disabled={true}
            className="ion-margin-bottom"
            onIonChange={e => {
              setSettings({
                ...setting,
                'apiKey': e.target.value
              })
            }}
            value={setting?.apiKey}
            required={true}
        />
        <IonSelect label="Language" className="ion-margin-top ion-margin-bottom" value={setting?.language} onIonChange={e => setSettings({
            ...setting,
            'language': e.target.value
          })}
          fill="solid"
        >
            <IonSelectOption value="en">en</IonSelectOption>
            <IonSelectOption value="id">id</IonSelectOption>
        </IonSelect>

        {/* ref: https://openweathermap.org/weather-data#with_units */}
        <IonSelect label="Metric" className="ion-margin-top ion-margin-bottom" value={setting?.metric} onIonChange={
          e => setSettings({
            ...setting,
            'metric': e.target.value
          })
        }
          fill="solid"
        >
            <IonSelectOption value="standard">Standard</IonSelectOption>
            <IonSelectOption value="metric">Metric</IonSelectOption>
            <IonSelectOption value="imperial">Imperial</IonSelectOption>
        </IonSelect>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
