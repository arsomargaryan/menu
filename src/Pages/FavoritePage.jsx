import {Banner} from "../Components/Banner";
import {useContext} from "react";
import AppContext from "../AppContext";
import {FavoriteMeals} from "../Favorite/FavoriteMeals";
import nonFavorite from "../images/nonFavorite.png"
import {useNavigate} from "react-router-dom";

export function FavoritePage(){
    const {favorites} = useContext(AppContext)
    const navigate = useNavigate()

    return <div>
        <Banner/>
        {favorites.length ? <div className={'ml-5'}>
            <div className={'text-red-600 font-bold  text-2xl mt-8 mb-16'}>Նախընտրածները</div>
            <div className={'flex gap-8'}>
                {favorites.map((el, index) => <FavoriteMeals key={index} item={el}/>)}
            </div>
        </div>:
            <div>
                <div className={'text-red-600 font-bold text-2xl mt-8 mb-16 text-center'}>Դուք դեռ չունեք նախընտրած
                    ապրանքներ
                </div>
                <img src={nonFavorite} alt={"nonFavorite"}/>
                <div className={'text-center'}>
                    <button className={'mt-2 mr-8 mb-10 pr-28 pl-28 bg-red-600 rounded-xl h-11 text-white font-bold text-sm'}
                            onClick={()=>navigate('/')}>
                        Գլխավոր էջ
                    </button>
                </div>
            </div>
        }

    </div>
}