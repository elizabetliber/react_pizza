import React from 'react';
import classNames from 'classnames';

const Button = ({className, text, outline }) =>{
        return (<button className={classNames('button', className, {'button--outline': outline })}>{text}</button>)
}

export default Button;