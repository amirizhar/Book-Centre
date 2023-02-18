import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonNote, IonPage, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { text } from 'ionicons/icons';
import { useState } from 'react';
import { ref, set, update, onValue, remove, child, push } from "firebase/database";
import { db } from '../components/Config';
import './Tab3.css';

const Tab3: React.FC = () => {

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
            <IonTitle size="large">Book Centre</IonTitle>
          </IonToolbar>
        </IonHeader>

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

          <IonButton className="ion-margin-top" onClick={createData} expand="block">
            Send
          </IonButton>
        </form>

        {/* <p><b>Email: </b></p>
        <p><b>MPH:</b> mph@app.com</p>
        <hr></hr>
        <p><b>Kinokuniya:</b> kinokuniya@app.com</p>
        <hr></hr>
        <p><b>Popular:</b> Popular@app.com</p> */}

      </IonContent>
    </IonPage>
  );

  function createData() {

    // unique ID form firebase
    // const newKey = push(child(ref(db), 'contacts')).key;

    set(ref(db, 'contacts/' + name), {
      name: name,
      email: email,
      store: store,
      message: message,
      datetime: Date().toLocaleString()
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
