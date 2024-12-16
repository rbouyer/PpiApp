import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      input: {
        width: '100%',
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#fff',
      },
      text: {
        flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow', height: 30
      },
      label: {
        flex: 1, fontSize: 16, padding: 5
      },
      textResult: {
        flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow', height: 35, padding: 5 
      },
      pickerResult: {
        flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow', height: 50, padding: 10 
      },
      inputRow: {
        flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' 
      },
      textInput: {
        flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5, marginHorizontal: 5, backgroundColor: 'white'
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      picker: {
        flex: 1, 
        fontSize: 16,
        backgroundColor: 'blue',
        color: 'white',
        paddingRight: 10
      },
      checkbox: {
        alignSelf: 'center',
      },
      radioGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 2,
        borderRadius: 2,
        backgroundColor: 'white',
        padding: 2,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioLabel: {
        marginLeft: 1,
        fontSize: 16,
        color: '#333',
    },
    imageCategoria: {
      width: '100%', 
      height: '250'
    },
    buttonRow: {
      flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20
    }

    });

module.exports = styles;