package com.example.demo.Repesitories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class PersonnelRepesitory  {
    @Autowired
    private JdbcTemplate jdbcTemplate;


    public int countPersonnel() {
        String sql = "SELECT COUNT(*) FROM Personnel";
        return jdbcTemplate.queryForObject(sql, Integer.class);
    }

}
