import { useState } from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Ballon = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: #e20202;
  transform: scale(${({ size }) => size});
`

function Home() {
  const [size, setSize] = useState(1)
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>Page d'accueil 👬</h1>
      <Ballon size={size} />
    </HomeContainer>
  )
}

export default Home
