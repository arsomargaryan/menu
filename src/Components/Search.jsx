

export function Search({searchFunc}){


    return <form className={'relative'}>
        <label htmlFor={'search'}><i className="fa-solid fa-magnifying-glass absolute top-3 left-3 cursor-text text-gray-400 "></i></label>
        <input type={"text"}
               className={'outline-red-500 border w-[630px] text-gray-400 mb-4 p-1.5 rounded-lg pl-10 font-serif'}
               placeholder={'Որոնել ռեստորան, խանութ'}
               name={'search'}
               id={'search'}
               onChange={(e)=>searchFunc(e.target.value)}
        />
    </form>
}