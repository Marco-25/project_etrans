import { Container, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { DataGrid } from '@material-ui/data-grid';
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import { BiExport } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../../components/Menu';
import { IHorometer } from '../../interfaces/IHorometer';
import { IOdoliter } from '../../interfaces/IOdoliter';
import { IOdometer } from '../../interfaces/IOdometer';
import { apiTelemetryKPI } from '../../services/api';
import { Box, Center, Form, Row, SideBar, Toggle, Table, RowButton, ButtonSearch, FormContainerSelect } from '../../Styled';
import { MiddleBoxKPI, TitleKPI, Header, ContainerKPI } from './styles.kpishistoric';

const KPIsHistoric: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [horometer, setHorometer] = useState<IHorometer[]>([]);
  const [odometer, setOdometer] = useState<IOdometer[]>([]);
  const [odoliter, setOdoliter] = useState<IOdoliter[]>([]);

  const [conditionSearch, setConditionSearch] = useState(false);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [rows, setRows] = useState<any[]>([]);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const getDateNow = useCallback(() => {
    let date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();

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

    const odometer = await apiTelemetryKPI.get(`/odometer?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`, {});
    const horometer = await apiTelemetryKPI.get(`/horometer?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`, {});
    const odoliter = await apiTelemetryKPI.get(`/odoliter?imei=${imei}&from_timestamp=${dateInitial}&to_timestamp=${dateEnd}`, {});
    setHorometer(horometer.data.measurements);
    setOdometer(odometer.data.measurements);
    setOdoliter(odoliter.data.measurements);

    console.log(horometer);
    console.log(odometer);
    console.log(odoliter);

    setConditionSearch(true);

    toast.success("Dados carregados!");

  }, [dateInitial, dateEnd, imei]);

  //table
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'date_time', headerName: 'FECHA', width: 120 }, //horometer
    { field: 'operating_time_hrs', headerName: 'HORÓMETRO', width: 150 }, //horometer
    { field: 'end_odometer_kms', headerName: 'ODÓMETRO', width: 150 },// odometer
    { field: 'end_odoliter_lts', headerName: 'ODOLITRO', width: 140 }, // odoliter
    // { field: 'total_time_hrs', headerName: 'HORAS EN OPERACIÓN (H)', width: 250 },
    // { field: 'idle_time_pctg', headerName: 'DISTANCIA RECORRIDA (KM)', width: 250 },
    // { field: 'stopped_acceleration_time_pctg', headerName: 'LITROS CONSUMIDOS (L)', width: 230 },
    // { field: 'average_speed_kmh', headerName: 'HUELLA DE CARBONO (KGCO2)', width: 280 },
  ];

  const rowHorometer = horometer.map(horometer => {
    return {
      id: uuid(),
      date_time: horometer.date_time && horometer.date_time,
      operating_time_hrs: horometer.operating_time_hrs && horometer.operating_time_hrs.toFixed(2),

    }
  });

  const rowOdometer = odometer.map(odometer => {
    return {
      end_odometer_kms: odometer.end_odometer_kms && odometer.end_odometer_kms.toFixed(2),

    }
  });

  const rowOdoliter = odoliter.map(odoliter => {
    return {
      end_odoliter_lts: odoliter?.end_odoliter_lts && odoliter?.end_odoliter_lts.toFixed(2),
    }
  });


  useEffect(() => {
    console.log(rowOdometer);
    console.log(rowOdoliter);
    setRows([])
    getDateNow();
  }, [getDateNow, rowOdometer, rowOdoliter]);

  return (
    <>
      <Menu />
      <Container maxWidth={false} >
        <ToastContainer position="top-center" />
        <Center>
          {visible &&
            <SideBar>
              <h4>REPORTE DE KPIS HISTÓRICO <IoMdInformationCircle /> </h4>
              <p>
                Revisa el horómetro, odómetro y odolitro de tu vehículo para distintas fechas. Puedes consultar información hasta tres meses atrás.
                </p> <br />

              <h5>FORMULARIO DE BÚSQUEDA</h5>

              <Form onSubmit={handleSubmit}>
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
                    <InputLabel htmlFor="age-native-simple" id="vehicle">Veiculos</InputLabel>
                    <Select
                      native
                      onChange={(e: ChangeEvent<HTMLInputElement | any>) => setImei(e.currentTarget.value)}
                    >
                      <option aria-label="None" value="" />
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDateInitial(e.currentTarget.value.replace('T', ' '))}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    id="datetime-local"
                    label="Fecha de Término"
                    type="datetime-local"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDateEnd(e.currentTarget.value.replace('T', ' '))}
                    defaultValue
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </FormContainerSelect>

                <RowButton>
                  <ButtonSearch>buscar</ButtonSearch>
                </RowButton>
              </Form>

            </SideBar>
          }
          <Toggle onClick={handleMenu}> <FaFilter /> Filtros</Toggle>
          <Box>
            {!conditionSearch ? (
              <ContainerKPI>
                <h5> REPORTE DE KPIS HISTÓRICO</h5>
                <p>Por favor seleccione un vehículo y una fecha para buscar la información.</p>
              </ContainerKPI>

            ) : (<>

              <Row> <TitleKPI> RESUMEN DE VARIABLES </TitleKPI> </Row>
              <Header>
                <MiddleBoxKPI>
                  <h5> 172.1 </h5>
                  <h4> Horas en Operación </h4>
                </MiddleBoxKPI>

                <MiddleBoxKPI>
                  <h5> 8648.0 <span> Km </span> </h5>
                  <h4> Distancia Recorrida</h4>
                </MiddleBoxKPI>

                <MiddleBoxKPI>
                  <h5> 3000.5 <span> L </span> </h5>
                  <h4> Litros Consumidos </h4>
                </MiddleBoxKPI>

                <MiddleBoxKPI>
                  <h5> 7414.2 <span> KgCO2 </span> </h5>
                  <h4> Huella de Carbono </h4>
                </MiddleBoxKPI>
              </Header>

              <Table style={{ height: '600px' }}>
                {rows &&
                  <DataGrid rows={rowHorometer} columns={columns} pageSize={10} />
                }
              </Table>
              <br />
              <RowButton align="center">
                <ButtonSearch>
                  <BiExport />
                  <CSVLink filename={`Relatorio-${getDateNow()}.csv`} data={rowHorometer || [{}]}>Expotar</CSVLink>
                </ButtonSearch>
              </RowButton>

            </>)}
          </Box>
        </Center>
      </Container>
    </>
  );
}

export default KPIsHistoric;
