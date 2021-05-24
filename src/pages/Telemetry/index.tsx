import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import Container from "@material-ui/core/Container";
import { DataGrid } from "@material-ui/data-grid";
import { BiExport } from "react-icons/bi";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdInformationCircle,
} from "react-icons/io";

import { CSVLink } from "react-csv";

import Chart from "react-google-charts";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { ResponsiveContainer } from "recharts";
import {
  Box,
  BoxLeft,
  BoxRight,
  Center,
  Form,
  Row,
  SideBar,
  Toggle,
  Column,
  Table,
  RowButton,
  FormContainerSelect,
  Icon,
} from "../../Styled";
import {
  Grafic,
  BoxGrafic,
  TextGrafic,
  MiddleBox,
  ContentGraphic,
  BoxHeader,
  Header,
  Main,
  ContainerChart,
} from "./styles.telemetria";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { apiDetailedVehicle, apiTelemetry } from "../../services/telemetry";
import Menu from "../../components/Menu";
import { IDataTelemetry } from "../../interfaces/IDataTelemetry";
import { BTN } from "../../components/ButtonDefault";
import { ButtonBox, Content, ContentFuel } from "./styles";
import { FaFilter, FaPause } from "react-icons/fa";
import { IDetailsVehicle } from "../../interfaces/IDetailsVehicle";
import ButtonSearch from "../../components/ButtonSearch";

const Telemetry: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(true);
  const [imei, setImei] = useState<string>();
  const [dataTelemetry, setDataTelemetry] = useState<IDataTelemetry>(
    {} as IDataTelemetry
  );

  const [dateInitial, setDateInitial] = useState("");
  const [dateEnd, setDateEnd] = useState("");

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

  const [boxFuel, setBoxFuel] = useState(false);
  const [boxVehicle, setBoxVehicle] = useState(false);

  const graphic = true;

  const data2 = [
    {
      name: "Solo freno de servicio",
      pv: dataTelemetry.indicators_summary?.service_brake_usage_distance_pctg
        ? dataTelemetry.indicators_summary?.service_brake_usage_distance_pctg.toFixed(
            2
          )
        : 0,
    },

    {
      name: "Freno sin desgate",
      pv: dataTelemetry.indicators_summary?.engine_brake_usage_distance_pctg
        ? dataTelemetry.indicators_summary?.engine_brake_usage_distance_pctg.toFixed(
            2
          )
        : 0,
    },

    {
      name: "Frenado mixto",
      pv: dataTelemetry.indicators_summary
        ?.service_and_engine_brake_usage_distance_pctg
        ? dataTelemetry.indicators_summary?.service_and_engine_brake_usage_distance_pctg.toFixed(
            2
          )
        : 0,
    },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "fuel_rate_kms_per_lts",
      headerName: "rendiemento(Km/L)",
      width: 170,
    },
    {
      field: "fuel_rate_lts_per_hrs",
      headerName: "rendiemento(L/Hr)",
      width: 170,
    },
    {
      field: "total_distance_kms",
      headerName: "Distancia recorrida(Km)",
      width: 210,
    },
    {
      field: "total_fuel_consumption_lts",
      headerName: "Consumo Total(L)",
      width: 170,
    },
    {
      field: "total_time_hrs",
      headerName: "Horas de Operacion(Hr)",
      width: 210,
    },
    { field: "idle_time_pctg", headerName: "Tiempo en Ralenti(%)", width: 210 },
    {
      field: "stopped_acceleration_time_pctg",
      headerName: "Tiempo en Aceleracion en Vacio(%)",
      width: 280,
    },
    {
      field: "average_speed_kmh",
      headerName: "Velocidad Promedio",
      width: 210,
    },
    {
      field: "engine_brake_usage_distance_pctg",
      headerName: "Distancia uso freno sin desgate(%)",
      width: 280,
    },
    {
      field: "service_brake_usage_distance_pctg",
      headerName: "Distancia solo uso freno de servicio(%)",
      width: 300,
    },
    { field: "qty_trips", headerName: "Número de viajes", width: 170 },
  ];

  const rows = dataTelemetry.indicators_by_vehicle?.map((indicatorVehicle) => {
    return {
      id: indicatorVehicle.vehicle_id,
      fuel_rate_kms_per_lts:
        indicatorVehicle.fuel_rate_kms_per_lts?.toFixed(2) || "-",
      fuel_rate_lts_per_hrs:
        indicatorVehicle.fuel_rate_lts_per_hrs?.toFixed(2) || "-",
      total_distance_kms:
        indicatorVehicle.total_distance_kms?.toFixed(2) || "-",
      total_fuel_consumption_lts:
        indicatorVehicle.total_fuel_consumption_lts?.toFixed(2) || "-",
      total_time_hrs: indicatorVehicle.total_time_hrs?.toFixed(2) || "-",
      idle_time_pctg: indicatorVehicle.idle_time_pctg?.toFixed(2) || "-",
      stopped_acceleration_time_pctg:
        indicatorVehicle.stopped_acceleration_time_pctg?.toFixed(2) || "-",
      average_speed_kmh: indicatorVehicle.average_speed_kmh?.toFixed(2) || "-",
      engine_brake_usage_distance_pctg:
        indicatorVehicle.engine_brake_usage_distance_pctg?.toFixed(2) || "-",
      service_brake_usage_distance_pctg:
        indicatorVehicle.service_brake_usage_distance_pctg?.toFixed(2) || "-",
      qty_trips: indicatorVehicle.qty_trips?.toFixed(2),
    };
  });

  const getDateNow = useCallback(() => {
    let date = new Date();
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }, []);

  const getDateLast = useCallback(() => {
    let todayDate = new Date(),
      lastFiveDays = new Date();
    lastFiveDays.setTime(todayDate.getTime() - 5 * 24 * 3600000);
    return (
      lastFiveDays.getFullYear() +
      "-" +
      (lastFiveDays.getMonth() + 1) +
      "-" +
      lastFiveDays.getDate()
    );
  }, []);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const [detailsVehicles, setDetailsVehicle] = useState<IDetailsVehicle>(
    {} as IDetailsVehicle
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();
        setLoading(true);

        if (!imei) {
          toast.warning("Selecione um veiculo");
          return;
        }

        if (!dateInitial) {
          toast.warning("Selecione uma data de inicio");
          return;
        }

        if (!dateEnd) {
          toast.warning("Selecione uma data de fim");
          return;
        }

        const res = await apiTelemetry.post("/indicators", {
          from_timestamp: `${dateInitial}`,
          to_timestamp: `${dateEnd}`,
          imei: [`${imei}`],
        });

        const resp = await apiDetailedVehicle.post("/indicators_by_imei", {
          from_timestamp: `${dateInitial}`,
          to_timestamp: `${dateEnd}`,
          imei: [`${imei}`],
        });

        setDataTelemetry(res.data);
        setDetailsVehicle(resp.data[4]);
        console.log(resp.data[4]);

        toast.success("Dados carregados!");
      } catch (error) {
        toast.error("Ocorreu um erro ao buscar os dados, tente novamente.");
      } finally {
        setLoading(false);
      }
    },
    [dateInitial, dateEnd, imei]
  );

  useEffect(() => {
    apiTelemetry
      .post("/indicators", {
        from_timestamp: `${getDateLast()} 04:00:00`,
        to_timestamp: `${getDateNow()} 14:08:19`,
        imei: ["867162026821918", "867162029073905"],
      })
      .then((res) => {
        if (!res.data) {
          setDataTelemetry({} as IDataTelemetry);
        }
        setDataTelemetry(res.data);
        setRender(false);
      });
  }, [getDateNow, getDateLast]);

  return (
    <>
      <Menu />
      {visible && (
        <SideBar>
          <h4>
            Telemetria <IoMdInformationCircle />{" "}
          </h4>
          <p>
            Obtén el reporte de telemetría de los vehículos de tu flota. Puedes
            consultar información hasta tres meses atrás. La última información
            generada estará disponible luego de 60 minutos.
          </p>

          <h5>FORMULARIO DE BÚSQUEDA</h5>

          <Form onSubmit={handleSubmit} isHeight70>
            <FormContainerSelect>
              <FormControl>
                <InputLabel htmlFor="age-native-simple">Clientes</InputLabel>
                <Select
                  native
                  onChange={(e: ChangeEvent<HTMLInputElement | any>) =>
                    console.log(e.currentTarget.value)
                  }
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="age-native-simple" id="vehicle">
                  Veiculos
                </InputLabel>
                <Select
                  native
                  onChange={(e: ChangeEvent<HTMLInputElement | any>) => {
                    setImei(e.currentTarget.value);
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value="867162027207018">Cliente #1</option>
                  <option value="867162027207851">Cliente #2</option>
                  <option value="867162026821918">Cliente #3</option>
                  <option value="867162029073905">Cliente #4</option>
                </Select>
              </FormControl>
            </FormContainerSelect>
            <TextField
              id="datetime-local"
              label="Fecha de Inicio"
              type="datetime-local"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDateInitial(e.currentTarget.value.replace("T", " "))
              }
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              id="datetime-local"
              label="Fecha de Término"
              type="datetime-local"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDateEnd(e.currentTarget.value.replace("T", " "))
              }
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              type="number"
              variant="outlined"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPriceFuel(Number(e.currentTarget.value))
              }
              defaultValue="100"
              size="small"
              label="Precio combustible"
              margin="normal"
              required
            />
            <RowButton>
              <ButtonSearch loading={loading}>buscar</ButtonSearch>
            </RowButton>
          </Form>
        </SideBar>
      )}
      <Container
        maxWidth={false}
        style={{ boxShadow: "0px 0px 1px 2px white" }}
      >
        <Toggle onClick={handleMenu}>
          {" "}
          <FaFilter /> Filtros
        </Toggle>

        <Center onClick={() => setVisible(false)}>
          <ToastContainer position="top-center" />
          {render === false && (
            <Box>
              <Header>
                <BoxHeader>
                  <h5> VEHÍCULOS EN OPERACIÓN </h5>

                  <h4>
                    {dataTelemetry.indicators_summary.operating_vehicles}/
                    {dataTelemetry.indicators_summary.total_vehicles}
                  </h4>

                  <p>
                    {" "}
                    <FaPause /> vs. periodo anterior{" "}
                  </p>
                </BoxHeader>

                <BoxHeader>
                  <section>
                    <h5> RENDIMIENTO </h5>
                    <BTN
                      btnColorOne={btnColorOneTrue}
                      onClick={() => {
                        setYieldOne(
                          dataTelemetry.indicators_summary.fuel_rate_kms_per_lts
                        );
                        setTextYieldOne("Km/L");
                        setBtnColorOneTrue(false);
                        setBtnColorOneFalse(true);
                      }}
                    >
                      Km/L
                    </BTN>

                    {YieldOne ? (
                      <h4>
                        {" "}
                        {YieldOne.toFixed(2)} {textYieldOne}{" "}
                      </h4>
                    ) : (
                      <h4>
                        {" "}
                        {dataTelemetry.indicators_summary
                          ?.fuel_rate_lts_per_hrs &&
                          dataTelemetry.indicators_summary?.fuel_rate_lts_per_hrs.toFixed(
                            2
                          )}{" "}
                        {"L/Hr"}
                      </h4>
                    )}

                    <BTN
                      btnColorOne={btnColorOneFalse}
                      onClick={() => {
                        setYieldOne(
                          dataTelemetry.indicators_summary.fuel_rate_lts_per_hrs
                        );
                        setTextYieldOne("L/Hr");
                        setBtnColorOneTrue(true);
                        setBtnColorOneFalse(false);
                      }}
                    >
                      L/Hr
                    </BTN>

                    <p>
                      <Icon>
                        {" "}
                        <i
                          className={`fas fa-sort-${
                            dataTelemetry.indicators_cmp_from_last_period
                              .cmp_fuel_rate_lts_per_hrs
                          }
                      ${
                        dataTelemetry.indicators_cmp_from_last_period
                          .cmp_fuel_rate_lts_per_hrs === "up"
                          ? "up"
                          : "down"
                      }`}
                        ></i>{" "}
                        <span> vs. periodo anterior </span>{" "}
                      </Icon>
                    </p>
                  </section>
                </BoxHeader>

                <BoxHeader>
                  <section>
                    <h5> COMBUSTIBLE </h5>

                    <BTN
                      btnColorTwo={btnColorTwoTrue}
                      onClick={() => {
                        setYieldTwo(
                          dataTelemetry.indicators_summary
                            .total_fuel_consumption_lts
                        );
                        setTextYieldRs("");
                        setTextYieldL("L");
                        setBtnColorTwoTrue(false);
                        setBtnColorTwoFalse(true);
                      }}
                    >
                      L
                    </BTN>

                    {YieldTwo ? (
                      <h4>
                        {" "}
                        {textYieldRs && textYieldRs} {YieldTwo.toFixed(2)}{" "}
                        {textYieldL && textYieldL}{" "}
                      </h4>
                    ) : (
                      <h4>
                        {" "}
                        ${" "}
                        {(
                          (dataTelemetry.indicators_summary
                            ?.total_fuel_consumption_lts /
                            1000) *
                          priceFuel
                        ).toFixed(2)}
                      </h4>
                    )}

                    <BTN
                      btnColorTwo={btnColorTwoFalse}
                      onClick={() => {
                        setYieldTwo(
                          (dataTelemetry.indicators_summary
                            .total_fuel_consumption_lts /
                            1000) *
                            priceFuel
                        );
                        setTextYieldL("");
                        setTextYieldRs("$");
                        setBtnColorTwoTrue(true);
                        setBtnColorTwoFalse(false);
                      }}
                    >
                      $
                    </BTN>
                    <p>
                      <Icon>
                        {" "}
                        <i
                          className={`fas fa-sort-${
                            dataTelemetry.indicators_cmp_from_last_period
                              .cmp_total_fuel_consumption_lts
                          }
                      ${
                        dataTelemetry.indicators_cmp_from_last_period
                          .cmp_total_fuel_consumption_lts === "up"
                          ? "up"
                          : "down"
                      }`}
                        ></i>{" "}
                        <span> vs. periodo anterior </span>{" "}
                      </Icon>
                    </p>
                  </section>
                </BoxHeader>

                <BoxHeader>
                  <h5> DISTANCIA RECORRIDA </h5>

                  <h4>
                    {" "}
                    {dataTelemetry.indicators_summary.total_distance_kms &&
                      dataTelemetry.indicators_summary.total_distance_kms.toFixed(
                        2
                      )}{" "}
                    Km{" "}
                  </h4>

                  <p>
                    <Icon>
                      {" "}
                      <i
                        className={`fas fa-sort-${
                          dataTelemetry.indicators_cmp_from_last_period
                            .cmp_total_distance_kms
                        }
                      ${
                        dataTelemetry.indicators_cmp_from_last_period
                          .cmp_total_distance_kms === "up"
                          ? "up"
                          : "down"
                      }`}
                      ></i>{" "}
                      <span> vs. periodo anterior </span>{" "}
                    </Icon>
                  </p>
                </BoxHeader>
              </Header>

              <Main>
                <BoxLeft>
                  <Row>
                    <Column>
                      <Typography
                        style={{ paddingLeft: "0.5rem" }}
                        variant="h6"
                        gutterBottom
                      >
                        ANÁLISIS DE OPERACIÓN
                      </Typography>
                      <Typography
                        style={{ paddingLeft: "0.5rem" }}
                        variant="body2"
                        gutterBottom
                      >
                        En base a las horas de operación
                      </Typography>
                    </Column>
                  </Row>
                  <ContentGraphic>
                    <Column>
                      <MiddleBox bgColor="green">
                        <p> CONDUCCIÓN </p>
                        <p>
                          {" "}
                          {dataTelemetry.indicators_summary
                            .efficient_driving_time_pctg &&
                            dataTelemetry.indicators_summary.efficient_driving_time_pctg.toFixed(
                              2
                            )}
                          %{" "}
                        </p>
                      </MiddleBox>

                      <MiddleBox>
                        <p> RALENTÍ </p>
                        <p>
                          {" "}
                          {dataTelemetry.indicators_summary.idle_time_pctg &&
                            dataTelemetry.indicators_summary.idle_time_pctg.toFixed(
                              2
                            )}
                          %{" "}
                        </p>
                      </MiddleBox>

                      <MiddleBox bgColor="red">
                        <p> NO RENTABLE EN CONDUCCIÓN </p>
                        <p>
                          {" "}
                          {dataTelemetry.indicators_summary
                            .inefficient_driving_time_pctg &&
                            dataTelemetry.indicators_summary.inefficient_driving_time_pctg.toFixed(
                              2
                            )}
                          %{" "}
                        </p>
                      </MiddleBox>

                      <MiddleBox bgColor="yellow">
                        <p> ACELERACIÓN EN VACÍO </p>
                        <p>
                          {" "}
                          {dataTelemetry.indicators_summary
                            .stopped_acceleration_time_pctg &&
                            dataTelemetry.indicators_summary.stopped_acceleration_time_pctg.toFixed(
                              2
                            )}
                          %{" "}
                        </p>
                      </MiddleBox>
                    </Column>

                    <Grafic>
                      <TextGrafic>
                        <span>HORAS DE OPERACIÓN</span>
                        <span>
                          {" "}
                          <IoMdArrowDropdown />
                          {dataTelemetry.indicators_summary?.total_time_hrs &&
                            dataTelemetry.indicators_summary?.total_time_hrs.toFixed(
                              2
                            )}{" "}
                          Hr{" "}
                        </span>
                      </TextGrafic>

                      <ContainerChart>
                        <Chart
                          width="350px"
                          chartType="PieChart"
                          data={[
                            ["", ""],
                            [
                              "CONDUCCIÓN",
                              dataTelemetry.indicators_summary
                                ?.efficient_driving_time_pctg,
                            ],
                            [
                              "RALENTÍ",
                              dataTelemetry.indicators_summary?.idle_time_pctg,
                            ],
                            [
                              "NO RENTABLE EN CONDUCCIÓN",
                              dataTelemetry.indicators_summary
                                ?.inefficient_driving_time_pctg,
                            ],
                            [
                              "ACELERACIÓN EN VACÍO",
                              dataTelemetry.indicators_summary
                                ?.stopped_acceleration_time_pctg,
                            ],
                          ]}
                          options={{
                            backgroundColor: "transparent",
                            legend: "none",
                            height: 300,
                            hAxis: {
                              viewWindow: {
                                min: 250,
                                max: 400,
                              },
                            },
                            vAxis: {
                              viewWindow: {
                                min: 200,
                                max: 350,
                              },
                            },
                            pieHole: 0.4,
                            colors: [
                              "#00b050",
                              "#276f8b",
                              "#e60000",
                              "#f1c34e",
                            ],
                          }}
                        />
                      </ContainerChart>
                    </Grafic>
                  </ContentGraphic>
                </BoxLeft>

                <BoxRight>
                  <Grafic>
                    <Typography
                      style={{ paddingLeft: "0.5rem" }}
                      variant="h6"
                      gutterBottom
                    >
                      {" "}
                      ANÁLISIS DE USO DE FRENOS{" "}
                    </Typography>
                    <Typography
                      style={{ paddingLeft: "0.5rem" }}
                      variant="body2"
                      gutterBottom
                    >
                      {" "}
                      En base a la distancia recorrida{" "}
                    </Typography>
                    <TextGrafic>
                      <span>VELOCIDAD PROMEDIO</span>

                      <span>
                        {" "}
                        <IoMdArrowDropup />{" "}
                        {dataTelemetry.indicators_summary?.average_speed_kmh &&
                          dataTelemetry.indicators_summary?.average_speed_kmh.toFixed(
                            2
                          )}{" "}
                        Km/Hr{" "}
                      </span>
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
                            left: 15,
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
                  <CSVLink
                    filename={`Relarorio-${getDateNow()}.csv`}
                    data={rows}
                  >
                    Expotar
                  </CSVLink>
                </ButtonSearch>
              </RowButton>

              {graphic && (
                <Row>
                  <Column fullWidth>
                    <ButtonBox onClick={() => setBoxFuel(!boxFuel)}>
                      NIVEL DE COMBUSTIBLE
                    </ButtonBox>
                    {boxFuel && (
                      <ContentFuel>
                        <Chart
                          width={"100%"}
                          height={"500px"}
                          chartType="LineChart"
                          data={[
                            ["x", "cheio", "vazio"],
                            [0, 0, 0],
                          ]}
                          options={{
                            hAxis: {
                              title: "Fuel",
                            },
                            vAxis: {
                              title: "Fuel",
                            },
                            series: {
                              1: { curveType: "function" },
                            },
                          }}
                        />
                      </ContentFuel>
                    )}
                    <ButtonBox onClick={() => setBoxVehicle(!boxVehicle)}>
                      DATOS TÉCNICOS DEL VEHÍCULO
                    </ButtonBox>
                    {boxVehicle && (
                      <Content>
                        <ul>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Modelo :{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.model}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Uso :{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.vehicle_use
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Tipo :{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.description_short
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Motor :{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.engine}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Potencia :{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.power}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Torque :{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.torque}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Cilindrada (CC) :{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.engine_displacement
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Caja :{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.gearbox}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Tipo Transmisión :{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.transmission_type
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Carga Util (kg):{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.payload}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Norma Emisión (kg):{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.emission_norm
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Horometro:{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.horometer}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Descripción del modelo:{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.description_long
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Tracción:{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.traction}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Marca Motor:{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.vehicle_engine_manufacturer
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Medida Potencia:{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.power_unit
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Torque Medida:{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.torque_unit
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Tonelaje:{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.tonnage}{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Transmisión:{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.transmission
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Capacidad De Ejes (ton):{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.axis_capacity
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Largo Carrozable (mm):{" "}
                              <span>
                                {
                                  detailsVehicles?.detail_vehicles[0]
                                    ?.chassis_length
                                }{" "}
                              </span>{" "}
                            </p>
                          </li>
                          <li key={uuid()}>
                            <p>
                              {" "}
                              Odómetro:{" "}
                              <span>
                                {detailsVehicles?.detail_vehicles[0]?.odometer}{" "}
                              </span>{" "}
                            </p>
                          </li>
                        </ul>
                      </Content>
                    )}
                    <br />
                  </Column>
                </Row>
              )}
            </Box>
          )}
        </Center>
      </Container>
    </>
  );
};

export default Telemetry;
