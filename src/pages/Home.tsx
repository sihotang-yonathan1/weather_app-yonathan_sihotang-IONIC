import { contrastOutline, settingsOutline } from "ionicons/icons";
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

const Home: React.FC = () => {
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
        <IonSearchbar placeholder="Cari kota disini"/>
        
        {/* City Selection */}
        {/* TODO: set the option automatic based on available city */}
        <IonSelect label="Kota" value="manado">
          <IonSelectOption value="manado" className="ion-text-capitalize">Manado</IonSelectOption>
        </IonSelect>
        <HomeContentContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
