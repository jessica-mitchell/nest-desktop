import { Component, OnInit } from '@angular/core';

import { AppConfigService } from '../../config/app-config/app-config.service';
import { ControllerService } from '../../controller/controller.service';
import { DataService } from '../../services/data/data.service';
import { NetworkService } from '../network.service';


@Component({
  selector: 'app-network-details',
  templateUrl: './network-details.component.html',
  styleUrls: ['./network-details.component.css']
})
export class NetworkDetailsComponent implements OnInit {

  constructor(
    public _appConfigService: AppConfigService,
    public _controllerService: ControllerService,
    public _dataService: DataService,
    public _networkService: NetworkService,
  ) { }

  ngOnInit() {
  }

  clearDisplay() {
    this._dataService.data.collections.map(collection => {
      delete collection['display']
    })
    this._dataService.data.connectomes.map(connectome => {
      delete connectome['display']
    })
  }

}
