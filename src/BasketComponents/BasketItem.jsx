import {useContext, useEffect, useState} from "react";
import AppContext from "../AppContext";


export function BasketItem({item}){
    const {onFavorite, favorites, plus, minus, deleteBasketItem} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(false)

    const keys = []
    for (let key in item.typeAndComm){
        if(key !== 'Մեկնաբանություն') keys.push(key)
    }

    useEffect(() => {
        favorites.map(el=>{
            if(el.id === item.id){
                setIsFavorite(true)
            }
        })
    }, []);


    return <div className={'border-t-2 ml-2 mr-2 mt-2 relative first:border-0'}>
        <div className={'mb-2 mr-2 mt-2 flex cursor-pointer'}>
            <div className={'relative'}>
                <img src={item.image} alt={'nkar'} className={'w-[85px] h-[80px] rounded-md'}/>
                <button className={'bg-gray-200 p-2 pt-0 pb-0 rounded-full text-[15px] absolute top-[-5px] right-[-10px]'}
                        onClick={()=>deleteBasketItem(item.id)}>-</button>
            </div>
            <div className={'w-full'}>
                <div className={'flex justify-between text-black/80 font-semibold  m-2'}>
                <span>{item.title}</span>
                    <span>{item.price * item.quantity}֏</span>
                </div>
                <div className={'text-xs ml-2 mt-2 text-black/60'}>
                    {keys.map(el=><span key={el.id}>{item.typeAndComm[el]}, </span>)}
                </div>
                {item.typeAndComm ? <div className={'text-xs m-2 mt-0'}>
                    {item.typeAndComm['Մեկնաբանություն'] ? <span className={'text-black/80 font-semibold'}>Մեկնաբանություն </span> : null}
                    <span className={'text-black/60'}> {item.typeAndComm['Մեկնաբանություն']} </span>
                </div> : null}

            </div>
        </div>

        <div className={'text-right absolute right-3 bottom-2'}>
            <button className={'bg-gray-200 rounded-md p-2 pt-0 pb-0'} onClick={() => minus(item)}>-</button>
            <span className={'ml-4 mr-4'}>{item.quantity}</span>
            <button className={'bg-gray-200 rounded-md p-2 pt-0 pb-0'} onClick={()=>plus(item)}>+</button>
        </div>

    </div>
}