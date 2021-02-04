import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = ({ count, onClickFooter }) =>
    (<Typography variant='subtitle1' color='textSecondary' onClick={onClickFooter}>
        Вот столько дел еще осталось сделать: {count}
    </Typography>);

Footer.defaultProps = {
     count: 0
 };

export default Footer;
