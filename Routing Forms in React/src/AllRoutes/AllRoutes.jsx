import { Route, Routes } from "react-router-dom"
import Home from "../Components/Home"
import Contacts from "../Components/Contacts"
import Error from "../Components/Error"
import SignUp from "../Components/Form"

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/Contact" element={<Contacts />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>
    </div>
  )
}

export default AllRoutes
