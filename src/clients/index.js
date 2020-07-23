import SamClient from './sam';

import config from '../config/config.json';

export default {
  sam: new SamClient(config.api_url)
};
