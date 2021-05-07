
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
