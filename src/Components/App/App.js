import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItems from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import styles from './App.module.css';

const App = () => {
    const initialState = {

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

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

    useEffect( () => {
      console.log('update');
    });
    useEffect( () => {
      console.log('mount');
    }, []);

    const onClickDone = id => {
        const newItemList = items.map(item => {
            const newItem = { ...item};

          if (item.id === id) {
              newItem.isDone = !item.isDone;
          }

          return newItem;
      });

      setItems(newItemList);
     };

     const onClickDelete = (id) => {
         const newItemList = items.filter(item => item.id !==id);

         setItems(newItemList);
         setCount((count) => count - 1)
       };

       const onClickAdd = (value) => {
           const newItemList = [
               ...items,
                   {
                      value,
                      isDone: false,
                      id: count + 1
                    }
           ];
           setItems(newItemList);
           setCount((count) => count + 1)
       };

      return (
          <div className={styles.wrap}>
              <Card>
                  <CardContent>
                      <h1> Список дел: </h1>
                      <InputItems onClickAdd={onClickAdd}/>
                      <ItemList
                          items={items}
                          onClickDone={onClickDone}
                          onClickDelete={onClickDelete}
                      />
                      <Footer count={count}/>
                  </CardContent>
              </Card>
          </div>);
    };


export default App;
