import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent {

  regions: any = [];

  message = false;
  actualMessage:  string = '';

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.getRegions().subscribe(
      (data: any) => {
        this.regions = data.list;
      },
      (error) => {
        console.error('Error fetching regions:', error);
      }
    );
  }

  onSubmit(data: any) {

    this.http.post('http://localhost:3000/region', data).subscribe((response) => {
      this.getRegions().subscribe((data:any)=>{
        this.message = true;
        this.actualMessage = 'New Region Created!';
        this.regions = data.list;
      });
    })
  }


  getRegions(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/region');
  }

  deleteRegion(){
    

  }    
}
