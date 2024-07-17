package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Stat1Service {
    @Autowired
    private PersonnelService personnelService;

    @Autowired
    private FamilyService familyService;

    private int getTotal() {
        return personnelService.countPersonnel() + familyService.getTotalFamilies();
    }

    public double getPercentagePersonnel() {
        int totalPersonnel = personnelService.countPersonnel();
        return calculatePercentage(totalPersonnel, getTotal());
    }

    public double getPercentageConjoints() {
        int totalConjoints = familyService.getTotalConjoints();
        return calculatePercentage(totalConjoints, getTotal());
    }

    public double getPercentageEnfants() {
        int totalEnfants = familyService.getTotalEnfants();
        return calculatePercentage(totalEnfants, getTotal());
    }

    private double calculatePercentage(int count, int total) {
        if (total == 0) {
            return 0.0;
        }
        double percentage = (double) count / total * 100;
        return Math.round(percentage * 100.0) / 100.0; // Arrondir à deux chiffres après la virgule

    }
}

