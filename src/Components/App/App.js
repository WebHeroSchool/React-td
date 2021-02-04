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
             isDone: true,
             id: 1
          },
          {
             value: 'props',
             isDone: true,
             id: 2
          },
          {
            value: 'сделать урок',
            isDone: false,
            id: 3
          }
      ],
      count: 3
    };

  onClickDone = id => {
      const newItemList = this.state.items.map(item => {
          const newItem = {...item };

          if (item.id === id) {
              newItem.isDone = !item.isDone;
          }

          return newItem;
      });
      this.setState({ items: newItemList });
  };

  onClickDelete = id => this.setState(state => ({ items: state.items.filter (item => item.id !== id)}));

  onClickAdd = value => this.setState(state => ({
      items: [
          ...state.items,
          {
              value,
              isDone: false,
              id: state.count + 1
          }
      ],
      count: state.count + 1
  }));

  render () {
      return (
          <div className={styles.wrap}>
              <Card>
                  <CardContent>
                      <h1> Список дел: </h1>
                      <InputItems onClickAdd={this.onClickAdd}/>
                      <ItemList
                          items={this.state.items}
                          onClickDone={this.onClickDone}
                          onClickDelete={this.onClickDelete}
                      />
                      <Footer />
                  </CardContent>
              </Card>
          </div>);
    }
};

export default App;
