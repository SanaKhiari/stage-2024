package com.example.demo.Controllers;



import com.example.demo.Models.PopulationEvolution;
import com.example.demo.Services.PopulationEvolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PopulationEvolutionController {

    @Autowired
    private PopulationEvolutionService populationEvolutionService;

    @GetMapping("/population-evolution")
    public List<PopulationEvolution> getPopulationEvolution(@RequestParam int annee) {
        return populationEvolutionService.getPopulationEvolution(annee);
    }

    @GetMapping("/mensuelle")
    public List<PopulationEvolution> getEvolutionMensuelle(@RequestParam int annee) {
        return populationEvolutionService.getEvolutionMensuelle(annee);
    }

}
