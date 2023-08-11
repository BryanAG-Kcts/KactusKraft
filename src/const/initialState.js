import { nanoid } from 'nanoid'
import {
  grassImg,
  dirtImg,
  logImg,
  glassImg,
  woodImg,

  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
} from '../assets/textures'

export const texturesList = [
  grassTexture,
  dirtTexture,
  logTexture,
  glassTexture,
  woodTexture
]

export const previewTextures = [
  {
    src: grassImg,
    name: 'Césped'
  },
  {
    src: dirtImg,
    name: 'Tierra'
  },
  {
    src: logImg,
    name: 'Tronco'
  },
  {
    src: glassImg,
    name: 'Vidrio'
  },
  {
    src: woodImg,
    name: 'Madera'
  }
]

export const initialStateWold = [
  {
    id: nanoid(),
    position: [1, 0, 1],
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
    position: [40, 7, 11],
    texture: logTexture
  },
  {
    id: nanoid(),
    position: [41, 7, 11],
    texture: logTexture
  },
  {
    id: nanoid(),
    position: [40, 7, 10],
    texture: logTexture
  },
  {
    id: nanoid(),
    position: [41, 7, 10],
    texture: logTexture
  }
]

export const initialMaterial = dirtTexture
