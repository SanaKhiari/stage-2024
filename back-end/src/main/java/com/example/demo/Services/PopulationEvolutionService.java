package com.example.demo.Services;



import com.example.demo.Models.PopulationEvolution;
import com.example.demo.Repesitories.PopulationEvolutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PopulationEvolutionService {

    @Autowired
    private PopulationEvolutionRepository populationEvolutionRepository;

    public List<PopulationEvolution> getPopulationEvolution(int annee) {
        return populationEvolutionRepository.getPopulationEvolution(annee);
    }
    public List<PopulationEvolution> getEvolutionMensuelle(int annee) {
        return populationEvolutionRepository.getEvolutionMensuelle(annee);
    }

}
