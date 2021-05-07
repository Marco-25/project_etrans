import { Container, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import {INotaGeneral} from '../../interfaces/INotaGeneral';
import { FaPause, FaTrophy } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import { TiWarning } from 'react-icons/ti';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../../components/Menu';
import { Center, Form, Row, SideBar, Toggle,Box, FormContainerSelect, RowButton, ButtonSearch } from '../../Styled';
import { Header,MiddleBoxNoteSelect, TitleNote , LittleBox, Note,ContainerList} from './styles.NoteSelect';
import { apiNota } from '../../services/api';

const NoteGeneral: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [vehicles,setVehicles] = useState<INotaGeneral>({} as INotaGeneral);
  const [drivers,setDrivers] = useState<INotaGeneral>({} as INotaGeneral);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState(String);
  const [dateEnd, setDateEnd] = useState(String);
  const [searchBy, setSearchBy] = useState(String);


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

    if(searchBy === 'vehicles') {
      const res = await apiNota.post(`/vehicles`,{
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      setVehicles(res.data);
    }

    if(searchBy === 'drivers') {
      const res = await apiNota.post(`/drivers`,{
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      setDrivers(res.data);
    }

    toast.success("Dados carregados!");

  }, [dateInitial, dateEnd, imei,searchBy]);

  useEffect(() => {
    getDateNow();
    console.log(vehicles);
    console.log(drivers);
  },[vehicles,drivers,getDateNow]);

    return(
      <>
      <ToastContainer position="top-center" />
      <Menu />
          <Container maxWidth={false} >
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
               onChange={(e: ChangeEvent<HTMLInputElement | any>) => setSearchBy(e.currentTarget.value)}
             >
               <option aria-label="None" value="" />
               <option value="vehicles">vehicles</option>
               <option value="drivers">Conductores</option>
             </Select>
           </FormControl>

           {searchBy === 'vehicles' ?
           <FormControl>
             <InputLabel htmlFor="age-native-simple"id="vehicle">Veiculos</InputLabel>
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
           <InputLabel htmlFor="age-native-simple"id="drivers">Conductor</InputLabel>
           <Select
                native
                onChange={(e: ChangeEvent<HTMLInputElement | any>) => setImei(e.currentTarget.value)}
              >
                <option aria-label="None" value="" />
                <option value={842}>drivers #1</option>
                <option value={843}>drivers #2</option>
                <option value={844}>drivers #2</option>
              </Select>
        </FormControl>  }

           </FormContainerSelect>
           <TextField
               id="datetime-local"
               label="Fecha de Inicio"
               type="datetime-local"
               onChange={(e:ChangeEvent<HTMLInputElement>) => setDateInitial(e.currentTarget.value.replace('T',' '))}
               defaultValue="0000-00-00T00:00"
               InputLabelProps={{
                 shrink: true,
               }}
             />

             <TextField
               id="datetime-local"
               label="Fecha de Término"
               type="datetime-local"
               onChange={(e:ChangeEvent<HTMLInputElement>) => setDateEnd(e.currentTarget.value.replace('T',' '))}
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
              <Toggle onClick={handleMenu}><i className="fas fa-filter"></i> Filtros</Toggle>
              <Box>
              <Row> <TitleNote> NOTA GENERAL DE LA FLOTA SELECCIONADA </TitleNote> </Row>


                <Header>
                    <MiddleBoxNoteSelect bgColor="darkblue">
                        <h5>NOTA GENERAL</h5>
                        <h4> 6.5 </h4>
                        <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <h5>NOTA CONSUMO</h5>
                        <h4> 7.3 </h4>
                        <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <h5>NOTA FRENOS</h5>
                        <h4> 4.1 </h4>
                        <p> <FaPause size={8} /> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect>
                        <h5>NOTA SEGURIDAD</h5>
                        <h4> 7.9 </h4>
                        <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>

                    <MiddleBoxNoteSelect bgColor="lightblue">
                        <h5>NOTA DIFICULTAD</h5>
                        <h4> 4.6 </h4>
                        <p> <IoMdArrowDropup /> vs. periodo anterior </p>
                    </MiddleBoxNoteSelect>
                </Header>

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

                <ContainerList>
                    <Note>
                        <h4> MEJORES NOTAS </h4>
                        <ul>
                            <span>
                                <p> <FaTrophy /> </p>
                                <strong> vehicle</strong>
                                <p>Nota</p>
                            </span>

                            <li>
                                <p> 1</p>
                                <strong> Roberto backdorf</strong>
                                <p>7.2 <IoMdArrowDropup size={18} /> </p>
                            </li>
                            <li>
                                <p> 2 </p>
                                <strong> Nicolas Garcia </strong>
                                <p> 6.2 <IoMdArrowDropup size={18} /> </p>
                            </li>
                        </ul>
                    </Note>

                    <Note>
                        <h4> Peores NOTAS </h4>
                        <ul>
                            <span>
                                <p> <TiWarning color="red" /> </p>
                                <strong> vehicle</strong>
                                <p>Nota</p>
                            </span>

                            {/* <li>
                                <p> 1</p>
                                <strong> Conductor</strong>
                                <p> Nota</p>
                            </li> */}

                        </ul>
                    </Note>
                </ContainerList>


              </Box>
              </Center>
           </Container>
        </>
      );
}

export default NoteGeneral;
