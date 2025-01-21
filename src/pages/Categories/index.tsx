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
        <ProductsList games={rpgGames} title="RPG" background="black" />
        <ProductsList games={actionGames} title="Action" background="gray" />
        <ProductsList games={fightGames} title="Luta" background="black" />
        <ProductsList games={sportsGames} title="Esportes" background="gray" />
        <ProductsList
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
