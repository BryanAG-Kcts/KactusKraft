import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import * as THREE from 'three'

const colorTransparent = new THREE.Color('#CBE6C8')

export const Cubes = ({ boxesGame, removeCube }) => {
  return boxesGame.map(cube => <Cube key={cube.id} position={cube.position} texture={cube.texture} removeCube={removeCube} />)
}

export const Cube = ({ position, texture, removeCube }) => {
  const [hoverEffect, setHoverEffect] = useState(false)
  const [ref] = useBox(() => ({
    type: 'Static',
    position
  }))

  return (
    <mesh
      ref={ref}
      onPointerMove={e => {
        e.stopPropagation()
        setHoverEffect(true)
      }}
      onPointerOut={e => {
        e.stopPropagation()
        setHoverEffect(false)
      }}
      onClick={e => {
        e.stopPropagation()
        const [x, y, z] = ref.current.position
        removeCube(x, y, z)
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial attach='material' map={texture} color={hoverEffect ? colorTransparent : 'white'} transparent />
    </mesh>
  )
}
