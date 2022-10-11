import React from 'react'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
import {store} from './redux/store'
let App = () => {
  return <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
}

export default App