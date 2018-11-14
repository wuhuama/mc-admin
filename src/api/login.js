import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    params: data
  })
}

export function logout(accesstoken) {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}
