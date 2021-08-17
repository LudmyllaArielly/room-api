import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomService } from 'src/app/core/room.service';
import { Room } from 'src/app/shared/model/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[] = [];
  _filterBy: string;
  _room: Room[] = [];

  constructor(
    private roomService: RoomService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
   this.roomService.listRoom().subscribe({
     next: rooms => {
       this._room = rooms;
       this.rooms = this._room;
     },
      error: err => console.log(err)
   });
  }

  deleteRoom(id: number) {
    alert("Deseja mesmor excluir essa sala?")
    this.roomService.deleteRoom(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  editRoom(id: number){
    this.router.navigate(['add', id]);
  }

  set filter(value: string) {
    this._filterBy = value;
    this.rooms = this._room.filter((room: Room) =>
    room.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
   return this._filterBy; 
  }

}
