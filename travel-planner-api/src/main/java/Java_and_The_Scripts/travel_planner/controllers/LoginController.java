package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import Java_and_The_Scripts.travel_planner.repositories.UserRepository;
import Java_and_The_Scripts.travel_planner.services.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTService jwtService;

    @PostMapping
    public ResponseEntity<?> login(@RequestParam String email,
                                   @RequestParam String password) {

        UserEntity userLoggingIn = userRepository.findByEmail(email);

        if (userLoggingIn == null || !password.equals(userLoggingIn.getPassword())) {
            throw new IllegalArgumentException("Cannot find user/password combo");
        }

        String token = jwtService.generateToken(userLoggingIn);

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("user", userLoggingIn);

        return ResponseEntity.ok(response);
    }
}