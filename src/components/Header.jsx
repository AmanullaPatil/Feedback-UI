
import PropTypes from 'prop-types';

function Header({ bgColor, sentence, textColor }) {

    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }



    return (

        <header style={headerStyles}>
            <div className='container'>
                <h2>{sentence}</h2>
            </div>
        </header>

    )
}
Header.propTypes = {
    sentence: PropTypes.string,
}
Header.defaultProps = {
    sentence: 'FeedBack UI',
    bgColor: "#000004",
    textColor: '#ffa9a5',
}
export default Header;
