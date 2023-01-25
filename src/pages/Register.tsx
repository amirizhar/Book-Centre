import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')

    function RegisterUser(){
        console.log(username, password, cpassword)
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
            <IonTitle size="large">Registration</IonTitle>
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

            <IonInput 
            type='password'
            placeholder="Comfirm Password?"
            onIonChange= {(e: any) => setCPassword(e.target.value)}
            />

            <IonButton onClick={RegisterUser}>Register</IonButton>

            <p>
                Already have an account?<Link to ="/Login">Login</Link>
            </p>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Register;
