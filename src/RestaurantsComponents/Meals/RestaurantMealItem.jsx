import {ItemR} from "./ItemR";


export function RestaurantMealItem({item}){

    return <div className={'border-b-2 mr-8 mb-8'}>
        <span className={'text-red-600 text-2xl font-bold'}>{item.category}</span>
        <div className={'grid gap-8 sm:grid-cols-4 mb-10 mt-5'}>
            {item.meals.map((el , index)=><ItemR key={index} item={el} />)}
        </div>
    </div>
}