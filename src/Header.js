import PropTypes from 'prop-types';

const Header = (props) => {
    const { headerTitle } = props;
    return (
        <h1>{headerTitle}</h1>
    )
}

Header.propTypes = {
    headerTitle: PropTypes.string
  };

  Header.defaultProps = {
    headerTitle: 'Questions'
  };

export default Header


