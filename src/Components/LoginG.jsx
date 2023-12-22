import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

export function LoginG (){
    const responseGoogle = (response) => {
        console.log(response)}
    return (
            <GoogleLogin
                clientId="835121806973-tr90hm3cf2to99b48mljtcm98v99jrg1.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <button onClick={renderProps.onClick}
                            className={'w-full  mb-1 mt-5 p-2 rounded-xl border outline-gray-500 font-semibold '}>
                        <i className="fa-brands fa-google mr-2 text-[#17ab57]"></i>
                        Google
                    </button>
                )}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />

            )

}
