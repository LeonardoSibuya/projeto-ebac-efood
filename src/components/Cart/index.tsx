import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  SideBar,
  Button,
  CartItem,
  PriceContainer
} from './styles'

import { formatPrice } from '../FoodCartComponent'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const removeItemCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeItemCart(item.id)} />
            </CartItem>
          ))}
        </ul>
        <PriceContainer>
          <h4>Valor total</h4>
          <span>{formatPrice(getTotalPrice())}</span>
        </PriceContainer>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
