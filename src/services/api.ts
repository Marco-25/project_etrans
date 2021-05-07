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

//[GET] https://api.copiloto.ai/kpi/v1/history/odometer  ?imei=867162026821918&from_timestamp=2021-04-30%2004:00:00&to_timestamp=2021-05-06%2003:59:59
//[GET] https://api.copiloto.ai/kpi/v1/history/horometer ?imei=867162026821918&from_timestamp=2021-04-30%2004:00:00&to_timestamp=2021-05-06%2003:59:59
//[GET] https://api.copiloto.ai/kpi/v1/history/odoliter  ?imei=867162026821918&from_timestamp=2021-04-30%2004:00:00&to_timestamp=2021-05-06%2003:59:59

//[POST] https://api.copiloto.ai/scores/v1/general/(vehicles/drivers)

