import { NavBar, Footer } from "../components";

export const MainLayout = ({children}) => {
  return (
    <>
      <NavBar />
      { children }
      <Footer />
    </>
  )
}
