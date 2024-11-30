import { useEffect } from 'react';
import '../App.css'

const LogIn=()=>{
  
  
    return (
        <div className="logInBox">
            <input type="email" name="email"/>
            <input type="password" name="password"/>
            
            <button>ok</button>
        </div>
    );
}
export default LogIn;