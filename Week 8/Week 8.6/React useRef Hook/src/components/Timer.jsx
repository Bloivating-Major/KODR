import React, {useState, useEffect , useRef} from 'react'

const Timer = () => {

    const [count , setCount] = useState(0);

    const timerRef = useRef(null);

    useEffect(()=>{

       timerRef.current = setInterval(()=>{
        setCount(prev => prev + 1);
       }, 1000);

       return ()=>{
        clearInterval(timerRef.current);  // Clean up the timer when the component unmounts.
       }

    },[])


  return (
    <div>
            <h1>Timer in {count} seconds.</h1>
            <button onClick={()=> clearInterval(timerRef.current)} >Reset Timer</button>

    </div>
  )
}

export default Timer
