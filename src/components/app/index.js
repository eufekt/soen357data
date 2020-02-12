import React, { Component } from 'react';
import styles from './index.module.css';

class App extends Component {

  render() {
    return (
      <div className={styles.app}>

        <div className={styles.container}>
          <h1>Steal Your data</h1>
          <div className={styles.abstraction}>
            This project was realized by Giselle Martelle, Firas Sawan and Nichita Hariton for the purposes of ...
          </div>
          
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
          </p>

          <img className={styles.image} src="wireframe.png"/>
          <div className={styles.figureDescriptor}>
            (Figure 1) Wireframe  for steal your data
          </div>
          
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc
          </p>
          
        </div>
      </div>
    );
  }
}

export default App;
