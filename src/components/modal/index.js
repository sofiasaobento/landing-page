import './index.css';

const Modal = (props) => {
    const { visible, children, onClose } = props;

    const onCloseHandler= () => {
        onClose && onClose();
    }

    if (visible) {
        return (
       <div className='landing-modal--container'>
            <div className='landing-modal'>
               <div className='landing-modal--close-icon' onClick={() => onCloseHandler()}></div>
               {children}
            </div>
            <div className='landing-modal--overlay'></div>
       </div>
    ) ;

    }

    return null;
}

export default Modal;