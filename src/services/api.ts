import axios from "axios";


export const api = axios.create({
  baseURL: 'https://api.copiloto.ai/telemetry/v2'
});

export const apiTelemetryKPI = axios.create({
  baseURL: 'https://api.copiloto.ai/kpi/v1/history' // routes[GET] - odometer | horometer | odoliter
});

export const apiNota = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/general' // routes[post] - vehicles | drivers
});

export const apiNotaRanking = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/ranking' // routes[post] - vehicles | drivers
});

export const apiNotaDetails = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/detailed_average' // routes[post] - vehicles | drivers
});

export const apiNotaMoreDetails = axios.create({
  baseURL: 'https://api.copiloto.ai/scores/v1/detail' // routes[post] - vehicles | drivers
});



