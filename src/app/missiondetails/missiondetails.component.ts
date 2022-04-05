import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit {
  missions: any;
  number: any;

  constructor(private route: ActivatedRoute, private apiServer: SpacexapiService) {
    this.route.params.subscribe(data => {
      this.number = parseInt(data['id']);
    })
  }

  ngOnInit(): void {
    this.apiServer.getById(this.number).subscribe((data: any) => {
      this.missions = data;
    });
  }

}