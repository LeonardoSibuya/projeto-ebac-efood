class Cart {
  image: string
  title: string
  description: string
  id: number

  constructor(image: string, title: string, description: string, id: number) {
    this.image = image
    this.title = title
    this.description = description
    this.id = id
  }
}

export default Cart
