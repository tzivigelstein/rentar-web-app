import { useState,useEffect, useRef, useContext } from 'react'
import appContext from '../context/app/appContext'

const useOnScreen = options => {
  const AppContext = useContext(appContext)
  const {showAuthBaner} = AppContext
  const [visible, setVisible] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible([ref,entry.isIntersecting])
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    showAuthBanner(visible)
  }, [ref, options])

  return [ref, visible]
}

export default useOnScreen
