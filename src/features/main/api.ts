import { httpClient } from 'app/axios/http-client'

export const fetchFilters = () => httpClient.get('/filters')

export const fetchDefinitions = () => httpClient.get('/definitions')
