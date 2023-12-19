

export function OurInfo(){

    return <div className={'flex mr-[130px] ml-[130px] mb-16'}>
        <div className={'w-1/3 pb-60 mr-4'}>
            <p className={'font-bold text-black/90 mb-12'}>Կենտրոնական գրասենյակի հասցե և կոնտակտային տվյալներ՝</p>
            <p className={'mb-4'}><span className={'font-bold text-black/80 '}>Հասցե`</span> Մարշալ Բաղրամյան Պողոտա 2-րդ փակուղի 8-րդ շենք, Երևան 0019, Հայաստան</p>
            <p className={'mb-4'}><span className={'font-bold text-black/90'}>Հեռ. </span><a href={'/'} className={'text-blue-700 underline'}>+374 10 222 000 </a></p>
            <p><span className={'font-bold text-black/90'}>Էլ. փոստ` </span>info@menu.am</p>
        </div>
        <div className={"google-map w-2/3"}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A967a35c50846710e6786c4b08df05142e8e12092d7d837f96301e7bbb7b66add&amp;source=constructor" width="840" height="317" frameBorder="0"></iframe>
        </div>
    </div>
}