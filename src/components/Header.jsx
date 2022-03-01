import PropTypes from 'prop-types';

const Header = ({ text }) => {
    return (
        <header text="Hello world">
            <div className="container">
                <h2>{text}</h2>
            </div>

        </header>
    );
};

Header.defaultProps = {
    text: 'Feedback UI'
};

Header.propTypes = {
    text: PropTypes.string
};

export default Header;
