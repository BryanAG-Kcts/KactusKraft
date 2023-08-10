import { useRef, useState } from 'react'
import { initialStateWold, initialMaterial } from '../const/initialState'
import { nanoid } from 'nanoid'

export const useStoreGame = () => {
  const [boxesGame, setBoxesGame] = useState(initialStateWold)
  const selectMaterial = useRef(initialMaterial)

  const addCube = (x, y, z) => {
    const newCube = {
      id: nanoid(),
      position: [x, y, z],
      texture: selectMaterial.current
    }

    const newCubes = [...boxesGame, newCube]

    setBoxesGame(newCubes)

    console.log(boxesGame)
  }

  return {
    boxesGame,
    addCube
  }
}
