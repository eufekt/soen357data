import React, { Component } from 'react';
import styles from './index.module.css';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>

        <div className={styles.logo}>
          <img src="logo.svg"/>
          <span>FreeYourData</span>
        </div>

        <div className={styles.navbar}>
          <h4>
            Dezignz
          </h4>
        </div>

        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Case Study: UX/UI Design of a Personal Data Marketplace</h1>
          <div className={styles.abstraction}>
            Giselle Martel, Firas Sawan and Nichita Hariton
          </div>
        </div>

       
        <div className={styles.container}>
      
          
          <div className={styles.section}>
            <h2>Introduction</h2>
            <p className={styles.paragraph}>
              At Dezignz, we are constantly on the lookout for new challenges and innovative products that require visionary and creative design. So when we were approached by FreeYourData and their idea for a new personal data marketplace, we had no choice but to accept their offer to design the application from start to finish. FreeYourData is a company that wishes to liberate users of modern technology, by offering them a means of controlling their own personal data, rather than trusting the management of such data with tech giants such as Google, Facebook, Uber, and the like. Data such as fitness tracking information, smartphone data, GPS location, and IoT use are among many categories of personal data that FreeYourData will allow you to have complete ownership over, and give you the power to sell your data to whom you chose. 
            </p>
          </div>

          <div className={styles.section}>
            <h2>Understanding the Problem</h2>
            <p className={styles.paragraph}>
            FreeYourData will be essentially a cross-platform mobile app, and the idea is for it to be a marketplace where you can track, monitor, sell, and negotiate what is done with your personal information. Our team felt the best approach would be to take inspiration for the user interface from well-established and beautifully designed e-commerce applications already on the market today. The biggest challenge with this project is finding an elegant way to organize and display personal data spanning across possibly hundreds of different platforms. For example, a typical internet user would have accounts with multiple platforms such as Instagram, Google, Microsoft, Apple, Facebook, Uber, Linkedin, Spotify, among others. To take on such an obstacle, we conducted some research which revealed that a subscription-based approach, where the user can sync a given account from a certain platform on demand, would be most ideal.
            </p>
          </div>

          <div className={styles.section}>
            <h2>Research Methods</h2>
            <p className={styles.paragraph}>
              The first and most important task we wanted to tackle was to establish the interest or need for such a service. We wanted to make sure that the everyday online user is in fact concerned about the various ways their data is being collected and used. Our aim was to test if there is enough interest for users to control their own data and earn money while doing so. We began by conducting a short survey via Google forms from which we were able to obtain data showing that about 92% of people are indeed concerned about how their every day data is being used. This survey also revealed that 92% of respondents would like to have more control and receive compensation for their role in the success of the tech industry and their marketing strategies. Answers collected through the survey conveyed that most people are specifically interested in having access to a subscription based mobile application that would allow them to see and control exactly what data is being used and collected with respect to their individual online presence and interests. 
              The second task was for us to determine the simplest possible way for such an app to operate and exist. We began our research by studying the design of various e-commerce applications widely available to the public. Such apps included the likes of Shopify, SquareSpace, 3dcart etc. which gave us an idea for the general layout for our application. Furthermore, this research gave us some insight into the main features that users enjoy when operating an ecommerce application. Such features include having a wallet directly in the app or the ability to use third party payment services such as PayPal or Apple Pay. In-app wallets are attractive to users, and in some cases can also influence their decisions concerning purchases. 
              Another place from which we drew inspiration was the user experience typical of most trading applications. These applications tend to give a detailed breakdown of the history of a particular stock, and they show statistics and graphs that provide the user with visuals that are important for the user to feel as if they are up to date and educated on how their assets are doing. We thought that such graphs and statistics could help our users understand exactly what, when, where and by whom their data is being used and give them the opportunity to control what they share.  
              Finally, concerning our choice of the color palette for our app, it was crucial that we perform research on colors associated with trust and positive energy. Such a decision to go with color that exude these qualities was imperative since the main goal of our app is to provide our users with a feeling of safety and control. Thus, our choice of using a yellow color palette was carefully and specifically made with the aim to design a safe space where our users can ensure that their data is only being used with their discretion and according to their tailored specifications. 
            </p>
          </div>

          <div className={styles.section}>
            <h2>User Personas</h2>
            <p className={styles.paragraph}>
            
            </p>

            <img className={styles.image} src="wireframe.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 1) User Persona: Samantha Fraser
            </div>
          </div>

          <div className={styles.section}>
            <img className={styles.image} src="wireframe.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 1) Wireframe  for steal your data
            </div>
          </div>
      
          
          <div className={styles.abstraction} >
            *Disclaimer: This was realized as project in UI/UX research for the Concordia Undergraduate course SOEN 357.
          </div>

        </div>
      </div>
    );
  }
}

export default App;
