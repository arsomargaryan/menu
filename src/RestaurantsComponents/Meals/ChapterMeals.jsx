import {ChapterMealsItem} from "./ChapterMealsItem";


export function ChapterMeals({chapter}){

    return <div>
        {
            chapter.map((el, index)=><ChapterMealsItem key={index} item={el} />)
        }
    </div>
}