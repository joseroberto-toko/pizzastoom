import _ from '../@lodash';
import mock from './mock';

const pizzasDB = [
		{
			id: 1,
			title: 'Napolitana',
			image: 'pizza-napolitana.jpg',
            items: ['mussarela', 'peito de peru', 'palmito', 'parmesão', 'orégano'],
			today: true,
		},
		{
			id: 2,
			title: 'Nova-Iorquina',
			image: 'pizza-nova-iorque.jpg',
			items: ['mussarela', 'queijo ricota', 'tomates', 'alho granulado', 'pesto', 'orégano'],
			today: false,
		},
		{
			id: 3,
			title: 'Siciliana',
			image: 'pizza-siciliana.jpg',
			items: ['mussarela', 'champignons', 'bacon', 'azeitonas', 'cebola', 'salsa', 'orégano'],
			today: false,
		},
];

mock.onGet('/api/app/pizzas').reply(config => {
    return [200, pizzasDB];
});

mock.onGet('/api/app/pizzas/today').reply(request => {
	const response = _.find(pizzasDB, { today: true });
	return [200, response];
});

mock.onGet('/api/app/pizza').reply(request => {
	const { pizzaId } = request.params;
	const response = _.find(pizzasDB, { id: pizzaId });
	return [200, response];
});