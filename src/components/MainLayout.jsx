import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="flex justify-center align-middle">

    <Outlet/>
    
    </div>
  )
}

export default MainLayout