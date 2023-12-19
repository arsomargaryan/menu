import {RestaurantsItem} from "./RestaurantsItem";


export function RestaurantsList({restaurants}){



    return <div className={'grid gap-8 sm:grid-cols-2 mr-8 mb-10'}>
        {
            restaurants.map(el=><RestaurantsItem key={el.restaurantId} item={el} />)
        }
    </div>
}