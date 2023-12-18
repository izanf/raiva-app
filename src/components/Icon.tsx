import FontAwesome from '@expo/vector-icons/FontAwesome'
import theme from '../themes'

interface IconProps {
  name: keyof typeof FontAwesome.glyphMap
  size?: number
  color?: string
}

const Icon = ({ name, size, color }: IconProps) => (
  <FontAwesome name={name} size={size} color={theme.colors[color]} />
)

export default Icon
