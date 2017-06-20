import Fetch from './fetch'
export default class ChatModel extends Fetch {
	doRegist(params) {
		return this.send({
			url: '/api/regist',
			params
		})
	}
}