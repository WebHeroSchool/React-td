import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Footer = ({ count, onClickFooter }) =>
     <Typography variant='subtitle1' color='textSecondary' onClick={onClickFooter}>
        Вот столько дел еще осталось сделать: {count} 
    </Typography>;

Footer.propTypes = {
   count: PropTypes.number.isRequired
};

export default Footer;
