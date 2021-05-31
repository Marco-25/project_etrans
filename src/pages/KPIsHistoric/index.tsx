import {
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import {v4 as uuid} from 'uuid';
import { DataGrid } from '@material-ui/data-grid';

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

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const getDateNow = useCallback(() => {
    let date = new Date();
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }, []);

const subtract = useCallback((a:number,b:number) => {
  return a - b
},[]);

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
    { field: "date", headerName: "FECHA", width: 220 },
    { field: "horometer", headerName: "HORÓMETRO", width: 200 },
    { field: "odometer", headerName: "ODÓMETRO", width: 200 },
    { field: "odoliter", headerName: "ODOLITRO", width: 200 },
    { field: 'hour_operation', headerName: 'HORAS EN OPERACIÓN (H)', width: 250 },
    { field: 'travelled_distance', headerName: 'DISTANCIA RECORRIDA (KM)', width: 250 },
    { field: 'consumed_liters', headerName: 'LITROS CONSUMIDOS (L)', width: 230 },
    { field: 'carbon', headerName: 'HUELLA DE CARBONO (KGCO2)', width: 280 },
  ];


  const rows = horometer.map((horometer,index) => {
    return {
      "id": uuid(),
      "date": horometer?.date_time,
      "horometer": horometer?.operating_time_hrs.toFixed(2),
      "odometer": odometer[index]?.end_odometer_kms.toFixed(2),
      "odoliter": odoliter[index]?.end_odoliter_lts.toFixed(2),
      "hour_operation": subtract(horometer?.operating_time_hrs,horometer?.operating_time_hrs).toFixed(2),
      "travelled_distance": (subtract( odometer[index]?.end_odometer_kms, odometer[index + 1]?.end_odometer_kms) * -1).toFixed(2),
      "consumed_liters": (subtract( odoliter[index]?.end_odoliter_lts, odoliter[index + 1]?.end_odoliter_lts) * -1).toFixed(2),
      "carbon": (subtract( odoliter[index]?.end_odoliter_lts, odoliter[index + 1]?.end_odoliter_lts) * 2.471 * -1).toFixed(2)
    }
  })

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
                <DataGrid rows={rows} columns={columns} pageSize={5} />

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
