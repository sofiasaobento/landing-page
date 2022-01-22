import React, { useState } from 'react';
import Button from './../button/index';
import Modal from'./../modal/index';
import Title from './../title/index';
import Text from './../text/index';
import TextInput from '../text-input/index';

const ModalButtonWrapper = (props) => {
    const { buttonText} = props;

    const [visible, setVisible] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [feedback, setFeedback] = useState(null);

    
    const onClose = () => {
        setVisible (false);
        setFeedback (null);
        setHasError(false);
        setInputValue(null);
    }
    
    const onButtonClick = () => {
        setVisible (true);
    }

    const onModalButtonClick = () => {
        const emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!inputValue) {
            setHasError(false);
            setFeedback('¡Completá este dato!')
        }else if (inputValue && emailValidation.test(inputValue)) {
            setHasError(false);
            setFeedback('¡Gracias por unirte!')
        } else {
            setHasError(true);
            setFeedback('Debes ingresar un email')
        }
    }


    return (
       <div className='modal-button-wrapper'>
            <Button buttonText={buttonText} onClick= {onButtonClick}/>
            <Modal visible={visible} onClose= {onClose}>
                <Title title="REGÍSTRATE"/>
                <Text text="Mirá antes que nadie las novedades"/>
                <TextInput placeholder="Ingresá tu mail aqui" value={inputValue} onChange={setInputValue} hasError={hasError} feedback={feedback}/>
                <Button buttonText="Unirse" onClick={onModalButtonClick}/>
            </Modal>
        </div>
    );
}

export default ModalButtonWrapper;