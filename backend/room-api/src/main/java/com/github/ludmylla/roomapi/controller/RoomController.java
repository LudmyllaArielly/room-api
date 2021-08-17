package com.github.ludmylla.roomapi.controller;


import com.github.ludmylla.roomapi.exceptions.ResourceNotFoundException;
import com.github.ludmylla.roomapi.model.Room;
import com.github.ludmylla.roomapi.services.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class RoomController {

    @Autowired
    private RoomService roomService;

    @PostMapping("/rooms")
    public ResponseEntity<Room> createRoom (@RequestBody Room room) {
        Room roomSaved = roomService.createRoom(room);
        return new ResponseEntity<Room>(roomSaved,HttpStatus.CREATED);
    }

    @GetMapping("/rooms")
    public ResponseEntity<List<Room>> getAllRooms(){
        List<Room> list = roomService.getAllRooms();
        return ResponseEntity.ok(list);
    }

    @GetMapping("rooms/{id}")
    public ResponseEntity<Room> findRoomById(@PathVariable("id") Long id) throws ResourceNotFoundException {
        Room rommId = roomService.getRoomById(id);
        return ResponseEntity.ok(rommId);
    }

    @PutMapping("/rooms")
    public ResponseEntity<Room> updateRoom(@RequestBody Room room) throws ResourceNotFoundException {
        Room roomUpdated = roomService.updateRoom(room);
        return ResponseEntity.ok(roomUpdated);
    }

    @DeleteMapping("/rooms/{id}")
    public Map<String, Boolean> deleteRoom(@PathVariable("id") Long id) throws ResourceNotFoundException {
        roomService.deleteRoom(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return response;
    }
}
