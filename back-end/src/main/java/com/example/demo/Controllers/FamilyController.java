package com.example.demo.Controllers;


import com.example.demo.Services.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:4200") // Adjust this to match your Angular app's URL
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



    @GetMapping("/pyramide-des-ages-total")
    public List<Map<String, Object>> getPyramideDesAgesParSexe() {
        familyService.generatePyramideDesAgesParSexeTotal();
        return familyService.getPyramideDesAgesParSexeTotal();
    }


}
