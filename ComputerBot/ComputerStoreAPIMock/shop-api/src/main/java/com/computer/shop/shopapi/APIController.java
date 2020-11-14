package com.computer.shop.shopapi;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.Map;

@RestController
public class APIController {

    @Autowired
    private ObjectMapper objectMapper;

    private static final String EMAIL_URL = "https://prod-79.westeurope.logic.azure.com:443/workflows/788929579c4a426e8e97f936d6010d13/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oHAxDBFAxb842TqbId3ES0sh4ExXS0QLdvip5Wj-Hws";

    static final Map<String, Data> MOCK_DATA = Map.of(
        "ERT388Z", new Data("Intel Core i5-9400F", "16 GB", "NVIDIA GeForce GTX 1650", 1250)
    );

    @PostMapping("/code")
    @ResponseBody
    public Data test(HttpEntity<String> httpEntity) {
        return MOCK_DATA.get(httpEntity.getBody());
    }

    @PostMapping("/mail")
    public void mail(@RequestBody EmailData emailData) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "application/json");

        HttpEntity<String> request = null;
        try {
            request = new HttpEntity<>(objectMapper.writeValueAsString(emailData), httpHeaders);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        URI uri = URI.create(EMAIL_URL);
        restTemplate.postForLocation(uri, request);
    }
}
