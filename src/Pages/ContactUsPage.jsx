import {OurInfo} from "../Components/OurInfo";


export function ContactUsPage(){


    return <div >
        <div className={'h-[73px]'}></div>
        <div className={'text-red-700 font-bold  text-2xl text-center mt-8 mb-8'}>Հետադարձ կապ</div>
        <form className={'mx-auto w-[600px] mb-24'}>
            <div className={'text-xs mb-2'}>Բաժին<span className={'text-red-600'}>*</span></div>
            <select className={'w-full mb-2 p-2 rounded-xl border outline-red-500'} >
                <option disabled={"disabled"} selected={'selected'} value={''}>Ընտրել բաժինը</option>
                <option>Մարքեթինգային առաջարկներ</option>
                <option>Օգնություն</option>
                <option>Բողոքներ/Առաջարկներ</option>
                <option>Վճարման խնդիրներ</option>
                <option>Մենյուի թարմացումներ</option>
                <option>Համագործակցություն ռեստորանների հետ</option>
                <option>համագործակցություն վարորդների հետ</option>
            </select>
            <div className={'text-xs mb-2'}>Էլ հասցե<span className={'text-red-600'}>*</span></div>
            <input type={"text"} className={'w-full mb-3 p-2 rounded-xl border outline-red-500'} placeholder={'Մուտքագրեք ձեր էլ-հասցեն'}/>
            <div className={'text-xs mb-2'}>Վերնագիր<span className={'text-red-600'}>*</span></div>
            <input type={"text"} className={'w-full mb-3 p-2 rounded-xl border outline-red-500'} placeholder={"Մուտքագրեք վերնագիրն այստեղ"}/>
            <div className={'text-xs mb-2'}>Հաղորդագրություն<span className={'text-red-600'}>*</span></div>
            <input type={"text"} className={'w-full mb-3 p-2 rounded-xl border outline-red-500 h-40'} placeholder={"Մուտքագրեք նամակն այստեղ"}/>
            <div className={'text-right'}>
                <button className={'mt-2 mr-4 pr-7 pl-7 bg-red-600 rounded-xl h-11 text-white text-sm font-bold'}>
                    <i className="fa-solid fa-paperclip mr-2"></i>
                    Կցել
                </button>
                <button className={'mt-2 pr-6 pl-6 bg-red-600 rounded-xl h-11 text-white text-sm font-bold'}>
                    Ուղարկել
                </button>
            </div>
        </form>
        <OurInfo />


    </div>
}