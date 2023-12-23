import {ShopChapterMealsItem} from "./ShopChapterMealsItem";


export function ShopChapterMeals({meals, chapterCheckFunc, chapter}) {

    return <div className={'border rounded-xl w-[355px] forShadow mt-7 pb-3 mb-10'}>
        <div
            className={'font-semibold text-black/80 pl-6 pb-2.5 pt-2.5 cursor-pointer ' + (chapter === null ? 'text-red-600' : '')}
            onClick={() => chapterCheckFunc(null)}>Ամբողջը
        </div>
        {
            meals.map((el, index)=><ShopChapterMealsItem key={index} item={el} chapterCheckFunc={chapterCheckFunc} chapter={chapter}/>)
        }
    </div>
}