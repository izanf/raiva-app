import React, { useState, useContext, createContext } from 'react'

import * as API from '../services/api'

type AuthenticationContextType = {
  isLoading: boolean,
  user: any,
  login: any,
  logout: any
}

type AuthenticationProviderProps = {
  children: React.ReactNode
}

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  login: () => null,
  logout: () => null
}

const AuthenticationContext = createContext<AuthenticationContextType>(INITIAL_STATE)

export const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState(null)

  const login = async (cpf: string) => {
    try {
      setIsLoading(true)
      const response = await API.login({ cpf })

      setUser(response)
    } catch (error) {
      console.error(error)
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
  }

  const ctx = {
    isLoading,
    user,
    error,
    login,
    logout
  }

  return (
    <AuthenticationContext.Provider value={ctx}>
      {children}
    </AuthenticationContext.Provider>
  )
}

const useAuthentication = () => {
  const context = useContext(AuthenticationContext)

  if (context === undefined) {
    throw new Error('useAuthentication must be used within a AuthenticationProvider')
  }

  return context
}

export default useAuthentication