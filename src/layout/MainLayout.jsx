import { NavBar } from "../components/NavBar";

export const MainLayout = ({children}) => {
  return (
    <>
      <NavBar />
      { children }
    </>
  )
}
