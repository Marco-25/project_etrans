export interface INotaDetalladaWithIndicators {
    score_type_ranking: string;
    no_data: boolean;
    all_average_scores: [
      IAllAverageScores[]
    ];
    indicators: IIndicators[];
}

export interface IAllAverageScores {
  score_type: string;
  current_period_grade: number;
  previous_period_grade: number;
  status: string;
  subscores: ISubScores[];
}

export interface IIndicators {
  key_indicator: string;
  current_period: number;
  last_period: number;
  status:string;
}

interface ISubScores {
  average_grade: number;
  last_period_grade: number;
  status: string;
  subscore_name: string;
}
