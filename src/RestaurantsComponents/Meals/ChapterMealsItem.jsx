

export function ChapterMealsItem({item}){

    return <div>
            <label className={'cursor-pointer'} htmlFor={item}>
                    <div className={' p-3 pl-6 text-black/80 font-serif'}>
                        <input type={'checkbox'} name={item} id={item} className={'mr-3'} />
                        {item}
                    </div>
            </label>

    </div>
}