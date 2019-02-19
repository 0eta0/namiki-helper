const serverdomain = 'namikihelper.mydns.jp'

export default {
  getRanking () {
    const url = `https://${serverdomain}/api/rank`
    return fetch(url, {
      mode: 'cors',
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res)
        }
        return res.json()
      })
      .then(res => {
        // console.log(res)
        return res
      })
      .catch(err => {
        console.error(err)
        return null
      })
  }
}
