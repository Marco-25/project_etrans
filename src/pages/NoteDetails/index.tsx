import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { FaChartPie, FaFilter, FaTruck } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import Menu from '../../components/Menu';
import { Box, Center, Form, Row, SideBar, Toggle } from '../../Styled';
import { BoxInfo, BoxDetails, RowDetails, BoxInfoMoreDetail, BoxInfoPrinciple, ContainerRow, LittleBox, Table, Title } from './styles.NoteDetails';

const NoteDetails: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const [idVehiclesOrDrivers, setIdVehiclesOrDrivers] = useState(String);
  const [nameVehicleOrDriver, setNameVehicleOrDriver] = useState(String);
  const [points, setPoints] = useState(String);

  const [clickBgColorGeneral, setClickBgColorGeneral] = useState(String);
  const [clickBgColorDefaultOne, setClickBgColorDefaultOne] = useState(String);
  const [clickBgColorDefaultTwo, setClickBgColorDefaultTwo] = useState(String);
  const [clickBgColorDefaultThree, setClickBgColorDefaultThree] = useState(String);
  const [clickBgColorHard, setClickBgColorHard] = useState(String);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'lastName00', headerName: 'First name', width: 250 },
    { field: 'lastName01', headerName: 'Last name', width: 250 },
    { field: 'lastName02', headerName: 'Last name', width: 250 },
    { field: 'lastName03', headerName: 'Last name', width: 250 },
    { field: 'lastName04', headerName: 'Last name', width: 250 },
    { field: 'lastName05', headerName: 'Last name', width: 250 },
  ];

  const rows = [
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  ];

  function handleMenu() {
    setVisible(!visible);
  }
  return (
    <>
      <Menu />
      <Container maxWidth={false} >
        <Center>
          {visible &&
            <SideBar>
              <Typography variant="h6" gutterBottom> NOTA DETALLADA <i className="fas fa-info-circle" style={{ fontSize: '15px' }}></i></Typography>
              <Typography variant="body2" style={{ color: 'gray' }} gutterBottom>
                Nota detallada del comportamiento de los conductores y vehículos. Puedes consultar información hasta tres meses atrás. La última información generada estará disponible luego de 60 minutos.
                  </Typography> <br />

              <Typography style={{ color: 'gray', fontWeight: 'bold' }} variant="subtitle2" gutterBottom>FORMULARIO DE BÚSQUEDA</Typography>

              <Form>
                <FormControl>
                  <InputLabel id="search">Buscar por </InputLabel>
                  <Select
                    labelId="search"
                    id="search"
                    style={{ width: '100px' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Conductores</MenuItem>
                    <MenuItem value={20}>veicuos</MenuItem>
                  </Select>
                </FormControl>
                <FormControl >
                  <InputLabel id="veiculos">Veiculos</InputLabel>
                  <Select
                    labelId="veiculos"
                    id="veiculos"
                    style={{ width: '100px' }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Fecha de Inicio"
                  margin="normal"
                  fullWidth
                  required
                />

                <TextField
                  margin="normal"
                  variant="outlined"
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
                  id="time"
                  label="Hora de término"
                  type="time"
                  defaultValue="00:00"
                  fullWidth
                />

                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Fecha de Término*"
                  margin="normal"
                  fullWidth
                />

                <TextField
                  type="text"
                  variant="outlined"
                  size="small"
                  label="Precio combustible"
                  margin="normal"
                  fullWidth
                  required
                />

                <Button fullWidth variant="contained" color="primary">Buscar</Button>
              </Form>

            </SideBar>
          }
          <Toggle onClick={handleMenu}> <FaFilter /> Filtros</Toggle>
          <Box>
            <Row>
              <LittleBox bgColor={clickBgColorGeneral} onClick={() => {
                setClickBgColorGeneral('general');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
                setIdVehiclesOrDrivers('123');
                setNameVehicleOrDriver('vehicle General');
                setPoints('7');
              }}>
                <p> General </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultOne} onClick={() => {
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('default');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
                setIdVehiclesOrDrivers('124');
                setNameVehicleOrDriver('vehicle Consumo')
                setPoints('7')
              }}>
                <p> Consumo </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultTwo} onClick={() => {
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('default');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
                setIdVehiclesOrDrivers('125');
                setNameVehicleOrDriver('vehicle frenos')
                setPoints('7')
              }}>
                <p> frenos </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultThree} onClick={() => {
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('default');
                setClickBgColorHard('');
                setIdVehiclesOrDrivers('125');
                setNameVehicleOrDriver('vehicle seguridad')
                setPoints('7')
              }}>
                <p> seguridad </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorHard} onClick={() => {
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('hard');
                setIdVehiclesOrDrivers('126');
                setNameVehicleOrDriver('vehicle General')
                setPoints('7')
              }}>
                <p> Dificultad </p>
              </LittleBox>
            </Row>
            <ContainerRow>
              <BoxInfoPrinciple>
                <p> NOTA GENERAL </p>
                <p> 6,5 </p>
                <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
              </BoxInfoPrinciple>

              <BoxDetails>
                <RowDetails>
                  <BoxInfo>
                    <p> NOTA CONSUMO DE COMBUSTIBLE </p>
                    <p> 7,3 </p>
                    <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                  </BoxInfo>

                  <BoxInfo>
                    <p> NOTA USO DE FRENOS </p>
                    <p> 3,9 </p>
                    <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                  </BoxInfo>

                  <BoxInfo>
                    <p> NOTA SEGURIDAD </p>
                    <p> 8 </p>
                    <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                  </BoxInfo>


                  <BoxInfo>
                    <p> NOTA DIFICULTAD </p>
                    <p> 4,8 </p>
                    <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                  </BoxInfo>
                </RowDetails>

                <RowDetails>
                  <BoxInfoMoreDetail bgColor>
                    <p> CONDUCTORES EN OPERACIÓN </p>
                    <p> <FaChartPie /> &nbsp;&nbsp;&nbsp; 2<strong>/4</strong> </p>
                    <p>&nbsp;</p>
                  </BoxInfoMoreDetail>

                  <BoxInfoMoreDetail bgColor>
                    <p> RENDIMIENTO (KM/L) </p>
                    <p> <FaTruck />&nbsp;&nbsp;&nbsp; 6,06 &nbsp;<span> Km/L</span> </p>
                    <p>  <IoMdArrowDropup size={18} /> vs. periodo anterior </p>
                  </BoxInfoMoreDetail>

                  <BoxInfoMoreDetail bgColor>
                    <p> DISTANCIA RECORRIDA (KM) </p>
                    <p> 1824,29 &nbsp;<span>km</span> </p>
                    <p>  <IoMdArrowDropup size={18} /> vs. periodo anterior </p>
                  </BoxInfoMoreDetail>


                  <BoxInfoMoreDetail bgColor>
                    <p> TIEMPO EN OPERACIÓN (HR) </p>
                    <p> 60,28 &nbsp;<span>horas</span> </p>
                    <p>  <IoMdArrowDropup size={18} /> vs. periodo anterior </p>
                  </BoxInfoMoreDetail>
                </RowDetails>
              </BoxDetails>
            </ContainerRow>

            <Title> RANKING GENERAL </Title>
            <Table>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
            </Table>

          </Box>
        </Center>
      </Container>
    </>
  );
}

export default NoteDetails;
