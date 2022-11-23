import react from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FrontPage from './frontPage'
import SearchResultPage from './searchResultPage'
import HousingPage from './housingPage'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontPage />} />
          <Route path="/result" element={<SearchResultPage />} />
          <Route path="/info" element={<HousingPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
