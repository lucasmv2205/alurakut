import React from 'react';
import { FiX, FiCheck } from 'react-icons/fi';

// import { Container } from './styles';

const Button = ({ children, state, ...rest }) => {
    if (state === 4) {
        return (
            <button
                type="button"
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
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
