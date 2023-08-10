import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from './components/ground'
import { Pov } from './components/POV'
import { Player } from './components/player'
import { useStoreGame } from './hooks/store'
import { Cubes } from './components/cubes'

function App () {
  const { addCube, boxesGame } = useStoreGame()
  return (
    <>
      <Canvas>
        <Sky />
        <ambientLight intensity={1} />
        <Pov />
        <Physics>
          <Cubes boxesGame={boxesGame} />
          <Ground addCube={addCube} />
          <Player />
        </Physics>
      </Canvas>
      <span className='pointerInGame'>+</span>
    </>
  )
}

export default App
