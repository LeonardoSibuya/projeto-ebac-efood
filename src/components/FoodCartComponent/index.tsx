import { useState } from 'react'
import { useDispatch } from 'react-redux'

import botaoFechar from '../../assets/images/fechar.png'

import { add, open } from '../../store/reducers/cart'

import {
  FoodContainer,
  InfoContainer,
  TitleContent,
  Content,
  Modal,
  ModalContainer,
  ButtonCart,
  ImgBotaoFechar
} from './styles'

interface modalState extends CardapioItem {
  isVisible: boolean
}

type Food = {
  items: CardapioItem[]
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const FoodCartComponent = ({ items }: Food) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const AddToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      id: 0,
      nome: '',
      porcao: '',
      preco: 0
    })
  }

  const getDescription = (descricao: string) => {
    if (descricao.length > 100) {
      return descricao.slice(0, 97) + '...'
    }
    return descricao
  }

  return (
    <>
      <FoodContainer className="container">
        {items.map((food) => (
          <li key={food.id}>
            <img src={food.foto} />
            <InfoContainer>
              <TitleContent>
                <h3>{food.nome}</h3>
              </TitleContent>
              <p>{getDescription(food.descricao)}</p>
              <ButtonCart
                onClick={() => {
                  setModal({
                    isVisible: true,
                    descricao: food.descricao,
                    foto: food.foto,
                    id: food.id,
                    nome: food.nome,
                    porcao: food.porcao,
                    preco: food.preco
                  })
                }}
              >
                Adicionar ao carrinho
              </ButtonCart>
            </InfoContainer>
          </li>
        ))}
      </FoodContainer>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContainer className="container">
          <div>
            <img src={modal.foto} alt="imagem pizza" onClick={closeModal} />
          </div>
          <Content>
            <h2>{modal.nome}</h2>
            <p>{modal.descricao}</p>
            <span>Serve {modal.porcao}</span>
            <ButtonCart onClick={() => AddToCart(modal)}>
              Adicionar ao carrinho - {formatPrice(modal.preco)}
            </ButtonCart>
          </Content>
          <ImgBotaoFechar
            src={botaoFechar}
            alt="Botão fechar"
            onClick={closeModal}
          />
        </ModalContainer>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default FoodCartComponent
