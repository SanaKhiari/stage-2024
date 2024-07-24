package com.example.demo.Services;
import com.example.demo.Repesitories.PersonnelRepesitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PersonnelService {
    private final PersonnelRepesitory personnelRepository;


    @Autowired
    public PersonnelService(PersonnelRepesitory personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    public int countPersonnel() {
        return personnelRepository.countPersonnel();
    }


    public void generatePyramideDesAgesParSexe() {
        personnelRepository.executePyramideDesAgesParSexe();
    }
    // Fetch the results of the pyramid age procedure
    public List<Map<String, Object>> getPyramideDesAgesParSexe() {
        return personnelRepository.fetchPyramideDesAgesParSexe();
    }
    public int averagePersonnel(){return personnelRepository.average();}
}
