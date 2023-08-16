import { useState } from 'react'


function App() {

  const [currentFont, setCurrentFont] = useState('Sans Serif')
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <div className=' flex justify-between items-center w-mobWidth m-mobMargin mt-4' >
        <img className=' w-7 h-8' src="/assets/images/logo.svg" alt="" />
        <div className=' w-48 flex justify-evenly items-center'>
          <div className=''>
            <div className=' relative'>
              <div className='flex justify-between items-center '  onClick={() => {
                setIsOpen(!isOpen)
              }}>
                <p className=' mr-3'>{currentFont}</p>
                <img src="/assets/images/icon-arrow-down.svg"/> </div>
              <ul className={`transition-all ${!isOpen ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 overflow-auto'} absolute top-7 left-0 right-0 m-auto duration-500`} >
                <li>Sans Serif</li>
                <li>Serif</li>
                <li>Mono</li>
              </ul>
            </div>
          
          </div>
          <div className=' w-20 flex justify-evenly items-center'>
            <input type="checkbox" />
            <img src="/assets/images/icon-moon.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
