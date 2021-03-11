function createAnalytics() { // Создаем функцию, кот будет считать клики
	let counter = 0 // Создаем переменную, кот = 0
	let isDestryed = false

	const listener = () => counter++ // Добавляем стрелочную функцию, кот будет увеличивать кол-во на единицу

	document.addEventListener('click', listener) // Добавляем событие, кот будет реагировать на клики и добавляем к нему фукцию listener

	// Analytics будет возвращать два метода destroy - при вызове которого аналитика прекращает свое действие и getClicks - показывает, сколько раз кликнули по документу
	return {
		destroy() {
			document.removeEventListener('click', listener)
			isDestryed = true
		},

		getClicks() {
			if (isDestryed) {
				return 'Analytics is destroyed' // Если аналитика уничтожена, то возвращаем 'Analytics is destroyed'
			}
			return counter
		}
	}
}

window.analytics = createAnalytics() // Глобальной переменной присваиваем значение данной ф-ции, чтобы ей воспользоваться