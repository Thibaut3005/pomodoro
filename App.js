import React ,{useState, useEffect} from 'react'
import './App.css'

export default function App() {

    const [time,setTime] = useState((600))
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(false)
    const [initialTime, setinitialItime] =useState(time)

    
    
    let minute = Math.floor(time/60)
    
  let seconde = Math.floor(time%60)
  let status = <i class="fas fa-play"></i>
  if( start){
    status = <i class="fas fa-pause"></i>
    
  }else{
    status = <i class="fas fa-play"></i>
  }
  if(seconde<10){
    seconde =`0${seconde}`
  }
    
    
    

    useEffect(() => {
        if (start) {
          if (time > 0) {
            setTimeout(() => setTime(time - 0.5), 500);
          } else {
            setTime(0);
            console.log("time up");
          }
        }
    
      }, [time, start])

      useEffect(() =>{
          if (reset){
              setTime( initialTime);
              setStart (false)
              setReset (false)
            }
      },[reset])

      const resetCount = () => {
          setReset(true)
          console.log(time);
              console.log(initialTime);
      }
    
      const startCount = () => { 
      
        if (start == false){
          setinitialItime (time)
        
            setStart(true)
             status = <i class="fas fa-play"></i>
           
            
        }else{
          
            setStart(false)
            
           
            
        }
      }
    

  
    function plus (){
        setTime(prevCount => prevCount + 60)
    }
    function minus (){
        setTime(prevCount => prevCount - 60)
    }
    
    return (
        <div id='pomodoro'>
            <span id='timer'>{minute}:{seconde}</span>
            <div><button onClick = {minus} className='operation'><i class="fas fa-minus"></i></button>
            <button onClick = {plus} className='operation'><i class="fas fa-plus"></i></button>
            <button onClick={startCount} >{status}</button>
            <button onClick = {resetCount}><i class="fas fa-undo"></i></button></div>
            
        </div>
    )
}
