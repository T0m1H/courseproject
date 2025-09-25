import {
  IonApp,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuToggle,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonApp>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Valikko</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonListHeader>Siirry sivulle</IonListHeader>
            <IonMenuToggle>
              <IonItem routerLink="/service" routerDirection="forward">
                <IonLabel>Service</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mobiilisovellus</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 1 page" />
        </IonContent>
      </IonPage>
    </IonApp> 
  );
};

export default Tab1;

