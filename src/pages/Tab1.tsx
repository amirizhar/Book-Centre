import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// Import Book Categories Icon
import business from './images/Business.png';
import kids from './images/Kids.jpg';
import comic from './images/Comics.png';

import novel from './images/novels.png';
import family from './images/family.jpeg';
import language from './images/language.jpeg';

import religion from './images/Religion.png';
import computer from './images/ComputerAndTech.jpg';
import art from './images/ArtsAndMusic.png';

import history from './images/History.png';
import health from './images/HealthAndFitness.png';
import sport from './images/Sport.png';

import hobbies from './images/hobbies.png';
import socialScience from './images/socialScience.png';
import science from './images/science.png';

import food from './images/food.png';
import selfEnrichment from './images/self-enrichment.png';
import localStudy from './images/localStudy.png';


// import cooking from './images/Cooking.jpg';
// import medical from './images/Medical.png';
// import selfhelp from './images/SelfHelp.jpg';

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

          {/* ------------------------------Row 1------------------------------------ */}

          <div className="row">
            <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
              <p><a type="text">
              <img src={business} alt="Business & Economics"/></a></p>
              <p style={{textAlign: 'center', fontSize:10}}><b>Business & Economics</b></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
              <p><a type="text">
              <img src={kids} alt="Children"/></a></p>
              <p style={{textAlign: 'center', fontSize:10}}><b>Childrens</b></p>
            </div>

            <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
              <p><a type="text">
              <img src={comic} alt="Comics"/></a></p>
              <p style={{textAlign: 'center', fontSize:10}}><b>Comic & Graphics</b></p>
            </div>
          </div>

            {/* ------------------------------Row 2------------------------------------ */}

            <div className="row">
              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={novel} alt="Novels"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Novels</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={family} alt="Family & Relationships"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Family & Relationships</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={language} alt="Language"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Language</b></p>
              </div>
            </div>

            {/* ------------------------------Row 3------------------------------------ */}

            <div className="row">
              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={religion} alt="Religion"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Religion</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={computer} alt="Computer & Internet"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Computer & Internet</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={art} alt="Arts"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Design & Arts</b></p>
              </div>
            </div>

            {/* ------------------------------Row 4------------------------------------ */}

            <div className="row">
              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={history} alt="History & Politics"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>History & Politics</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={health} alt="Health & Well-being"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Health & Well-being</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={sport} alt="Sport"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Sport</b></p>
              </div>
            </div>

            {/* ------------------------------Row 5------------------------------------ */}

            <div className="row">
              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={hobbies} alt="Hobbies & Collectibles"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Hobbies & Collectibles</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={socialScience} alt="Social Science"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Social Science</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={science} alt="Science"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Science</b></p>
              </div>
            </div>

            {/* ------------------------------Row 6------------------------------------ */}

            <div className="row">
              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={food} alt="Food & Drink"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Food & Drink</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={selfEnrichment} alt="Self-Enrichment"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Self-Enrichment</b></p>
              </div>

              <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
                <p><a type="text">
                <img src={localStudy} alt="Local Study"/></a></p>
                <p style={{textAlign: 'center', fontSize:10}}><b>Local Study</b></p>
              </div>
            </div>

          </div>
        {/* <ExploreContainer name="Books" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
