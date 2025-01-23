import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetFightQuery,
  useGetRPGQuery,
  useGetSimulationQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionQuery()
  const { data: rpgGames } = useGetRPGQuery()
  const { data: sportsGames } = useGetSportsQuery()
  const { data: fightGames } = useGetFightQuery()
  const { data: simulationGames } = useGetSimulationQuery()

  if (actionGames && rpgGames && sportsGames && fightGames && simulationGames) {
    return (
      <>
        <ProductsList
          id="rpg"
          games={rpgGames}
          title="RPG"
          background="black"
        />
        <ProductsList
          id="action"
          games={actionGames}
          title="Action"
          background="gray"
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
        />
        <ProductsList
          id="sports"
          games={sportsGames}
          title="Esportes"
          background="gray"
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
        />
      </>
    )
  }

  return <h4>Loading...</h4>
}

export default Categories
