import {useParams} from "react-router-dom";
import {Banner} from "../Components/Banner";
import {useEffect, useState} from "react";
import {getAllRestaurants} from "../api";
import {RestaurantLogo} from "../RestaurantsComponents/Meals/RestaurantLogo";
import {ChapterMeals} from "../RestaurantsComponents/Meals/ChapterMeals";


export function RestaurantMealPage(){
    const [item, setItem] = useState([])
    const [meals, setMeals] = useState([])


    const {name} = useParams()



    useEffect(() => {
            if(!name){return}
            const getInfoByKey = (key, value) => getAllRestaurants("restaurants", null, `${key}=${value}`)
            const getInfoByName = (restaurantAPI) => getInfoByKey("restaurantAPI", restaurantAPI)

            getInfoByName(name).then(data => {
                setItem(data[0])
            })

            const getMealByKey = (key, value) => getAllRestaurants("restaurantsMeals", null, `${key}=${value}`)
            const getMealByName = (restaurantAPI) => getMealByKey("restaurantAPI", restaurantAPI)

            getMealByName(name).then(data => {
                setMeals(data[0].products ||[])
            })

    }, [name]);


    return <div>
        <Banner />
        <div className={'flex ml-6 mt-10'}>
            <div>
                <RestaurantLogo item={item} />
                <ChapterMeals meals={meals}/>
            </div>
            <div  className={'ml-7'}>
                sdfs
            </div>
        </div>

    </div>
}