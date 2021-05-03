import { Container } from '@material-ui/core';
import React from 'react';
import { FaPause } from 'react-icons/fa';
import Menu from '../../components/Menu';
import { Content, SideBar, BoxButton, BoxPrincipal, Header, Main, Footer } from './styles';
import { BoxHeader } from './stylesHeader';

const Test: React.FC = () => {

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

            <Main>gdgdgsg</Main>
            <Footer>*******</Footer>
          </BoxPrincipal>
        </Content>

      </Container>
    </>
  );
}

export default Test;
