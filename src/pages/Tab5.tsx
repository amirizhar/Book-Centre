import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';

import './Tab5.css';

const Tab5: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(){
        console.log(username, password)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Book Centre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonHeader collapse="condense">
          <IonToolbar style={{align: "center"}}>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

            <IonInput 
            placeholder="Username?" 
            onIonChange= {(a: any) => setUsername(a.target.value)} 
            />

            <IonInput 
            type='password'
            placeholder="Password?"
            onIonChange= {(e: any) => setPassword(e.target.value)}
            />
            <IonButton onClick={loginUser}>Login</IonButton>
            <IonButton href="/Register">Register</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
