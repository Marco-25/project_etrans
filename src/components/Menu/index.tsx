import React, { useState } from 'react';
import IMGLogo from './logo_7112.png';
import { Link } from 'react-router-dom';
import { Box, Header, LogoMenu, MenuDesktop, Toggle, MiniLogoMenu } from './styles';


const Menu: React.FC = () => {
    const [menu, setMenu] = useState(false);

    const handlemenu = () => {
        setMenu(!menu);
    }

    return (

        <Box>
            {menu &&
                <MenuDesktop>
                    <LogoMenu src={IMGLogo} alt="logo menu" />
                    <Link to="/"> <i className="fas fa-tachometer-alt"></i> Análisis Vehiculos </Link>
                    <Link to="/kpihistoric" > <i className="fas fa-globe-americas"></i> KPIs Histórico </Link>
                    <Link to="/nota_general" > <i className="fas fa-globe-americas"></i> Nota General </Link>
                    <Link to="/nota_detallada" > <i className="fas fa-globe-americas"></i> Nota Detallada </Link>
                    <Link to="/testes" > <i className="fas fa-globe-americas"></i> testes </Link>
                </MenuDesktop>
            }
            <Toggle onClick={handlemenu} > <i className="fas fa-bars"></i></Toggle>
            <Header>
                <MiniLogoMenu src={IMGLogo} alt="logo menu" />
                <div>
                    <Link to="/" >Sair</Link>
                </div>
            </Header>
        </Box>

    );
}

export default Menu;
