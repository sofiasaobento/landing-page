import './index.css';

const Button = (props) => {
    const {buttonText, onClick } = props;

    const onClickHandler = () => {
        onClick && onClick();
    }
    return (
        <div className="landing-button" onClick={() => onClickHandler()}>
            {buttonText}
        </div>
    );
}

export default Button;