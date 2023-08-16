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
              <ul className={`transition-all duration-400 overflow-hidden absolute top-8 right-1 rounded-lg shadow-md w-32 ${!isOpen ? 'h-0' : 'h-37 p-3'}` } >
                <li onClick={() => {
                  setCurrentFont('Sans Serif')
                  setIsOpen(!isOpen)
                }} className=' hover:text-hoverColor'>Sans Serif</li>
                <li onClick={() => {
                  setCurrentFont('Serif')
                  setIsOpen(!isOpen)
                }} className=' hover:text-hoverColor'>Serif</li>
                <li onClick={() => {
                  setCurrentFont('Mono')
                  setIsOpen(!isOpen)
                }} className=' hover:text-hoverColor'>Mono</li>
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
