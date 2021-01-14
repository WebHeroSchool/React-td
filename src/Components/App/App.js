import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItems from '../InputItems/InputItems';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
     const items = [
         {
            value: 'Написать новое приложение'
         },
         {
            value: 'props'
         },
         {
           value: 'сделать урок'
         }
     ];

     return (
    <div className="wrap">
        <h1> Список дел: </h1>
        <InputItems />
        <ItemList items={items} />
        <Footer count={3} />
    </div>);
}

export default App;
