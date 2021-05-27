import React from 'react';
import { Overlay,ContainerModal,TitleModal,BodyModal,ButtonCancel,ButtonModal } from './styles';

interface IFunction {
  handleFunction():void;
  name: string;
}

const Modal: React.FC<IFunction> = ({handleFunction, name}) => {

    return(
        <Overlay>
            <ContainerModal>
                <TitleModal> Não há dados para o periodo selecionado. </TitleModal>
                <BodyModal>
                    <ButtonCancel onClick={handleFunction}> {name}</ButtonCancel>
                    <ButtonModal onClick={handleFunction}> x</ButtonModal>
                </BodyModal>
            </ContainerModal>
        </Overlay>
    );
}

export default Modal;
