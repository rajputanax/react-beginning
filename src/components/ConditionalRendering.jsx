import React from 'react'

const ConditionalRendering = () => {
    let a=0;
    let isLogin=false;
    let answer;
    if(a > 0){
        answer='true';
        console.log("A is greater than 0")
    }else{
        answer='false';
        console.log("A is equal to 0")
    }
    // Method 1
    if(a > 0){
        console.log("A is greater than 0")
    }else{
        console.log("A is equal to 0")
    }
    // Method 2
    return(
        <>
    {isLogin ? <button>Edit</button> : <p>Guest User</p>}

    {/* // Method 3 And Logical Operator (&&) */}
      <br/>
    {!isLogin && <button>Edit</button>}
{/* 
    // Method 4 variable rendering */}

    <p>Your answer is {answer}</p>
    </>
)
}

export default ConditionalRendering