import React from 'react';
import './paper.css';

const Paper = ({children, className,...props}) => {
  return (
    <div className={`paper ${className}`}  {...props}>
        {children}
    </div>
  )
}

export default Paper