import Fetch from './fetch'
export default class ChatModel extends Fetch {
	doRegist(params) {
		return this.send({
			url: '/api/regist',
			params
		})
	}

	doLogin(params) {
		return this.send({
			url: '/api/login',
			params
		})
	}
}