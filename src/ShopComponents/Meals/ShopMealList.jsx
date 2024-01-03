import {ShopMealItem} from "./ShopMealItem";

export function ShopMealList({meals, infoArr}){

    return <div>
        {
            meals.map((el , index)=><ShopMealItem key={index} item={el} infoArr={infoArr} />)
        }
    </div>
}