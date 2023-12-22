import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAllMeals} from "../../api";

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


    return <div>

    </div>
}