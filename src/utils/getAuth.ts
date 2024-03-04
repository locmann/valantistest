import { md5 } from 'js-md5'

export const getAuth = () => {
  const date = new Date()
  const str = date.toISOString().slice(0, 10).replace(/-/g, '')
  const password = 'Valantis'
  const res = md5(password.concat('_', str))
  return res
}
