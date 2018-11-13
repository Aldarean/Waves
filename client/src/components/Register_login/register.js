import React, { Component } from 'react';
import FormField from '../utils/Form/formField';
import {update, generateData, isFormValid} from '../utils/Form/formActions';

import {connect} from 'react-redux';
import { loginUser } from '../../actions/user_actions';

class Register extends Component {

    state = {
        formError: false,
        formSucces: '',
        formData: {
            name: {
                element: 'input',
                value: '',
                config: {
                    name: 'name_input',
                    type: 'name',
                    placeholder: 'Enter your name'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'name',
                    placeholder: 'Enter your lastname'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            
        }
    }


  render() {
    return (
      <div>
        register
      </div>
    )
  }
}

export default connect()(Register);