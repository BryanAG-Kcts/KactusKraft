import { useBox } from '@react-three/cannon'

export const Cubes = ({ boxesGame }) => {
  return boxesGame.map(cube => <Cube key={cube.id} position={cube.position} texture={cube.texture} />)
}

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  return (
    <mesh ref={ref}>
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={texture} />
    </mesh>
  )
}
