import React from 'react'

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
      
    } catch (error) {
      console.log("No se pudo iniciar sesion con google", error);
    }
  }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continuar con Google</button>
  )
}