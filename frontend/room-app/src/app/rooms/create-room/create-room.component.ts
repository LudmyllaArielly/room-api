import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room.model';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room();
  submitted = false;

  constructor(
    private roomService: RoomService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.room = new Room();
    
    this.room.id = this.activatedRoute.snapshot.params['id'];

    this.roomService.getRoom(this.room.id).subscribe(data => {
      console.log(data);
      this.room = data;
    }, error => console.log(error));
  }

  save(){
    if(this.room.id){
        this.roomService.updateRoom(this.room).subscribe(data => 
        console.log(data), error => console.log(error));
        this.room = new Room();
        this.goToList();
    }else {
      this.roomService.createRoom(this.room)
      .subscribe(data => console.log(data), error => console.log(error));
      this.room = new Room();
      this.goToList();
    }
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  onSubmit() {
    this.submitted = true; 
    this.save();
  }

  goToList(){
    this.router.navigate(['rooms']);
  }

}
