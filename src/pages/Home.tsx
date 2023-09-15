import { contrastOutline, settings, settingsOutline } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import './Home.css';
import HomeContentContainer from "../components/HomeContentContainer";
import { useContext, useEffect, useState } from "react";
import { AppConfig } from "../SettingContext";

const Home: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>('manado')
  const {setting} = useContext(AppConfig)
  
  useEffect( () => {
    console.log(selectedCity)
  }, [selectedCity])

  useEffect(() => {
    console.log(setting)
  }, [setting])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Setting page */}
          <IonButton slot="start" routerLink="/settings">
            <IonIcon icon={settingsOutline}/>
          </IonButton>
          
          {/* Header title */}
          <IonItem>
            <IonTitle className="ion-text-center ion-text-capitalize">Weather App</IonTitle>
          </IonItem>

          {/* Dark Mode Buttom */}
          <IonButton slot="end">
            <IonIcon icon={contrastOutline}/>
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="ion-padding">
        
        {/* Search Bar */}
        <IonSearchbar 
            placeholder="Cari kota disini" 
            onIonInput={
              e => setSelectedCity(e?.target?.value || "manado")
            }
            debounce={500}
            color="medium"
          />
        
        <HomeContentContainer city={selectedCity} setting={setting}/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
