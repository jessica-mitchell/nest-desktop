import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { AnimationControllerService } from '../../visualization/animation/animation-controller/animation-controller.service';
import { DataService } from '../../services/data/data.service';
import { LogService } from '../../log/log.service';
import { NestServerService } from '../../nest-server/nest-server.service';

import { Data } from '../../classes/data';


var STORAGE_NAME = 'simulation-config';

@Injectable({
  providedIn: 'root'
})
export class SimulationRunService {
  private snackBarRef: any;
  public config: Object = {
    runAfterLoad: true,
    runAfterChange: true,
    autoRandomSeed: false,
  }
  public running: boolean = false;
  public simulated: EventEmitter<any> = new EventEmitter();

  constructor(
    private _animationControllerService: AnimationControllerService,
    private _dataService: DataService,
    private _logService: LogService,
    private _nestServerService: NestServerService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) {
    let configJSON = localStorage.getItem(STORAGE_NAME);
    if (configJSON) {
      this.config = JSON.parse(configJSON)
    } else {
      this.saveConfig()
    }
  }

  saveConfig(): void {
    let configJSON = JSON.stringify(this.config);
    localStorage.setItem(STORAGE_NAME, configJSON);
  }

  run(data: Data, force: boolean = false): void {
    if (this.running) return
    // console.log('Run simulation')
    if (!(force || this.config['runAfterChange'])) return

    var urlRoot = this._nestServerService.url();
    this._logService.reset()

    if (this.config['autoRandomSeed']) {
      this._logService.log('Randomize seed');
      let seed = Math.random() * 1000;
      data.simulation['random_seed'] = seed.toFixed(0);
    }

    this._logService.log('Clean and hash data');
    var data_cleaned = this._dataService.clean(data);
    this.snackBarRef = this.snackBar.open('The simulation is running. Please wait.', null, {});
    this._logService.log('Request to server');
    this.running = true;
    this.http.post(urlRoot + '/script/simulation/run', data_cleaned.simulation).subscribe(res => {
      this.running = false;
      if ('error' in res) {
        this.snackBarRef = this.snackBar.open(res['error']['name'] + ': ' + res['error']['message'], null, {
          duration: 5000
        });
      } else {
        if (this.snackBarRef) {
          this.snackBarRef.dismiss();
        }
        this._logService.logs = this._logService.logs.concat(res['logs'] || []);
        this._logService.log('Response from server')
        this.simulated.emit(res['data'])
      }
    },
      error => {
        this.running = false;
        console.log(error['error'])
        this.snackBarRef = this.snackBar.open('Simulation failed. NEST Server not found. Please check the configuration.', 'Ok');
      }
    )
  }
}
