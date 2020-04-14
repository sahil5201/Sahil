import React from 'react'
import { GoogleLogin,GoogleLogout } from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux';
import { Login, Logout } from '../../redux/action/UserAction';

function LoginPage() {

  const user = useSelector((state)=>state.User);
  
  const dispatch = useDispatch();
  console.log(user);

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(Login(response.profileObj))
  }

  const logout = () =>{
    console.log("logout");
    dispatch(Logout)
  }
    return (
      <div className="Login-container">
      <GoogleLogin
    clientId="62144225234-aasn2udkh8gkfj30jbo5nipcopg74pem.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    />

    <GoogleLogout
      clientId="62144225234-aasn2udkh8gkfj30jbo5nipcopg74pem.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
    </div>
    )
}

export default LoginPage
