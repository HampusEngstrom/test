import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 2px;
`;

export const BasicIconButton = ({ icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Icon src={icon} alt="" />
  </a>
);
