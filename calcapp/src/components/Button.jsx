export const Button =({val, classname, fn})=>{
    const clicked=()=> {
        {fn(val)}
        console.log('Clicked Happened', val);
    }

    return (<button id="hello" onClick ={clicked} className= {classname} >{val}</button>)

} 
