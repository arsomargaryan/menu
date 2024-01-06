import {useState, useContext, useEffect} from "react";
import {Modal} from "./Modal";
import AppContext from "../AppContext";


export function Meal({item, infoArr}){

    const [showModal, setShowModal] = useState(false)
    const {onFavorite, favorites, addBasket} = useContext(AppContext)
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        favorites.map(el=>{
            if(el.id === item.id){
                setIsFavorite(true)
            }
        })
    }, []);


    let typesLength= 0
    if(item.type){
        item.type.map(type=> typesLength += type.typeProducts.length)
    }




    return <div className={'rounded-xl  border border-gray-100 cursor-pointer forShadow w-[250px] mb-4'}>
        {showModal && <Modal setShowModal={setShowModal} item={item} infoArr={infoArr} isFavorite={isFavorite} onFavorite={onFavorite} setIsFavorite={setIsFavorite}/>}

        <img src={item.image} alt={item.title} className={'rounded-t-xl h-[250px] object-cover'}
             onClick={()=>setShowModal(true)}/>
        <div className={'m-1 ml-2 mr-2'}>
            <div className={'font-semibold text-black/80 text-sm'}  onClick={()=>setShowModal(true)}>
                {item.title.length > 19 ? item.title.slice(0,19) +" ...": item.title}
            </div>
            {item.type? <div className={'text-xs text-black/60 mb-2'}>{typesLength} տեսակ</div>:<div className={'h-6'}></div>}
            <div className={'flex justify-between '}>
                <span className={'font-semibold text-black/80'}  onClick={()=>setShowModal(true)}>{item.price}֏</span>
                <span>
                    <i className={(isFavorite?"fa-solid ":"fa-regular ") +"fa-heart text-red-600 mr-2.5 text-xl"}
                       onClick={()=>{
                           onFavorite(item,infoArr)
                           setIsFavorite(!isFavorite)
                       }}></i>
                    <i className="fa-solid fa-cart-plus text-red-600 text-[18px]"
                       onClick={ item.type ?()=> setShowModal(true): () => addBasket(item, infoArr)}>
                    </i>
                </span>
            </div>
        </div>
    </div>
}