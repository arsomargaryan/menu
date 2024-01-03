import {RestaurantMealItem} from "./RestaurantMealItem";

export function RestaurantMealList({meals,infoArr}){
    return <div>
        {
            meals.map((el , index)=><RestaurantMealItem key={index} item={el} infoArr={infoArr}/>)
        }
    </div>
}