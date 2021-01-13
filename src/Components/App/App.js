import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItems from '../InputItems/InputItems';
import Footer from '../Footer/Footer';

const App = () => (<div>
  <h1> Список дел: </h1>
  <InputItems />
  <ItemList />
  <Footer />
</div>);

export default App;
