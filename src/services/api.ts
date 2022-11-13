import axios from "axios";
import { Serie } from "../@types/serie";
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

export async function getSeries()
{
  let series : Serie[] = []
  try{
    const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/series')
    series = response.data
  }
  catch(err : any){ console.log('Error ao consumir api getSeries ' + err.code) }

  return series
}

export async function getSerieByKey(key : string)
{
  let serie : Serie = {} as any;
  try{
    const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/series/' + key)
    serie = response.data
  }
  catch(err : any){ console.log('Err: getSeriesByKey: ' + key + ' : ' + err.response.data) }
  return serie
}

export async function getSeriesByName(name : string)
{
  let series : Serie[] = [];

  series.map((episode) => {

  } )
  try{
    const response = await api.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/series/search', {params: {name: name}})
    series = response.data
  }
  catch(err : any){ console.log('Err: getSeriesByName ' + name + ' : ' + err) }
  return series
}