import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const AuthWrapper = ({children}) => {
   const { isLoading, error } = useAuth0()

   if(isLoading){
    return <wrapper>
      <h1>Loading...</h1>
    </wrapper>
   }
   if(error){
    <wrapper>
      <h1>{error.message}</h1>
    </wrapper>
   }

  return (
  <div>
    {children}
  </div>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
