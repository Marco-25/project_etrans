import {InfoBox,Indicators, InfoBoxIndicator} from '../styles';
import { IAllAverageScores, IIndicators } from "../../../interfaces/INotaDetalladaWithIndicators"
import { ISubScore } from "../../../interfaces/INotaDetallada";

import {v4 as uuid} from 'uuid';

export const templateDetailsIndicator = (indicator:IIndicators) => {
  return <Indicators color={indicator.status === 'up' ? 'up': ''} key={uuid()}>
  <h4>{indicator.key_indicator}</h4>
  <p>{indicator.current_period && indicator.current_period.toFixed(2)}</p>
  <strong><i className={`fas fa-sort-${indicator.status} ${indicator.status === 'up' ? 'up': 'down'}`}></i> vs. periodo anterior</strong>
</Indicators>
}

export const templateSubScore = (params: ISubScore) => {
  return <InfoBox key={uuid()}>
  <h4>{params.subscore_name}</h4>
  <p>{params.average_grade}</p>
  <strong><i className={`fas fa-sort-${params.status} ${params.status === 'up' ? 'up': 'down'}`}></i> vs. periodo anterior</strong>
  </InfoBox>
};

export const templateAllAverageScores = (params: IAllAverageScores) => {
  return <InfoBoxIndicator key={uuid()} >
    <h4>{params.score_type}</h4>
    <p>{params.current_period_grade}</p>
    <strong><i className={`fas fa-sort-${params.status} ${params.status === 'up' ? 'up': 'down'}`}></i> vs. periodo anterior</strong>
  </InfoBoxIndicator>
};
