import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItems from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
     const items = [
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
     ];

     return (
    <div className={styles.wrap}>
        <h1> Список дел: </h1>
        <InputItems />
        <ItemList items={items} />
        <Footer count={3} />
    </div>);
}

export default App;
