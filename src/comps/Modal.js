import React from 'react'

const  Modal=({selectedImage}) =>{
    return (
        <div>
             <img src={selectedImage} alt="enlarged pic"/>
        </div>
    )
}

export default Modal;