import { Tag as TagEnum } from '../utils/enums/Tags'

class Game {
  category: string
  description: string
  image: string
  system: string
  infos: string[]
  tagCategory: TagEnum
  tagSystem: TagEnum
  title: string
  id: number

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    system: string,
    infos: string[],
    tagCategory: TagEnum,
    tagSystem: TagEnum,
    title: string
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.system = system
    this.infos = infos
    this.tagCategory = tagCategory
    this.tagSystem = tagSystem
    this.title = title
  }
}

export default Game
