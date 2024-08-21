package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import Java_and_The_Scripts.travel_planner.models.UserDTO;
import Java_and_The_Scripts.travel_planner.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;


@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private UserDTO convertToDTO(UserEntity userEntity) {
        return new UserDTO(
                userEntity.getId(),
                userEntity.getEmail(),
                userEntity.getFirstName(),
                userEntity.getLastName()
        );
    }

    //SEARCH USERS BY EMAIL
    @GetMapping("/search")
    public ResponseEntity<UserDTO> searchUserByEmail(@RequestParam String email) {
        UserEntity user = userRepository.findByEmail(email);

        if (user != null) {
            UserDTO userDTO = convertToDTO(user);
            return ResponseEntity.ok(userDTO);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User was not found.");
        }
    }

    //GET USER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        UserEntity user = userRepository.findById(id).orElse(null);

        if (user != null) {
            UserDTO userDTO = convertToDTO(user);
            return ResponseEntity.ok(userDTO);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User was not found.");
        }

    }
}
