import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import Menu from '../../components/Menu';
import { Box, Center, Form, Row, SideBar, Toggle,Table } from '../../Styled';
import {MiddleBoxKPI, TitleKPI} from './styles.kpishistoric';

const KPIsHistoric: React.FC = () => {
    const [visible, setVisible] = useState(true);


    function handleMenu() {
        setVisible(!visible);
    }

    const columns = [
        { field: 'vehicle_id', headerName: 'ID', width: 70 },
        { field: 'fuel_rate_kms_per_lts', headerName: 'FECHA', width: 120 },
        { field: 'fuel_rate_lts_per_hrs', headerName: 'HORÓMETRO', width: 150 },
        { field: 'total_distance_kms', headerName: 'ODÓMETRO', width: 150 },
        { field: 'total_fuel_consumption_lts', headerName: 'ODOLITRO', width: 140 },
        { field: 'total_time_hrs', headerName: 'HORAS EN OPERACIÓN (H)', width: 250 },
        { field: 'idle_time_pctg', headerName: 'DISTANCIA RECORRIDA (KM)', width: 250 },
        { field: 'stopped_acceleration_time_pctg', headerName: 'LITROS CONSUMIDOS (L)', width: 230 },
        { field: 'average_speed_kmh', headerName: 'HUELLA DE CARBONO (KGCO2)', width: 280 },
      ];

    const rows = [
        {
            id: 1,
            fuel_rate_kms_per_lts: "teste",
            fuel_rate_lts_per_hrs: "teste",
            total_distance_kms: "teste",
            total_fuel_consumption_lts: "teste",
            total_time_hrs: "teste",
            idle_time_pctg: "teste",
            stopped_acceleration_time_pctg: "teste",
            average_speed_kmh: "teste",
        }
    ];


    return(
      <>
      <Menu />
        <Container maxWidth={false} >
        <Center>
        {visible &&
         <SideBar>
               <Typography variant="h6" gutterBottom>REPORTE DE KPIS HISTÓRICO  <i className="fas fa-info-circle" style={{fontSize: '15px'}}></i></Typography>
                <Typography variant="body2" style={{color: 'gray'}} gutterBottom>
                Revisa el horómetro, odómetro y odolitro de tu vehículo para distintas fechas. Puedes consultar información hasta tres meses atrás.
                </Typography> <br />

                <Typography style={{color: 'gray', fontWeight: 'bold'}} variant="subtitle2" gutterBottom>FORMULARIO DE BÚSQUEDA</Typography>

                <Form>
                    <FormControl >
                        <InputLabel id="cliente">Cliente</InputLabel>
                        <Select
                            labelId="cliente"
                            id="cliente"
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
            <Row> <TitleKPI> RESUMEN DE VARIABLES </TitleKPI> </Row>
                <Row>

                    <MiddleBoxKPI color="lightgray">
                        <p> 172.1 </p>
                        <p> Horas en Operación </p>
                    </MiddleBoxKPI>

                    <MiddleBoxKPI>
                        <p> 8648.0 <span> Km </span> </p>
                        <p> Distancia Recorrida</p>
                    </MiddleBoxKPI>

                    <MiddleBoxKPI>
                        <p> 3000.5 <span> L </span> </p>
                        <p> Litros Consumidos </p>
                    </MiddleBoxKPI>

                    <MiddleBoxKPI>
                        <p> 7414.2 <span> KgCO2 </span> </p>
                        <p> Huella de Carbono </p>
                    </MiddleBoxKPI>

                </Row>

                <Table style={{height: '600px'}}>
                    <DataGrid  rows={rows} columns={columns} pageSize={10} />
                </Table>
                <br/>
                <Button variant="contained" color="primary" >exportar</Button>
            </Box>
            </Center>
         </Container>
      </>
    );
}

export default KPIsHistoric;
