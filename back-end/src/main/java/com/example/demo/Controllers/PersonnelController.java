package com.example.demo.Controllers;
import com.example.demo.Services.PersonnelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin(origins = "http://localhost:4200") // Adjust this to match your Angular app's URL
@RequestMapping("/api/personnel")
public class PersonnelController {
    private final PersonnelService personnelService;

    @Autowired
    public PersonnelController(PersonnelService personnelService) {
        this.personnelService = personnelService;
    }

    @GetMapping("/count")
    public int countPersonnel() {
        return personnelService.countPersonnel();
    }

    @GetMapping("/pyramide-des-ages")
    public List<Map<String, Object>> getPyramideDesAgesParSexe() {
        personnelService.generatePyramideDesAgesParSexe();
        return personnelService.getPyramideDesAgesParSexe();
    }

    @GetMapping("/average")
    public int averagePersonnel(){return personnelService.averagePersonnel();}
}