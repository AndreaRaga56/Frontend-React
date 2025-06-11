import { Outlet } from "react-router-dom";
import MainNav from "./MainNav";

function AppLayout (){
    return(
        <>
        <MainNav/>        
        <Outlet/>
        </>
    )
}

export default AppLayout