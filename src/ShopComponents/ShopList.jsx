import {RestaurantsItem} from "../RestaurantsComponents/RestaurantsItem";
import {ShopItem} from "./ShopItem";


export function ShopList({shop}){

    return <div className={'grid gap-8 sm:grid-cols-2 mr-8 mb-10'}>
        {
            shop.map(el=><ShopItem key={el.shopId} item={el} />)
        }
    </div>
}