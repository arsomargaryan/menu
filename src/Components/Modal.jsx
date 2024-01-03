import {useState} from "react";
import {useNavigate} from "react-router-dom";

export function Modal({setShowModal, item, infoArr, isFavorite, clickHandler , setIsFavorite, favModal}){
    const navigate = useNavigate()
    const [count, setCount] = useState(1)

    return (
        <>
            <div className={'bg-black/50 fixed left-0 top-0 right-0 bottom-0 z-20 cursor-default'} onClick={()=>setShowModal(false)}></div>
            <div
                className={'bg-white w-[700px] h-[650px] rounded-xl fixed top-[8%] left-[50%] translate-x-[-50%] shadow-2xl z-30 cursor-default overflow-x-hidden'}>
                <div className={'flex justify-between pb-4 bg-gray-50 rounded-t-xl'}>
                    <div className={'flex ml-5 mt-5'} onClick={()=>navigate(`/${infoArr[2]}/${infoArr[3]}`)}>
                        <img src={infoArr[0]} className={'w-16 h-6 cursor-pointer mr-1'}/>
                        <span className={'text-black/70 font-semibold cursor-pointer'}>{infoArr[1]}</span>
                    </div>
                    <div className={'mr-5 mt-5'}>
                        {favModal?<i className={'fa solid fa-heart text-red-600 mr-2.5 text-xl cursor-pointer'}
                                     onClick={()=>clickHandler(item, infoArr[0],infoArr[1])}></i>:
                        <i className={(isFavorite?"fa-solid ":"fa-regular ") +"fa-heart text-red-600 mr-2.5 text-xl cursor-pointer"}
                        onClick={()=>{
                            clickHandler(item, infoArr[0],infoArr[1])
                            setIsFavorite(!isFavorite)
                        }}></i>}
                        <span
                            className={'hover:bg-black hover:bg-opacity-10 rounded-full p-1 pl-1.5 pr-1.5 cursor-pointer'}><i
                            className="fa-solid fa-xmark text-xl text-black/50" onClick={() => setShowModal(false)}></i></span>
                    </div>
                </div>
                <div className={'flex m-5 mb-0.5 pb-5'}>
                    <img src={item.image} alt={'image'} className={'rounded-xl mr-4 w-[47.5%] h-[42.5%]'}/>
                    <div className={'h-[42.5%]'}>
                        <div>
                            <div className={'text-xl font-bold text-black/75 pb-2'}>{item.title}</div>
                            <div className={'text-sm min-h-[230px] text-black/70 font-semibold'}>{item.composition}</div>
                        </div>
                        <div className={'mt-2'}>
                            <button className={'bg-gray-200 p-2 pt-0.5 pb-0.5 rounded-xl'}><i
                                className="fa-solid fa-minus text-sm"></i></button>
                            <span className={'ml-4 mr-4'}>{count}</span>
                            <button className={'bg-gray-200 p-2 pt-0.5 pb-0.5 rounded-xl'}><i
                                className="fa-solid fa-plus text-sm"></i></button>
                            <span className={'text-xl ml-3 text-black/80 font-semibold'}>{item.price}֏</span>
                        </div>
                    </div>
                </div>
                {item.type?
                    item.type.map((el, index)=> <div className={'pl-5 mt-2 text-black/90 font-semibold cursor-text'}
                                                     key={index}>
                        <div>{el.typeName}</div>
                        <div >{el.typeProducts.map((type, index) => <div className={'cursor-pointer'}>
                                <label className={"radio mt-3"} htmlFor={type.product} key={index}>
                                    <input type={'radio'} name={el.typeName} className={'cursor-pointer'} id={type.product}/>
                                    <span className={'text-black/70'}>{type.product}</span>
                                    <span className={"fake"}></span>
                                </label>
                            </div>)}
                        </div>
                    </div>) : ''}
                <input type={"text"}
                       className={' bg-gray-50 border-t border-t-gray-200 ml-5 mr-5 mt-4 w-[650px] h-[80px] outline-0 focus:border-t-red-500 text-sm p-3'}
                       placeholder={"Պատվերի մեկնաբանություն"}/>
                <div className={'text-center'}>
                    <button
                        className={'mt-2 mr-8 mb-4 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[430px]'}>
                        Ավելացնել Զամբյուղ
                    </button>
                </div>
            </div>
        </>
    )

}