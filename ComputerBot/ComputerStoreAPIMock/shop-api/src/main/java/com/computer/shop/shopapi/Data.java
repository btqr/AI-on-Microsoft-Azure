package com.computer.shop.shopapi;

public class Data {
    private String processor;
    private String ram;
    private String graphicCard;
    private int cost;

    public Data(String processor, String ram, String graphicCard, int cost) {
        this.processor = processor;
        this.ram = ram;
        this.graphicCard = graphicCard;
        this.cost = cost;
    }

    public String getProcessor() {
        return processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getGraphicCard() {
        return graphicCard;
    }

    public void setGraphicCard(String graphicCard) {
        this.graphicCard = graphicCard;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }
}
