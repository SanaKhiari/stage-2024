package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Service
public class reportService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> getReports() {
        String sql = "SELECT * FROM AGENCE";
        return jdbcTemplate.queryForList(sql);
    }


}
