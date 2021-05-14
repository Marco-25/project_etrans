import {Container, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React, {  ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { toast, ToastContainer } from 'react-toastify';

import Menu from '../../components/Menu';
import {  INotaDetallada } from '../../interfaces/INotaDetallada';
import { INotaDetalladaWithIndicators } from '../../interfaces/INotaDetalladaWithIndicators';
import {  apiNota, apiNotaDetails, apiNotaMoreDetails,} from '../../services/api';
import { Box, ButtonSearch, Center,  Form,  FormContainerSelect,  Row,RowButton,SideBar,Table,Toggle } from '../../Styled';
import {Line,Indicators, InfoBoxContainer, LineFix,LittleBox} from './styles';
import { templateAllAverageScores, templateDetailsIndicator, templateSubScore } from './Templates';

const NoteDetails: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [indicatorsVehiclesOrDrivers, setIndicatorsVehiclesOrDrivers] = useState<INotaDetalladaWithIndicators>({} as INotaDetalladaWithIndicators);
  const [VehiclesOrDrivers,setVehiclesOrDrivers] = useState<INotaDetallada>({} as INotaDetallada);

  const [clickBgColorGeneral, setClickBgColorGeneral] = useState('general');
  const [clickBgColorDefaultOne, setClickBgColorDefaultOne] = useState(String);
  const [clickBgColorDefaultTwo, setClickBgColorDefaultTwo] = useState(String);
  const [clickBgColorDefaultThree, setClickBgColorDefaultThree] = useState(String);
  const [clickBgColorHard, setClickBgColorHard] = useState(String);

  const [renderNumber, setRenderNumber] = useState<number>(0);

  const [render, setRender] = useState(true);
  const [renderDriver, setRenderDriver] = useState(true);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState(String);
  const [dateEnd, setDateEnd] = useState(String);

  const [searchBy, setSearchBy] = useState('vehicles');


  // const getDateNow = useCallback(() => {
  //   let date = new Date();
  //   return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  // }, []);

  // const handleSearchVehicle = useCallback(async(scoreType) => {
  //   if (searchBy === 'vehicles') {
  //     const dateLast = new Date(Date.now() - (5 * 24 * 3600000));
  //     const res = await apiNotaDetails.post(`/vehicles`, {
  //       "from_timestamp": `${dateInitial ? dateInitial : dateLast}`,
  //       "#_ranking": 5,
  //       "score_type": `${scoreType}`,
  //       "search_list": [`${imei ? imei : '867162026821918'}`],
  //       "to_timestamp": `${dateEnd ? dateEnd: new Date()}`,
  //     });
  //     console.log(res.data);
  //   }

  //   if (searchBy === 'drivers') {
  //     const res = await apiNotaDetails.post(`/drivers`, {
  //       "from_timestamp": `${dateInitial}`,
  //       "#_ranking": 5,
  //       "score_type": `${scoreType}`,
  //       "search_list": [`${imei}`],
  //       "to_timestamp": `${dateEnd}`,
  //     });
  //     console.log(res.data);
  //   }
  // },[dateInitial,dateEnd,imei,searchBy]);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!imei) {
      toast.info("Informe um veiculo");
      return;
    }
    if (!searchBy) {
      toast.info("informe um tipo de busca");
      return;
    }
    if (!dateInitial) {
      toast.info("informe uma data de inicio");
      return;
    }
    if (!dateEnd) {
      toast.info("informe uma data de fim");
      return;
    }

    if (searchBy === 'vehicles') {
      const res = await apiNota.post(`/vehicles`, {
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      // setVehiclesOrDrivers(res.data);
      console.log(res.data);
    }

    if (searchBy === 'drivers') {
      const res = await apiNota.post(`/drivers`, {
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      // setVehiclesOrDrivers(res.data);
      console.log(res.data);
        if (renderDriver) {
          // handleSearchVehicle('general');
          setRenderDriver(false);
        }
    }

    toast.success("Dados carregados!");

  }, [dateInitial, dateEnd, imei, searchBy,renderDriver]);

  useEffect(() => {
    if(render){
      const dateLast = new Date(Date.now() - (5 * 24 * 3600000));
      apiNotaDetails.post(`/vehicles`, {
        "from_timestamp": `${dateLast}`,
	      "score_type": "general",
        "search_list": [`867162026821918`],
        "to_timestamp": `${new Date()}`
      }).then(res => {
        setIndicatorsVehiclesOrDrivers(res.data);});

        apiNotaMoreDetails.post(`/vehicles`, {
          "from_timestamp": `${dateLast}`,
          "for_export": 0,
          "score_type": "general",
          "search_list": [`867162026821918`],
          "to_timestamp": `${new Date()}`
        }).then(res => {
          setVehiclesOrDrivers(res.data);
         });
        setRender(false);
      }
  }, [render]);

  return (
    <>
      <Menu />
      <Container maxWidth={false} >
        <ToastContainer position="top-center" />
        <Center>
        {visible &&
            <SideBar>
              <h4>NOTA GENERAL </h4>
              <p>
                Nota general del comportamiento de los conductores y vehículos. Puedes consultar información hasta tres meses atrás. La última información generada estará disponible luego de 60 minutos.
              </p>

              <h5>FORMULARIO DE BÚSQUEDA</h5>

              <Form onSubmit={handleSubmit} isHeight70>
                <FormContainerSelect>
                  <FormControl>
                    <InputLabel htmlFor="age-native-simple">Clientes</InputLabel>
                    <Select
                      native
                      onChange={(e: ChangeEvent<HTMLInputElement | any>) => console.log(e.currentTarget.value)}
                    >
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <InputLabel htmlFor="age-native-simple">Buscar por</InputLabel>
                    <Select
                      native
                      onChange={(e: ChangeEvent<HTMLInputElement | any>) => setSearchBy(e.currentTarget.value)}>
                      <option value="vehicles">vehicles</option>
                      <option value="drivers">Conductores</option>
                    </Select>
                  </FormControl>

                  {searchBy === 'vehicles' ?
                    <FormControl>
                      <InputLabel htmlFor="age-native-simple" id="vehicle">Veiculos</InputLabel>
                      <Select
                        native
                        onChange={(e: ChangeEvent<HTMLInputElement | any>) => setImei(e.currentTarget.value)}
                      >
                        <option aria-label="None" value="" />
                        <option value={867162027207018}>vehicle #1</option>
                        <option value={867162027207851}>vehicle #2</option>
                      </Select>
                    </FormControl>

                    :
                    <FormControl>
                      <InputLabel htmlFor="age-native-simple" id="drivers">Conductor</InputLabel>
                      <Select
                        native
                        onChange={(e: ChangeEvent<HTMLInputElement | any>) => setImei(e.currentTarget.value)}
                      >
                        <option aria-label="None" value="" />
                        <option value={842}>drivers #1</option>
                        <option value={843}>drivers #2</option>
                        <option value={844}>drivers #2</option>
                      </Select>
                    </FormControl>}

                </FormContainerSelect>
                <TextField
                  id="datetime-local"
                  label="Fecha de Inicio"
                  type="datetime-local"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDateInitial(e.currentTarget.value.replace('T', ' '))}
                  defaultValue="0000-00-00T00:00"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  id="datetime-local"
                  label="Fecha de Término"
                  type="datetime-local"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDateEnd(e.currentTarget.value.replace('T', ' '))}
                  defaultValue="0000-00-00T00:00"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <RowButton>
                  <ButtonSearch type="submit" >buscar</ButtonSearch>
                </RowButton>
              </Form>

            </SideBar>
          }
          <Toggle onClick={handleMenu}>  Filtros</Toggle>
          <Box>
            <Row>
              <LittleBox bgColor={clickBgColorGeneral} onClick={() => {
                setRenderNumber(0);
                setClickBgColorGeneral('general');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> General </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultOne} onClick={() => {
                setRenderNumber(1);
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('default');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> Consumo </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultTwo} onClick={() => {
                setRenderNumber(2);
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('default');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> frenos </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultThree} onClick={() => {
                setRenderNumber(3);
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('default');
                setClickBgColorHard('');
              }}>
                <p> seguridad </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorHard} onClick={() => {
                setRenderNumber(4);
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('hard');
              }}>
                <p> Dificultad </p>
              </LittleBox>
            </Row>

              <Line>

                {
                renderNumber === 0 ?
                  indicatorsVehiclesOrDrivers.all_average_scores?.map(details => details.map(pointsVehicle => templateAllAverageScores(pointsVehicle) ))
                :
                  VehiclesOrDrivers.all_positions?.map(details => (
                    (<InfoBoxContainer key={details.details[renderNumber].current_period * 2}>
                      <div>
                      <h4>{details.details[renderNumber].status}</h4>
                      <p>**{details.details[renderNumber].current_period}**</p>
                      <strong><i className={`fas fa-sort-${details.details[renderNumber].status} ${details.details[renderNumber].status === 'up' ? 'up': 'down'}`}></i> vs. periodo anterior</strong>
                      </div>
                      {details?.details[renderNumber]?.subscores?.map(params =>templateSubScore(params))}
                      </InfoBoxContainer>)
                  ))
                }

              <LineFix>
                <Indicators key={12012}>
                  <h4>VEHÍCULOS EN OPERACIÓN</h4>
                  <p>1/2</p>
                  <p>&nbsp;</p>
                </Indicators>

            {indicatorsVehiclesOrDrivers.indicators?.map(indicator => templateDetailsIndicator(indicator) )}
            </LineFix>

            </Line>

            <h5> RANKING GENERAL </h5>
            <Table>
              <DataGrid rows={[]} columns={[]} pageSize={5} />
            </Table>
          </Box>
        </Center>
      </Container>
    </>
  );
}

export default NoteDetails;
