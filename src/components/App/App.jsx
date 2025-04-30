import "./App.css"
import Home from "../home/home"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <section className="main-page">
      <header>
        <h1>Tea Subscriptions</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  )
}

export default App
