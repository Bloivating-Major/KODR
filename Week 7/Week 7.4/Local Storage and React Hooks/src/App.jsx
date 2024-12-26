import { useEffect, useRef, useState} from 'react'

const App = () => {

  const mainRef = useRef(null)

  const [Theme, setTheme] = useState(localStorage.getItem('theme') === null ? 'light' : localStorage.getItem('theme'));

  const changeTheme = () => {
    if(Theme === 'light'){
      localStorage.setItem('theme', 'dark');    
      setTheme('dark');
    }else{
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  useEffect(()=>{
    mainRef.current.setAttribute('id', Theme)
  }, [Theme])

  return (
    <div>
        <main ref={mainRef} className= {`'font-raleway font-bold text-xl flex gap-40 text-center  h-screen w-full flex-col items-center '`}>
          <nav className={`w-full flex justify-center items-center py-7 `}>
            <ul className='flex gap-10 '>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </nav>
            <button className={`px-5 py-3 shadow-xl rounded-md w-1/3 `} onClick={changeTheme}>Theme</button>
          <p>This is a simple React app.</p>
        </main>
    </div>
  )
}

export default App
