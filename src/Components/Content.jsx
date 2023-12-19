import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";



export function Content(){

    return <div>

        <Header />
        <Outlet></Outlet>
        <Footer />
    </div>
}