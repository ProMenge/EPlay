import ProductsList from '../../components/ProductsList'

import {
  useGetActionQuery,
  useGetFightQuery,
  useGetRPGQuery,
  useGetSimulationQuery,
  useGetSportsQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } = useGetActionQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRPGQuery()
  const { data: sportsGames, isLoading: isLoadingSports } = useGetSportsQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationQuery()

  if (actionGames && rpgGames && sportsGames && fightGames && simulationGames) {
    return (
      <>
        <ProductsList
          id="rpg"
          games={rpgGames}
          title="RPG"
          background="black"
          isLoading={isLoadingRPG}
        />
        <ProductsList
          id="action"
          games={actionGames}
          title="Action"
          background="gray"
          isLoading={isLoadingAction}
        />
        <ProductsList
          id="fight"
          games={fightGames}
          title="Luta"
          background="black"
          isLoading={isLoadingFight}
        />
        <ProductsList
          id="sports"
          games={sportsGames}
          title="Esportes"
          background="gray"
          isLoading={isLoadingSports}
        />
        <ProductsList
          id="simulation"
          games={simulationGames}
          title="Simulação"
          background="black"
          isLoading={isLoadingSimulation}
        />
      </>
    )
  }
}

export default Categories
