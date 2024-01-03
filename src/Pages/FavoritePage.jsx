import {Banner} from "../Components/Banner";
import {useContext} from "react";
import AppContext from "../AppContext";
import {FavoriteMeals} from "../Favorite/FavoriteMeals";


export function FavoritePage(){
    const {favorites} = useContext(AppContext)

    return <div>
        <Banner/>
        <div className={'ml-5'}>
            <div className={'text-red-600 font-bold  text-2xl mt-8 mb-16'}>Նախընտրածները</div>
            <div className={'flex gap-8'}>
                {favorites.map((el,index)=><FavoriteMeals key={index} item={el} />)}
            </div>
        </div>
    </div>
}