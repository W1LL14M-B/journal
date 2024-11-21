import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"

const AuthRoutes = () => {
  return (
    <Routes>
    <Route path="Login" element={<LoginPage />} />
    <Route path="register" element={< RegisterPage/>} />
    <Route path='/*' element={<Navigate to="/auth/login" />} />
</Routes>
  )
}

export default AuthRoutes