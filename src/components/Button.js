import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity style ={styles.container}>
            <Text style ={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export {Button}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#82ada9',
        alignSelf: 'center',
        padding:20,
        width: Dimensions.get('window').width/2,
        borderRadius:15
    },
    text: {
        fontWeight:'bold',
        color: 'white',
        textAlign:'center'

    }

})