# Azure Video Indexer

### 1. Intro
   #### 1.1. Przedstawienie oraz usługi serwisu

   Azure Video Indexer to usługa która umożliwia ekstrakcję cech z materiału wideo. Model maszynowy analizuje dwa kanały audio i video i na ich podstawie wyodrębnia różne cechy i informacje np. rozpozonaje twarze, rozpoznajde celebrytów, robi transkrypcję tego co słyszy na różne języki, identyfikuje efekty audio i wiele wiele więcej.

### 2. Use cases

   * Ropoznawanie ludzi na materiale wideo nakręconym przez kamerę hotelu
   * Rozpoznawanie podejrzanego zachowania w miejscu publicznym poprzez kamerę
   * Aplikacja pozwalająca na dorobienie napisów do filmu, w którym aktorzy posługują się obcym językiem   

### 3. How to?
   #### 3.1. Jak użyć serwisu?

   Na początku musimy wejść na stronę videoindexer.ai i zdobyć nasze Account ID, które używamy do tego by zdobyć API key (Primary key) ze strony api-portal.videoindexer.ai. Następnie znając nasze account ID, lokację oraz API key możemy wykonać zapytanie REST'owe w którym wyślemy nasz film do analizy. Po wykonanej analizie otrzymujemy odpowiedź zawierającą wszystkie informacje które zdobył dla nas video indexer w postaci JSON'a np.:

```json
"summarizedInsights": {
    "name": "Beach waves",
    "id": "60eb06669e",
    "duration": {
        "time": "0:00:13.355",
        "seconds": 13.4
    },
    "faces": [],
    "keywords": [],
    "sentiments": [{
        "sentimentKey": "Neutral",
        "seenDurationRatio": 0.3744,
        }],
    "emotions": [],
    "audioEffects": [],
    "labels": [{
        "id": 1,
        "name": "outdoor",
        "appearances": [{
            "startTime": "0:00:00",
            "endTime": "0:00:13.3",
            "startSeconds": 0,
            "endSeconds": 13.3
        }]
    }]
}
```

   #### 3.2. Pricing
   Korzystając z usługi mamy do wyboru dwie konfiguracje cenowe:
   - Free - 10 godzin indeksowania dla użytkoników strony webowej orazy 40 godzin indeksowania dla użytkowników korzystających z API
   - Standard - €0,127 za analizę wideo, €0,034 za analizę audio danego wideo

