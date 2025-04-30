import "./App.css"
import Home from "../home/home"
import SubscriptionDetails from "../SubscriptionDetails/SubscriptionDetails"
import { Routes, Route } from "react-router-dom"
import NotFound from "../NotFound/NotFound"

function App() {

  return (
    <section className="main-page">
      <header>
        <h1>Tea Subscriptions</h1>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscriptions/:id" element={<SubscriptionDetails />} />
        <Route path="/subscriptions/not_found" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
