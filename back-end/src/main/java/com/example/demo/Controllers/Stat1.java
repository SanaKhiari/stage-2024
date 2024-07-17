package com.example.demo.Controllers;

import com.example.demo.Services.Stat1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Services.PersonnelService;
import com.example.demo.Services.FamilyService;

@RestController
@RequestMapping("/api/stat1")
public class Stat1 {
    @Autowired
    private PersonnelService personnelService;

    @Autowired
    private FamilyService familyService;

    @Autowired
    private Stat1Service percentageService;

    @GetMapping("/totalPersonnel")
    public int getTotalPersonnel() {
        return  personnelService.countPersonnel();
    }

    @GetMapping("/totalFamilies")
    public int getTotalFamilies() {
        return familyService.getTotalFamilies();
    }

    @GetMapping("/totalConjoints")
    public int getTotalConjoints() {
        return familyService.getTotalConjoints();
    }

    @GetMapping("/totalEnfants")
    public int getTotalEnfants() {
        return familyService.getTotalEnfants();
    }

    @GetMapping("/percentagePersonnel")
    public double getPercentagePersonnel() {
        return percentageService.getPercentagePersonnel();
    }

    @GetMapping("/percentageConjoints")
    public double getPercentageConjoints() {
        return percentageService.getPercentageConjoints();
    }

    @GetMapping("/percentageEnfants")
    public double getPercentageEnfants() {
        return percentageService.getPercentageEnfants();
    }
}
