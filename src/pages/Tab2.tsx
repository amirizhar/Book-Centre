import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

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

import textbooks from './images/textbook.png';
import languageExam from './images/languageExam.jpeg';
import internationalExam from './images/internationalExam.jpeg';

import fiction from './images/fiction.png';
import nonFiction from './images/non-fiction.png';
import chineseBook from './images/chineseBook.png';

import japaneseBook from './images/japaneseBook.png';
import lifestyle from './images/lifestyle.png';
import others from './images/others.png';

const Tab2: React.FC = () => {
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

  {/* ------------------------------Row 7------------------------------------ */}

  <div className="row">
    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={textbooks} alt="Textbooks"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Textbooks</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={languageExam} alt="Language Exam"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Language Exam</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={internationalExam} alt="International Exam"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>International Exam</b></p>
    </div>
  </div>

  {/* ------------------------------Row 8------------------------------------ */}

  <div className="row">
    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={fiction} alt="Fiction"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Fiction</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={nonFiction} alt="Non-Fiction"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Non-Fiction</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={chineseBook} alt="Chinese Books"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Chinese Books</b></p>
    </div>
  </div>

  {/* ------------------------------Row 9------------------------------------ */}

  <div className="row">
    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={japaneseBook} alt="Japanese Books"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Japanese Books</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={lifestyle} alt="Lifestyle"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Lifestyle</b></p>
    </div>

    <div className="column" style={{textAlign: 'justify', margin: 20, justifyContent: 'center'}}>
      <p><a type="text">
      <img src={others} alt="Others"/></a></p>
      <p style={{textAlign: 'center', fontSize:10}}><b>Others</b></p>
    </div>
  </div>

</div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
