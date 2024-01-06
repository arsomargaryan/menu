import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {ModalMaps} from "./ModalMaps";
import {Basket} from "../BasketComponents/Basket";
import AppContext from "../AppContext";


export function Header(){
    const navigate =useNavigate()
    const [showModal, setShowModal] = useState(false)
    const [showBasket, setShowBasket] = useState(false)
    const {basket} = useContext(AppContext)

    let quantity = basket.reduce((ac, cv) => ac + cv.quantity, 0)



    return <div className={'flex justify-between items-center pb-3 w-full fixed bg-white z-10 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'}>
        <Link to={'/'} className={'text-red-600 text-5xl tracking-wider font-bold ml-6'}>menu</Link>
        <div className={'flex pt-3'}>
            <input type={'text'} className={'border border-gray-300 rounded-l-lg pr-5 pl-2 pt-3  pb-3 border-r-0 h-[38px]'}
                placeholder={'Մուտքագրեք հասցե'}
            />
            <button className={'border border-gray-300 rounded-r-lg pt-1 pb-1 w-[150px] h-[38px] '} onClick={()=>setShowModal(true)}>
                <i className="fa-solid fa-location-dot pl-1 text-gray-300"></i>
                <span className={'text-sm text-gray-600 pl-2'}>Բացել քարտեզ</span>
            </button>
            {showModal && <ModalMaps setShowModal={setShowModal} />}
        </div>
        <div className={'flex mt-1 items-center'}>
            <button className={'mr-8 p-4 text-red-600 font-bold text-sm'}
                    onClick={() => navigate('/auth-sign-in')}>Մուտք
            </button>
            <button className={'mt-2 mr-8 pr-7 pl-7 bg-red-600 rounded-xl h-11 text-white font-bold text-sm'}
                    onClick={() => navigate('/auth-sign-up')}>Գրանցվել
            </button>
            {showBasket && <Basket showBasket={showBasket} setShowBasket={setShowBasket}/>}
            <button className={'mt-1 mr-8 bg-red-600 rounded-xl pr-6  pl-6 h-11 text-white relative'}
                    onClick={()=>setShowBasket(!showBasket)}>
                <i className="fa-solid fa-basket-shopping"></i>
                {quantity>0?<span className={'absolute rounded-full pl-1.5 pr-1.5 bg-white text-red-600 text-sm font-semibold right-1.5 bottom-1'}>{quantity}</span>:''}
            </button>
            <button onClick={()=>navigate('/favorites')}>
                <i className="fa-regular fa-heart text-red-600 text-2xl cursor-pointer mr-8 "></i>
            </button>
        </div>
    </div>
}