import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

ReactDOM.render(
  <FacebookLogin
    appId="1242735582757658"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />,
  document.getElementById('demo')
);

