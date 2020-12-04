import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <div>
        <h1>Landing</h1>
        <Link href="/login">Iniciar sesión</Link>
        <Link href="/signup">Registrarme</Link>
      </div>
    </div>
  )
}

export default Landing
