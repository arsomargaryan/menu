import {ShopMealItem} from "./ShopMealItem";

export function ShopMealList({meals}){




    return <div>
        {
            meals.map((el , index)=><ShopMealItem key={index} item={el} />)
        }
    </div>
}