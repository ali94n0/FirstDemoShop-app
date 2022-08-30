import React, { useEffect, useState } from 'react';
const FunctionalTimer = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            console.log("cdm");
            setCount(count + 1)
        }, 1000);
        return()=>{
            console.log('cwum');
            clearInterval(interval)
        }
    },[])
    return ( 
        <div>
            class interval
        </div>
     );
}
 
export default FunctionalTimer;

// class ClassTimer extends React.Component {
//     state={
//         count:0
//     };
//     componentDidMount() {
//         this.myTimer = setInterval(() => {
//             console.log(`updating ${this.state.count}`);
//             this.setState({count : this.state.count + 1})
//         }, 2000);
//     }
//     componentWillUnmount() {
//         console.log("cwum");
//         clearInterval(this.myTimer)
//     }
//     render() { 
//         return <div>
//             class interval
//         </div>;
//     }
// }
 
// export default ClassTimer;