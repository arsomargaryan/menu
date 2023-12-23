

export function ItemS({item}){
    console.log(item)

    return <div className={'rounded-xl  border border-gray-100 cursor-pointer forShadow w-[250px] mb-4'}>
        <img src={item.image} alt={item.title} className={'rounded-t-xl h-[250px] object-cover'}/>
        <div className={'m-1 ml-2 mr-2'}>
            <div className={'font-semibold text-black/80 mb-6  text-sm'}>
                {item.title.length > 19 ? item.title.slice(0,19) +" ...": item.title}
            </div>
            <div className={'flex justify-between'}>
                <span className={'font-semibold text-black/80'}>{item.price}֏</span>
                <span>
                    <i className="fa-regular fa-heart text-red-600 mr-2.5 text-xl"></i>
                    <i className="fa-solid fa-cart-plus text-red-600 text-[18px]"></i>
                </span>
            </div>
        </div>
    </div>
}