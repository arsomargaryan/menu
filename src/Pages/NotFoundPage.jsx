import {Link, useNavigate} from "react-router-dom";

export function NotFoundPage(){


    return <div>
        <div className={'h-[73px]'}></div>
        <div className={'text-center text-3xl text-red-700 font-semibold mt-3 mb-4'}>Վա՜յ</div>
        <div className={'text-center text-red-700 font-semibold mb-3'}>Այստեղ ոչինչ չկա</div>
        <div className={'text-center text-xs text-black/50 font-semibold'}>Մենք կարծես չենք կարողանում գտնել ձեր փնտրած էջը</div>
        <div className={'h-[420px]'}></div>
       <div className={'text-center'}> <Link to={'/'} ><button className={'text-white font-bold bg-red-700 rounded-[10px] p-2 pl-5 pr-5 mb-6'}>Գլխավոր էջ</button></Link></div>
    </div>
}