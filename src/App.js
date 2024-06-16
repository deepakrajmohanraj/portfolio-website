import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="portfolio-website/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio-website/about" element={<About />} />
          <Route path="portfolio-website/contact" element={<Contact />} />
          <Route path="portfolio-website/portfolio" element={<Portfolio />} />
          <Route path="portfolio-website/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
