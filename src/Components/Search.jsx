

export function Search({searchFunc}){


    return <form className={'relative'}>
        <label htmlFor={'search'}><i className="fa-solid fa-magnifying-glass absolute top-4 left-3 cursor-text text-gray-400 "></i></label>
        <input type={"text"}
               className={'outline-red-500 border w-[630px] text-gray-400 mb-4 p-1.5 rounded-lg pl-10 font-serif'}
               placeholder={'Որոնել ռեստորան, խանութ'}
               name={'search'}
               id={'search'}
               onChange={(e)=>searchFunc(e.target.value)}
        />
        <button type={"submit"} className={'ml-4 pr-4 pl-4 bg-red-600 rounded-xl h-11 text-white font-bold text-sm'}>Որոնում</button>
    </form>
}