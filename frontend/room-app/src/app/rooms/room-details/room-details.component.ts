import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room.model';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number;
  room: Room;

  constructor(
    private roomService: RoomService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.room = new Room();
    this.id = this.activatedRoute.snapshot.params['id'];

    this.roomService.getRoom(this.id).subscribe(data => {
      console.log(data);
      this.room = data;
    }, error => console.log(error));
  }

  goToList(){
    this.router.navigate(['rooms']);
  }

}
