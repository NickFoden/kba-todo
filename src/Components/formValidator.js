import validate from 'validate.js';

const formValidator = (constraints) => {
    return function(values){
        let errors = validate(values, constraints) || {}
        return errors
    }
}

export default formValidator;