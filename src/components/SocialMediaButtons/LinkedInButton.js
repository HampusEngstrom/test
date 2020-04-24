import React from 'react';

import icon from '../../assets/linkedin.png';
import { BasicIconButton } from '.';
const BASE_URL = 'https://www.linkedin.com';

export const LinkedInButton = ({ url }) =>
  url && <BasicIconButton url={BASE_URL + url} icon={icon} />;
