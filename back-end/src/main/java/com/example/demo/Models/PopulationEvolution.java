package com.example.demo.Models;

public class PopulationEvolution {
    private String mois;
    private int nombreDeNaissances;
    private String Type;

    public String getType() {
        return Type;
    }

    public void setType(String type) {
        this.Type = type;
    }

    public String getMois() {
        return mois;
    }

    public void setMois(String mois) {
        this.mois = mois;
    }

    public int getNombreDeNaissances() {
        return nombreDeNaissances;
    }

    public void setNombreDeNaissances(int nombreDeNaissances) {
        this.nombreDeNaissances = nombreDeNaissances;
    }
}