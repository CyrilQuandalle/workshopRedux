import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import AppPage from './page'

const title = 'My Minimal React Webpack Babel Setup'

ReactDOM.render(
  <Provider store={store}>
    <AppPage/>
  </Provider>,
  document.getElementById('app')
)
module.hot.accept()
