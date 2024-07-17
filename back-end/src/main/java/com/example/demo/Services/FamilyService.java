package com.example.demo.Services;

import com.example.demo.Repesitories.FamilyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}

