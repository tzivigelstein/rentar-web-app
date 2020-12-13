import { useEffect, useRef, useContext } from 'react'
import appContext from '../context/app/appContext'

const useOnScreen = options => {
  const AppContext = useContext(appContext)
  const { showAuthBaner } = AppContext

  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      showAuthBaner(entry.isIntersecting)
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return [ref]
}

export default useOnScreen
