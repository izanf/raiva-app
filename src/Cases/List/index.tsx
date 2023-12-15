import { useEffect, useState } from 'react'

import * as API from '../../services/api'

import { Container, List } from '../../components'

import ListItem from './ListItem'
import useAuthentication from '../../state/auth'

const data = [
  { id: 1, label: 'Case 1', type: 'type 1' },
  { id: 2, label: 'Case 2', type: 'type 2' }
]

const CasesList = () => {
  const { user } = useAuthentication()
  const [casos, setCasos] = useState([])

  const renderComponent = ({ item }) => (
    <ListItem {...item} />
  )

  useEffect(() => {
    const fetchCases = async () => {
      const response = await API.listCases(user.id)

      setCasos(response)
    }

    fetchCases()
  }, [])

  return (
    <Container>
      <List data={casos} renderComponent={renderComponent} />
    </Container>
  )
}

export default CasesList
