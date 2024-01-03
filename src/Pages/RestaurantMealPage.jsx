import {useParams} from "react-router-dom";
import {Banner} from "../Components/Banner";
import {useEffect, useState, useMemo} from "react";
import {getAllRestaurants} from "../api";
import {RestaurantLogo} from "../RestaurantsComponents/Meals/RestaurantLogo";
import {RestaurantChapterMeals} from "../RestaurantsComponents/Meals/RestaurantChapterMeals";
import {RestaurantMealList} from "../RestaurantsComponents/Meals/RestaurantMealList";


export function RestaurantMealPage(){
    const [item, setItem] = useState([])
    const [meals, setMeals] = useState([])
    const [chapter, setChapter] = useState(null)
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

    const chapterCheckFunc =(chapter) => {
        setChapter(chapter)
    }

    const filteredMeals = useMemo(()=>{
        const mealsCopy = [...meals]
        if(chapter === null){
            return meals
        }
        return mealsCopy.filter(el => el.category === chapter)


    },[chapter, meals])

    const infoArr = [item.logo, item.restaurantName, "restaurant", item.restaurantAPI]


    return <div>
        <Banner />
        <div className={'flex ml-6 mt-10'}>
            <div>
                <RestaurantLogo item={item} />
                <RestaurantChapterMeals meals={meals} chapterCheckFunc={chapterCheckFunc} chapter={chapter}/>
            </div>
            <div  className={'ml-7'}>
                <RestaurantMealList meals={filteredMeals} infoArr={infoArr}/>
            </div>
        </div>

    </div>
}