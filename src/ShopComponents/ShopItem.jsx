import {Link, useNavigate} from "react-router-dom";

export function ShopItem({item}){

    const navigate = useNavigate()

    return <div className={' rounded-xl shadow-md  border border-gray-100'}>
        <div className={'relative'}>
            <img src={item.shopImage} alt={"nkar"}
                 className={'rounded-t-xl cursor-pointer'}
                 onClick={() => navigate('/shop/' + item.shopAPI)}/>
            <span className={'absolute right-0 bottom-1.5'}>
                {item.props.includes("Լավ Առաջարկ") && <span
                    className={'bg-white text-xs font-semibold text-red-600 p-2 pl-3 pb-[7.6px] rounded-tl-xl border border-b-red-600'}>ԱՌԱՋԱՐԿՆԵՐ</span>}
                {item.props.includes("Անվճար առաքում") &&
                    <span className={'bg-red-600 text-xs font-semibold text-white p-2'}>ԱՆՎՃԱՐ ԱՌԱՔՈՒՄ</span>}
            </span>
        </div>
        <div className={'m-4'}>
            <div className={'flex justify-between mb-3'}>
                <Link to={'/shop/' + item.shopAPI}>
                    <div className={'forText'}>{item.shopName}</div>
                </Link>
                <div><span><i className="fa-solid fa-star mr-1 text-red-600"></i></span>{item.shopRating}</div>
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
    </div>
}