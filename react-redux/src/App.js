import React from 'react'
import Navbar from './Navbar/Navbar'
import Counter from './Counter/Counter'
import Message from './Message/Message'
// import CounterTable from './Counter/CounterTable'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Counter />
        <Message />
        
        {/* <CounterTable /> */}
      </Provider>
    </div>
  )
}

export default App