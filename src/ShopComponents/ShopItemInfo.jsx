import {Link} from "react-router-dom";


export function ShopItemInfo({item}){


    return <div className={'m-4'}>
        <div className={'flex justify-between mb-3'}>
            <Link to={'/shop/'+ item.shopAPI}> <div className={'forText'}>{item.shopName}</div> </Link>
            <div> <span><i className="fa-solid fa-star mr-1 text-red-600"></i></span>{item.shopRating}</div>
        </div>
        <div className={'flex justify-between'}>
            <div className={'text-[13px]'}>Նվազագույնը {item.minOrder}</div>
            <div className={'text-[13px]'}>
                {(item.workingAllDay &&
                    <span>24 Ժամ</span> ||
                    <span> {item.openTime}-{item.closedTime} </span>)


                }
            </div>
        </div>
    </div>
}