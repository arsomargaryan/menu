import {useParams} from "react-router-dom";

export function  PropertyFilterRestaurantItem({item, filteredRestaurantFunc}){


    return <label htmlFor={item}>
            <div className={'hover:bg-gray-100 text-black/80 font-serif cursor-pointer p-3 pl-6'} onChange={()=>filteredRestaurantFunc(item)}>
                    <input type={'checkbox'} name={item} id={item} className={'checkbox'} />
                    <label className={'label'} htmlFor={item}>
                    <span className={'text pl-1'}>{item} </span>
                    </label>
             </div>
    </label>
}