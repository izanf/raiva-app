import { useEffect, useState } from 'react'

import * as API from '../../services/api'

import { Container, List } from '../../components'

import ListItem from './ListItem'
import useAuthentication from '../../state/auth'
import { LoadingScreen } from '../../components/Loading'

const CasesList = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuthentication()
  const isByUser = route?.params?.isByUser
  const [casos, setCasos] = useState([])

  const renderComponent = ({ item }) => (
    <ListItem {...item} />
  )

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setIsLoading(true)

        const response = await API.listCases(isByUser && user.id)
        setCasos(response)
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
    <Container>
      <List data={casos} renderComponent={renderComponent} />
    </Container>
  )
}

export default CasesList
