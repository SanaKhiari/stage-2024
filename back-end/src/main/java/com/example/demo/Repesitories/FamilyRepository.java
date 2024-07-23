package com.example.demo.Repesitories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Map;

@Repository
public class FamilyRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int countTotalFamilie() {
        String sql = "SELECT COUNT(*) FROM FAMILLE";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int countTotalConjoin() {
        String sql = "SELECT COUNT(*) FROM FAMILLE where PARENTE = 'C' ";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public int countTotalEnfant() {
        String sql = "SELECT COUNT(*) FROM FAMILLE where PARENTE = 'E' ";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

    public void executePyramideDesAgesParSexeTotal() {
        jdbcTemplate.execute("BEGIN PyramideAgeParSexTotal; END;");
    }


    public List<Map<String, Object>> fetchPyramideDesAgesParSexeTotal() {
        String sql = "SELECT * FROM TablePyramideAgeParSexTotal ";
        return jdbcTemplate.queryForList(sql);
    }




}
