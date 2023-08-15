import { useState } from 'react'


function App() {


  return (
    <>
      <div className=' flex justify-between items-center w-mobWidth m-mobMargin m-4' >
        <img src="/assets/images/logo.svg" alt="" />
        <div className=' w-48 flex justify-evenly items-center'>
          <div><label htmlFor="variants"></label>
          <select name="variants" id="variants">
            <option value="option1">Sans Serif</option>
            <option value="option2 ">Serif</option>
            <option value="option3">Mono</option>
          </select>
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
