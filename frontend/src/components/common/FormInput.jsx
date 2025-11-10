import React from 'react';

export default function FormInput({ variant, className = '', ...props }) {
  const variantClassName = `${variant}-input`;
  const finalClassName = `${variantClassName} ${className}`.trim();

  return <input className={finalClassName} {...props} />;
}
