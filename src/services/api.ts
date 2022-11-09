import axios from "axios";
import { Movie } from "../@types/movie";
import https from 'https'

const api = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

// Auth
export async function loginUser(username: string, password: string)
{
  const response = await api.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/login', {
    username: username, password: password
  })
  return response.data
}
export async function registerUser(username: string, fullName: string, email: string ,password: string)
{
  const response = await api.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/register', {
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}
export async function getProfile(token: string)
{
  const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/profile', {headers: {'Authorization': `Bearer ${token}`}})
  return response.data
}
export async function updateProfile(username: string, fullName: string, email: string ,password: string)
{
  const response = await api.put(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/update', {
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}

// FLIX

export async function getMovies()
{
  let movies : Movie[] = []
  try{
    const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/movies')
    movies = response.data
  }
  catch(err : any){ console.log('Error ao consumir api getMovies ' + err.code) }

  return movies
}

export async function getMoviesByKey(key : string)
{
  let movie : Movie = {}
  try{
    const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/movies/' + key)
    movie = response.data
  }
  catch(err : any){ console.log('Err: getMoviesByKey: ' + key + ' : ' + err.response.data) }
  return movie
}