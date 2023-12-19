import {Content} from "./Components/Content";
import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {ShopPage} from "./Pages/ShopPage";
import {Offers} from "./Pages/Offers";
import {HowToOrderPage} from "./Pages/HowToOrderPage";
import {AboutUsPage} from "./Pages/AboutUsPage";
import {ContactUsPage} from "./Pages/ContactUsPage";
import {CareersPage} from "./Pages/CareersPage";
import {TermsAndConditionsPage} from "./Pages/TermsAndConditionsPage";
import {RestaurantMealList} from "./RestaurantsComponents/Meals/RestaurantMealList";
import {ShopMealList} from "./ShopComponents/Meals/ShopMealList";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {useEffect} from "react";
import {ForSignLayout} from "./Components/ForSignLayout";
import {SignInPage} from "./Pages/SignInPage";
import {SignUpPage} from "./Pages/SignUpPage";
import {FalsePage} from "./Pages/FalsePage";

export function App(){
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location.pathname]);


    return <div className={'App mx-auto  flex-col '}>
        <Routes>
            <Route element={<Content/>}>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/shop'} element={<ShopPage />} />
                <Route path={'/offers'} element={<Offers />} />
                <Route path={'/how-to-order'} element={<HowToOrderPage />} />
                <Route path={'/about-us'} element={<AboutUsPage />} />
                <Route path={'/contact-us'} element={<ContactUsPage/>} />
                <Route path={'/careers'} element={<CareersPage />} />
                <Route path={'/terms-and-conditions'} element={<TermsAndConditionsPage />} />
                <Route path={'/restaurant/:name'} element={<RestaurantMealList />} />
                <Route path={'/shop/:name'} element={<ShopMealList />} />
                <Route path={'/reset/false'} element={<FalsePage />} />


                <Route path={'*'} element={<NotFoundPage />} />
            </Route>
            <Route element={<ForSignLayout />} >
                <Route path={'/auth-sign-in'} element={<SignInPage />} />
                <Route path={'/auth-sign-up'} element={<SignUpPage />} />
            </Route>
        </Routes>

        <i className="fa-brands fa-rocketchat fixed bottom-8 right-5 text-white bg-red-600 text-4xl rounded-full p-2"></i>

    </div>
}