import './index.css';
import Title from './../title/index';
import Text from './../text/index';
import ModalButtonWrapper from '../modal-button-wrapper/index';

const ContentContainer = () => {
    return (
        <div className="content-container">
            <div className="content-container--title">
                <Title title="PRÓXIMAMENTE" color="black" fontSize="90px" letterSpacing="15px"/>
                <Text text="¡Vamos a celebrar el lanzamientode nuestro sitio!" color= "#464646" fontSize="30px" letterSpacing="2px"/>
                <ModalButtonWrapper buttonText="Notificarme"/>
            </div>
        </div>

    );
}

export default ContentContainer;
