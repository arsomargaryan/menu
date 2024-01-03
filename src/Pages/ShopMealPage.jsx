import {useParams} from "react-router-dom";
import {Banner} from "../Components/Banner";
import {useEffect, useState, useMemo} from "react";
import {getAllRestaurants} from "../api";
import {ShopLogo} from "../ShopComponents/Meals/ShopLogo";
import {ShopChapterMeals} from "../ShopComponents/Meals/ShopChapterMeals";
import {ShopMealList} from "../ShopComponents/Meals/ShopMealList";

export function ShopMealPage(){
    const [item, setItem] = useState([])
    const [meals, setMeals] = useState([])
    const [chapter, setChapter] = useState(null)
    const {name} = useParams()

    useEffect(() => {
        if(!name){return}
        const getInfoByKey = (key, value) => getAllRestaurants("shop", null, `${key}=${value}`)
        const getInfoByName = (shopAPI) => getInfoByKey("shopAPI", shopAPI)

        getInfoByName(name).then(data => {
            setItem(data[0])
        })

        const getMealByKey = (key, value) => getAllRestaurants("shopMeals", null, `${key}=${value}`)
        const getMealByName = (shopAPI) => getMealByKey("shopAPI", shopAPI)

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

    const infoArr = [item.logo, item.shopName, "shop", item.shopAPI]

    return <div>
        <Banner />
        <div className={'flex ml-6 mt-10'}>
            <div>
                <ShopLogo item={item} />
                <ShopChapterMeals meals={meals} chapterCheckFunc={chapterCheckFunc} chapter={chapter} />
            </div>
            <div  className={'ml-7'}>
                <ShopMealList  meals={filteredMeals} infoArr={infoArr}/>
            </div>
        </div>
    </div>
}