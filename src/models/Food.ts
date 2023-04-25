class Food {
  image: string
  tagInfos: string[]
  title: string
  rating: number
  description: string
  id: number

  constructor(
    image: string,
    tagInfos: string[],
    title: string,
    rating: number,
    description: string,
    id: number
  ) {
    this.image = image
    this.tagInfos = tagInfos
    this.title = title
    this.rating = rating
    this.description = description
    this.id = id
  }
}

export default Food
