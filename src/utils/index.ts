import * as enums from './enums/Tags'
import { Game } from '../pages/Home'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const systemTagIdentifier = (games: Game) => {
  if (games.details.system === 'PS5') return enums.Tag.PS5
  if (games.details.system === 'SWITCH') return enums.Tag.SWITCH
  if (games.details.system === 'XBOX') return enums.Tag.XBOX
  if (games.details.system === 'Steam') return enums.Tag.STEAM
  if (games.details.system === 'windows') return enums.Tag.WINDOWS

  return enums.Tag.WINDOWS
}

export const categoryTagIdentifier = (games: Game) => {
  if (games.details.category === 'Ação') return enums.Tag.ACTION
  if (games.details.category === 'Esporte') return enums.Tag.SPORTS
  if (games.details.category === 'Simulação') return enums.Tag.SIMULATION
  if (games.details.category === 'Aventura') return enums.Tag.ADVENTURE
  if (games.details.category === 'Luta') return enums.Tag.FIGHT
  if (games.details.category === 'FPS') return enums.Tag.FPS
  if (games.details.category === 'RPG') return enums.Tag.RPG

  return enums.Tag.NUMBER
}
