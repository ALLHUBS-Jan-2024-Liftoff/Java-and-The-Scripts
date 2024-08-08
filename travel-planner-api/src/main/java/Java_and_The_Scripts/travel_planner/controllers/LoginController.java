package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import Java_and_The_Scripts.travel_planner.models.Login;
import Java_and_The_Scripts.travel_planner.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("login")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String displayLoginForm() {

        // this is a placeholder for now
        return "login";
    }

    @PostMapping
    public String logIn(@ModelAttribute @Valid Login login, Errors errors, Model model) {
        // TODO
        // Connect User repository
        // Authenticate with login information
        // Take client to profile page or display error message depending on result

        if (errors.hasErrors()) {
            model.addAttribute("error", "Invalid input");
            // this is a placeholder for now
            return "login";
        }

        if (userRepository.existsUserByEmail(login.getEmail())) {
            UserEntity user = userRepository.findByEmail(login.getEmail());

            if (login.getPassword() == user.getPassword()) {
                // this is a placeholder for now
                return "profile";
            }
        }

        model.addAttribute("error", "Incorrect email or password");
        // this is a placeholder for now
        return "login";
    }
}