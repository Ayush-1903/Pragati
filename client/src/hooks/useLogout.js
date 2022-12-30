import { useAuthContext } from './useAuthContext'
import { LOGOUT } from '../constants/constants'
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { authDispatch } = useAuthContext()
  const navigate = useNavigate();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    authDispatch({ type: LOGOUT })

    navigate('/auth', {replace: true})
  }

  return { logout }
}