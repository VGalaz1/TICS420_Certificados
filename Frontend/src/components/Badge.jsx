import React from 'react';

const Badge = ({ color, icon, children }) => {
  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.25em 0.5em',
    borderRadius: '0.25em',
    backgroundColor: color,
    color: 'black',
    fontSize: '0.75em',
    fontWeight: 'bold'
  };

  const iconStyle = {
    marginRight: '0.25em',
    width: '1em',
    height: '1em',
    verticalAlign: 'middle',
    marginTop: '-0.5em',
  };

  return (
    <span style={badgeStyle}>
      {icon && <span style={iconStyle}>{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
