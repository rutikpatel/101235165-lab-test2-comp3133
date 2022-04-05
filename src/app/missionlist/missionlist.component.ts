import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  constructor(private apiService: SpacexapiService) { }
  missions: any;

  ngOnInit(): void {
    this.getdata()
  }
  getdata(){
    this.apiService.getAll().subscribe((data) => {
      this.missions = data;
    })
  }
  navigateToDetails(id: Number) {
    location.href = `/missiondetail/${id}`
  }

}
