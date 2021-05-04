import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { DataGrid } from '@material-ui/data-grid';
import { BiExport } from 'react-icons/bi';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdInformationCircle } from 'react-icons/io';

import { CSVLink } from "react-csv";

import Chart from "react-google-charts";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FormControl, InputLabel, Select, TextField, Typography } from '@material-ui/core';
import { ResponsiveContainer } from 'recharts';
import { Box, BoxLeft, BoxRight, Center, Form, Row, SideBar, Toggle, Column, Table,ButtonSearch, RowButton, } from '../../Styled';
import { Grafic, BoxGrafic, TextGrafic, MiddleBox, ContentGraphic, BoxHeader, Header, Main, ContainerChart } from './styles.telemetria';

import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { api } from '../../services/api';
import Menu from '../../components/Menu';
import { IDataTelemetry } from '../../interfaces/DataTelemetry';
import { BTN } from '../../components/Button';
import { ButtonBox, Content, ContentFuel } from './styles';
import { FaFilter, FaPause } from 'react-icons/fa';

const Telemetry: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [render, setRender] = useState(true);
  const [dataTelemetry, setDataTelemetry] = useState<IDataTelemetry>({} as IDataTelemetry);

  const [dataInitial, setDataInitial] = useState(String);
  const [dataEnd, setDataEnd] = useState(String);
  const [dateNow, setDateNow] = useState(String);

  const [hourInitial, setHourInitial] = useState('04:00:00');
  const [hourEnd, setHourEnd] = useState('14:08:19');

  const [priceFuel, setPriceFuel] = useState(100);

  const [YieldOne, setYieldOne] = useState(Number);
  const [textYieldOne, setTextYieldOne] = useState(String);
  const [btnColorOneTrue, setBtnColorOneTrue] = useState(true);
  const [btnColorOneFalse, setBtnColorOneFalse] = useState(false);

  const [YieldTwo, setYieldTwo] = useState(Number);
  const [textYieldL, setTextYieldL] = useState(String);
  const [textYieldRs, setTextYieldRs] = useState(String);
  const [btnColorTwoTrue, setBtnColorTwoTrue] = useState(true);
  const [btnColorTwoFalse, setBtnColorTwoFalse] = useState(false);

  const [boxAnalysis, setBoxAnalysis] = useState(false);
  const [boxFuel, setBoxFuel] = useState(false);
  const [boxVehicle, setBoxVehicle] = useState(false);

  const graphic = true;

  const data2 = [
    {
      name: "Solo freno de servicio",
      pv: dataTelemetry.indicators_summary?.service_brake_usage_distance_pctg ?
        dataTelemetry.indicators_summary?.service_brake_usage_distance_pctg.toFixed(2) :
        0
    },

    {
      name: "Freno sin desgate",
      pv: dataTelemetry.indicators_summary?.engine_brake_usage_distance_pctg ?
        dataTelemetry.indicators_summary?.engine_brake_usage_distance_pctg.toFixed(2) :
        0
    },

    {
      name: "Frenado mixto",
      pv: dataTelemetry.indicators_summary?.service_and_engine_brake_usage_distance_pctg ?
        dataTelemetry.indicators_summary?.service_and_engine_brake_usage_distance_pctg.toFixed(2) :
        0
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fuel_rate_kms_per_lts', headerName: 'rendiemento(Km/L)', width: 170},
    { field: 'fuel_rate_lts_per_hrs', headerName: 'rendiemento(L/Hr)', width: 170 },
    { field: 'total_distance_kms', headerName: 'Distancia recorrida(Km)', width: 210 },
    { field: 'total_fuel_consumption_lts', headerName: 'Consumo Total(L)', width: 170 },
    { field: 'total_time_hrs', headerName: 'Horas de Operacion(Hr)', width: 210 },
    { field: 'idle_time_pctg', headerName: 'Tiempo en Ralenti(%)', width: 210 },
    { field: 'stopped_acceleration_time_pctg', headerName: 'Tiempo en Aceleracion en Vacio(%)', width: 280 },
    { field: 'average_speed_kmh', headerName: 'Velocidad Promedio', width: 210 },
    { field: 'engine_brake_usage_distance_pctg', headerName: 'Distancia uso freno sin desgate(%)', width: 280 },
    { field: 'service_brake_usage_distance_pctg', headerName: 'Distancia solo uso freno de servicio(%)', width: 300 },
    { field: 'qty_trips', headerName: 'Número de viajes', width: 170 },
  ];

  const rows = dataTelemetry.indicators_by_vehicle?.map((indicatorVehicle) => {
    return {
      id:  indicatorVehicle.vehicle_id,
      fuel_rate_kms_per_lts: indicatorVehicle.fuel_rate_kms_per_lts?.toFixed(2) || '-',
      fuel_rate_lts_per_hrs: indicatorVehicle.fuel_rate_lts_per_hrs?.toFixed(2) || '-',
      total_distance_kms: indicatorVehicle.total_distance_kms?.toFixed(2) || '-',
      total_fuel_consumption_lts: indicatorVehicle.total_fuel_consumption_lts?.toFixed(2) || '-',
      total_time_hrs: indicatorVehicle.total_time_hrs?.toFixed(2) || '-',
      idle_time_pctg: indicatorVehicle.idle_time_pctg?.toFixed(2) || '-',
      stopped_acceleration_time_pctg: indicatorVehicle.stopped_acceleration_time_pctg?.toFixed(2) || '-',
      average_speed_kmh: indicatorVehicle.average_speed_kmh?.toFixed(2) || '-',
      engine_brake_usage_distance_pctg: indicatorVehicle.engine_brake_usage_distance_pctg?.toFixed(2) || '-',
      service_brake_usage_distance_pctg: indicatorVehicle.service_brake_usage_distance_pctg?.toFixed(2) || '-',
      qty_trips: indicatorVehicle.qty_trips?.toFixed(2)
    }

  });

  const getDateNow = useCallback(() => {
    let date = new Date();
    setDateNow(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }, []);


  const getDateLast = useCallback(() => {
    let todayDate = new Date(), lastFiveDays = new Date();
    lastFiveDays.setTime(todayDate.getTime() - (5 * 24 * 3600000));
    return lastFiveDays.getFullYear() + '-' + (lastFiveDays.getMonth() + 1) + '-' + lastFiveDays.getDate();
  }, []);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const handleApi = useCallback(async () => {
    if (render) {
      const response = await api.post('/indicators', {
        "from_timestamp": `${getDateLast()} 04:00:00`,
        "to_timestamp": `${getDateNow()} 14:08:19`,
        "imei": [
          "867162026821918",
          "867162029073905"
        ]
      });
      if (!response.data) {
        setDataTelemetry({} as IDataTelemetry);
      }
      setDataTelemetry(response.data);
    }
    setRender(false);
    console.log(dataTelemetry);
  }, [render, dataTelemetry, getDateLast, getDateNow]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

    const res = await api.post('/indicators', {
      "from_timestamp": `${dataInitial} ${hourInitial}`,
      "to_timestamp": `${dataEnd} ${hourEnd}`,
      "imei": [
        "867162027207018",
        "867162027207851"
      ]
    });

   if(res.data) {
     setDataTelemetry(res.data);
     toast.success("Dados carregados!");
   }

  }, [dataInitial, dataEnd, hourInitial, hourEnd]);

  useEffect(() => {
    getDateNow()
    getDateLast()
    handleApi();

  }, [handleApi, getDateNow, getDateLast]);
  return (
    <>
      <Menu />
      <Container maxWidth={false} style={{ boxShadow: '0px 0px 1px 2px white' }}>

        <Center>
        <ToastContainer position="top-center" />
          {visible &&
            (
              <SideBar>
                <h4>Telemetria <IoMdInformationCircle /> </h4>
                <p>
                  Obtén el reporte de telemetría de los vehículos de tu flota. Puedes consultar información hasta tres meses atrás. La última información generada estará disponible luego de 60 minutos.
                </p>

                <h5>FORMULARIO DE BÚSQUEDA</h5>

                <Form onSubmit={handleSubmit}>
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
                  <InputLabel htmlFor="age-native-simple"id="vehicle">Veiculos</InputLabel>
                  <Select
                    native
                    onChange={(e: ChangeEvent<HTMLInputElement | any>) => console.log(e.currentTarget.value)}
                  >
                    <option aria-label="None" value="" />
                    <option value={867162027207018}>Cliente #1</option>
                    <option value={867162027207851}>Cliente #2</option>
                  </Select>
                </FormControl>

                  <TextField
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDataInitial(e.target.value)}
                    type="date"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    defaultValue={dateNow}
                    label="Fecha de Inicio"
                    name="dateInitial"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required />

                  <TextField
                    margin="normal"
                    variant="outlined"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setHourInitial(e.currentTarget.value)}
                    size="small"
                    id="time"
                    label="Hora de Inicio"
                    type="time"
                    defaultValue="00:00"
                    fullWidth
                  />

                  <TextField
                    margin="normal"
                    variant="outlined"
                    size="small"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setHourEnd(e.target.value)}
                    id="time"
                    label="Hora de término"
                    type="time"
                    defaultValue="23:59"
                    fullWidth
                  />

                  <TextField
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDataEnd(e.target.value)}
                    type="date"
                    variant="outlined"
                    margin="normal"
                    size="small"
                    label="Fecha de Término*"
                    name="dateInitial"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required />


                  <TextField
                    type="number"
                    variant="outlined"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPriceFuel(Number(e.currentTarget.value))}
                    defaultValue="100"
                    size="small"
                    label="Precio combustible"
                    margin="normal"
                    required
                  />
                  <RowButton>
                    <ButtonSearch>buscar</ButtonSearch>
                  </RowButton>
                </Form>

              </SideBar>
            )
          }
          <Toggle onClick={handleMenu}> <FaFilter /> Filtros</Toggle>
          {render === false && (
            <Box>
              <Header>
                <BoxHeader>
                  <h5> VEHÍCULOS EN OPERACIÓN </h5>

                  <h4>
                    {dataTelemetry.indicators_summary.operating_vehicles}
                      /{dataTelemetry.indicators_summary.total_vehicles}
                  </h4>

                  <p> <FaPause /> vs. periodo anterior </p>
                </BoxHeader>

                <BoxHeader>
                  <section>
                    <h5> RENDIMIENTO </h5>
                    <BTN btnColorOne={btnColorOneTrue} onClick={() => {
                      setYieldOne(dataTelemetry.indicators_summary.fuel_rate_kms_per_lts);
                      setTextYieldOne('Km/L');
                      setBtnColorOneTrue(false);
                      setBtnColorOneFalse(true);
                    }}>Km/L</BTN>

                    {YieldOne ?
                      <h4> {YieldOne.toFixed(2)} {textYieldOne} </h4> :
                      <h4> {dataTelemetry.indicators_summary?.fuel_rate_lts_per_hrs && dataTelemetry.indicators_summary?.fuel_rate_lts_per_hrs.toFixed(2)} {'L/Hr'}</h4>}


                    <BTN btnColorOne={btnColorOneFalse} onClick={() => {
                      setYieldOne(dataTelemetry.indicators_summary.fuel_rate_lts_per_hrs);
                      setTextYieldOne("L/Hr");
                      setBtnColorOneTrue(true);
                      setBtnColorOneFalse(false);
                    }}>L/Hr</BTN>

                    <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                  </section>
                </BoxHeader>

                <BoxHeader>
                  <section>
                    <h5> COMBUSTIBLE </h5>

                    <BTN btnColorTwo={btnColorTwoTrue} onClick={() => {
                      setYieldTwo(dataTelemetry.indicators_summary.total_fuel_consumption_lts);
                      setTextYieldRs("");
                      setTextYieldL('L');
                      setBtnColorTwoTrue(false);
                      setBtnColorTwoFalse(true);
                    }}>L</BTN>

                    {YieldTwo ? <h4> {textYieldRs && textYieldRs} {YieldTwo.toFixed(2)} {textYieldL && textYieldL} </h4>
                      : <h4> $ {(dataTelemetry.indicators_summary?.total_fuel_consumption_lts / 1000 * priceFuel).toFixed(2)}</h4>}

                    <BTN btnColorTwo={btnColorTwoFalse} onClick={() => {
                      setYieldTwo(dataTelemetry.indicators_summary.total_fuel_consumption_lts / 1000 * priceFuel);
                      setTextYieldL('');
                      setTextYieldRs("$");
                      setBtnColorTwoTrue(true);
                      setBtnColorTwoFalse(false);
                    }}>$</BTN>
                    <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                  </section>
                </BoxHeader>

                <BoxHeader>
                  <h5> DISTANCIA RECORRIDA </h5>

                  <h4> {dataTelemetry.indicators_summary.total_distance_kms &&
                    dataTelemetry.indicators_summary.total_distance_kms.toFixed(2)} Km </h4>

                  <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                </BoxHeader>
              </Header>

              <Main>
                <BoxLeft>
                  <Row>
                    <Column>
                      <Typography style={{ paddingLeft: '0.5rem' }} variant="h6" gutterBottom >ANÁLISIS DE OPERACIÓN</Typography>
                      <Typography style={{ paddingLeft: '0.5rem' }} variant="body2" gutterBottom >En base a las horas de operación</Typography>
                    </Column>
                  </Row>
                  <ContentGraphic>
                    <Column>
                      <MiddleBox bgColor="green">
                        <p> CONDUCCIÓN </p>
                        <p> {dataTelemetry.indicators_summary.efficient_driving_time_pctg &&
                          dataTelemetry.indicators_summary.efficient_driving_time_pctg.toFixed(2)}% </p>
                      </MiddleBox>

                      <MiddleBox >
                        <p> RALENTÍ </p>
                        <p> {dataTelemetry.indicators_summary.idle_time_pctg &&
                          dataTelemetry.indicators_summary.idle_time_pctg.toFixed(2)}% </p>
                      </MiddleBox>

                      <MiddleBox bgColor="red">
                        <p> NO RENTABLE EN CONDUCCIÓN </p>
                        <p> {dataTelemetry.indicators_summary.inefficient_driving_time_pctg &&
                          dataTelemetry.indicators_summary.inefficient_driving_time_pctg.toFixed(2)}% </p>
                      </MiddleBox>

                      <MiddleBox bgColor="yellow">
                        <p> ACELERACIÓN EN VACÍO </p>
                        <p> {dataTelemetry.indicators_summary.stopped_acceleration_time_pctg &&
                          dataTelemetry.indicators_summary.stopped_acceleration_time_pctg.toFixed(2)}% </p>
                      </MiddleBox>
                    </Column>

                    <Grafic>
                      <TextGrafic>
                        <span>HORAS DE OPERACIÓN</span>
                        <span> <IoMdArrowDropdown />
                          {dataTelemetry.indicators_summary?.total_time_hrs && dataTelemetry.indicators_summary?.total_time_hrs.toFixed(2)} Hr  </span>
                      </TextGrafic>

                      <ContainerChart>
                        <Chart
                          width="350px"
                          chartType="PieChart"
                          data={[
                            ['', ''],
                            ['CONDUCCIÓN', dataTelemetry.indicators_summary?.efficient_driving_time_pctg],
                            ['RALENTÍ', dataTelemetry.indicators_summary?.idle_time_pctg],
                            ['NO RENTABLE EN CONDUCCIÓN', dataTelemetry.indicators_summary?.inefficient_driving_time_pctg],
                            ['ACELERACIÓN EN VACÍO', dataTelemetry.indicators_summary?.stopped_acceleration_time_pctg],
                          ]}
                          options={{
                            backgroundColor: 'transparent',
                            legend: 'none',
                            height: 300,
                            hAxis: {
                              viewWindow: {
                                min: 250,
                                max: 400,
                              }
                            },
                            vAxis: {
                              viewWindow: {
                                min: 200,
                                max: 350,
                              }
                            },
                            pieHole: 0.4,
                            colors: ['#00b050', '#276f8b', '#e60000', '#f1c34e']
                          }}
                        />
                      </ContainerChart>
                    </Grafic>

                  </ContentGraphic>
                </BoxLeft>

                <BoxRight>
                  <Grafic>
                    <Typography style={{ paddingLeft: '0.5rem' }} variant="h6" gutterBottom > ANÁLISIS DE USO DE FRENOS </Typography>
                    <Typography style={{ paddingLeft: '0.5rem' }} variant="body2" gutterBottom> En base a la distancia recorrida </Typography>
                    <TextGrafic>
                      <span>VELOCIDAD PROMEDIO</span>

                      <span> <IoMdArrowDropup /> {dataTelemetry.indicators_summary?.average_speed_kmh && dataTelemetry.indicators_summary?.average_speed_kmh.toFixed(2)} Km/Hr </span>
                    </TextGrafic>
                    <BoxGrafic>
                      <ResponsiveContainer>
                        <ComposedChart
                          height={200}
                          data={data2}
                          margin={{
                            top: 0,
                            right: 15,
                            bottom: 100,
                            left: 15
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" scale="band" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </BoxGrafic>
                  </Grafic>
                </BoxRight>
              </Main>

              <Table>
                <DataGrid rows={rows} columns={columns} pageSize={5} />
              </Table>
              <br />
              <RowButton align="center">

                <ButtonSearch>
                  <BiExport />
                  <CSVLink filename={`Relarorio-${dateNow}.csv`} data={rows}>Expotar</CSVLink>
                </ButtonSearch>

              </RowButton>

              {!graphic &&
                <Row>
                  <Column fullWidth >
                    {/* box one */}
                    <ButtonBox onClick={() => setBoxAnalysis(!boxAnalysis)}>ANÁLISIS DETALLADO DE VARIABLES</ButtonBox>
                    {boxAnalysis &&
                      <Content>
                        <section>

                        </section>

                        <div>
                          direita002
                        </div>
                      </Content>
                    }
                    {/* box two */}
                    <ButtonBox onClick={() => setBoxFuel(!boxFuel)}>NIVEL DE COMBUSTIBLE</ButtonBox>
                    {boxFuel &&
                      <ContentFuel>
                        <Chart
                          width={'100%'}
                          height={'500px'}
                          chartType="LineChart"
                          data={[
                            ['x', 'Acima da reserva', 'Na reserva'],
                            ['teste 0', 0, 0],
                          ]}
                          options={{
                            hAxis: {
                              title: 'Fuel',
                            },
                            vAxis: {
                              title: 'Fuel',
                            },
                            series: {
                              1: { curveType: 'function' },
                            },
                          }}
                        />
                      </ContentFuel>
                    }
                    {/* box threee */}
                    <ButtonBox onClick={() => setBoxVehicle(!boxVehicle)}>DATOS TÉCNICOS DEL VEHÍCULO</ButtonBox>
                    {boxVehicle &&
                      <Content>

                      </Content>
                    }
                  </Column>
                </Row>
              }
            </Box>
          )}
        </Center>
      </Container>
    </>
  );
}

export default Telemetry;
