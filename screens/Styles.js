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
        flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow'
      },
      label: {
        flex: 1, fontSize: 16
      },
      textResult: {
        flex: 1, fontSize: 16, borderColor: 'gray', borderWidth: 1,  textAlign: "right", backgroundColor: 'yellow' 
      },
      inputRow: {
        flexDirection: 'row', marginBottom: 15, alignItems: 'center', justifyContent: 'space-between' 
      },
      textInput: {
        flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5, marginHorizontal: 5
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      picker: {
        flex: 1, fontSize: 16
      }
    });

module.exports = styles;