import {useState} from "react";
import {PropertyFilterRestaurantItem} from "../../RestaurantsComponents/Filter/PropertyFilterRestaurantItem";
import {PropertyFilterShopItem} from "./PropertyFilterShopItem";


export function PropertyFilterShop({filteredShopFunc}){

    const [props, setProps] = useState([
        "Անվճար առաքում",
        "24/7",
        "Լավ Առաջարկ",
        "Նորույթ",
        "Ֆրեշ և Պաղպաղակ",
        "Ընտանի Կենդանիների Կերեր",
        "Ըմպելիքներ և Ավելին",
        "Մանկական",
        "Կենցաղային և Տնտեսական Պարագաններ",
        "Գեղեցկություն և Առողջություն",
        "Նվեր Քարտեր",
        "Նարգիլե և Սիգար",
        "Գրախանութ",
        "Կիսաֆաբրիկատներ և Մսամթերք",
        "Մրերային",
        "Ամեն ինչի Առաքում"
    ])
    return <div className={'border rounded-xl w-[355px] forShadow mt-7 pb-3'}>
        <div className={'text-black/75 font-bold p-4 pl-6 text-lg'}>Ֆիլտրեր</div>
        <form className={'flex-row'}>
            {
                props.map((el, index)=> <PropertyFilterShopItem key={index} item={el} filteredShopFunc={filteredShopFunc} />)
            }
        </form>
    </div>
}