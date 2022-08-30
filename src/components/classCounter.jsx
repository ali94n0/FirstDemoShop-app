import React, { useEffect, useState } from 'react';

const FunctionalCounter = () => {
    const[name,setName]=useState("");
    const[count,setCount] = useState(0);

useEffect(() => {
    document.title = `updated ${count} times!`;
    console.log("cdu...");
},[count])

    return ( 
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>count : {count}</button>
        </div>
     );
}
 
export default FunctionalCounter;

// class ClassCounter extends React.Component {
//     state={
//         name:"",
//         count: 0,
//     };
//     componentDidMount() {
//         document.title = `clicked ${this.state.count} times`;
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.count !== this.state.count){
//             console.log("component did update!");
//             document.title = `updated ${this.state.count} times`;
//         }
//     }

//     render() { 
//         return <div>
//             <input type="text" onChange={(e) => this.setState({name : e.target.value})}/>
//             <button onClick={() => this.setState({ count : this.state.count + 1})}>{this.state.count}</button>
//         </div>;
//     }
// }
 
// export default ClassCounter;