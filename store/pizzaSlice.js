import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPizzas = createAsyncThunk('stoomApp/getPizzas', async () => {
	const response = await axios.get('/api/app/pizzas')
	const data = await response.data
	return data === undefined ? null : data
})

export const getPizzaToday = createAsyncThunk('stoomApp/getPizzaToday', async (params) => {
	const response = await axios.get('/api/app/pizzas/today', {params} )
	const data = await response.data
	return data === undefined ? null : data
})

const pizzasAdapter = createEntityAdapter({});

export const { 
	selectAll: selectPizzas, 
	selectById: selectPizzaById,
	selectEntities: selectPizzasEntities 
} = pizzasAdapter.getSelectors(
	state => state.stoom
);

const PizzaSizes = [
	{id: 1, title: 'Pequena - 15cm'},
	{id: 2, title: 'Média - 30cm'},
	{id: 3, title: 'Grande - 35cm'},
	{id: 4, title: 'Família - 45cm'}
]

const pizzaSlice = createSlice({
	name: 'stoomApp',
	initialState: pizzasAdapter.getInitialState({
		sizes: PizzaSizes,
		pizza: {},
		pizzas: [],
		totalPoints: 0,
		pizzaMass: '',
		pizzaSize: '',
		pizzaFillings: '',
	}),
	reducers: {
		setPoint: (state, action) => {
			state.totalPoints = 50;
		},
		setPizza: (state, action) => {
			state.pizza = action.payload;
		},
		setPizzaMass: (state, action) => {
			state.pizzaMass = action.payload;
		},
		setPizzaSize: (state, action) => {
			state.pizzaSize = action.payload;
		},
		setPizzaFillings: (state, action) => {
			state.pizzaFillings = action.payload;
		},
	},
	extraReducers: {
		[getPizzas.fulfilled]: pizzasAdapter.setAll,
		[getPizzaToday.fulfilled]: pizzasAdapter.setAll,
	}
})

export const { 
	setPoint, 
	setPizza,
	setPizzaMass,
	setPizzaSize,
	setPizzaFillings 
} = pizzaSlice.actions

export default pizzaSlice.reducer





