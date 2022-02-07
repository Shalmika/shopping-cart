import { Provider } from "react-redux"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import { persistor, store } from "./Store/store"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}
export default App