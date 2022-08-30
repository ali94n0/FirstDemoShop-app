import withCounter from "../hoc/withCount";

const ClickCounter = ({count,CounterHandler}) => {
    
    
    return (
        <div>

            <p onClick={CounterHandler}>clicked {count} times</p>
        </div> 
     );
}
 
export default withCounter(ClickCounter,5);