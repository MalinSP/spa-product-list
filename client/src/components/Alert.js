import { useAppContext } from '../context/AppContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return <p className={`alert alert-${alertType}`}>{alertText}</p>
}

export default Alert
