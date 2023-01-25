import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// Import Book Categories Icon
import comic from './images/Comics.png';
import business from './images/Business.png';
import cooking from './images/Cooking.jpg';
import kids from './images/Kids.jpg';
import medical from './images/Medical.png';
import selfhelp from './images/SelfHelp.jpg';

const Tab1: React.FC = () => {
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
            <IonTitle size="large">Book Centre</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="container">
          <div className="row">
            <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
            <p><a type="text">
            <img src={comic} alt="Comics"/></a></p>
            <p style={{textAlign: 'center', margin: 25, fontSize:10}}><b>COMICS</b></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={kids} alt="Comics"/></a></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={medical} alt="Comics"/></a></p>
            </div>


            <div className="row">
            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={selfhelp} alt="Comics"/></a></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
            <p><a type="text">
            <img src={comic} alt="Comics"/></a></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={business} alt="Business"/></a></p>
              <p style={{textAlign: 'center', margin: 25, fontSize:10}}><b>BUSINESS</b></p>
            </div>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={cooking} alt="Cooking"/></a></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20}}>
              <p><a type="text">
              <img src={comic} alt="Comics"/></a></p>
            </div>
          </div>
        </div>

        
        {/* <ExploreContainer name="Books" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
