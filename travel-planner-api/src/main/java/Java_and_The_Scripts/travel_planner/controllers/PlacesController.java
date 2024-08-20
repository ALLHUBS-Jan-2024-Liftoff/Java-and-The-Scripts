package Java_and_The_Scripts.travel_planner.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("api/places")
@CrossOrigin(origins = "http://localhost:5173")
public class PlacesController {

    private final String apiKey = "AIzaSyBkCRW0QYwUthrLiJkk4FZe5x0KkSYYc7Y";
    private final RestTemplate restTemplate;

    @Autowired
    public PlacesController(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @GetMapping
    public ResponseEntity<String> getPlaces(@RequestParam String location, @RequestParam String radius) {
        String url="http://maps.googleapis.com/maps/api/place/nearbysearch/json" +
                    "?location=" + location +
                    "&radius=" + radius +
                    "&key=" + apiKey;
        String response = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(response);
    }

}
