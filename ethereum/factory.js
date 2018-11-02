import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x75F5e93CA3961247Cc18e20A1de46463F58442a2'
);
export default instance;
