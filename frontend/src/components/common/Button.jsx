import React from 'react';

export default function Button({
  children,
  onClick,
  variant,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}) {
  let variantClassName = '';
  switch (variant) {
    case 'login':
      variantClassName = 'login-button';
      break;
    case 'post':
      variantClassName = 'post-button';
      break;
    case 'save':
      variantClassName = 'modal-button save';
      break;
    case 'delete':
      variantClassName = 'modal-button delete';
      break;
    case 'cancel':
      variantClassName = 'modal-button cancel';
      break;
    case 'edit-cancel':
      variantClassName = 'modal-button edit-cancel';
      break;
    case 'ghost':
      variantClassName = 'action-btn';
      break;
    default:
      variantClassName = 'modal-button';
  }

  const finalClassName = `${variantClassName} ${className}`.trim();

  return (
    <button
      className={finalClassName}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
