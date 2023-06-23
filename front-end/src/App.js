import React from 'react'
import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://localhost:4000/'
})

const App = () => (
  <Provider value={client}>
    <div>Streaks App</div>
  </Provider>
)

export default App
