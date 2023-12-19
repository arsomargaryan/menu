import {Link, useNavigate} from "react-router-dom";
import {ShopItemInfo} from "./ShopItemInfo";

export function ShopItem({item}){

    const navigate = useNavigate()

    return <div className={' rounded-xl shadow-md  border border-gray-100'}>
        <div> <img src={item.shopImage} alt={"nkar"}
                   className={'rounded-t-xl cursor-pointer'}
                   onClick={()=>navigate('/shop/'+item.shopAPI)}/> </div>
        <ShopItemInfo item={item}/>
    </div>
}