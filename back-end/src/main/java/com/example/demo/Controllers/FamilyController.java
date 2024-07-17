package com.example.demo.Controllers;


import com.example.demo.Services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/famille")
public class FamilyController {
    @Autowired
    private FamilyService familyService;

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
}
