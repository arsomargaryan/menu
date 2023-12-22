import signInUP from "../images/sign-in-up.png"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {LoginG} from "../Components/LoginG";
import GoogleLogin, {GoogleLogout} from "react-google-login";
import {gapi} from "gapi-script";
import {LoginF} from "../Components/LoginF";
export function SignInPage(){
    const navigate =useNavigate()
    const [isMail, setIsMail] = useState(false)
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [number, setNumber] = useState('')
    const [numberDirty, setNumberDirty] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("Գաղտնաբառը չի կարող լինել դատարկ")
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailNumberError, setEmailNumberError] = useState("Էլ․հասցեն կամ բջջայինը չի կարող լինել դատարկ")
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        function start(){
            gapi.client.init({
                clientId: "835121806973-tr90hm3cf2to99b48mljtcm98v99jrg1.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client:auth2', start)
    }, );


    useEffect(() => {
        if(emailNumberError || passwordError ){
            setFormValid(false)
        }else {setFormValid(true)}
    }, [emailNumberError,passwordError]);

    const blurHandler =(e)=>{
        switch (e.target.name){
            case 'number':
                setNumberDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break

        }
    }
    const emailHandler =(e)=>{
        setEmail(e.target.value)
        const re =  /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailNumberError('Սխալ էլ․հասցե')
        }else{setEmailNumberError('')}
    };

    const numberHandler =(e)=>{

        let numericInput = e.target.value.replace(/[^0-9]/g, '');
        setNumber(numericInput)
            if(!numericInput){
                setEmailNumberError("Համարը չի կարող լինել դատարկ")
            } else{
            setEmailNumberError('')
        }

    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
            if(!e.target.value){
                setPasswordError('Գաղտնաբառը չի կարող լինել դատարկ')
            } else {
            setPasswordError('')
        }
    }







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
                    {
                        isMail ?<input value={email} name={"email"} type={"email"} className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                                       placeholder={'Մուտքագրեք ձեր էլ-հասցեն'}
                                       onBlur={e=>blurHandler(e)}
                                       onChange={e=> emailHandler(e)}/> :
                            <input value={number} name={"number"} type={"text"}
                                   className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                                   placeholder={'Մուտքագրեք ձեր բջջայինը'}
                                   onBlur={e => blurHandler(e)}
                                   onChange={e => numberHandler(e)}/>
                    }
                    {(numberDirty && emailDirty && emailNumberError) && <div className={'text-red-600 text-sm animate-pulse'}>{emailNumberError}</div>}
                    <i className="absolute top-[1px] right-[0.5px] cursor-pointer fa-solid fa-envelope bg-green-500 p-3 rounded-xl text-white"
                       onClick={() => setIsMail(!isMail)}></i>
                </div>
                <div className={'text-xs mb-2 font-serif'}>Գաղտնաբառ</div>
                <div className={'relative'}>
                    <input value={password} name={"password"} type={isPasswordShow ? "text" : "password"}
                           className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={'Մուտքագրեք ձեր գաղտնաբառը'}
                           onBlur={e => blurHandler(e)}
                           onChange={e => passwordHandler(e)}/>
                    <i className={(isPasswordShow ? "fa-solid fa-eye " :
                        "fa-solid fa-eye-slash") + " absolute top-[1px] right-[0.5px] cursor-pointer p-3 rounded-xl "}
                       onClick={() => setIsPasswordShow(!isPasswordShow)}></i>
                </div>
                {(passwordDirty && passwordError) && <div className={'text-red-600 text-sm animate-pulse'}>{passwordError}</div>}
                <Link to={'/reset/false'} className={'float-right text-sm underline text-gray-400 mb-4'}>Մոռացե՞լ եք գաղտնաբառը</Link>
                <button type={'submit'}
                        className={'mt-5 mr-8 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[450px] '+(!formValid?'bg-gray-500':'')}
                        disabled={!formValid}>
                    Մուտք
                </button>
                <div className={'flex justify-between items-center text-black/40 w-[450px] mt-10'}>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                    <span>Շարունակել</span>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                </div>
            </form>
            <div className={"w-[450px] mt-7"}>
                <LoginF />
                <LoginG />
            </div>
        </div>

    </div>
}