package com.example.demo.Services;

import com.example.demo.Repesitories.FamilyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FamilyService {
    @Autowired
    private FamilyRepository familyRepository;

    public int getTotalFamilies() {
        return familyRepository.countTotalFamilie();
    }

    public int getTotalConjoints() {
        return familyRepository.countTotalConjoin();
    }

    public int getTotalEnfants() {
        return familyRepository.countTotalEnfant();
    }



    public void generatePyramideDesAgesParSexeTotal() {
        familyRepository.executePyramideDesAgesParSexeTotal();
    }
    // Fetch the results of the pyramid age procedure
    public List<Map<String, Object>> getPyramideDesAgesParSexeTotal() {
        return familyRepository.fetchPyramideDesAgesParSexeTotal();
    }

    public int getAverageCnjoint(){return familyRepository.AvreageConjoint();}

    public int getAverageEnfant(){return familyRepository.AvreageEnfant();}


}

