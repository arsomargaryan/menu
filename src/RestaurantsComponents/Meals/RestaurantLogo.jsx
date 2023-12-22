import {Link, useNavigate} from "react-router-dom";


export function RestaurantLogo({item}){
    const navigate = useNavigate()




    return <div className={' rounded-xl shadow-md  border border-gray-100'}>
        <div className={'w-[355px]'}>
            <img src={item.logo} alt={"nkar"}
                 className={'rounded-t-xl cursor-pointer  w-full object-contain'}
                 onClick={() => navigate(0)}/>
        </div>
        <div className={'m-4'}>
            <div className={'flex justify-between mb-3 cursor-pointer'}>
                <div onClick={() => navigate(0)}>
                    <div className={'forText text-sm    '}>{item.restaurantName}</div>
                </div>
                <div><span><i className="fa-solid fa-star mr-1 text-red-600"></i></span>{item.restaurantRating}</div>
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