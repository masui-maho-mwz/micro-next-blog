import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  // serviceDomain: 'test1nsstmkv26o',
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  // apiKey: 'XIxe0iGZkH2dioBPERW8a2LNUS7JGNtKGAKF',
  apiKey: process.env.API_KEY || '',
});
