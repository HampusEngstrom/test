import React from 'react';

export const BasicIconButton = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <img src={icon} alt="" />
  </a>
);
