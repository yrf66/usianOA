import service from '@/utils/request'

export function loginApi(data) {
  return service({
    url: '/sys/login',
    method: 'POST',
    data
  })
}

export function getUserInfoApi() {
  return service({
    url: '/sys/profile',
    method: 'GET'
  })
}

export function changePasswordApi(data) {
  return service({
    url: '/sys/user/updatePass',
    method: 'PUT',
    data
  })
}

