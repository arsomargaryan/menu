
import signInUP from "../images/sign-in-up.png"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";

export function SignUpPage(){
    const navigate=useNavigate()
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [isPasswordShow2, setIsPasswordShow2] = useState(false)

    return <div className={'flex bg-gray-50'}>
        <img src={signInUP} alt={"signPhoto"}/>
        <div className={'mt-8 w-full mr-20 ml-16'}>
            <div className={'text-right'}>
                <span className={'text-sm text-black/80 font-semibold '}>Արդեն գրանցվա՞ծ եք։</span>
                <button
                    className={'border border-black/20 p-3 pl-5 pr-5 ml-3 rounded-xl text-black/90 font-semibold text-sm'}
                onClick={()=>navigate('/auth-sign-in')}>Մուտք
                </button>
            </div>
            <div>
                <Link to={'/'} className={'text-red-600 text-5xl tracking-wider font-bold'}>menu</Link>
            </div>
            <div className={'text-4xl font-bold mt-1 mb-8'}>Գրանցում</div>
            <form className={'w-[450px]'}>
                <div className={'text-xs mb-2 font-serif'}>Հեռախոսահամար</div>
                <input type={"text"} className={'w-[450px] mb-3 p-2 rounded-xl border outline-gray-500 '}
                       placeholder={'55 12 34 56'}/>
                <div className={'text-xs mb-2 font-serif'}>էլ. հասցե</div>
                <input type={"text"} className={'w-[450px] mb-3 p-2 rounded-xl border outline-gray-500 '}
                       placeholder={'Մուտքագրեք ձեր էլ-հասցեն'}/>
                <div className={'text-xs mb-2 font-serif'}>Գաղտնաբառ</div>
                <div className={'relative'}>
                    <input type={isPasswordShow?"text":"password"} className={'w-[450px] mb-3 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={'Մուտքագրեք ձեր գաղտնաբառը'}/>
                    <i className={(isPasswordShow ? "fa-solid fa-eye " :
                        "fa-solid fa-eye-slash") + " absolute top-[1px] right-[0.5px] cursor-pointer p-3 rounded-xl "}
                       onClick={() => setIsPasswordShow(!isPasswordShow)}></i>
                </div>
                <div className={'text-xs mb-2 font-serif'}>Հաստատել գաղտնաբառը</div>
                <div className={'relative'}>
                    <input type={isPasswordShow2 ? "text":"password"} className={'w-[450px] mb-3 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={'Մուտքագրեք ձեր գաղտնաբառը'}/>
                    <i className={(isPasswordShow2 ? "fa-solid fa-eye " :
                        "fa-solid fa-eye-slash") + " absolute top-[1px] right-[0.5px] cursor-pointer p-3 rounded-xl "}
                       onClick={() => setIsPasswordShow2(!isPasswordShow2)}></i>
                </div>
                <div className={'w-[450px] '}>
                    <input type={"checkbox"} id={'check'} className={'checkbox'}/>
                    <label htmlFor={"check"} className={'label text-sm'}>
                        Սեղմելով «Գրանցվել» կոճակը՝ Դուք ընդունում եք մեր
                        <span className={'text-red-600 underline p-1'}>Ընդհանուր դրույթները և պայմաններ</span>
                    </label>
                </div>
                <button type={'submit'} className={'mt-20 mr-8 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[450px]'}>
                    Գրանցում
                </button>
                <div className={'flex justify-between items-center text-black/40 w-[450px] mt-10'}>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                    <span >Շարունակել</span>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                </div>
            </form>

        </div>


    </div>
}