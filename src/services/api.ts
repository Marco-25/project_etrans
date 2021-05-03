import axios from "axios";


export const api = axios.create({
  baseURL: 'https://api.copiloto.ai/telemetry/v2'
});

export const apiFuel = axios.create({
  baseURL: 'https://etrack-api.copiloto.ai/api/v1/indicator_summary/detailed_vehicle_report/'
});



// routes
// indicators_by_imei/
// indicators
