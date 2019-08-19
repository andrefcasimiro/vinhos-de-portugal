import wine_glass from "./wine_glass.jpg"

type Credit = {
  image: string,
  source: string,
  description_of_usage: string,
  author: string,
  author_page: string,
}

export const image_credits: Credit[] = [
  {
    image: wine_glass,
    source: "https://unsplash.com/photos/aF1NPSnDQLw",
    description_of_usage: "Used as the navbar banner",
    author: "Kym Ellis",
    author_page: "https://unsplash.com/@kymellis",
  },
]
