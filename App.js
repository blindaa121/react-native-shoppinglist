import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/header';
import ListItem from './components/listitem'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AddItem from './components/AddItem'
// Icon.loadFont();
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Turkey'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id)
    })
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text},...prevItems];
      });
    }
   
  }

  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem  addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />} />
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/> */}
    </View>
  )
};

Header.defaultProps = {
  title: 'Shopping List'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: 'darkslateblue',
//     fontSize: 35
//   },
//   img: {
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2
//   }
// });

export default App;