import Container from '../components/Container'

import { Box, Text, Button } from '../components'

const Prophylaxis = () => (
  <Container>
    <Box px="24px" py="16px" bg="yellow">
      <Text>Pré Exposição</Text>  
    </Box>
    <Box flexDirection="row">
      <Text>A vacina é indicada para pessoas com risco de exposição permanente ao vírus da raiva, durante atividades ocupacionais.</Text>
      <Text>Imagem aqui</Text>
    </Box>
    <Box gap="16px">
      <Button>Contato Indireto</Button>
      <Button>Acidente Leve</Button>
      <Button>Acidente Grave</Button>
    </Box>
    <Box>
      <Text>
        CÃO OU GATO SEM SUSPEITA DE RAIVA NO MOMENTO DA AGRESSÃO
      </Text>
    </Box>
    <Text>
      Lavar com água e sabão.
    </Text>
  </Container>
)

export default Prophylaxis
