import './index.css';

const Text = (props) => {
    const {text, color, fontSize, letterSpacing } = props;
    return (
        <p style= {{color, fontSize, letterSpacing }} className="landing-text">
            {text}
        </p>
    );
}

export default Text;