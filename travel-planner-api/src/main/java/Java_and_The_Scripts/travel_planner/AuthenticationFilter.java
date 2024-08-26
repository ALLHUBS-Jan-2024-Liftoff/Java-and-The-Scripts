package Java_and_The_Scripts.travel_planner;

import Java_and_The_Scripts.travel_planner.controllers.AuthController;
import Java_and_The_Scripts.travel_planner.entities.UserEntity;
import Java_and_The_Scripts.travel_planner.repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Arrays;
import java.util.List;

public class AuthenticationFilter implements HandlerInterceptor {
    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthController authController;

    private static final List<String> whitelist = Arrays.asList("/api/user/");

    private static boolean isWhiteListed(String path) {
        for (String pathRoot : whitelist) {
            if (path.startsWith(pathRoot)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        if (isWhiteListed(request.getRequestURI())) {
            return true;
        }

        HttpSession session = request.getSession();
        UserEntity user = authController.getUserFromSession(session);

        if (user != null) {
            return true;
        }

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        return false;
    }
}