import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NestServerService } from '../../nest-server/nest-server.service';


@Component({
  selector: 'app-model-documentation',
  templateUrl: './model-documentation.component.html',
  styleUrls: ['./model-documentation.component.scss']
})
export class ModelDocumentationComponent implements OnInit, OnChanges {
  @Input() model: string = '';
  public helptext: string = '';
  public progress: boolean = false;

  constructor(
    private _nestServerService: NestServerService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.requestModelDoc()
  }

  ngOnChanges() {
    this.requestModelDoc()
  }

  requestModelDoc(): void {
    var urlRoot = this._nestServerService.url();

    var data = {
      'obj': this.model,
      'return_text': 'true',
    };
    this.progress = true;
    this.helptext = '';
    setTimeout(() => {
      this.http.post(urlRoot + '/api/nest/help', data).subscribe(res => {
        this.progress = false;
        if ('error' in res) {
          this.helptext = res['error'];
        } else {
          this.helptext = res['response']['data'];
        }
      },
        error => {
          this.progress = false;
          this.helptext = JSON.stringify(error['error']);
        }
      )
    }, 500)
  }

}
