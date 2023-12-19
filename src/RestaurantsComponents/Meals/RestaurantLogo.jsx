

export function RestaurantLogo({logo}){




    return <div className={'flex ml-6 mt-10'}>
        <div className={' rounded-xl shadow-md  border border-gray-100'}>
            <div> <img src={logo} alt={"nkar"}
                       className={'rounded-t-xl cursor-pointer'}
                         /> </div>
        </div>



    </div>
}