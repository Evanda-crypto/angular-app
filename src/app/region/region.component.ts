import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent {

  constructor(private http: HttpClient) { }


  onSubmit(data: any) {

    this.http.post('http://localhost:3000/region', data).subscribe((response) => {
      console.warn(response);
    })
  }

  onUpdate(data:any){
    this.http.patch('http://localhost:3000/region/1',data).subscribe((response)=>{

    console.log(response);
    });
  }

}
