import {Outlet} from "react-router-dom";
import {Footer} from "./Footer";


export function ForSignLayout(){

    return <div>
        <Outlet></Outlet>
        <Footer />
    </div>
}