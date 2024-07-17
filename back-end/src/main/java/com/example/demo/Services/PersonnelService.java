package com.example.demo.Services;
import com.example.demo.Repesitories.PersonnelRepesitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
