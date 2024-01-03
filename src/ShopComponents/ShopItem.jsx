import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

export function ShopItem({item}){

    const navigate = useNavigate()
    const [isClose, setIsClose] = useState(false)


    useEffect(() => {
        if(item.workingAllDay){
            return
        }
        const openArr = item.openTime.split(':')
        const closeArr = item.closedTime.split(':')
        let now = dayjs().unix();
        const openTime = dayjs().startOf('day').unix() + openArr[0] * 3600 + openArr[1] * 60
        let closeTime = dayjs().startOf('day').unix() +  closeArr[0]* 3600 + closeArr[1] * 60
        if(openTime > closeTime) {
            closeTime = closeTime + 24 * 3600
            if(now < openTime) {
                now = now + 24 * 3600
            }
        }
        if(now >= openTime && now < closeTime) {
            setIsClose(false)
        }else{
            setIsClose(true)
        }
    }, []);


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
            <span className={'cursor-pointer'} onClick={() => navigate('/shop/' + item.shopAPI)}>
                {isClose ? <div className={'absolute bg-white top-0 left-0 h-full w-full opacity-60'}></div> : ""}
                {isClose ? <span
                    className={'p-1.5 absolute bg-gray-200 top-[45%] left-[45%] rounded-xl text-red-600 font-semibold text-xs'}>Փակ է</span> : ''}
            </span>
        </div>
        <div className={'m-4'}>
            <div className={'flex justify-between mb-3 cursor-pointer'}>
                <div onClick={() => navigate('/shop/' + item.shopAPI)}>
                    <div className={'forText'}>{item.shopName}</div>
                </div>
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