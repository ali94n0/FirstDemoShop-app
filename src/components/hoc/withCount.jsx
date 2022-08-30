import { useState } from "react";
const withCounter = (WrappedComponent,countValue) => {
    
        const UpdateComponent = (props)=>{
            const[count,setCount] = useState(0);
            const CounterHandler = ()=>{
            setCount(count + countValue)}
            return(
                <WrappedComponent  count={count} CounterHandler={CounterHandler} {...props}/>
            );
        };
        return UpdateComponent;
    ;
}
 
export default withCounter;