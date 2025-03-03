import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import * as objectHash from 'object-hash';

import { Data } from '../../classes/data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private snackBar: MatSnackBar,
  ) {
  }

  newData(): Data {
    return {
      _id: '',
      name: '',
      description: '',
      hash: '',
      createdAt: '',
      updatedAt: '',
      user: '',
      group: '',
      app: {
        kernel: { time: 0 },
        models: {},
        nodes: [],
        links: []
      },
      simulation: {
        kernel: {},
        models: {},
        collections: [],
        connectomes: [],
        time: 1000.0
      }
    }
  }

  clean(data: any): Data {
    // console.log('Clean data')
    var newData = JSON.parse(JSON.stringify(data))
    this.deleteGlobalIds(newData);
    this.validate(newData);
    newData['hash'] = this.hash(newData);
    return newData;
  }

  hash(data: Data): string {
    return objectHash(data.simulation);
  }

  deleteGlobalIds(data: Data): void {
    data.app.nodes.forEach(node => {
      if (node.hasOwnProperty('global_ids')) {
        delete node.global_ids
      }
    })
  }

  validate(data: Data): void {
    this.validateKernel(data)
    this.validateModels(data)
  }

  validateKernel(data: Data): void {
    data.app['kernel'] = { time: 0 };
    if (!data.simulation.kernel.hasOwnProperty('resolution')) {
      data.simulation.kernel['resolution'] = 0.1;
    }
  }

  validateModels(data: Data): void {
    var simModels = data.simulation.models;
    var appModels = data.app.models;
    data.simulation.models = {};
    data.app.models = {};
    data.app.nodes.forEach(node => {
      var collection = data.simulation.collections[node.idx];
      var newName = collection.element_type + '-' + node.idx;
      data.simulation.models[newName] = simModels[collection.model];
      collection['model'] = newName;
      data.app.models[newName] = appModels[collection.model];
    })
  }

}
