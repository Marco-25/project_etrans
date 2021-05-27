import axios from "axios";

export const apiTelemetryKPI = axios.create({
  baseURL: 'https://api.copiloto.ai/kpi/v1/history' // routes[GET] - odometer | horometer | odoliter
});
