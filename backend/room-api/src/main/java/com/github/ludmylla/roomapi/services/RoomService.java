package com.github.ludmylla.roomapi.services;

import com.github.ludmylla.roomapi.exceptions.ResourceNotFoundException;
import com.github.ludmylla.roomapi.model.Room;

import java.util.List;

public interface RoomService {

    Room createRoom(Room room);

    List<Room> getAllRooms();

    Room getRoomById(Long id) throws ResourceNotFoundException;

    Room updateRoom(Room room) throws ResourceNotFoundException;

    void deleteRoom(Long id) throws ResourceNotFoundException;
}
