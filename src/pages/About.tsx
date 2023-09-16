import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                    Aplikasi merupakan aplikasi pemantau situasi cuaca. Aplikasi ini
                    dibuat menggunakan Ionic Framework.
                </p>
                <p>Pengembang : Yonathan Hot Gabe Sihotang (220211060127)</p>
            </IonContent>
        </IonPage>
    )
}

export default About;