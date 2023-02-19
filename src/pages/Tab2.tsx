import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonSearchbar, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
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

  function readData() {
    const starCountRef = ref(db, 'contacts/' + name);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setEmail(data.email);
      setStore(data.store);
      setMessage(data.message);
      setDate(data.datetime);
    });
  }

  // Display all data from database

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

        <IonToolbar>
          <form>
            <IonSearchbar value={name} onIonInput={(e: any) => setName(e.target.value)} placeholder="ISBN or Book Name">
              <IonButton onClick={readData} expand="block">
                Search
              </IonButton>
            </IonSearchbar>
          </form>
        </IonToolbar>

        <IonGrid>
          <IonRow>
            <IonCol>
              <p>{email}</p>
              <p>{store}</p>
              <p>{message}</p>
              <p>{name}</p>
              <p>{date}</p>
            </IonCol>

            <IonCol>
              <p>{email}</p>
              <p>{store}</p>
              <p>{message}</p>
              <p>{name}</p>
              <p>{date}</p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <p>{email}</p>
              <p>{store}</p>
              <p>{message}</p>
              <p>{name}</p>
              <p>{date}</p>
            </IonCol>

            <IonCol>
              <p>{email}</p>
              <p>{store}</p>
              <p>{message}</p>
              <p>{name}</p>
              <p>{date}</p>
            </IonCol>
          </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage >
  );

};

export default Tab2;
