import { useEffect, useState } from "react"

import { Container, List } from "../components"

import * as API from '../services/api'
import UnitCard from "./UnitCard"


const HealthUnits = () => {
  const [unities, setUnities] = useState([])

  useEffect(() => {
    const fetchCases = async () => {
      const response = await API.listHealthUnities()

      setUnities(response)
    }

    fetchCases()
  }, [])

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
