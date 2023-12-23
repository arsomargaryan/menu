import {RestaurantMealItem} from "./RestaurantMealItem";

export function RestaurantMealList({meals}){

    return <div>
        {
            meals.map((el , index)=><RestaurantMealItem key={index} item={el} />)
        }
    </div>
}