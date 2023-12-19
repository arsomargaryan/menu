    import {Banner} from "../../Components/Banner";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAllMeals} from "../../api";
import {RestaurantLogo} from "./RestaurantLogo";
import {RestaurantMealItem} from "./RestaurantMealItem";
import {ChapterMeals} from "./ChapterMeals";


export function RestaurantMealList(){

    const [mealsList, setMealsList] = useState([]);
    const [logo, setLogo] = useState('')
    const {name} = useParams();

    useEffect(() => {
        getAllMeals(name).then((data)=>{
            setMealsList(data.meals)
            setLogo(data.logo)
        })
    }, []);

    const set= new Set(mealsList.map(el=> el.category))
    const chapter = new Array(set)




    return <div>
        <Banner />
        <div className={'flex ml-6 mt-10'}>
            <div>
                <RestaurantLogo logo={logo}/>
                <ChapterMeals chapter={chapter} />
            </div>
            <div className={'ml-7'}>
                {
                    mealsList.map(el=><RestaurantMealItem key={el.id} item={el} />)
                }
            </div>
        </div>
    </div>
}