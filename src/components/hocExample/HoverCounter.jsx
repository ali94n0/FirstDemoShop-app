import withCounter from "../hoc/withCount";

const HoverCounter = ({count,CounterHandler}) => {
    

    return ( 
        <div>
            <p onMouseOver={CounterHandler}>hovered {count} times</p>
        </div>
        
     );
}
 
export default withCounter(HoverCounter,10);