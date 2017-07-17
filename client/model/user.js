import Fetch from './fetch'

class UserModel extends Fetch {
  /**
   * 获取登录用户初始数据
   * @return {[Promise]} [description]
   */
  getIndex() {
    return this.send({
      url: '/api/getIndex',
      method: 'GET'
    })
  }

  /**
   * 注册
   * @param  {[type]} params [description]
   * @return {[Promise]}        [description]
   */
  doRegist(params) {
    return this.send({
      url: '/api/regist',
      params
    })
  }

  /**
   * 登录
   * @param  {[type]} params [description]
   * @return {[Promise]}        [description]
   */
  doLogin(params) {
    return this.send({
      url: '/api/login',
      params
    })
  }
  
  /**
   * 退出登录
   * @return {[Promise]} [description]
   */
  doLogout() {
    return this.send({
      url: '/api/logout'
    })
  }
}

export default new UserModel()