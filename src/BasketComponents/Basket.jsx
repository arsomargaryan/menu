import {useContext, useRef, useEffect} from "react";
import AppContext from "../AppContext";
import {BasketItem} from "./BasketItem";
import {useNavigate} from "react-router-dom";

export function Basket({showBasket, setShowBasket}){
    const basketRef = useRef(null)
    const {basket, deleteBasketItem} = useContext(AppContext);
    const navigate = useNavigate()


    useEffect(() => {
        const listener = (event) => {
            if(basketRef.current && basketRef.current.contains(event.target)) {
                return;
            }
            setShowBasket(false);
        };
        document.addEventListener('mouseup', listener);
        return () => {
            document.removeEventListener('mouseup', listener);
        };
    }, [basketRef]);

    const total = basket.reduce((sum, el)=>sum + el.price * el.quantity,0);

    const newBasket = basket.reduce((basketObject, elem, index) => {
        if(basketObject[elem.name]) {
            basketObject[elem.name].items.push(elem);
        } else {
            basketObject[elem.name] = {
                name: elem.name,
                items: [elem],
                categoryAPI: elem.categoryAPI,
                nameAPI: elem.nameAPI,
                order: index
            }
        }
        return basketObject;
    }, {});

   const finalBasket = Object.values(newBasket).sort((prev, next) => prev.order - next.order);

    console.log(finalBasket)


    return <div ref={basketRef} className={'basket-container bg-white w-[520px] h-[350px] fixed right-[100px] top-[60px] rounded-xl shadow-md border border-b-gray-200'}>
        {basket.length?(
        <div>
            <div className={'flex justify-between items-center m-2'}>
                <span onClick={()=>setShowBasket(!showBasket)}><i className="fa-solid fa-xmark text-xl text-black/50 cursor-pointer"></i></span>
                <span className={'text-red-600 hover:underline cursor-pointer text-sm'}
                      onClick={()=>deleteBasketItem("all")}>Ջնջել բոլորը</span>
            </div>
            <div className={' h-[187px] overflow-x-hidden'}>
                {finalBasket.map((el, index)=><div key={index} className={'cursor-pointer text-black/80 font-semibold mb-2'}>
                    <div className={'mb-2'}
                         onClick={() => navigate(`/${el.categoryAPI}/${el.nameAPI}`)}>{el.name}</div>
                    <div>
                        {el.items.map(meal=><BasketItem key={meal.id} item={meal}/>)}
                    </div>
                </div>)}
            </div>
            <div className={'absolute pb-2 bottom-0 shadow-md border border-t-gray-200 w-full rounded-b-xl'}>
                <div className={'flex justify-between items-center m-4 text-black/80 font-bold'}>
                    <span>Ընդամենը</span>
                    <span>{total} ֏</span>
                </div>
                <button className={'mt-2 ml-12 pr-7 pl-7 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[400px]'}
                        onClick={()=>deleteBasketItem("all")}>
                    Պատվիրել հիմա
                </button>
            </div>
        </div>):
            <div>
                <span onClick={() => setShowBasket(!showBasket)}><i
                    className="fa-solid fa-xmark text-xl text-black/50 cursor-pointer ml-2 mt-2"></i></span>
                <div className={'text-center'}>
                    <div className={'font-bold text-xl mt-20'}>Ձեր զամբյուղը դատարկ է</div>
                    <span><i className="fa-solid fa-cart-shopping text-[80px] text-gray-300 mt-8"></i></span>
                </div>
            </div>}
    </div>
}