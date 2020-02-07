import React, { Component } from 'react';
import { StyleSheet, TextInput, Image, View, Button, FlatList, TouchableOpacity } from 'react-native';
import ListItem from './components/listItem'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      inputVisible: 'none',
      // data: [],
      data:  [{
        id: "1",
        title: "Do some yoga",
        completed: null
      },
      {
        id: "2",
        title: "Stream flights",
        completed: null
      },
      {
        id: "3",
        title: "Chimney sweep",
        completed: '1'
      }]
    };
  }

  addNewItem = () => {
    // alert('yeah!');
    this.setState({
      inputVisible: 'flex'
    })
    this.refs.newItem.focus();
  }

  createNewItem = () => {
    let newItem = [{
      id: Date.now(),
      title: this.state.text,
      completed: null
    }]
    this.setState(previousState => ({
      data: newItem.concat(this.state.data),
      text: '',
      inputVisible: 'none'
    }));
  }

  completeItem = (id) => {
    // const arr = []
    // const data = this.state.data
    // for (const item of data) {
    //   console.log(item.id);
    //   item.id != id ? arr.push(item) : null
    // }
    // console.log(arr);
    const arr = []
    const data = this.state.data
    for (const item of data) {
      if (item.id == id) {
        // the one we need to modify, check if it's completed already
        item.completed === "1" ? item.completed = null : item.completed = "1"
        arr.push(item)
      } else {
        // leave as is
        arr.push(item)
      }
    }
    this.setState({data: arr})
  }

  render() {
    return (
        <View style={styles.container}>

          <TextInput
            ref="newItem"
            style={[styles.input, {display: this.state.inputVisible}]}
            placeholder="..."
            onChangeText={(text) => this.setState({text})}
            onBlur={this.createNewItem}
            value={this.state.text}
          />

          <FlatList
            style={styles.list}
            data={this.state.data}
            renderItem={({ item }) => <ListItem item={item} completeItem={this.completeItem} />}
            keyExtractor={item => item.id}
          />
          <View style={styles.keyContainer}>
            <TouchableOpacity onPress={this.addNewItem}>
              <Image
                style={styles.keyButton}
                source={require('./assets/key_button.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingBottom: 40,
  },
  input: {
    height: 60,
    backgroundColor: 'coral',
    fontSize: 24,
    paddingLeft: 16
  },
  list: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  keyContainer: {
    height: 100,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  keyButton: {
    // justifyContent: 'center',
    // alignItems: 'center'
  }
});
