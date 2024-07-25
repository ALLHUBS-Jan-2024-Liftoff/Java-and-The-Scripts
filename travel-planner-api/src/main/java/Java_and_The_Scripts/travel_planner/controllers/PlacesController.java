package Java_and_The_Scripts.travel_planner.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlacesController {
    @Autowired
    private PlacesService placesService;

    @GetMapping("/places")
    public String getPlaces(@RequestParam String location) {
        return placesService.getPlaces(location);
    }
}
}
