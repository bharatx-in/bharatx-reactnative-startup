import { NativeModules } from 'react-native';

type BharatxReactnativeStartupType = {
  initialize(partnerId: string, partnerApiKey: string): void;
};

const { BharatxReactnativeStartup } = NativeModules;

export default BharatxReactnativeStartup as BharatxReactnativeStartupType;
