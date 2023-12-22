import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';



export function LoginF(){

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <FacebookLogin
            appId="5574273769363885"
            icon={<i className="fa-brands fa-facebook-f mr-2"></i>}
            textButton={"Facebook"}
            fields="name,email,picture"
            cssClass="my-facebook-button-class"
            callback={responseFacebook} />
    )

}