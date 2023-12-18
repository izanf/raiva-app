import { useEffect, useState } from "react"

import { Container, List } from "../components"

import { LoadingScreen } from '../components/Loading'

import * as API from '../services/api'
import UnitCard from "./UnitCard"


const HealthUnits = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [unities, setUnities] = useState([])

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setIsLoading(true)
        const response = await API.listHealthUnities()
  
        setUnities(response)
      } catch (error) {

      } finally {
        setIsLoading(false)
      }
    }

    fetchCases()
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Container px="0">
      <List
        data={unities}
        renderComponent={({ item, index }) => <UnitCard {...item} isLast={index === unities.length - 1} />}
      />
    </Container>
  )
}

export default HealthUnits
