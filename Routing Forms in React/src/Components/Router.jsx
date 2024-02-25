import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Error from "./Error"
import SignUp from "./Form"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/contact" element={<Contact></Contact>} ></Route>
      <Route path="/register" element={<SignUp />} ></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  )
}

export default Router
