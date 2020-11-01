# Azure Cognitive Language Services

Azure Cognitive Language Services to usługi związane z przetwarzaniem mowy/języka umożliwiające deweloperom skorzystanie ze stucznej inteligencji bez specjalistycznej wiedzy z zakresu uczenia maszynowego. Z usług tych możemy skorzystać poprzez wystawione interfejsy np. REST API.

------------------------
## Azure Content Moderator

### 1. Intro
   #### 1.1. Przedstawienie serwisu 
        
Azure content moderator to usługa która pozwala nam moderować wysyłane treści w celu wychwycenia tych potecjalnie niepożądanych.  

   #### 1.2. Usługi serwisu
         
Azure content moderator pozwalana nam moderować treści takie jak: tekst, zdjęcia czy filmy video za pomocą wystawionego interfejsu. Pozwala to wychwycić np. treści wulgarne lub naruszające czyjąś prywatność jak nr. telefonu lub email. Co więcej możemy sami zdefiniować listę niepożądanych danych np. listę słów.


### 2. Use cases
   * Moderowanie opinii na stronie hotelu
   * Moderowanie forum lokalnej społeczności

### 3. How to?
   #### 3.1. Jak użyć serwisu?

By postawić serwis musimy stworzyć resource Content Moderator w naszej resource grupie. Następnie wybieramy z jakimi parametrami będziemy robić zapytanie poprzez interfejs REST'owy w celu rozpoznania niechcianej treści. Autoryzować będziemy się dołączając klucz do nagłówka zapytania. Informacja zwrotna z serwisu będzie przedstawiona w formacie JSON np.:

```json
"PII": {
    "Email": [{
        "Detected": "abcdef@abcd.com",
        "SubType": "Regular",
        "Text": "abcdef@abcd.com",
        "Index": 32
        }],
    "IPA": [{
        "SubType": "IPV4",
        "Text": "255.255.255.255",
        "Index": 72
        }],
    "Phone": [{
        "CountryCode": "US",
        "Text": "5557789887",
        "Index": 56
        }, {
        "CountryCode": "UK",
        "Text": "+44 123 456 7890",
        "Index": 208
        }],
    "Address": [{
        "Text": "1 Microsoft Way, Redmond, WA 98052",
        "Index": 89
        }],
    "SSN": [{
        "Text": "999-99-9999",
        "Index": 267
        }]
    }
```

   #### 3.2. Pricing

   Korzystając z usługi mamy do wyboru dwie konfiguracje cenowe:
   - Free - Maksymalnie 1 zaptanie na sekundę, do 5000 tysięcy zapytań w ciągu miesiąca (0$/miesiąc)
   - Standard - Maksymalnie 10 zapytań na sekundę
     - 0 - 1 000 000 zapytań w ciągu miesiąca, €0,844 za 1000 zapytań
     - 1 000 000 - 5 000 0000 zapytań w ciągu miesiąca, €0,633 za 1000 zapytań
     - 5 000 000 - 10 000 000 zapytań w ciągu miesiąca, €0,506 za 1000 zapytań
     - 10 000 000+ zapytań w ciągu miesiąca, €0,338 za 1000 zapytań

----------------
## Language Understanding (LUIS)
### 1. Intro

   #### 1.1. Przedstawienie serwisu 

Language Understanding to usługa która próbuje zrozumieć znaczenie wysłanego jej tekstu i wywnioskować jakie są najważniejsze informacje używając uczenia maszynowego.

   #### 1.2. Usługi serwisu

Language Understanding to model zbudowany za pomocą uczenia maszynowego, który udostępnia 3 usługi:

   * Interpretacje wypowiedzi (np. wychwycenie najbardziej znaczących słów w wypowiedzi w celu jej streszczenia)
   * Zrozumienie intencji zawartej w wypowiedzi (np. wychwycenie że użytkownik chce zarezerwować pokój w hotelu)
   * Klasyfikacje wypowiedzi (np. wejście: "Warszawa" wyjście: miejsce, lokacja) 

### 2. Use cases
   * Bot streszczający długie artykuły
   * Bot na stronie hotelu, który odpowiada na podstawowe pytania oraz pomaga zarezerwować pokój w hotelu
   * Bot do luźnej konwersacji

### 3. How to?
   #### 3.1. Jak użyć serwisu?
   Na początku musimy stworzyć resource Language Understanding w naszej resource groupie. Następnie możemy dodać przykładowe "intents" oraz "entities" w celu przekazania wiedzy domenowej naszej usłudze. Po przekazaniu wiedzy możemy wytrenować nasz model do jej rozpoznawania naciskając przycisk "train". Po zakończeniu trenowania musimy skonfigurować endpoint oraz opublikować serwis.
   Przykładowa odpowiedź serwisu usługi wychwytującej intencje użytkownika:

```json
    {
        "query": "I want to call my HR rep",
        "prediction": {
            "topIntent": "HRContact",
            "intents": {
                "HRContact": {
                    "score": 0.8582669
                }
            },
            "entities": {
                "Contact Type": [
                    "call"
                ]
            },
            "sentiment": {
                "label": "neutral",
                "score": 0.5
            }
        }
    }
```

   #### 3.2. Pricing

   Korzystając z usługi mamy do wyboru dwie konfiguracje cenowe:
   - Free - Maksymalnie 5 zaptań na sekundę, do 10000 tysięcy zapytań w ciągu miesiąca (0$/miesiąc)
   - Standard - Maksymalnie 50 zapytań na sekundę
     - Rozpoznawanie tekstu - $1.50 za 1000 zapytań
     - Rozpoznawanie mowy - $5.50 za 1000 zapytań

----------------
## Text Analytics
### 1. Intro

   #### 1.1. Przedstawienie serwisu

Text Analytics to usługa, która analizuje nasz tekst na różnych płaszczyznach i potrafi zaklasyfikować go do odpowiedniej klasy na podstawie uzyskanych informacji. Głównie usługa jest używana do wychwycenia czy uczucia osoby piszącej są pozytywne czy negatywne.

   #### 1.2. Usługi serwisu

Text Analytics po wysłaniu tekstu do sewrisu klasyfikuje nam w skali od 0 do 1 czy dany tekst jest pozytywny czy negatywny, przy czym 0 - tekst negatywny, 0.5 tekst neutralny, 1.0 - tekst pozytywny.

### 2. Use cases
   * Wyliczenie procentowo ile osób jest zadowolonych z usług naszego hotelu analizując ich opinie
   * Sprawdzenie jakie są odczucia ludzi na temat pandemii koronawirusa analizując ich wypowiedzi na forach internetowych

### 3. How to?
   #### 3.1. Jak użyć serwisu?
   Na początku musimy stworzyć resource Text Analytics w naszej resource groupie. Następnie konfigurujemy nagłówki, których będziemy używać w zapytaniu np. content-type lub Ocp-Aim-Subscription-Key do autoryzacji. Następnie odczytujemy link na jaki mamy wykonać request i na podany link możemy już wykonywać zapytania w celu analizy tekstu.
   Przykładowa odpowiedź serwisu:

```json
   {
    "documents": [
        {
            "id": "1",
            "sentiment": "positive",
            "confidenceScores": {
                "positive": 1.0,
                "neutral": 0.0,
                "negative": 0.0
            },
            "sentences": [
                    {
                        "sentiment": "positive",
                        "confidenceScores": {
                            "positive": 1.0,
                            "neutral": 0.0,
                            "negative": 0.0
                        },
                        "offset": 0,
                        "length": 58,
                        "text": "The restaurant had great food and our waiter was friendly.",
                        "opinions": [
                            {
                                "sentiment": "positive",
                                "confidenceScores": {
                                    "positive": 1.0,
                                    "negative": 0.0
                                },
                                "offset": 19,
                                "length": 5,
                                "text": "great",
                                "isNegated": false
                            },
                            {
                                "sentiment": "positive",
                                "confidenceScores": {
                                    "positive": 1.0,
                                    "negative": 0.0
                                },
                                "offset": 49,
                                "length": 8,
                                "text": "friendly",
                                "isNegated": false
                            }
                        ]
                    }
                ],
                "warnings": []
            }
        ],
        "errors": [],
        "modelVersion": "2020-04-01"
    }
```

   #### 3.2. Pricing
   - Free - do 5000 zapytań w ciągu miesiąca (0$/miesiąc)
   - Standard - Maksymalnie 10 zapytań na sekundę
     - 0 - 500 000 zapytań w ciągu miesiąca, €1,687 za 1000 zapytań
     - 500 000 - 2 500 0000 zapytań w ciągu miesiąca, €0,844 za 1000 zapytań
     - 2 500 000 - 10 000 000 zapytań w ciągu miesiąca, €0,422 za 1000 zapytań
     - 10 000 000+ zapytań w ciągu miesiąca, €0,211 za 1000 zapytań
   - S0 - do 25 000 zapytań w ciągu miesiąca, €2,530 za każde przekroczone 1000 zapytań
   - S1 - do 100 000 zapytań w ciągu miesiąca, €2,109 za każde przekroczone 1000 zapytań
   - S2 - do 500 000 zapytań w ciągu miesiąca, €1,687 za każde przekroczone 1000 zapytań
   - S3 - do 2 500 000 zapytań w ciągu miesiąca, €0,844 za każde przekroczone 1000 zapytań
   - S4 - do 10 000 000 zapytań w ciągu miesiąca, €0,422 za każde przekroczone 1000 zapytań
