import {useState} from "react";
import {PropertyFilterRestaurantItem} from "./PropertyFilterRestaurantItem";


export function PropertyFilterRestaurant({filteredRestaurantFunc}){

    const [props] = useState([
        "Անվճար առաքում",
        "24/7",
        "Խաշ",
        "Լավ Առաջարկ",
        "Նորույթ",
        "ԹՈՓ Ռեստորաններ",
        "նախաճաշ",
        "Լանչեր",
        "Առողջ Ապրելակերպ",
        "Հացաբուլկեղեն և Քաղցրավենիք",
        "Խորոված և Քյաբաբ",
        "Պիցցա",
        "Սուշի",
        "Բուրգեր և Սենդվիճ",
        "Շաուրմա",
        "Ձուկ և Ծովամթերք",
        "Ասիական",
        "Հայկական",
        "Արևելյան",
        "Ամեն Ինչի Առաքում"
    ])

    return <div className={'border rounded-xl w-[355px] forShadow mt-7 pb-3 mb-10'}>
        <div className={'text-black/75 font-bold p-4 pl-6 text-lg'}>Ֆիլտրեր</div>
        <form className={'flex-row'}>
        {
            props.map((el, index)=> <PropertyFilterRestaurantItem key={index} item={el} filteredRestaurantFunc={filteredRestaurantFunc} />)
        }
        </form>
    </div>
}