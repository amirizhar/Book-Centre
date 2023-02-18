import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { onValue, ref, set } from 'firebase/database';
import { useState } from 'react';
import { db } from '../components/Config';
import './Tab2.css';

const Tab2: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [store, setStore] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');

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
            <IonCol>
            <form className="ion-padding">
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput value={name} onIonInput={(e: any) => setName(e.target.value)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" value={email} onIonInput={(e: any) => setEmail(e.target.value)} />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Bookstore</IonLabel>
            <IonInput type="text" value={store} onIonInput={(e: any) => setStore(e.target.value)} />

            {/* <IonSelect onInput={(e: any) => setStore(e.target.value)}>
              <IonSelectOption value='MPH' onInput={(e: any) => setStore(e.target.value)}>MPH</IonSelectOption>
              <IonSelectOption value='Kinokuniya' onInput={(e: any) => setStore(e.target.value)}>Kinokuniya</IonSelectOption>
              <IonSelectOption value='Popular' >Popular</IonSelectOption>
            </IonSelect> */}
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Message</IonLabel>
            <IonTextarea value={message} onIonInput={(e: any) => setMessage(e.target.value)} placeholder="Message to the bookstore"></IonTextarea>
            {/* <IonInput type="text" value={message} onIonInput={(e: any) => setMessage(e.target.value)} /> */}
          </IonItem>

          <IonItem hidden>
            <IonLabel position="floating">Date</IonLabel>
            <IonInput type="text" value={date} onIonInput={(e: any) => setDate(e.target.value)} />
          </IonItem>

          <IonButton className="ion-margin-top" onClick={readData} expand="block">
            Get Data
          </IonButton>
        </form>
            </IonCol>
            {/* <IonCol>2</IonCol>
            <IonCol>3</IonCol> */}
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );

  function readData() {
    const starCountRef = ref(db, 'contacts/' + name);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEmail(data.email);   
      setStore(data.store);  
      setMessage(data.message);  
    });
  }

};

export default Tab2;
