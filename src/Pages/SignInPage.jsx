import signInUP from "../images/sign-in-up.png"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


export function SignInPage(){
    const navigate =useNavigate()
    const [isMail, setIsMail] = useState(false)
    const [isPasswordShow, setIsPasswordShow] = useState(false)


    return <div  className={'flex bg-gray-50'}>
        <img src={signInUP} alt={"signPhoto"}/>
        <div className={'mt-8 w-full mr-20 ml-16'}>
            <div className={'text-right'}>
                <span className={'text-sm text-black/80 font-semibold '}>Դեռ չունե՞ք հաշիվ</span>
                <button
                    className={'border border-black/20 p-3 pl-5 pr-5 ml-3 rounded-xl text-black/90 font-semibold text-sm'}
                    onClick={() => navigate('/auth-sign-up')}>Գրանցում
                </button>
            </div>
            <div>
                <Link to={'/'} className={'text-red-600 text-5xl tracking-wider font-bold'}>menu</Link>
            </div>
            <div className={'text-4xl font-bold mt-4 mb-24'}>Մուտք</div>
            <form className={'w-[450px]'}>
                <div className={'text-xs mb-2 font-serif'}>Էլփոստի հասցեն կամ բջջային համարը</div>
                <div className={'relative'}>
                    <input type={"text"} className={'w-[450px] mb-3 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={isMail ? "Մուտքագրեք ձեր էլ հասցեն" : 'Մուտքագրեք ձեր բջջայինը'}/>
                    <i className="absolute top-[1px] right-[0.5px] cursor-pointer fa-solid fa-envelope bg-green-500 p-3 rounded-xl text-white"
                       onClick={() => setIsMail(!isMail)}></i>
                </div>
                <div className={'text-xs mb-2 font-serif'}>Գաղտնաբառ</div>
                <div className={'relative'}>
                    <input type={isPasswordShow ? "text":"password"} className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={'Մուտքագրեք ձեր գաղտնաբառը'}/>
                    <i className={(isPasswordShow ?"fa-solid fa-eye " :
                        "fa-solid fa-eye-slash") + " absolute top-[1px] right-[0.5px] cursor-pointer p-3 rounded-xl "}
                    onClick={()=>setIsPasswordShow(!isPasswordShow)}></i>
                </div>
                <Link to={'/reset/false'} className={'float-right text-sm underline text-gray-400 mb-4'}>Մոռացե՞լ եք գաղտնաբառը</Link>
                <button type={'submit'}
                        className={'mt-5 mr-8 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[450px]'}>
                    Մուտք
                </button>
                <div className={'flex justify-between items-center text-black/40 w-[450px] mt-10'}>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                    <span>Շարունակել</span>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                </div>
                <div className={'w-[450px] mt-10'}>
                    <input type={"checkbox"} id={'check'} className={'checkbox'}/>
                    <label htmlFor={"check"} className={'label text-sm'}>
                        Սեղմելով «Գրանցվել» կոճակը՝ Դուք ընդունում եք մեր
                        <span className={'text-red-600 underline p-1'}>Ընդհանուր դրույթները և պայմաններ</span>
                    </label>
                </div>
            </form>

        </div>

    </div>
}