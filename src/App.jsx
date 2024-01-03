import {Content} from "./Components/Content";
import {Route, Routes, useLocation} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {ShopPage} from "./Pages/ShopPage";
import {HowToOrderPage} from "./Pages/HowToOrderPage";
import {AboutUsPage} from "./Pages/AboutUsPage";
import {ContactUsPage} from "./Pages/ContactUsPage";
import {CareersPage} from "./Pages/CareersPage";
import {TermsAndConditionsPage} from "./Pages/TermsAndConditionsPage";
import {NotFoundPage} from "./Pages/NotFoundPage";
import {useEffect, useRef, useState} from "react";
import {ForSignLayout} from "./Components/ForSignLayout";
import {SignInPage} from "./Pages/SignInPage";
import {SignUpPage} from "./Pages/SignUpPage";
import {FalsePage} from "./Pages/FalsePage";
import {RestaurantMealPage} from "./Pages/RestaurantMealPage";
import {ShopMealPage} from "./Pages/ShopMealPage";
import {NewsPage} from "./Pages/NewsPage";
import {FavoritePage} from "./Pages/FavoritePage";
import AppContext from "./AppContext";
import axios from "axios";

export function App(){
    const location = useLocation();
    const [favorites, setFavorites] = useState([])
    const meal=useRef(null)

    useEffect(() => {
        getFavorites()
    }, []);
        const getFavorites = async () =>{
            const response = await axios.get("http://localhost:3000/favorites")
            return setFavorites(response.data)
        }

    const clickHandler= async (item, infoArr)=>{
            item = {...item, "logo": infoArr[0], "name": infoArr[1], "categoryAPI": infoArr[2], "nameAPI": infoArr[3]}
            const favMeal = favorites.find(el=> el.id === item.id);
            if(favMeal)
            {
                await axios.delete("http://localhost:3000/favorites/"+ favMeal.id)
                const newFav = favorites.filter(el=> el.id !== item.id)
                setFavorites(newFav)
            }else {
                const {data} = await axios.post("http://localhost:3000/favorites", item)
                setFavorites(prev=>[...prev, data])
            }
        }



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location.pathname]);


    return <div className={'App mx-auto  flex-col '}>
        <AppContext.Provider value={{
            favorites,
            setFavorites,
            clickHandler
        }}>
            <Routes>
                <Route element={<Content/>}>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/shop'} element={<ShopPage />} />
                    <Route path={'/how-to-order'} element={<HowToOrderPage />} />
                    <Route path={'/about-us'} element={<AboutUsPage />} />
                    <Route path={'/contact-us'} element={<ContactUsPage/>} />
                    <Route path={'/careers'} element={<CareersPage />} />
                    <Route path={'/terms-and-conditions'} element={<TermsAndConditionsPage />} />
                    <Route path={'/restaurant/:name'} element={<RestaurantMealPage/>} />
                    <Route path={'/shop/:name'} element={<ShopMealPage />} />
                    <Route path={'/reset/false'} element={<FalsePage />} />
                    <Route path={'/news'} element={<NewsPage />} />
                    <Route path={'/favorites'} element={<FavoritePage />} />


                    <Route path={'*'} element={<NotFoundPage />} />
                </Route>
                <Route element={<ForSignLayout />} >
                    <Route path={'/auth-sign-in'} element={<SignInPage />} />
                    <Route path={'/auth-sign-up'} element={<SignUpPage />} />
                </Route>
            </Routes>
        </AppContext.Provider>

        <i className="fa-brands fa-rocketchat fixed bottom-8 right-5 text-white bg-red-600 text-4xl rounded-full p-2"></i>

    </div>
}