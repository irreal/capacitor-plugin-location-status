import { WebPlugin } from '@capacitor/core';
import { LocationStatusPlugin } from './definitions';

export class LocationStatusWeb extends WebPlugin implements LocationStatusPlugin {
  constructor() {
    super({
      name: 'LocationStatus',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const LocationStatus = new LocationStatusWeb();

export { LocationStatus };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(LocationStatus);
