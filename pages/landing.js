import React from 'react'
import Link from 'next/link'

const Landing = () => {
  return (
    <div>
      <div>
        <h1>Iniciar sesión</h1>
        <div>
          <form>
            <input type="text" />
            <input type="password" />
          </form>
        </div>
        <p>
          ¿No tienes una cuenta? <Link href="/signup">Registrate!</Link>
        </p>
      </div>
    </div>
  )
}

export default Landing
