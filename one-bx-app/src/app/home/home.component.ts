import {Component, OnInit} from '@angular/core';
import {LookupService} from '../plugins/lookup.service';
import {PluginOptions} from '../plugins/plugin';

@Component({
  selector: 'bx-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  plugin: PluginOptions;

  constructor(private lookupService: LookupService) {
  }

  async ngOnInit() {
    this.plugin = this.lookupService.lookup()[0];

    console.log('this.plugin = ', this.plugin)
  }

}
