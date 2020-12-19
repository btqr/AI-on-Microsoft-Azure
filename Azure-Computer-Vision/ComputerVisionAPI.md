# Azure Computer Vision API

### 1. Intro
   #### 1.1. Przedstawienie oraz usługi serwisu

   Azure Computer Vision API to usługa REST'owa pozwalająca na:
   * weryfikację twarzy: sprawdza czy dwie twarze należą do tej samej osoby
   * detekcję twarzy: wykrywa twarz człowieka na zdjęciu
   * identyfikację twarzy: znajduje twarze na zdjęciu i identyfikuje osobę z daną twarzą
   * znajdywanie podobieństw: znajduje podobne twarze
   * grupowanie twarzy: niezidentyfikowane twarze grupuje według ich podobieństw
   * analizę twrzy: rozpoznaje właściowości człowieka na podstawie twarzy takie jak: wiek, płeć, emocje, pozycję głowy

### 2. Use cases

   * Wyszukiwanie poszukiwanych ludzi przez kamery w sektorze publicznym np. na lotniskach, w centrach handlowych itp.
   * Zbudowanie systemu autoryzacji człowieka za pomocą twarzy np. w hotelu by nie posługiwać się kartami/kluczami
   * Zbieranie statystyk o poziomie zadowolenia ludzi w mieście na podstawie emocji wykazywanych przez ich twarze 


### 3. How to?
   #### 3.1. Jak użyć serwisu?

   By skorzystać z usługi na początku musimy stworzyć resource Face API w zakładce AI + Machine Learning. Następnie by użyć usługi możemy wykonać zapytanie REST na wygenerowany adres dołączając Subscription Key do zapytania lub skorzystać z SDK jeśli nasz język w którym piszemy (np. Python, C#) posiada SDK do Face API. W zapytaniu załączamy twarz zdjęcia, a w odpowiedzi dostajemy JSON'a z odpowiedzią. Przykładowa odpowiedź:

```json
[
  {
    "faceId": "36c3e7f8-2194-4eed-88cb-15dc8924c8fe",
    "faceRectangle": {
      "width": 161,
      "height": 161,
      "left": 920,
      "top": 303
    },
    "faceLandmarks": null,
    "faceAttributes": {
      "smile": 0.978,
      "glasses": "readingGlasses",
      "emotion": {
        "happiness": 0.978,
        "neutral": 0.019,
        "sadness": 0.002
      }
    }
  }
]
```

   #### 3.2. Pricing

   Korzystając z usługi mamy do wyboru dwie konfiguracje cenowe:
   - Free - Maksymalnie 20 zaptań na minutę, do 30000 tysięcy zapytań w ciągu miesiąca (0$/miesiąc). Wszystkie funkcje obsługiwane (wykrywanie twarzy, weryfikacja twarzy, identyfikacja twarzy, grupowanie twarzy, wyszukiwanie podobnych twarzy)
   - Standard - Maksymalnie 10 zapytań na sekundę
     - 0 - 1 000 000 zapytań w ciągu miesiąca, €0,844 za 1000 zapytań
     - 1 000 000 - 5 000 0000 zapytań w ciągu miesiąca, €0,675 za 1000 zapytań
     - 5 000 000 - 10 000 000 zapytań w ciągu miesiąca, €0,506 za 1000 zapytań
     - 10 000 000+ zapytań w ciągu miesiąca, €0,338 za 1000 zapytań
     - Magazyn twarzy - €0,844 za 1000 twarzy na miesiąc
