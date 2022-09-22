import React from 'react'
import './Modal.css'

type Props = {
  children: React.ReactNode
}

const EditModal = ({children}: Props) => {

  const closeModal = (e: React.MouseEvent):void =>{
    const modal = document.getElementById('modal')
    modal?.classList.add("hide")
  }

  return (
    <div id='modal' className='hide'>
    <div className='fade' onClick={closeModal}></div>
      <div className='modal'>
        <h2>Texto</h2>
        {children}
    </div>
  </div>
  )
}

export default EditModal