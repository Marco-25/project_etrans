
export interface INotaGeneral {
    type: string;
    type_scored: number;
    scores: [
      {
        score_type: string;
        current_period_grade: number;
        last_period_grade: number;
        status: string
      },
      {
        score_type: string;
        current_period_grade:number;
        last_period_grade: number;
        status: string;
      },
      {
        score_type: string;
        current_period_grade:  number;
        last_period_grade:  number;
        status: string;
      },
      {
        score_type: string;
        current_period_grade:  number;
        last_period_grade: number;
        status: string;
      },
      {
        score_type: string;
        current_period_grade:  number;
        last_period_grade: number;
        status: string;
      }
    ],
    indicators: [
      {
        score_type: string,
        current_period_grade:  number,
        last_period_grade:  number,
        status: string,
      },
      {
        score_type: string,
        current_period_grade:  number,
        last_period_grade:  number,
        status: string,
      },
      {
        score_type: string,
        current_period_grade:  number,
        last_period_grade:  number,
        status: string,
      }
    ]
  }

  export interface IVehicleOrDriver {
    score_type_ranking: string;
    no_data: false;
    top_positions: ITopPositionsVehicleOrDrive[];
    bottom_positions: []
  }

  interface ITopPositionsVehicleOrDrive {
    ranking_position: number,
    id: number | string,
    current_period_grade: number,
    previous_period_grade: number,
    status: string,
    details: [
      {
        key_description: string,
        current_period: number,
        last_period: number,
        status: string,
      },
      {
        key_description: string,
        current_period: number,
        last_period: number,
        status: string,
      },
      {
        key_description: string,
        current_period: number,
        last_period: number,
        status: string,
      },
      {
        key_description: string,
        current_period: number,
        last_period: number,
        status: string,
      },
      {
        key_description: string,
        current_period: number,
        last_period: number,
        status: string,
      }
    ]
  }
