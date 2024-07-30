package com.example.demo.Repesitories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class PersonnelRepesitory  {

    public interface EvolutionMensuelleParType {
        String getMois();
        String getType();
        Integer getNombreDeNaissances();
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;


    public int countPersonnel() {
        String sql = "SELECT COUNT(*) FROM Personnel";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    // Method to execute the PL/SQL procedure
    public void executePyramideDesAgesParSexe() {
        jdbcTemplate.execute("BEGIN PyramideDesAgesParSexe; END;");
    }
    public List<Map<String, Object>> fetchPyramideDesAgesParSexe() {
        String sql = "SELECT * FROM TempPyramideAgesParSexe";
        return jdbcTemplate.queryForList(sql);
    }

    public int average() {
        String sql ="SELECT FLOOR(AVG(EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM dat_nais) )) AS age_moyen FROM Personnel";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public List<Map<String, Object>> getCountByService() {
        String sql = "SELECT s.libelle, COUNT(*) as total_count FROM personnel p JOIN ref_service s ON p.Cod_soc = s.kserv GROUP BY s.libelle";
        return jdbcTemplate.queryForList(sql);
    }



}
