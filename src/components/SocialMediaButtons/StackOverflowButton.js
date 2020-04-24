import React from 'react';

import icon from '../../assets/stack-overflow.png';
import { BasicIconButton } from '.';
const BASE_URL = 'https://stackoverflow.com/users/';

export const StackOverflowButton = ({ url }) =>
  url && <BasicIconButton url={BASE_URL + url} icon={icon} />;
