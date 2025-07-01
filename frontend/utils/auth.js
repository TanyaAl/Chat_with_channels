const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  console.log('getAuthHeader - user from localStorage:', user)
  if (user && user.token) {
    console.log('getAuthHeader - returning Authorization header with token.')

    return { Authorization: `Bearer ${user.token}` }
  }
  return {}
}

export default getAuthHeader
