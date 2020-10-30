import React,{useState} from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [items, setItems ] = useState([
    {
      id: uuidv4(),
      text: 'Milk',
    },
    {
      id: uuidv4(),
      text: 'Eggs',
    },
    {
      id: uuidv4(),
      text: 'Bread',
    },
    {
      id: uuidv4(),
      text: 'Juice',
    },
  ]);


  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
    <Header title="Shopping List"/>
    <FlatList data={items}
    renderItem={({item}) => (
      <ListItem item={item} deleteItem={deleteItem}/>
        
      
    )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
 
  },
 
});

export default App;