class Post {
	constructor(title) {
		this.title = title
		this.date = new Date()
	}

	toString() {
		return SON.stringify({
			title: this.title,
			date: this.date.toJSON()
		})
	}
}