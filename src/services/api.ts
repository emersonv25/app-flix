import axios from "axios";

export async function loginUser(username: string, password: string)
{
  const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/login', {
    username: username, password: password
  })
  return response.data
}
export async function registerUser(username: string, fullName: string, email: string ,password: string)
{
  const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/register', {
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}
export async function getProfile(token: string)
{
  const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/profile', {headers: {'Authorization': `Bearer ${token}`}})
  return response.data
}
export async function updateProfile(username: string, fullName: string, email: string ,password: string)
{
  const response = await axios.put(process.env.NEXT_PUBLIC_BACKEND_API_URL + '/auth/update', {
    username: username, fullName: fullName, email: email, password: password
  })
  return response.data
}