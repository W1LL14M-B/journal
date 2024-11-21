import { Route, Router } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"



const AppRouter = () => {
  return (
  <Router>

{/* Login y Resgistro */}
<Route path="/auth/*" element={ <AuthRoutes />}  />

{/* jouerlApp*/}
<Route path="/*" element={ <JournalRoutes />}  />

  </Router>
  )
}

export default AppRouter