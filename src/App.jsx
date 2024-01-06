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
    const [basket, setBasket] = useState([])
    const [meal, setMeal] = useState([])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    }, [location.pathname]);


    useEffect(() => {
        getFavorites()
        getBasket()
    }, []);
    const getFavorites = async () =>{
        const response = await axios.get("http://localhost:3000/favorites")
        return setFavorites(response.data)
    }

    const getBasket = async ()=>{
        const response = await axios.get("http://localhost:3000/basket")
        return setBasket(response.data)
    }

    const onFavorite= async (item, infoArr)=>{
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

    const addBasket = async (item, infoArr, comments, count)=>{
        const basketMeal = basket.find(el=> el.id === item.id);
        if(!basketMeal){
            item = {...item,
                "logo": infoArr[0],
                "name": infoArr[1],
                "categoryAPI": infoArr[2],
                "nameAPI": infoArr[3],
                "quantity": count || 1,
                "typeAndComm": comments
            }
            const {data} = await axios.post("http://localhost:3000/basket", item)
            setBasket(prev=>[...prev, data])
        }else{
            count ? basketMeal.quantity = basketMeal.quantity + count: basketMeal.quantity = basketMeal.quantity + 1;
            basketMeal.typeAndComm = {...basketMeal.typeAndComm, ...comments}
            await axios.put("http://localhost:3000/basket/" + basketMeal.id, basketMeal)
            setBasket([...basket])
        }

    }

    const plus = async (item)=>{
        item.quantity = item.quantity + 1;
        const {data} = await axios.put("http://localhost:3000/basket/" + item.id, item)
        setBasket([...basket])
    }

    const minus = async (item)=>{
        item.quantity = item.quantity - 1;
        if(item.quantity < 1){
            await axios.delete("http://localhost:3000/basket/"+ item.id)
            const newBasket = basket.filter(el=> el.id !== item.id)
            setBasket(newBasket)
        }else{
            const {data} = await axios.put("http://localhost:3000/basket/" + item.id, item)
            setBasket([...basket])
        }
    }

    const deleteBasketItem = async (id)=>{
        if(id === 'all'){

        basket.map(async meal=>{
            await axios.delete("http://localhost:3000/basket/"+ meal.id)
        })
        setBasket([])
        }else{
            await axios.delete("http://localhost:3000/basket/" + id)
            const newBasket = basket.filter(el=> el.id !== id)
            setBasket(newBasket)
        }

    }





    return <div className={'App mx-auto  flex-col '}>
        <AppContext.Provider value={{
            favorites,
            onFavorite,
            basket,
            addBasket,
            plus,
            minus,
            deleteBasketItem
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