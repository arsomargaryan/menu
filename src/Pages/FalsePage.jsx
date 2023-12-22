import {useState} from "react";
import {useNavigate} from "react-router-dom";


export function FalsePage(){
    const [radio1, setRadio1] = useState(false)
    const [radio2, setRadio2] = useState(false)
    const navigate = useNavigate()

    const checkedFunc =(e)=>{
        if(e.target.checked){
            if(e.target.id ==='res1'){
               setRadio1(true)
               setRadio2(false)
            }else{
                setRadio1(false)
                setRadio2(true)
            }
        }
    }

    console.log(radio1, radio2)


    return <div className={'text-center'}>
        <div className={'h-[65px]'}></div>
        <div className={'mt-28  w-[450px] mx-auto '}>
            <div className={'font-semibold text-4xl leading-[50px]'}> Վերականգնել գաղտնաբառը</div>
            <form className={'text-left'}>
                <div>
                    <label className={"radio mt-16  "} htmlFor={'res1'}>
                        <input type={'radio'} name={"restore"} className={'cursor-pointer'} id={'res1'}
                               onChange={e => checkedFunc(e)}/>
                        <span className={'text-black'}>Վերականգնել գաղտնաբառը էլփոստով</span>
                        <span className={"fake"}></span>
                    </label>
                    {radio1 ? <input name={"email"} type={"email"}
                                     className={'w-[435px] mb-1 p-2 ml-2 mt-6 rounded-xl border outline-gray-500 '}
                                     placeholder={'Մուտքագրեք ձեր էլ-հասցեն'}/> : ''}
                </div>
                <div>
                    <label className={"radio mt-6"} htmlFor={'res2'}>
                        <input type={'radio'} name={"restore"} className={'cursor-pointer'} id={'res2'}
                               onChange={e => checkedFunc(e)}/>
                        <span className={'text-black'}>Վերականգնել գաղտնաբառը հեռախոսահամարով</span>
                        <span className={"fake"}></span>
                    </label>
                    {radio2 ? <input name={"email"} type={"text"}
                                     className={'w-[435px] mb-1 ml-2 p-2 mt-6 rounded-xl border outline-gray-500 '}
                                     placeholder={'55 12 34 56'}/> : ''}
                </div>
                <div className={'text-center'}>
                    <button type={'submit'}
                            className={'mt-10 mr-8 bg-red-600 rounded-xl h-11 text-white font-bold text-sm w-[260px] '}>
                        Ուղարկել հաստատման կոդը
                    </button>
                </div>
            </form>

            <div className={'flex justify-center items-center mt-14 mb-4'}>
                <div className={'text-sm text-black/80 font-semibold w-20 mr-16'}>Դեռ չունե՞ք հաշիվ</div>
                <button
                    className={'border border-black/20 p-3 pl-5 pr-5 ml-3 mr-8 rounded-xl text-black/90 font-semibold text-sm'}
                    onClick={() => navigate('/auth-sign-up')}>Գրանցում
                </button>
            </div>
        </div>
    </div>
}













