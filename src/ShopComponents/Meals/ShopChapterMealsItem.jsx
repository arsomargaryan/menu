

export function ShopChapterMealsItem({item, chapterCheckFunc, chapter}) {

    return <div
        className={'font-semibold text-black/80 pl-6 pb-2.5 cursor-pointer ' + (chapter === item.category ? 'text-red-600' : '')}
        onClick={() => chapterCheckFunc(item.category)}>
        {item.category}
    </div>
}