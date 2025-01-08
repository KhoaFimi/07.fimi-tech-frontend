import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://localhost:8080/api/',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
		'X-API-KEY': 'b8a66f7d-381e-47f8-afea-83c8b0a1fd3b',
		'X-PARTNER-CODE': 'FIMI'
	}
})
