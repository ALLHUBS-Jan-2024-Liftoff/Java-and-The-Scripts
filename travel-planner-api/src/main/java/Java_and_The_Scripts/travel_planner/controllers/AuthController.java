package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import Java_and_The_Scripts.travel_planner.models.LoginDTO;
import Java_and_The_Scripts.travel_planner.repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    private static final String userSessionKey = "user";

    public UserEntity getUserFromSession(HttpSession session) {
        Long userID = (Long) session.getAttribute(userSessionKey);

        if (userID == null) {
            return null;
        }

        Optional<UserEntity> user = userRepository.findById(userID);

        if (user.isEmpty()) {
            return null;
        }

        return user.get();
    }

    private static void setUserInSession(HttpSession session, UserEntity user) {
        session.setAttribute(userSessionKey, user.getId());
    }

    @PostMapping(value="/login")
    public ResponseEntity<Map> logIn(@RequestBody LoginDTO loginDTO, HttpServletRequest request) {
        ResponseEntity response = null;
        Map<String, String> responseBody = new HashMap<>();
        UserEntity user = userRepository.findByEmail(loginDTO.getEmail());
        String password = loginDTO.getPassword();

        if (user == null || !password.equals(user.getPassword())) {
            responseBody.put("message", "Invalid email or password");
            response = ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(responseBody);
        } else {
            setUserInSession(request.getSession(), user);
            responseBody.put("message", "User successfully logged in.");
            responseBody.put("email", user.getEmail());
            response = ResponseEntity
                    .status(HttpStatus.CREATED)
                    .body(responseBody);
        }
        return response;
    }
}