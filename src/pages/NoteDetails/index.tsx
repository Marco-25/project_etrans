import {
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { toast, ToastContainer } from "react-toastify";

import Menu from "../../components/Menu";
import { INotaDetallada } from "../../interfaces/INotaDetallada";
import { INotaDetalladaWithIndicators } from "../../interfaces/INotaDetalladaWithIndicators";
import {
  apiNota,
  apiNotaDetails,
  apiNotaMoreDetails,
} from "../../services/notaDetallada";
import {
  Box,
  Center,
  Form,
  FormContainerSelect,
  Row,
  RowButton,
  SideBar,
  Toggle,
  Icon,
} from "../../Styled";
import {
  Line,
  Indicators,
  InfoBoxContainer,
  LineFix,
  LittleBox,
  Title,
} from "./styles";
import {
  templateAllAverageScores,
  templateDetailsIndicator,
  templateSubScore,
} from "./Templates";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ButtonSearch from "../../components/ButtonSearch";

const NoteDetails: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [indicatorsVehiclesOrDrivers, setIndicatorsVehiclesOrDrivers] =
    useState<INotaDetalladaWithIndicators>({} as INotaDetalladaWithIndicators);
  const [VehiclesOrDrivers, setVehiclesOrDrivers] = useState<INotaDetallada>(
    {} as INotaDetallada
  );

  const [clickBgColorGeneral, setClickBgColorGeneral] = useState("general");
  const [clickBgColorDefaultOne, setClickBgColorDefaultOne] = useState(String);
  const [clickBgColorDefaultTwo, setClickBgColorDefaultTwo] = useState(String);
  const [clickBgColorDefaultThree, setClickBgColorDefaultThree] =
    useState(String);
  const [clickBgColorHard, setClickBgColorHard] = useState(String);

  const [renderNumber, setRenderNumber] = useState<number>(0);

  const [renderDriver, setRenderDriver] = useState(true);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState(String);
  const [dateEnd, setDateEnd] = useState(String);

  const [searchBy, setSearchBy] = useState("vehicles");

  const names = ["GENERAL", "CONSUMO", "FRENOS", "SECURIDAD", "DIFICULDAD"];

  function createColumns(
    score_type: string,
    current_period_grade: number,
    status: string,
    previous_period_grade: number,
    any?: any
  ) {
    return {
      score_type,
      current_period_grade,
      status,
      previous_period_grade,
      any,
    };
  }

  const rowsIndicator = indicatorsVehiclesOrDrivers.all_average_scores?.map(
    (details) =>
      details.map((e) =>
        createColumns(
          e.score_type,
          e.current_period_grade,
          e.status,
          e.previous_period_grade
        )
      )
  );

  const rows = VehiclesOrDrivers.all_positions?.map((details) =>
    details.details[renderNumber].subscores.map((e) =>
      createColumns(
        e.subscore_name,
        e.average_grade,
        e.status,
        e.last_period_grade
      )
    )
  );

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

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      try {
        setLoading(true);
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

        if (searchBy === "vehicles") {
          const res = await apiNota.post(`/vehicles`, {
            from_timestamp: `${dateInitial}`,
            search_list: [`${imei}`],
            to_timestamp: `${dateEnd}`,
          });
          // setVehiclesOrDrivers(res.data);
          console.log(res.data);
        }

        if (searchBy === "drivers") {
          const res = await apiNota.post(`/drivers`, {
            from_timestamp: `${dateInitial}`,
            search_list: [`${imei}`],
            to_timestamp: `${dateEnd}`,
          });
          // setVehiclesOrDrivers(res.data);
          console.log(res.data);
          if (renderDriver) {
            // handleSearchVehicle('general');
            setRenderDriver(false);
          }
        }

        toast.success("Dados carregados!");
      } catch (error) {
        toast.success("Ocorreu um erro, tente novamente!");
      } finally {
        setLoading(false);
      }
    },
    [dateInitial, dateEnd, imei, searchBy, renderDriver]
  );

  useEffect(() => {
    const dateLast = new Date(Date.now() - 5 * 24 * 3600000);
    apiNotaDetails
      .post(`/vehicles`, {
        from_timestamp: `${dateLast}`,
        score_type: "general",
        search_list: [`867162026821918`],
        to_timestamp: `${new Date()}`,
      })
      .then((res) => {
        setIndicatorsVehiclesOrDrivers(res.data);
      });

    apiNotaMoreDetails
      .post(`/vehicles`, {
        from_timestamp: `${dateLast}`,
        for_export: 0,
        score_type: "general",
        search_list: [`867162026821918`],
        to_timestamp: `${new Date()}`,
      })
      .then((res) => {
        setVehiclesOrDrivers(res.data);
      });
  }, []);

  return (
    <>
      <Menu />
      {visible && (
        <SideBar>
          <h4>NOTA GENERAL </h4>
          <p>
            Nota general del comportamiento de los conductores y vehículos.
            Puedes consultar información hasta tres meses atrás. La última
            información generada estará disponible luego de 60 minutos.
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
                <InputLabel htmlFor="age-native-simple">Buscar por</InputLabel>
                <Select
                  native
                  onChange={(e: ChangeEvent<HTMLInputElement | any>) =>
                    setSearchBy(e.currentTarget.value)
                  }
                >
                  <option value="vehicles">vehicles</option>
                  <option value="drivers">Conductores</option>
                </Select>
              </FormControl>

              {searchBy === "vehicles" ? (
                <FormControl>
                  <InputLabel htmlFor="age-native-simple" id="vehicle">
                    Veiculos
                  </InputLabel>
                  <Select
                    native
                    onChange={(e: ChangeEvent<HTMLInputElement | any>) =>
                      setImei(e.currentTarget.value)
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={867162027207018}>vehicle #1</option>
                    <option value={867162027207851}>vehicle #2</option>
                  </Select>
                </FormControl>
              ) : (
                <FormControl>
                  <InputLabel htmlFor="age-native-simple" id="drivers">
                    Conductor
                  </InputLabel>
                  <Select
                    native
                    onChange={(e: ChangeEvent<HTMLInputElement | any>) =>
                      setImei(e.currentTarget.value)
                    }
                  >
                    <option aria-label="None" value="" />
                    <option value={842}>drivers #1</option>
                    <option value={843}>drivers #2</option>
                    <option value={844}>drivers #2</option>
                  </Select>
                </FormControl>
              )}
            </FormContainerSelect>
            <TextField
              id="datetime-local"
              label="Fecha de Inicio"
              type="datetime-local"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setDateInitial(e.currentTarget.value.replace("T", " "))
              }
              defaultValue="0000-00-00T00:00"
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
              defaultValue="0000-00-00T00:00"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <RowButton>
              <ButtonSearch loading={loading} type="submit">
                buscar
              </ButtonSearch>
            </RowButton>
          </Form>
        </SideBar>
      )}
      <Container maxWidth={false}>
        <ToastContainer position="top-center" />
        <Toggle onClick={handleMenu}> Filtros</Toggle>

        <Center onClick={() => setVisible(false)}>
          <Box>
            <Row>
              <LittleBox
                bgColor={clickBgColorGeneral}
                onClick={() => {
                  setRenderNumber(0);
                  setClickBgColorGeneral("general");
                  setClickBgColorDefaultOne("");
                  setClickBgColorDefaultTwo("");
                  setClickBgColorDefaultThree("");
                  setClickBgColorHard("");
                }}
              >
                <p> General </p>
              </LittleBox>

              <LittleBox
                bgColor={clickBgColorDefaultOne}
                onClick={() => {
                  setRenderNumber(1);
                  setClickBgColorGeneral("");
                  setClickBgColorDefaultOne("default");
                  setClickBgColorDefaultTwo("");
                  setClickBgColorDefaultThree("");
                  setClickBgColorHard("");
                }}
              >
                <p> Consumo </p>
              </LittleBox>

              <LittleBox
                bgColor={clickBgColorDefaultTwo}
                onClick={() => {
                  setRenderNumber(2);
                  setClickBgColorGeneral("");
                  setClickBgColorDefaultOne("");
                  setClickBgColorDefaultTwo("default");
                  setClickBgColorDefaultThree("");
                  setClickBgColorHard("");
                }}
              >
                <p> frenos </p>
              </LittleBox>

              <LittleBox
                bgColor={clickBgColorDefaultThree}
                onClick={() => {
                  setRenderNumber(3);
                  setClickBgColorGeneral("");
                  setClickBgColorDefaultOne("");
                  setClickBgColorDefaultTwo("");
                  setClickBgColorDefaultThree("default");
                  setClickBgColorHard("");
                }}
              >
                <p> seguridad </p>
              </LittleBox>

              <LittleBox
                bgColor={clickBgColorHard}
                onClick={() => {
                  setRenderNumber(4);
                  setClickBgColorGeneral("");
                  setClickBgColorDefaultOne("");
                  setClickBgColorDefaultTwo("");
                  setClickBgColorDefaultThree("");
                  setClickBgColorHard("hard");
                }}
              >
                <p> Dificultad </p>
              </LittleBox>
            </Row>

            <Line>
              {renderNumber === 0
                ? indicatorsVehiclesOrDrivers.all_average_scores?.map(
                    (details) =>
                      details.map((pointsVehicle) =>
                        templateAllAverageScores(pointsVehicle)
                      )
                  )
                : VehiclesOrDrivers.all_positions?.map((details, index) => (
                    <InfoBoxContainer key={index}>
                      <div>
                        <h4>{details.details[renderNumber].status}</h4>
                        <p>
                          **{details.details[renderNumber].current_period}**
                        </p>
                        <strong>
                          <i
                            className={`fas fa-sort-${
                              details.details[renderNumber].status
                            } ${
                              details.details[renderNumber].status === "up"
                                ? "up"
                                : "down"
                            }`}
                          ></i>{" "}
                          vs. periodo anterior
                        </strong>
                      </div>
                      {details?.details[renderNumber]?.subscores?.map(
                        (params) => templateSubScore(params)
                      )}
                    </InfoBoxContainer>
                  ))}

              <LineFix>
                <Indicators key={12012}>
                  <h4>VEHÍCULOS EN OPERACIÓN</h4>
                  <p>1/2</p>
                  <p>&nbsp;</p>
                </Indicators>

                {indicatorsVehiclesOrDrivers.indicators?.map((indicator) =>
                  templateDetailsIndicator(indicator)
                )}
              </LineFix>
            </Line>

            <Title> RANKING {names[renderNumber]} </Title>

            <div>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Tipo</TableCell>
                      <TableCell align="center">Consumo atual</TableCell>
                      <TableCell align="center">Diferença</TableCell>
                      <TableCell align="center">Periodo passado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {renderNumber === 0
                      ? rowsIndicator?.map((row) =>
                          row.map((e, index) => (
                            <TableRow key={index}>
                              <TableCell align="center">
                                {e.score_type}{" "}
                              </TableCell>
                              <TableCell align="center">
                                {e.current_period_grade}{" "}
                              </TableCell>
                              <TableCell align="center">
                                {e.status === "equal" ? (
                                  <i className="fas fa-equals"></i>
                                ) : (
                                  <Icon>
                                    {" "}
                                    <i
                                      className={`fas fa-sort-${e.status} ${
                                        e.status === "up" ? "up" : "down"
                                      }`}
                                    ></i>{" "}
                                  </Icon>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                {e.previous_period_grade}{" "}
                              </TableCell>
                            </TableRow>
                          ))
                        )
                      : rows?.map((e) =>
                          e.map((e, index) => (
                            <TableRow key={index}>
                              <TableCell align="center">
                                {e.score_type}{" "}
                              </TableCell>
                              <TableCell align="center">
                                {e.current_period_grade}{" "}
                              </TableCell>
                              <TableCell align="center">
                                {e.status === "equal" ? (
                                  <i className="fas fa-equals"></i>
                                ) : (
                                  <Icon>
                                    {" "}
                                    <i
                                      className={`fas fa-sort-${e.status} ${
                                        e.status === "up" ? "up" : "down"
                                      }`}
                                    ></i>{" "}
                                  </Icon>
                                )}
                              </TableCell>
                              <TableCell align="center">
                                {e.previous_period_grade}{" "}
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default NoteDetails;
