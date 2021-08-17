package com.github.ludmylla.roomapi.services;

import com.github.ludmylla.roomapi.exceptions.ResourceNotFoundException;
import com.github.ludmylla.roomapi.model.Room;
import com.github.ludmylla.roomapi.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements  RoomService{

    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room getRoomById(Long id) throws ResourceNotFoundException {
        return roomRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Room does not exist!"));
    }

    @Override
    public Room updateRoom(Room room) throws ResourceNotFoundException {
        getRoom(room);
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Long id) throws ResourceNotFoundException {
        Room roomId = getRoomById(id);
        roomRepository.delete(roomId);

    }

    private void getRoom(Room room) throws ResourceNotFoundException {
        Room roomId = getRoomById(room.getId());

        roomId.setName(room.getName());
        roomId.setDate(room.getDate());
        roomId.setStartHour(room.getStartHour());
        roomId.setEndHour(room.getEndHour());
    }
}
