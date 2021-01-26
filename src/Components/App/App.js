import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItems from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './App.module.css';

class App extends React.Component {
    state = {
      items: [
          {
             value: 'Написать новое приложение',
             isDone: true
          },
          {
             value: 'props',
             isDone: true
          },
          {
            value: 'сделать урок',
            isDone: false
          }
      ]
    };

  onClickDone = isDone => console.log(isDone);
    
  render () {
      return (
          <div className={styles.wrap}>
              <Card>
                  <CardContent>
                      <h1> Список дел: </h1>
                      <InputItems />
                      <ItemList items={this.state.items} onClickDone={this.onClickDone}/>
                      <Footer count={3} />
                  </CardContent>
              </Card>
          </div>);
    }
};

export default App;
