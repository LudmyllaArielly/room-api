import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateRoomComponent } from "./rooms/create-room/create-room.component";
import { RoomDetailsComponent } from "./rooms/room-details/room-details.component";
import { RoomListComponent } from "./rooms/room-list/room-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'rooms', pathMatch: 'full'},
    {path: 'rooms', component: RoomListComponent},
    { path: 'add', component: CreateRoomComponent},
    {path: 'add/:id', component: CreateRoomComponent},
    { path: 'details/:id', component: RoomDetailsComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }