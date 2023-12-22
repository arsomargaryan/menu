import {ChapterMealsItem} from "./ChapterMealsItem";


export function ChapterMeals(meals){
    console.log(meals)
    return <div>
        <div>Ամբողջը</div>
        {
            // meals.map((el, index)=><ChapterMealsItem key={index} item={el}/>)
        }
    </div>
}