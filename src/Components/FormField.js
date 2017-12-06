import React from 'react';

const FormField = (props) => {

    console.log('Form Field props ' + props)

    const { input, label, type, meta:{touched, error}} = props;
    const errorMessage = (touched && error) ? <span>{error}</span> : null;

    return (
        <div className="form-field">
            <label>{label}</label>
            <div>
                <input {...input} type={type} />
                {errorMessage}
            </div>
        </div>
    )
}

export default FormField;
