import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';


import { useState } from 'react';
import { ref, set, update, onValue, remove, child, push } from "firebase/database";
import { db } from '../components/Config';


import './Tab3.css';

const Tab3: React.FC = () => {


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
            <IonTitle size="large">Book Centre</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput value={username} onIonInput={(e: any) => setName(e.target.value)}/>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} onIonInput={(e: any) => setEmail(e.target.value)} />
          </IonItem>

          <IonButton className="ion-margin-top" onClick={createData} expand="block">
            Login
          </IonButton>
        </form>

      </IonContent>
    </IonPage>
  );

  function createData() {

    // unique ID form firebase
    const newKey = push(child(ref(db), 'contacts')).key;

    set(ref(db, 'contacts/' + username), {
      username: username,
      email: email
    }).then(() => {
      // Data saved successfully!
      alert('Your Message Sent To The Book Store!');
    })
      .catch((error) => {
        // The write failed...
        alert(error);
      });
  }

};

export default Tab3;
