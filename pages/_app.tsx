import App from 'next/app'
import type { AppProps } from 'next/app'
import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store/store'
import "../styles/globals.css"

class MyApp extends App {
  render() {
    const {Component, pageProps}: AppProps = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    )
  }
}

const makeStore = () =>  store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);