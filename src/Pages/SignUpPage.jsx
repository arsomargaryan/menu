
import signInUP from "../images/sign-in-up.png"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {LoginF} from "../Components/LoginF";
import {LoginG} from "../Components/LoginG";

export function SignUpPage(){
    const navigate=useNavigate()
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [isPasswordShow2, setIsPasswordShow2] = useState(false)
    const [number, setNumber] = useState('')
    const [numberDirty, setNumberDirty] = useState(false)
    const [numberError, setNumberError] = useState('Համարը չի կարող լինել դատարկ')
    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState("Գաղտնաբառը չի կարող լինել դատարկ")
    const [email, setEmail] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [emailError, setEmailError] = useState("Էլ․հասցեն չի կարող լինել դատարկ")
    const [passwordCheck, setPasswordCheck] = useState('')
    const [passwordCheckDirty, setPasswordCheckDirty] = useState(false)
    const [passwordCheckError, setPasswordCheckError] = useState("Գաղտնաբառը չի կարող լինել դատարկ")
    const [formValid, setFormValid] = useState(false)
    const [checked, setChecked] = useState(false)






    useEffect(() => {
        if(emailError || numberError || passwordError || passwordCheckError || !checked){
            setFormValid(false)
        }else {setFormValid(true)}
    }, [emailError,numberError,passwordError,passwordCheckError, checked]);

    const checkedFunc =(e)=>{
        setChecked(e.target.checked)
    }

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
            case 'passwordCheck':
                setPasswordCheckDirty(true)
                break
        }
    }

    const emailHandler =(e)=>{
        setEmail(e.target.value)
        const re =  /^(([^<>()[\],;:\s@"]+(\.[^<>()[\],;:\s@"]+)*)|(".+"))@(([^<>()[\],;:\s@"]+\.)+[^<>()[\],;:\s@"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Սխալ էլ․հասցե')
        }else{setEmailError('')}
    };

    const numberHandler =(e)=>{

        let numericInput = e.target.value.replace(/[^0-9]/g, '');
        setNumber(numericInput)
        if(numericInput.length !==8){
            setNumberError('Համարը պետք է լինի 8 նիշ')
            if(!numericInput){
                setNumberError("Համարը չի կարող լինել դատարկ")
            }
        }else{
            setNumberError('')
        }

    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 8 || e.target.value.length > 15){
            setPasswordError('Գաղտնաբառը պետք է 8-15 լինի նիշ')
            if(!e.target.value){
                setPasswordError('Գաղտնաբառը չի կարող լինել դատարկ')
            }
        }else {
            setPasswordError('')
        }
    }

    const passwordCheckHandler =(e)=>{
        setPasswordCheck(e.target.value)
        if(e.target.value !== password){
            setPasswordCheckError('Գաղտնաբառը չի համընկնում')
            if(!e.target.value){
                setPasswordCheckError("Գաղտնաբառը չի կարող լինել դատարկ")
            }
        }else{
            setPasswordCheckError('')
        }
    }



    return <div className={'flex bg-gray-50'}>
        <img src={signInUP} alt={"signPhoto"}/>
        <div className={'mt-8 w-full mr-20 ml-16'}>
            <div className={'text-right'}>
                <span className={'text-sm text-black/80 font-semibold '}>Արդեն գրանցվա՞ծ եք։</span>
                <button
                    className={'border border-black/20 p-3 pl-5 pr-5 ml-3 rounded-xl text-black/90 font-semibold text-sm'}
                    onClick={() => navigate('/auth-sign-in')}>Մուտք
                </button>
            </div>
            <div>
                <Link to={'/'} className={'text-red-600 text-5xl tracking-wider font-bold'}>menu</Link>
            </div>
            <div className={'text-4xl font-bold mt-1 mb-8'}>Գրանցում</div>
            <form className={'w-[450px]'}>
                <div className={'text-xs mb-2 font-serif'}>Հեռախոսահամար</div>
                <input value={number} name={"number"} type={"text"}
                       className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                       placeholder={'55 12 34 56'}
                       onBlur={e => blurHandler(e)}
                       onChange={e => numberHandler(e)}/>
                {(numberDirty && numberError) &&
                    <div className={'text-red-600 text-sm animate-pulse'}>{numberError}</div>}
                <div className={'text-xs mb-2 font-serif mt-3'}>էլ. հասցե</div>
                <input value={email} name={"email"} type={"email"}
                       className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                       placeholder={'Մուտքագրեք ձեր էլ-հասցեն'}
                       onBlur={e => blurHandler(e)}
                       onChange={e => emailHandler(e)}/>
                {(emailDirty && emailError) && <div className={'text-red-600 text-sm animate-pulse'}>{emailError}</div>}
                <div className={'text-xs mb-2 font-serif mt-3'}>Գաղտնաբառ</div>
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
                {(passwordDirty && passwordError) &&
                    <div className={'text-red-600 text-sm animate-pulse'}>{passwordError}</div>}
                <div className={'text-xs mb-2 font-serif mt-3'}>Հաստատել գաղտնաբառը</div>
                <div className={'relative'}>
                    <input value={passwordCheck} name={'passwordCheck'} type={isPasswordShow2 ? "text" : "password"}
                           className={'w-[450px] mb-1 p-2 rounded-xl border outline-gray-500 '}
                           placeholder={'Մուտքագրեք ձեր գաղտնաբառը'}
                           onBlur={e => blurHandler(e)}
                           onChange={e => passwordCheckHandler(e)}/>
                    <i className={(isPasswordShow2 ? "fa-solid fa-eye " :
                        "fa-solid fa-eye-slash") + " absolute top-[1px] right-[0.5px] cursor-pointer p-3 rounded-xl "}
                       onClick={() => setIsPasswordShow2(!isPasswordShow2)}></i>
                </div>
                {(passwordCheckDirty && passwordCheckError) &&
                    <div className={'text-red-600 text-sm animate-pulse'}>{passwordCheckError}</div>}
                <div className={'w-[450px] mt-3'}>
                    <input type={"checkbox"} id={'check'} className={'checkbox'}
                           onClick={e => checkedFunc(e)}/>
                    <label htmlFor={"check"} className={'label text-sm'}>
                        Սեղմելով «Գրանցվել» կոճակը՝ Դուք ընդունում եք մեր
                        <span className={'text-red-600 underline p-1'}>Ընդհանուր դրույթները և պայմաններ</span>
                    </label>
                </div>
                <button type={'submit'}
                        className={'mt-20 mr-8 rounded-xl h-11 text-white font-bold text-sm  w-[450px] ' + (!formValid ? 'bg-gray-500' : ' bg-red-600')}
                        disabled={!formValid}>
                    Գրանցում
                </button>
                <div className={'flex justify-between items-center text-black/40 w-[450px] mt-10'}>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                    <span>Շարունակել</span>
                    <span className={'w-[160px] outline outline-1 h-0 '}></span>
                </div>
            </form>
            <div className={"w-[450px] mt-7"}>
                <LoginF/>
                <LoginG/>
            </div>
        </div>


    </div>
}