import styled from 'styled-components'
import { Box, Icon, Text } from '../components'

const Container = styled(Box) <{ isLast: boolean }>`
${({ isLast }) => isLast ? '' : `
  border-bottom-width: 1px;
  border-bottom-color: #999;
  border-bottom-style: solid;
`}
`

const UnitCard = ({ endereco, nome, isLast }) => {
  const { logradouro, bairro, numero, cep } = endereco

  return (
      <Container flexDirection="row" justifyContent="space-between" py="16px" px="8px" isLast={isLast}>
        <Box>
          <Text fontWeight="bold" mb="8px">{nome}</Text>
          <Text>{logradouro}{numero && `, ${numero}`}{bairro && ` - ${bairro}`}{cep && ` - ${cep}`}</Text>
        </Box>
        {/* <Icon name="arrow-right" size={24} color="primary" /> */}
      </Container>
  )
}

export default UnitCard
