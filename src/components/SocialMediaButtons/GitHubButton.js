import React from 'react';

import icon from '../../assets/github.png';
import { BasicIconButton } from '.';
const BASE_PATH = 'http://www.github.com/';

export const GitHubButton = ({ url }) =>
  url && <BasicIconButton url={BASE_PATH + url} icon={icon} />;
