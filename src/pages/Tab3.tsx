import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book Centre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Book Centre</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type='email' />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Store</IonLabel>
            <IonInput type='email' disabled/>
          </IonItem>

          <IonItem>
              <IonLabel position="floating">Store</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>MPH</IonLabel>
              </IonItem>

              <IonItem>
              <IonLabel position="floating">Store</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Kinokuniya</IonLabel>
              </IonItem>

              <IonItem>
              <IonLabel position="floating">Store</IonLabel>
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Popular</IonLabel>
              </IonItem>

          <IonItem>
            <IonLabel position="floating">Message</IonLabel>
            <IonInput type="text" />
          </IonItem>

          {/* <IonItem lines="none">
            <IonLabel>Remember me</IonLabel>
            <IonCheckbox defaultChecked={true} slot="start" />
          </IonItem> */}

          <IonButton className="ion-margin-top" type="submit" expand="block">
            Send
          </IonButton>
        </form>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
