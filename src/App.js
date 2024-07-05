// App.js
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Terminal from './components/Terminal'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/terminal" element={<Terminal />} />
    </Routes>
  </BrowserRouter>
)

export default App
