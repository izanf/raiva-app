import FontAwesome from '@expo/vector-icons/FontAwesome'

interface IconProps {
  name: keyof typeof FontAwesome.glyphMap
  size?: number
  color?: string
}

const Icon = ({ name, size, color }: IconProps) => (
  <FontAwesome name={name} size={size} color={color} />
)

export default Icon
