import React from 'react';

import icon from '../../assets/twitter.png';
import { BasicIconButton } from '.';
const BASE_URL = 'http://www.twitter.com/';

export const TwitterButton = ({ url }) =>
  url && <BasicIconButton url={BASE_URL + url} icon={icon} />;
