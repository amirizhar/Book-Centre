import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import header from './images/book1.jpeg';

const Tab3: React.FC = () => {
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
        {/* <ExploreContainer name="Tab 4 page" /> */}
        <img src={header} alt="header"/>
        <p><b>About The App</b></p>
        <p style={{textAlign: 'justify', margin: 25,}}>The best thing that will happen to a book worm or people who rely on books in their daily life is when they can get the correct information of books easily. With current book searching system that available on internet, sometimes it is hard for users to get information of a book due to incomplete information provided by the website.
        {'\n'}
        With the Online Book Centre, almost all information will be provided such as the book title, author name, summary of content and other information. Besides that, current available system on internet is also lack of interface design and not user friendly which somehow makes users feel not attracted to that website.
        In short, the purpose of this website is to create a better book searching system that has an attractive interface design which will facilitate users to obtain their requirements accordingly.
        </p>
        <p><b>App Version: </b></p>

        <p><b>Developer: </b></p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
