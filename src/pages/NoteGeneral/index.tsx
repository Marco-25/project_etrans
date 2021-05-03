import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Menu from '../../components/Menu';
import { Center, Form, Row, SideBar, Toggle,Box } from '../../Styled';
import { MiddleBoxNoteSelect, TitleNote , LittleBox, Note} from './styles.NoteSelect';

const NoteGeneral: React.FC = () => {
    const [visible, setVisible] = useState(true);


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
                 <Typography variant="h6" gutterBottom> NOTA GENERAL  <i className="fas fa-info-circle" style={{fontSize: '15px'}}></i></Typography>
                  <Typography variant="body2" style={{color: 'gray'}} gutterBottom>
                  Nota general del comportamiento de los conductores y vehículos. Puedes consultar información hasta tres meses atrás. La última información generada estará disponible luego de 60 minutos.
                  </Typography> <br />

                  <Typography style={{color: 'gray', fontWeight: 'bold'}} variant="subtitle2" gutterBottom>FORMULARIO DE BÚSQUEDA</Typography>

                  <Form>
                      <FormControl >
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
              <Row> <TitleNote> NOTA GENERAL DE LA FLOTA SELECCIONADA </TitleNote> </Row>


                <Row>
                    <MiddleBoxNoteSelect style={{background: 'rgb(23, 52, 60)'}}>
                        <p>NOTA GENERAL</p>
                        <p> 6.5 </p>
                        <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <p>NOTA CONSUMO</p>
                        <p> 7.3 </p>
                        <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <p>NOTA FRENOS</p>
                        <p> 4.1 </p>
                        <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <p>NOTA SEGURIDAD</p>
                        <p> 7.9 </p>
                        <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect style={{background: 'rgb(121, 165, 176)'}}>
                        <p>NOTA DIFICULTAD</p>
                        <p> 4.6 </p>
                        <p> <i className="fa fa-caret-down"></i> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>
                </Row>
                 <hr/>
                 <Row> <TitleNote> RANKING DEL PERIODO </TitleNote> </Row>
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

                <Row>
                    <Note>
                        <h4> MEJORES NOTAS </h4>
                        <ul>
                            <span>
                                <p> <i className="fas fa-trophy green"></i> </p>
                                <strong> conductor</strong>
                                <p>Nota</p>
                            </span>

                            <li>
                                <p> 1</p>
                                <strong> Roberto backdorf</strong>
                                <p>7.2 <i className="fa fa-caret-down"></i> </p>
                            </li>
                            <li>
                                <p> 2 </p>
                                <strong> Nicolas Garcia </strong>
                                <p> 6.2 <i className="fa fa-caret-down"></i> </p>
                            </li>
                        </ul>
                    </Note>

                    <Note>
                        <h4> Peores NOTAS </h4>
                        <ul>
                            <span>
                                <p> <i className="fas fa-exclamation-triangle red"></i> </p>
                                <strong> conductor</strong>
                                <p>Nota</p>
                            </span>

                            {/* <li>
                                <p> 1</p>
                                <strong> Conductor</strong>
                                <p> Nota</p>
                            </li> */}

                        </ul>
                    </Note>
                </Row>


              </Box>
              </Center>
           </Container>
        </>
      );
}

export default NoteGeneral;
