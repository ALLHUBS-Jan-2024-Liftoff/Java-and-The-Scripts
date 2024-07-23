package Java_and_The_Scripts.travel_planner.controllers;

import Java_and_The_Scripts.travel_planner.models.data.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("login")
public class LoginController {
    @GetMapping
    public String displayLoginForm() {

        // this is a placeholder for now
        return "login";
    }

    @PostMapping
    public String logIn(@ModelAttribute User user) {
        // TODO
        // Connect User repository
        // Authenticate with login information
        // Take client to profile page or display error message depending on result

        // this is a placeholder for now
        return "profile";
    }
}