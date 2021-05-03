export interface IDataTelemetry {

    indicators_summary: {
      operating_vehicles:number;
      total_vehicles:number;
      total_time_hrs:number;
      total_distance_kms:number;
      total_fuel_consumption_lts:number;
      fuel_rate_kms_per_lts:number;
      fuel_rate_lts_per_hrs:number;
      driving_time_hrs:number;
      efficient_driving_time_hrs:number;
      inefficient_driving_time_hrs:number;
      idle_time_hrs:number;
      stopped_acceleration_time_hrs:number;
      driving_time_pctg:number;
      efficient_driving_time_pctg:number;
      inefficient_driving_time_pctg:number;
      idle_time_pctg:number;
      stopped_acceleration_time_pctg:number;
      average_speed_kmh:number;
      efficient_driving_fuel_consumption_lts:number;
      idle_fuel_consumption_lts:number;
      ineficcient_driving_fuel_consumption_lts:number;
      stopped_acceleration_fuel_consumption_lts:number;
      efficient_driving_fuel_consumption_pctg:number;
      idle_fuel_consumption_pctg:number;
      inefficient_driving_fuel_consumption_pctg:number;
      stopped_acceleration_fuel_consumption_pctg:number;
      engine_brake_usage:number;
      service_brake_usage:number;
      service_and_engine_brake_usage:number;
      engine_brake_usage_distance_kms:number;
      service_brake_usage_distance_kms:number;
      service_and_engine_brake_usage_distance_kms:number;
      engine_brake_usage_distance_pctg:number;
      service_brake_usage_distance_pctg:number;
      service_and_engine_brake_usage_distance_pctg:number;
      total_trip_distance_kms:number;
      total_trip_distance_service_and_engine_braking_kms:number;
      total_trip_distance_only_service_braking_kms:number;
    },
    indicators_cmp_from_last_period: {
      cmp_operating_vehicles: string;
      cmp_total_time_hrs: string;
      cmp_total_distance_kms: string;
      cmp_total_fuel_consumption_lts: string;
      cmp_fuel_rate_kms_per_lts: string;
      cmp_fuel_rate_lts_per_hrs: string;
      cmp_driving_time_pctg: string;
      cmp_efficient_driving_time_pctg: string;
      cmp_inefficient_driving_time_pctg: string;
      cmp_idle_time_pctg: string;
      cmp_stopped_acceleration_time_pctg: string;
      cmp_average_speed_kmh: string;
      cmp_efficient_driving_fuel_consumption_pctg: string;
      cmp_idle_fuel_consumption_pctg: string;
      cmp_inefficient_driving_fuel_consumption_pctg: string;
      cmp_stopped_acceleration_fuel_consumption_pctg: string;
      cmp_engine_brake_usage_distance_pctg: string;
      cmp_service_brake_usage_distance_pctg: string;
      cmp_service_and_engine_brake_usage_distance_pctg: string;
    },
    indicators_by_vehicle: [
       {
        imei: string;
        status: number;
        vehicle_id: number;
        has_odoliter: boolean;
        operation_analysis: boolean;
        braking_analysis:number;
        start_horometer_hrs:number;
        end_horometer_hrs:number;
        total_time_hrs:number;
        start_odometer_kms:number;
        end_odometer_kms:number;
        total_distance_kms:number;
        start_odoliter_lts:number;
        end_odoliter_lts:number;
        total_fuel_consumption_lts:number;
        start_fuel_tank_level_pct:number;
        end_fuel_tank_level_pct:number;
        idle_time_hrs:number;
        driving_time_hrs:number;
        inefficient_driving_time_hrs:number;
        stopped_acceleration_time_hrs:number;
        efficient_driving_fuel_consumption_lts:number;
        idle_fuel_consumption_lts:number;
        ineficcient_driving_fuel_consumption_lts:number;
        stopped_acceleration_fuel_consumption_lts:number;
        service_and_engine_brake_usage:number;
        engine_and_service_brake_time_hrs:number;
        fuel_tank_level_lts:number;
        fuel_tank_consumption_lts:number;
        engine_brake_usage_distance_kms:number;
        service_brake_usage_distance_kms:number;
        service_and_engine_brake_usage_distance_kms:number;
        total_consumption_lts:number;
        dpf_level:number;
        total_stops:number;
        service_brake_usage:number;
        engine_brake_usage:number;
        total_trip_distance_kms:number;
        fuel_rate_kms_per_lts:number;
        fuel_rate_lts_per_hrs:number;
        efficient_driving_time_hrs:number;
        average_speed_kmh:number;
        driving_time_pctg:number;
        efficient_driving_time_pctg:number;
        inefficient_driving_time_pctg:number;
        idle_time_pctg:number;
        stopped_acceleration_time_pctg:number;
        engine_brake_usage_distance_pctg:number;
        service_brake_usage_distance_pctg:number;
        service_and_engine_brake_usage_distance_pctg:number;
        qty_trips:number;
        qty_adblue_level_event:number;
        qty_excess_idle_time_event:number;
        qty_dpf_level_event:number;
        qty_harsh_acceleration_event:number;
        qty_excess_rpm_event:number;
        qty_harsh_braking_event:number;
        qty_excess_speed_event:number;
        qty_engine_temperature_event:number;
      }
    ]


  }
