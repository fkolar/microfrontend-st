import {Injectable} from '@angular/core';
import {PluginOptions} from './plugin';

@Injectable({providedIn: 'root'})
export class LookupService {
  lookup(): PluginOptions[] {
    return [
      {
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        remoteName: 'mfe1',
        exposedModule: './Download',

        displayName: 'Download',
        componentName: 'DownloadComponent'
      }
    ];
  }
}
