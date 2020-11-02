import React from 'react';
import { StyleSheet, TextInput, View, Platform } from 'react-native';

const Input = ({holder}) => {
    return(
        <View style = {styles.container}>
            <TextInput
            placeholder={holder}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eceff1',
        padding: Platform.OS == "android" ? 5 : 15,
        margin:10,
        borderRadius:10,
        marginVertical:15

    }
})

export {Input}