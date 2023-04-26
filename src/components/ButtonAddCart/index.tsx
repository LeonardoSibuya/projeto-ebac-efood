import { Button } from './styles'

type Props = {
  children: string
}

const ButtonAddCart = ({ children }: Props) => {
  return <Button to={'/'}>{children}</Button>
}

export default ButtonAddCart
