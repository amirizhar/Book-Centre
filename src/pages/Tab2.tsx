import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { onValue, ref, set } from 'firebase/database';
import { useState } from 'react';
import { db } from '../components/Config';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');

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
            <IonTitle size="large">Books</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 2 page" /> */}

        <IonGrid>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );

  // function readData() {
  //   const starCountRef = ref(db, 'books/' + 8);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setEmail(data.email);   
  //   });
  // }

};

export default Tab2;
