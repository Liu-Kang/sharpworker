import Fetch from './fetch'

class ChatModel extends Fetch {
	getIndex() {
		return this.send({
			url: '/getIndex',
			method: 'GET'
		})
	}

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

export default new ChatModel()