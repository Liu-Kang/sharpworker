import urlUtils from 'url'

export default class Fetch {
  send(obj) {
    /**
     * 默认请求头
     */
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }

    let reqUrl = obj.url
    const reqMethod = obj.method ? obj.method.toUpperCase() : 'POST'

    const options = {
      method: reqMethod,
      credentials: 'include', // fetch竟然默认是不带cookie的...
      headers: defaultHeaders,
    }

    if (reqMethod === 'GET') {
      reqUrl = urlUtils.format({
        pathname: obj.url,
        query: obj.params,
      })
    } else {
      options.body = JSON.stringify(obj.params)
    }

    return new Promise((resolved, rejected) => {
      fetch(reqUrl, options)
        .then(response => response.json())
        .then((data) => {
          resolved(data)
        })
        .catch((err) => {
          rejected(err)
        })
    })
  }
}
