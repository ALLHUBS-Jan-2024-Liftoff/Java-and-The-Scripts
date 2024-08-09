package Java_and_The_Scripts.travel_planner.models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;

public class Login {

    @NotNull
    @Email
    private String email;

    @NotNull
    private String password;

    public Login(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }
}
