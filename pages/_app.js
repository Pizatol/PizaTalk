import '../styles/globals.css'

import {configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'




function MyApp({ Component, pageProps }) {

const store = configureStore({
  reducer : {

    // users : 
  }
})

  return (
    <Provider store = {store} >

    <Component {...pageProps} />
    </Provider>
    )
}

export default MyApp
