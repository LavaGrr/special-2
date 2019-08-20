import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import DadosColmeia from './components/dadosColmeia';

export default class App extends Component {
  render() {
    return (
      <DadosColmeia/>
    );
  }
}
