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
            </p>
            <p className={styles.paragraph}>
            The second task was for us to determine the simplest possible way for such an app to operate and exist. We began our research by studying the design of various e-commerce applications widely available to the public. Such apps included the likes of Shopify, SquareSpace, 3dcart etc. which gave us an idea for the general layout for our application. Furthermore, this research gave us some insight into the main features that users enjoy when operating an ecommerce application. Such features include having a wallet directly in the app or the ability to use third party payment services such as PayPal or Apple Pay. In-app wallets are attractive to users, and in some cases can also influence their decisions concerning purchases.
            </p>
            <p className={styles.paragraph}>
            Another place from which we drew inspiration was the user experience typical of most trading applications. These applications tend to give a detailed breakdown of the history of a particular stock, and they show statistics and graphs that provide the user with visuals that are important for the user to feel as if they are up to date and educated on how their assets are doing. We thought that such graphs and statistics could help our users understand exactly what, when, where and by whom their data is being used and give them the opportunity to control what they share.  
            </p>
            <p className={styles.paragraph}> 
            Finally, concerning our choice of the color palette for our app, it was crucial that we perform research on colors associated with trust and positive energy. Such a decision to go with color that exude these qualities was imperative since the main goal of our app is to provide our users with a feeling of safety and control. Thus, our choice of using a yellow color palette was carefully and specifically made with the aim to design a safe space where our users can ensure that their data is only being used with their discretion and according to their tailored specifications. 
            </p>
          </div>

          <div className={styles.section}>
            <h2>User Personas</h2>
            <p className={styles.paragraph}>
            When designing FreeYourData, it was crucial to not overlook the importance of brainstorming potential users of the application. For the purposes of our prototype design, we thought it would be most appropriate to present two unique user personas, which we feel represent the different needs that the app will need to address. To start, we created the persona of Samantha Fraser, who we feel will represent a very large portion of FreeYourData's users – young, tech savvy individuals within the 18-35 age range looking for more transparency and new means of earning income. Samantha, like many other young users, enjoys simplistic and intuitive user experiences, more control over her personal data, and wants access to innovative ways of managing her various online accounts. 
            </p>

            <img className={styles.persona} src="samantha.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 1) User Persona: Samantha Fraser
            </div>
            <p className={styles.paragraph}>
            Next, we introduce the persona of Joe Hampton. We feel Joe represents the opposite spectrum of user when compared with Samantha. Joe is a baby-boomer, who is less adept to new technologies, and more resistant to change. However, Joe is very concerned with privacy and having full transparency and control over his online data. Unlike Samantha, Joe has less trust in many popular online platforms, and we hope that the design of FreeYourData will entice users like Joe to become more engaged and active users by offering a sense of security and online transparency. Joe further reinforces the need to have a simplistic and intuitive user interface, so that users of all sorts of backgrounds can easily adapt to using FreeYourData.  
            </p>
            <img className={styles.persona} src="joe.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 2) User Persona: Joe Hampton
            </div>
          </div>

          <div className={styles.section}>
          <h2>User Flow Chart</h2>

            <p className={styles.paragraph}>
            We wanted FreeYourData to make the user experience as seamless and intuitive as possible. To start, we created a user flow chart to map the various actions a user of the app may take. When the user first opens the app, they will be greeted by a Welcome screen. If the user has already used the application before on their device, a login form will appear on the welcome screen. If the app is newly added to the device, the user will be shown a registration form.
            </p>
 
            <p className={styles.paragraph}>
            Once the user has logged in, they will be taken to the Dashboard view, where they can select one of the following options: Subscriptions, Profile, or Wallet. The Subscription option when selected will bring the user to a new view, where they can view accounts of companies that they have already synched with the app. For example, if a user has synched their Google account with FreeYourData, they will be able to view their subscription. Each subscription is associated with a module, which controls and stores all the metadata of the subscription as well as the user’s associated personal data to the subscription, which the user will be able to view inside the Profile of their account in FreeYourData. The user will also be able to browse from a list of available platforms, where they will have the option to add new subscriptions to their FreeYourData account. 
            </p>

            <img className={styles.image} src="user-flowchart.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 3) User Flowchart
            </div>

            <p className={styles.paragraph}>
            In the Profile view, the user will be able to access and view all personal data statistics associated with each account that exists in the Subscriptions view. They will also be able to control what data each subscription has permission to use, and may negotiate the asking price for their personal data tied to that particular subscription. They will be able to also edit and view their personal information associated with their FreeYourData account, such as their name, contact information, login, and password.
            </p>
            <p className={styles.paragraph}> 
            Lastly, in the Wallet view, the user will be able to view how much compensation they currently have accumulated from each subscription on their account. They will have the option to redeem earnings from their personal data either through PayPal, Apple Pay, or Google Wallet.  The user will be able to navigate back to the dashboard view at any point while using the app.  
            </p>
          </div>

          <div className={styles.section}>
            <h2>Sketches</h2>
            <img className={styles.image} src="sketches.png"/>
            <div className={styles.figureDescriptor}>
              (Figure 4) Sketches of FreeYourData
            </div>
          </div>

          <div className={styles.section}>
            <h2>Wireframes</h2>
            <p className={styles.paragraph}> 
            text here
            </p>
            <img className={styles.image} src="wireframe.png"/>
          </div>

          <div className={styles.section}>
            <h2>Storyboard</h2>
            <p className={styles.paragraph}> 
            text here
            </p>
            <img className={styles.image} src="storyboard.png"/>
          </div>

          <div className={styles.section}>
            <h2>Mock and Interactive Prototype</h2>
            <p className={styles.paragraph}> 
            text here
            </p>
            <img className={styles.image} src="mocks.png"/>
          </div>

          <div className={styles.section}>
            <h2>Conclusion</h2>
            <p className={styles.paragraph}>
              text here 
            </p>
          </div>

          <div className={styles.section}>
            <h2>References</h2>
            <p className={styles.paragraph}>
              text here 
            </p>
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
