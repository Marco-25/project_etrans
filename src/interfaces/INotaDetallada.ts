export interface INotaDetallada {
    all_positions: IAllPositions[];
    no_data: boolean;
    score_type_ranking: string;
}

export interface IAllPositions {
  current_period_grade:number;
  previous_period_grade: number;
  status: string;
  ranking_position: number;
  id: string | number;
  details: IDetails[];
  telemetry_kpis: IKpisTelemetry[];
}

export interface IDetails {
  current_period: number;
  last_period: number;
  key_description: string;
  status: string;
  subscores: ISubScore[];
}

export interface ISubScore {
    average_grade: number,
    last_period_grade: number,
    status: string,
    subscore_name: string,
    kpis: IKpis[];
}

interface IKpis {
    value: number,
    last_period_value: number,
    status: string,// up,
    kpi_name: string,//excessive_consumption_lts
}

interface IKpisTelemetry {
  consumption_performance_Lhr: number,
  consumption_performance_kmL:number,
  operating_hours_hrs: number,
  total_consumption_lts: number,
  total_distance_kms: number,
  ralenti_time_percentage:number,
  trips: number,
}
