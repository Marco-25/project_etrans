import { Container, FormControl, InputLabel, Select, TextField } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { INotaGeneral, IVehicleOrDriver } from '../../interfaces/INotaGeneral';
import { FaFilter, FaTrophy } from 'react-icons/fa';
import { IoMdArrowDropup } from 'react-icons/io';
import { TiWarning } from 'react-icons/ti';
import { toast, ToastContainer } from 'react-toastify';
import Menu from '../../components/Menu';
import { Center, Form, Row, SideBar, Toggle, Box, FormContainerSelect, RowButton, ButtonSearch, Icon } from '../../Styled';
import { Header, MiddleBoxNoteSelect, TitleNote, LittleBox, Note, ContainerList } from './styles.NoteSelect';
import { apiNota, apiNotaRanking } from '../../services/api';

const NoteGeneral: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [vehiclesOrDrivers, setVehiclesOrDrivers] = useState<INotaGeneral>({} as INotaGeneral);
  const [searchVehicleOrDriver, setSearchVehicleOrDrive] = useState<IVehicleOrDriver>({} as IVehicleOrDriver);

  const [render, setRender] = useState(true);
  const [renderDriver, setRenderDriver] = useState(true);

  const [imei, setImei] = useState(String);
  const [dateInitial, setDateInitial] = useState(String);
  const [dateEnd, setDateEnd] = useState(String);

  const [searchBy, setSearchBy] = useState('vehicles');

  const [clickBgColorGeneral, setClickBgColorGeneral] = useState('general');
  const [clickBgColorDefaultOne, setClickBgColorDefaultOne] = useState(String);
  const [clickBgColorDefaultTwo, setClickBgColorDefaultTwo] = useState(String);
  const [clickBgColorDefaultThree, setClickBgColorDefaultThree] = useState(String);
  const [clickBgColorHard, setClickBgColorHard] = useState(String);

  const handleMenu = useCallback(async () => {
    setVisible(!visible);
  }, [visible]);

  const getDateNow = useCallback(() => {
    let date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  }, []);

  const handleSearchVehicle = useCallback(async(scoreType) => {
    if (searchBy === 'vehicles') {
      const dateLast = new Date(Date.now() - (5 * 24 * 3600000));
      const res = await apiNotaRanking.post(`/vehicles`, {
        "from_timestamp": `${dateInitial ? dateInitial : dateLast}`,
        "#_ranking": 5,
        "score_type": `${scoreType}`,
        "search_list": [`${imei ? imei : '867162026821918'}`],
        "to_timestamp": `${dateEnd ? dateEnd: new Date()}`,
      });
      setSearchVehicleOrDrive(res.data);
    }

    if (searchBy === 'drivers') {
      const res = await apiNotaRanking.post(`/drivers`, {
        "from_timestamp": `${dateInitial}`,
        "#_ranking": 5,
        "score_type": `${scoreType}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`,
      });
      setSearchVehicleOrDrive(res.data);
    }
  },[dateInitial,dateEnd,imei,searchBy]);

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

    if (searchBy === 'vehicles') {
      const res = await apiNota.post(`/vehicles`, {
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      setVehiclesOrDrivers(res.data);
    }

    if (searchBy === 'drivers') {
      const res = await apiNota.post(`/drivers`, {
        "from_timestamp": `${dateInitial}`,
        "search_list": [`${imei}`],
        "to_timestamp": `${dateEnd}`
      });
      setVehiclesOrDrivers(res.data);
        if (renderDriver) {
          handleSearchVehicle('general');
          setRenderDriver(false);
        }
    }

    toast.success("Dados carregados!");

  }, [dateInitial, dateEnd, imei, searchBy,handleSearchVehicle,renderDriver]);

  useEffect(() => {
    if(render){
      const dateLast = new Date(Date.now() - (5 * 24 * 3600000));
      apiNota.post(`/vehicles`, {
        "from_timestamp": `${dateLast}`,
        "search_list": [`867162026821918`],
        "to_timestamp": `${new Date()}`
      }).then(res => {
        setRender(false);
        setVehiclesOrDrivers(res.data); });
        handleSearchVehicle('general');
      }
  }, [ getDateNow,render,setSearchVehicleOrDrive,handleSearchVehicle]);

  return (
    <>
      <ToastContainer position="top-center" />
      <Menu />

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
                      onChange={(e: ChangeEvent<HTMLInputElement | any>) => setSearchBy(e.currentTarget.value)}>
                      <option value="vehicles">vehicles</option>
                      <option value="drivers">Conductores</option>
                    </Select>
                  </FormControl>

                  {searchBy === 'vehicles' ?
                    <FormControl>
                      <InputLabel htmlFor="age-native-simple" id="vehicle">Veiculos</InputLabel>
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
                      <InputLabel htmlFor="age-native-simple" id="drivers">Conductor</InputLabel>
                      <Select
                        native
                        onChange={(e: ChangeEvent<HTMLInputElement | any>) => setImei(e.currentTarget.value)}
                      >
                        <option aria-label="None" value="" />
                        <option value={842}>drivers #1</option>
                        <option value={843}>drivers #2</option>
                        <option value={844}>drivers #2</option>
                      </Select>
                    </FormControl>}

                </FormContainerSelect>
                <TextField
                  id="datetime-local"
                  label="Fecha de Inicio"
                  type="datetime-local"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDateInitial(e.currentTarget.value.replace('T', ' '))}
                  defaultValue="0000-00-00T00:00"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  id="datetime-local"
                  label="Fecha de Término"
                  type="datetime-local"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setDateEnd(e.currentTarget.value.replace('T', ' '))}
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
          <Toggle onClick={handleMenu}> <FaFilter /> Filtros</Toggle>
          <Container maxWidth={false} >
        <Center>
          <Box>
            <Row> <TitleNote> NOTA GENERAL DE LA FLOTA SELECCIONADA </TitleNote> </Row>

            <Header>
              {
                vehiclesOrDrivers.scores?.map((vehicleOrDrive, index) => {
                  return(
                    <MiddleBoxNoteSelect key={index}
                    isLightBlue={(vehicleOrDrive?.score_type === 'conditions') ? 'lightblue': ''}
                    isDarkBlue={(vehicleOrDrive?.score_type === 'general') ? 'darkblue' : ''}>
                      <h5>{vehicleOrDrive?.score_type }</h5>
                      <h4> {vehicleOrDrive?.last_period_grade ? vehicleOrDrive?.last_period_grade : '0.0'} </h4>
                      <p>
                      {vehicleOrDrive.status === 'equal' ?
                            <> <i className="fas fa-equals"></i> &nbsp; &nbsp; &nbsp;vs. periodo anterior</>:
                      <Icon> <i className={`fas fa-sort-${vehicleOrDrive.status}
                      ${vehicleOrDrive.status === 'up' ? 'up': 'down'}`}></i> <span> vs. periodo anterior </span> </Icon>
                  }
                      </p>
                    </MiddleBoxNoteSelect>
                  )
                })
              }
            </Header>

            <Row> <TitleNote> RANKING DEL PERIODO </TitleNote> </Row>
            <Row>
              <LittleBox bgColor={clickBgColorGeneral} onClick={() => {
                handleSearchVehicle('general');
                setClickBgColorGeneral('general');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> General </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultOne} onClick={() => {
                handleSearchVehicle('fuel');
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('default');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> Consumo </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultTwo} onClick={() => {
                handleSearchVehicle('brakes');
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('default');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('');
              }}>
                <p> frenos </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorDefaultThree} onClick={() => {
                handleSearchVehicle('security');
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('default');
                setClickBgColorHard('');
              }}>
                <p> seguridad </p>
              </LittleBox>

              <LittleBox bgColor={clickBgColorHard} onClick={() => {
                handleSearchVehicle('conditions');
                setClickBgColorGeneral('');
                setClickBgColorDefaultOne('');
                setClickBgColorDefaultTwo('');
                setClickBgColorDefaultThree('');
                setClickBgColorHard('hard');
              }}>
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

                  {
                    searchVehicleOrDriver.top_positions?.map(vehicleOrDriveTopPosition => {
                      return(
                        <li key={vehicleOrDriveTopPosition?.id}>
                        <p> {vehicleOrDriveTopPosition?.id} </p>
                        <strong> {vehicleOrDriveTopPosition?.current_period_grade} </strong>
                        <p>{vehicleOrDriveTopPosition?.current_period_grade}
                        <i className={`fas fa-sort-${vehicleOrDriveTopPosition.status}`}></i> </p>
                      </li>
                      )
                    })
                  }

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

                  <li>
                    <p> 1</p>
                    <strong> vehicles</strong>
                    <p> <IoMdArrowDropup size={18} /> </p>
                  </li>

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
