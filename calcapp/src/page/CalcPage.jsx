import { useState } from "react";
import { Box } from "../components/Box";
import {Button} from "../components/Button"
import "../styles.css"
export const CalcPage =()=>{
    const [count , setCount] = useState('');
    const evalu = (x) => { 
        setCount(eval(x));
    }
    const update= (val) =>{
        if(val==='AC'){
            setCount('')
        }
        else if(val==='DEL'){
            var a = count.substring(0,count.length-1);
            setCount(a);

        }
        else {
            val === '='?evalu(count):setCount(count +val); 
        }
    }
    const buttons = [['(', ')' , '%','DEL',],[ '7' , '8' ,'9', '/'] ,[ '4', '5','6','*'],['1','2','3','-'],['0','.','=','+']];
    


    
    return (<>
    <Box val={count}/>
    <div className="calculator-grid" >
    <p></p>
     {buttons[0].map((c) => <Button className="btncolor" val={c} fn={update}/>)}
     
     {buttons[1].map((c) => <Button className="btncolor" val={c} fn={update}/>)}
     
     {buttons[2].map((c) => <Button className="btncolor" val={c} fn={update}/>)}
     
     {buttons[3].map((c) => <Button className="btncolor" val={c} fn={update}/>)}
     
     {buttons[4].map((c) => <Button className="btncolor" val={c} fn={update}/>)}
    </div>
    </>)
}
