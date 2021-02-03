import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItems extends React.Component {
    state = {
        inputValue: '',
        helperText: '',
        isError: false
    };

    onChangeInputItem = (event) => {

      this.setState({
         inputValue: event.target.value,
         isError: (this.state.isError && this.valueCheck(this.state.inputValue)),
         helperText: !(this.state.isError && this.valueCheck(this.state.inputValue) ? '' : 'Введите текст')
      })
    };

    valueCheck = (value) => {
      if (value === '') {
        return false;
      } else {
        return true;
      }
    };

    onButtonClick = () => {
      if (!this.valueCheck(this.state.inputValue)) {
        this.setState({
          helperText: 'Введите текст',
          isError: true
        });

      } else {
        this.setState({
          inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
      }
    }

    render() {

        return (<Grid>
            <TextField
                id='standard-dense'
                label='Добавить задание'
                margin='dense'
                fullWidth
                value={this.state.inputValue}
                onChange={(event) => this.onChangeInputItem(event)}
                helperText={this.state.helperText}
                error={this.state.isError}
            />
            <Button
                variant='contained'
                color='primary'
                fullWidth
                onClick={() => this.onButtonClick()}
           >
                Добавить
           </Button>
        </Grid>);
    }
}

export default InputItems;
