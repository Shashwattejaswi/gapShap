import { useState } from 'react';
import '../App.css'

const MessegeBox=({updateMessege})=>
{
    let [messegeArray,updateMessegeArray]=useState(["hey","ok"]);
    
    function takeASendMessege(e)
    {
        let inputBox=e.target.previousSibling;
        let messege=inputBox.value;  // get value of input through the previousSibiling of btn i.e input
        inputBox.value=''; 
        updateMessegeArray((oldMessegeList)=>{
            let newMessegeList=oldMessegeList.map((a)=>a);
            newMessegeList.unshift(messege); // add at start because we repersent in reverse order(flex-direction) because we need messege in bottom 
            return newMessegeList;
        })
        
    }
    return(
        <div className="messegeBox">
                <div className="messegeField">
                    {messegeArray.map((a)=>{
                        return (<p className='messegeLeft'>{a}</p>)
                    })}
                </div>
                <div className="inputField">
                    <input type='text' name='messege'/>
                    <button onClick={(e)=>{e.target.previousSibling.value!="" &&takeASendMessege(e)}}>&#10097;&#10097;&#10097;</button>
                </div>
            </div>
    );
}
export default MessegeBox;