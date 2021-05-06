import React from 'react'
import Routes from './routes'
import Provider from 'react-redux/es/components/Provider'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}
