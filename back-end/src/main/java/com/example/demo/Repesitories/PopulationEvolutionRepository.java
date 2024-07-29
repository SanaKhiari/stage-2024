package com.example.demo.Repesitories;


import com.example.demo.Models.PopulationEvolution;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class PopulationEvolutionRepository {

    private final SimpleJdbcCall simpleJdbcCall;

    @Autowired
    public PopulationEvolutionRepository(JdbcTemplate jdbcTemplate) {
        this.simpleJdbcCall = new SimpleJdbcCall(jdbcTemplate)
                .withFunctionName("evolution_population")
                .returningResultSet("rs", new RowMapper<PopulationEvolution>() {
                    @Override
                    public PopulationEvolution mapRow(ResultSet rs, int rowNum) throws SQLException {
                        PopulationEvolution evolution = new PopulationEvolution();
                        evolution.setMois(rs.getString("mois"));
                        evolution.setNombreDeNaissances(rs.getInt("nombre_de_naissances"));
                        return evolution;
                    }
                });
    }

    public List<PopulationEvolution> getPopulationEvolution(int annee) {
        Map<String, Object> result = simpleJdbcCall.execute(annee);
        return (List<PopulationEvolution>) result.get("rs");
    }
}
