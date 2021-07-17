import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

// import { Container } from './styles';

const Button = ({ children, state, ...rest }) => {
    if (state === 4) {
        return (
            <button
                type="button"
                className="btn btn-success font-weight-bold btn-pill btn-min-fixed"
                {...rest}
            >
                <span className="text-white mr-4">Sucesso</span>
                <FiCheck color="#FFF" size={20} />
            </button>
        );
    }
    if (state === 2) {
        return (
            <button
                type="button"
                className="btn btn-primary spinner spinner-white spinner-right font-weight-bold btn-pill btn-min-fixed"
                {...rest}
            >
                Carregando
            </button>
        );
    }
    if (state === 3) {
        return (
            <button
                type="button"
                className="btn btn-danger  font-weight-bold btn-pill btn-min-fixed"
                {...rest}
            >
                <span className="text-white mr-4">Erro</span>
                <FiX color="#FFF" size={20} />
            </button>
        );
    }
    return (
        <button
            type="button"
            className="btn btn-primary font-weight-bold btn-pill btn-min-fixed"
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
