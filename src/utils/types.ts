export type Data = {
  page: number
  total_results: number
  total_pages: number
  results: Film[]
}

export type Film = {
  id: number
  title: string
  adult: boolean
  poster_path: string
  popularity: number
  vote_average: number
}
export type GenresType = {
  id: number
  name: string
}
export type GenresData = {
  genres: GenresType[]
}
export type CastType = {
  adult: boolean
  gender: number
  id: number
  title: string
  known_for_department: string
  biography: string
  place_of_birth: string
  birthday: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
  poster_path: string
  vote_average: number
}
export type Crew = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
}
export type Credits = {
  cast: CastType[]
  crew: Crew[]
}
export type MovieDetailsType = {
  backdrop_path: string
  genres: GenresType[]
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  title: string
  vote_average: number
  credits: Credits
}

export type MovieByActorType = {
  adult: boolean
  biography: string
  birthday: string
  known_for_department: string
  name: string
  place_of_birth: string
  popularity: number
  profile_path: string
  credits: Credits
}
