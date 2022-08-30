import React from 'react';
// import "../.././app.module.css";


const Wrapper = (WrapperdComponent,className) => {
    return (
        (props) =>{
            return (
                <div className={className}>
                    <WrapperdComponent {...props}/>
                </div>
            );
        }
    );
};

export default Wrapper;