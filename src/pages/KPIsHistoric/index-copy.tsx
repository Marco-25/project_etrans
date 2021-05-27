import {
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";

import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { CSVLink } from "react-csv";
import { BiExport } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import Menu from "../../components/Menu";
import { IHorometer } from "../../interfaces/IHorometer";
import { apiTelemetryKPI } from "../../services/telemetryKPI";
import {
  Box,
  Center,
  Form,
  Row,
  SideBar,
  Toggle,
  RowButton,
  FormContainerSelect,
} from "../../Styled";
import {
  MiddleBoxKPI,
  TitleKPI,
  Header,
  ContainerKPI,
} from "./styles.kpishistoric";
import ButtonSearch from "../../components/ButtonSearch";
import { IOdoliter } from "../../interfaces/IOdoliter";
import { IOdometer } from "../../interfaces/IOdometer";

const KPIsHistoric: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [horometer, setHorometer] = useState<IHorometer[]>([]);
  const [odoliter, setOdoliter] = useState<IOdoliter[]>([]);
  const [odometer, setOdometer] = useState<IOdometer[]>([]);

  const [conditionSearch, setConditionSearch] = useState(false);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [rows, setRows] = useState<any[]>([]);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const getDateNow = useCallback(() => {
    let date = new Date();
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }, []);

  function createData(date: string, horometro: number, odometro: number, odolitro: number) {
    return { date, horometro, odometro, odolitro };
  }

  const row = [
    createData('Frozen yoghurt', 159, 6.0, 24)
  ]

  const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setLoading(true);

        if (!imei) {
          toast.info("Infome um veiculo");
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

        apiTelemetryKPI
          .get(
            `/odometer?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`
          )
          .then((res) => setOdometer(res.data.measurements));
        apiTelemetryKPI
          .get(
            `/horometer?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`
          )
          .then((res) => setHorometer(res.data.measurements));
        apiTelemetryKPI
          .get(
            `/odoliter?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`
          )
          .then((res) => setOdoliter(res.data.measurements));
        setConditionSearch(true);

        toast.success("Dados carregados!");

        //@ts-ignore
        const seila = horometer.map(e => {
          return(
            e.operating_time_hrs
          )
        })
        console.log(seila);

      } catch (error) {
        toast.error("Ocorreu um erro, tente novamente!");
      } finally {
        setLoading(false);
      }
    },
    [dateInitial, dateEnd, imei]
  );

  //table
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "date_time", headerName: "FECHA", width: 220 }, //horometer
    { field: "operating_time_hrs", headerName: "HORÓMETRO", width: 250 }, //horometer
    { field: "end_odometer_kms", headerName: "ODÓMETRO", width: 250 }, // odometer
    { field: "end_odoliter_lts", headerName: "ODOLITRO", width: 240 }, // odoliter
    // { field: 'total_time_hrs', headerName: 'HORAS EN OPERACIÓN (H)', width: 250 },
    // { field: 'idle_time_pctg', headerName: 'DISTANCIA RECORRIDA (KM)', width: 250 },
    // { field: 'stopped_acceleration_time_pctg', headerName: 'LITROS CONSUMIDOS (L)', width: 230 },
    // { field: 'average_speed_kmh', headerName: 'HUELLA DE CARBONO (KGCO2)', width: 280 },
  ];

  return (
    <>
      <Menu />
      {visible && (
        <SideBar>
          <h4>
            REPORTE DE KPIS HISTÓRICO <IoMdInformationCircle />{" "}
          </h4>
          <p>
            Revisa el horómetro, odómetro y odolitro de tu vehículo para
            distintas fechas. Puedes consultar información hasta tres meses
            atrás.
          </p>{" "}
          <br />
          <h5>FORMULARIO DE BÚSQUEDA</h5>
          <Form onSubmit={handleSubmit}>
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
                  onChange={(e: ChangeEvent<HTMLInputElement | any>) =>
                    setImei(e.currentTarget.value)
                  }
                >
                  <option aria-label="None" value="" />
                  <option value={867162026821918}>veiculo #0</option>
                  <option value={867162027207018}>veiculo #1</option>
                  <option value={867162027207851}>veiculo #2</option>
                </Select>
              </FormControl>
            </FormContainerSelect>

            <FormContainerSelect>
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
                defaultValue
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormContainerSelect>

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
        <Toggle onClick={handleMenu}>
          {" "}
          <FaFilter /> Filtros
        </Toggle>

        <Center onClick={() => setVisible(false)}>
          <Box>
            {!conditionSearch ? (
              <ContainerKPI>
                <h5> REPORTE DE KPIS HISTÓRICO</h5>
                <p>
                  Por favor seleccione un vehículo y una fecha para buscar la
                  información.
                </p>
              </ContainerKPI>
            ) : (
              <>
                <Row>
                  {" "}
                  <TitleKPI> RESUMEN DE VARIABLES </TitleKPI>{" "}
                </Row>
                <Header>
                  <MiddleBoxKPI>
                    <h5> 172.1 </h5>
                    <h4> Horas en Operación </h4>
                  </MiddleBoxKPI>

                  <MiddleBoxKPI>
                    <h5>
                      {" "}
                      8648.0 <span> Km </span>{" "}
                    </h5>
                    <h4> Distancia Recorrida</h4>
                  </MiddleBoxKPI>

                  <MiddleBoxKPI>
                    <h5>
                      {" "}
                      3000.5 <span> L </span>{" "}
                    </h5>
                    <h4> Litros Consumidos </h4>
                  </MiddleBoxKPI>

                  <MiddleBoxKPI>
                    <h5>
                      {" "}
                      7414.2 <span> KgCO2 </span>{" "}
                    </h5>
                    <h4> Huella de Carbono </h4>
                  </MiddleBoxKPI>
                </Header>

                <TableContainer component={Paper}>
                <Table aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">date</StyledTableCell>
                      <StyledTableCell align="center">horometro</StyledTableCell>
                      <StyledTableCell align="center">odometro</StyledTableCell>
                      <StyledTableCell align="center">odolitro</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {horometer.map((row) => (
                      <StyledTableRow key={row.date_time}>
                        <StyledTableCell align="center">{row.date_time}</StyledTableCell>
                        <StyledTableCell align="center">{row?.operating_time_hrs.toFixed(2)}</StyledTableCell>
                        {odometer.map(e => (
                           <StyledTableCell align="center">{e?.end_odometer_kms.toFixed(2)}</StyledTableCell>
                        ))}
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                <br />
                <RowButton align="center">
                  <ButtonSearch>
                    <BiExport />
                    <CSVLink
                      filename={`Relatorio-${getDateNow()}.csv`}
                      data={[{}]}
                    >
                      Expotar
                    </CSVLink>
                  </ButtonSearch>
                </RowButton>
              </>
            )}
          </Box>
        </Center>
      </Container>
    </>
  );
};

export default KPIsHistoric;
