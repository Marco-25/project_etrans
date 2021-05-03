import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import {FaChartPie, FaTruck} from 'react-icons/fa';
import Menu from '../../components/Menu';
import { Box, Center, Form, Row, SideBar, Toggle } from '../../Styled';
import { BoxInfo,BoxInfo01, BoxInfoPrinciple, ContainerRow, LittleBox,Table,Title } from './styles.NoteDetails';

const NoteDetails: React.FC = () => {
  const [visible, setVisible] = useState(true);

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
    return(
      <>
      <Menu />
          <Container maxWidth={false} >
          <Center>
          {visible &&
           <SideBar>
                 <Typography variant="h6" gutterBottom> NOTA DETALLADA <i className="fas fa-info-circle" style={{fontSize: '15px'}}></i></Typography>
                  <Typography variant="body2" style={{color: 'gray'}} gutterBottom>
                  Nota detallada del comportamiento de los conductores y vehículos. Puedes consultar información hasta tres meses atrás. La última información generada estará disponible luego de 60 minutos.
                  </Typography> <br />

                  <Typography style={{color: 'gray', fontWeight: 'bold'}} variant="subtitle2" gutterBottom>FORMULARIO DE BÚSQUEDA</Typography>

                  <Form>
                      <FormControl>
                          <InputLabel id="search">Buscar por </InputLabel>
                          <Select
                              labelId="search"
                              id="search"
                              style={{width: '100px'}}
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
                              style={{width: '100px'}}
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
              <Toggle onClick={handleMenu}><i className="fas fa-filter"></i> Filtros</Toggle>
              <Box>
                 <Row>
                    <LittleBox href="#">
                        <p> General </p>
                    </LittleBox>

                    <LittleBox href="#">
                        <p> Consumo </p>
                    </LittleBox>

                    <LittleBox href="#">
                        <p> frenos </p>
                    </LittleBox>

                    <LittleBox href="#">
                        <p> seguridad </p>
                    </LittleBox>

                    <LittleBox href="#">
                        <p> Dificultad </p>
                    </LittleBox>
                </Row>

                <ContainerRow>
                        <BoxInfoPrinciple>
                            <p> NOTA GENERAL </p>
                            <p> 6,5 </p>
                            <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                        </BoxInfoPrinciple>

                   <Box>
                   <Row>
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
                    </Row>

                    <Row>
                        <BoxInfo01 bgColor>
                            <p> CONDUCTORES EN OPERACIÓN </p>
                            <p> <FaChartPie /> 2<strong>/4</strong> </p>
                            <p>&nbsp;</p>
                        </BoxInfo01>

                        <BoxInfo01 bgColor>
                             <p> RENDIMIENTO (KM/L) </p>
                            <p> <FaTruck /> 6,06 <span> Km/L</span> </p>
                            <p> <i className="fa fa-caret-up green"></i> vs. periodo anterior </p>
                        </BoxInfo01>

                        <BoxInfo01 bgColor>
                            <p> DISTANCIA RECORRIDA (KM) </p>
                            <p> 1824,29 <span>km</span> </p>
                            <p> <i className="fa fa-caret-down red"></i> vs. periodo anterior </p>
                        </BoxInfo01>


                        <BoxInfo01 bgColor>
                            <p> TIEMPO EN OPERACIÓN (HR) </p>
                            <p> 60,28 <span>horas</span> </p>
                            <p> <i className="fa fa-caret-down red"></i> vs. periodo anterior </p>
                        </BoxInfo01>
                    </Row>
                   </Box>
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
