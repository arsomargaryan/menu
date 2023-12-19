

export function HasFilterItem({item}){

    return <span className={'bg-red-400 text-white text-sm font-serif p-2 pl-3 pr-3 mr-2 rounded-2xl'}>
        {item}
       <label htmlFor={item}>
           <span className={'rounded-full bg-white/40 ml-2 hover:bg-white/70'}>
               <i className="fa-solid fa-x cursor-pointer text-red-400  p-1 pt-2 pb-2 text-xs" ></i>
           </span>
       </label>




    </span>
}