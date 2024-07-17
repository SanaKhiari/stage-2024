package com.example.demo.Controllers;

import com.example.demo.Services.reportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;
@RestController
public class ReportController {
    @Autowired
    private reportService reportService;

    @GetMapping("/reports")
    public List<Map<String, Object>> getReports() {
        return reportService.getReports();
    }
}
