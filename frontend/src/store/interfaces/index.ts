
export interface userStateInterface {
  loading: boolean;
  message: string;
  error: string;
  people: People[];
  person: People[];
}

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  films: [Film]
  homeworld: string
}

export interface Planet {
  name: string
  rotation_period: string
  orbital_period: string
  films: [Film]
}

export interface Film {
  title: String
  episode_id: number
  opening_crawl: String
  director: String
  producer: String
  release_date: String
}

export interface Person {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  films: [Film]
  homeworld: string
}