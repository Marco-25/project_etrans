import axios from "axios";

export const apiNota = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/general' // routes[post] - vehicles | drivers
});

export const apiNotaDetails = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/detailed_average' // routes[post] - vehicles | drivers
});

export const apiNotaMoreDetails = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/detail' // routes[post] - vehicles | drivers
});
