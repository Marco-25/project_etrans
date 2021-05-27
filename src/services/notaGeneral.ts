import axios from "axios";

export const apiNota = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/general' // routes[post] - vehicles | drivers
});

export const apiNotaRanking = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/ranking' // routes[post] - vehicles | drivers
});


