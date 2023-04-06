import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

const TaskItem = ({ task, onPressDelete, onPressUpdate }) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{task}</Text>
      <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={onPressUpdate}>
          <AntDesing
            name="edit"
            color={'#D2ECFD'}
            size={25}
            style={style.buttonEdit}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={style.button} onPress={onPressDelete}>
          <AntDesing
            name="delete"
            color={'#F72D2D'}
            size={25}
            style={style.buttonDelete}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#155985',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    // backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    marginLeft: 10,
  },
  buttonDelete: {
    paddingVertical: 1,
    paddingLeft: 5,
  },
  buttonEdit: {
    paddingVertical: 1,
    paddingRight: 5,
  },
});

export default TaskItem;
