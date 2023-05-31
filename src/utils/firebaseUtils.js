import {initializeApp} from "firebase/app";
import { GoogleAuthProvider , getAuth, signInWithPopup, } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBX-R6zaEpZO4JxKqFyA1wsrgYzN478YIY",
    authDomain: "fir-react-83886.firebaseapp.com",
    projectId: "fir-react-83886",
    storageBucket: "fir-react-83886.appspot.com",
    messagingSenderId: "72972814430",
    appId: "1:72972814430:web:9eed5f3d30ce0f7ca1cccf",
    measurementId: "G-4L33P3Y2Z0"
  };




export function initializeFirebase(){
    const app = initializeApp(firebaseConfig);

}


export function loginWithGoogle(){

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
                .then((result) => {
                  
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    
    let{user}=result;
    
    let userobj = {
        name : user?.displayName,
        email:user?.email,
        imageurl : user?.photoURL, 
        accessToken: user?.accessToken,
    }




    localStorage.setItem('user', JSON.stringify(userobj))
    window.location.href = '/'
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

  export const isLoggedIn=()=>{

    let userStr = localStorage.getItem('user')
    if (userStr){
        return true
    }

    else {
        return false
    }




  }
  export const getUser=()=>{
    let userStr=localStorage.getItem('user')
    if(userStr){
      return JSON.parse(userStr)
    }
  }




