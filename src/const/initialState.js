import { nanoid } from 'nanoid'
import {
//   grassTexture,
  dirtTexture,
  logTexture,
  //   glassTexture,
  woodTexture
} from '../assets/textures'

export const initialStateWold = [
  {
    id: nanoid(),
    position: [1, 1, 1],
    texture: logTexture
  },
  {
    id: nanoid(),
    position: [10, 2, 2],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [12, 3, 6],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [22, 3, 6],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [28, 4, 7],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [36, 5, 8],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [40, 6, 10],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [41, 6, 10],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [40, 7, 10],
    texture: woodTexture
  },
  {
    id: nanoid(),
    position: [41, 7, 10],
    texture: woodTexture
  }
]

export const initialMaterial = dirtTexture
