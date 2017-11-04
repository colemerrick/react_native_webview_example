/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

export default class App extends Component<{}> {
  onShouldStartLoadWithRequest(e) {
      console.warn(e.url);
      return true;
  }

  renderByDevice() {
    let url = {
      uri: 'https://dev.zeneducate.com/'
    }
    if (Platform.OS === 'ios') {
      return (
        <WebView
          source={url}
          javaScriptEnabled={true}
          style={{marginTop: 23}}
          domStorageEnabled={true}
          onShouldStartLoadWithRequest={(e) => this.onShouldStartLoadWithRequest(e)}
          startInLoadingState={true}
          ref={webview => { this.myWebView = webview; }} />
      )
    } else {
      return (
        <WebView
          source={url}
          javaScriptEnabled={true}
          style={{marginTop: 0}}
          domStorageEnabled={true}
          ref={webview => { this.myWebView = webview; }} />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderByDevice() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
