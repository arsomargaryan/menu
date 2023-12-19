import {Link, useNavigate} from "react-router-dom";
import {RestaurantItemInfo} from "./RestaurantItemInfo";


export function RestaurantsItem({item}){
    const navigate = useNavigate()


    return <div className={' rounded-xl shadow-md  border border-gray-100'}>
        <div>
            <img src={item.restaurantImage} alt={"nkar"}
                   className={'rounded-t-xl cursor-pointer'}
                   onClick={()=>navigate('restaurant/'+ item.restaurantAPI)} />
        </div>
        <RestaurantItemInfo item={item}/>
    </div>
}
