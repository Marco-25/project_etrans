import { Container, TableHead } from '@material-ui/core';
import React from 'react';
import { FaPause } from 'react-icons/fa';
import Menu from '../../components/Menu';
import { Content, SideBar, BoxButton, BoxPrincipal, Header, Main, Footer } from './styles';
import { BoxHeader } from './stylesHeader';
////////////////////////////////////////////////////
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Test: React.FC = () => {


  function createData(name:string | number, calories:string | number, fat:string | number, carbs:string | number, protein:string | number) {
    return { name, calories, fat, carbs, protein };
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Container maxWidth={false} style={{ boxShadow: '0px 0px 1px 2px white' }}>

        <Content>
          <SideBar>hgsdghd</SideBar>
          <BoxButton>filter</BoxButton>
          <BoxPrincipal>
            <Header>
              <BoxHeader>
                <h5> VEHÍCULOS EN OPERACIÓN </h5>

                <h4>1 / 2</h4>

                <p> <FaPause />  vs. periodo anterior </p>
              </BoxHeader>

              <BoxHeader>
                <section>
                  <h5> VEHÍCULOS EN OPERACIÓN </h5>
                  <button>Km/L</button>

                  <h4>20,62 L/Hr</h4>
                  <button>L/Hr</button>
                  <p> <FaPause />  vs. periodo anterior </p>
                </section>
              </BoxHeader>

              <BoxHeader>
                <section>
                  <h5> VEHÍCULOS EN OPERACIÓN </h5>
                  <button>Km/L</button>

                  <h4>20,62 L/Hr</h4>
                  <button>L/Hr</button>

                  <p><FaPause /> vs. periodo anterior </p>
                </section>
              </BoxHeader>

              <BoxHeader>
                <h5> VEHÍCULOS EN OPERACIÓN </h5>

                <h4>3349 Km</h4>

                <p> <FaPause />  vs. periodo anterior </p>
              </BoxHeader>

            </Header>

            <Main>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                    <StyledTableCell align="right">Calories</StyledTableCell>
                    <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                    <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.calories}</StyledTableCell>
                      <StyledTableCell align="right">{row.fat}</StyledTableCell>
                      <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
            </Table>
    </TableContainer>

            </Main>
            <Footer>*******</Footer>
          </BoxPrincipal>
        </Content>

      </Container>
    </>
  );
}

export default Test;
