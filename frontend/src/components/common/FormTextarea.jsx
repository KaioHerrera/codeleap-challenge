import React from 'react';

export default function FormTextarea({ variant, className = '', ...props }) {
  const variantClassName = `${variant}-textarea`;
  const finalClassName = `${variantClassName} ${className}`.trim();

  return <textarea className={finalClassName} {...props} />;
}
