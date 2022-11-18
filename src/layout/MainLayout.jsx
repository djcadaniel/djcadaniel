import { NavBar, Footer } from "../components";
import './MainLayout.css'

export const MainLayout = ({children}) => {
  return (
    <div className="mainLayout">
      <NavBar />
      { children }
      <Footer />
    </div>
  )
}
