import axios from "axios";

export const apiTelemetry = axios.create({
  baseURL: "https://api.copiloto.ai/telemetry/v2",
});

export const apiTelemetryEvent = axios.create({
  baseURL: "https://etrack-api.copiloto.ai/api/v1/events",
});

export const apiDetailedVehicle = axios.create({
  baseURL:
    "https://etrack-api.copiloto.ai/api/v1/indicator_summary/detailed_vehicle_report/",
});

// https://etrack-api.copiloto.ai/api/v1/events/time_tank_level_distance/
// {
//   from_timestamp: "2021-05-11 04:00:00",
//    to_timestamp: "2021-05-18 20:02:12",
//    imei: ["867162026821918"]
// }
