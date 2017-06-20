export default class Fetch {
	send(obj) {
		/**
		 * 默认请求头
		 */
		const defaultHeaders = {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'X-Requested-With': 'XMLHttpRequest'
		}

		let options = {
			method: 'POST' || obj.method.toUppercase(),
			headers: defaultHeaders
		}

		if (obj.params) {
			options.body = JSON.stringify(obj.params)
		}

		return new Promise((resolved, rejected) => {
			fetch(obj.url, options)
				.then(response => response.json())
				.then(data => {
					resolved(data)
				})
				.catch(err => {
					rejected(err)
				})
		})
	}
}