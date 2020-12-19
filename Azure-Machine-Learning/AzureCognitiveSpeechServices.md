# Azure Cognitive Speech Services

Azure Cognitive Speech Services to usługi związane z mową. Pozwalają na konwertowanie dźwięku na tekst, tekstu na dźwięk oraz tłumaczenia mowy przy użyciu uczenia maszynowego.

## Azure Speech-To-Text

### 1. Przedstawienie i usługi serwisu

Azure Speech-To-Text umożliwa w czasie rzeczywistym transkrypcje mowy na tekst w ponad 85 językach. Usługa to może zostać wzbogacona o wiedzę domonową by bardziej precyzyjnie wykonywać transkrypcję mowy na tekst.

### 2. Use cases

   * Transkrypcja wiadomości nadawanych na żywo
   * Stworzenie wyszukiwarki głosowej
   * Zaimplenetowanie sztucznej inteligencji wraz z rozpoznawaniem głosu w naszym produkcie  

### 3. How to?

   #### 3.1. Jak użyć serwisu?

   Aby skorzystać z usługi najpierw musimy stworzyć odpowiedni resource w naszej resource groupie. Następnie musimy skonfigurować Subscription-key który będziemy dołączali do zapytania w celu autoryzacji oraz wystawić endpoint na który będzie przychodziło zapytanie REST'owe do serwisu. Oprócz komunikacji za pomocą interfejsu REST'owego możemy użyć serwisu przy pomocy SDK jeśli wspiera ono nasz język programowania.

   #### 3.2. Pricing

   * Free (bezpłatne) - 5 godzin audio na miesiąc w trybie standardowym, niestandardowym oraz w trybie transkrypcji wielokanałowej audio
   * Standard - €0,844 za godzinę w trybie standardowym, €1,0882 za godzinę w trybie niestandardowym, €1,78 za godzinę w trybie transkrypcji wielokanałowej audio

## Azure Text-To-Speech

### 1. Przedstawienie i usługi serwisu

Azure Text-To-Speech umożliwa przełożenie tekstowej wypowiedzi na głosową, czyli inaczej mówiąc pozwala na synteze zapisu tekstowego. Usługa ta wspiera aktualnie 45 języków oraz 140 głosów różnych syntezatorów. Usługa umożliwa skorzystanie z różnych trybów wzbogaceń naszego tłumaczenia np. z trybu neuronowego który dodaje intonację podczas wykonywania konwersji.

### 2. Use cases

   * Przekonwertowanie dokumentów w format głosowy dla ludzi niewidomych
   * Stworzenie syntyzatora na stacji kolejowej informującego o najbliższych połączeniach na podstawie rozkładu
   * Stworzenie serwisu konwertującego zdjęcia plików PDF na format głosowy przy użyciu OCR'a oraz Text-To-Speech

### 3. How to?

   #### 3.1. Jak użyć serwisu?

   Tak jak w poprzednim przypadku najpierw musimy stworzyć resource w naszej resource group'ie, a następnie skonfigurować subscription-key oraz endpoint. Następnie możemy połączyć się z usługą za pomocą SDK np. w pythonie lub za pomocą interfejsu REST'owego.

   #### 3.2. Pricing

   * Free (bezpłatne) - 5 mln znaków na miesiąc w trybie standardowym oraz niestandardowym, 0.5 mln znaków na miesiąc w trybie neuronowym
   * Standard - €3,374 za 1 mln znaków na miesiąc w trybie standardowym, €13,493 za 1 mln znaków na miesiąc w trybie neuronowym, €5,060 za 1 mln znaków w trybie niestandardowym, €20,240 za 1 mln znaków używając niestandardowych sieci neuronowych

## Translate

### 1. Przedstawienie i usługi serwisu

Translate to usługa zawarta w resource Azure Speech. Pozwala ona w czasie rzeczywistym tłumaczyć mowę z jednego języka na inny. Dodatkowo serwis potrafi sam automatycznie rozpoznać język w którym jest mówiony tekst. Oczywiście serwis wspiera również tłumaczenie nie będące w czasie rzeczywistym. Usługa ta jest oparta na sieciach neuronowych i potrafi sama rozpoznać pauzę i koniec wypowiedzi.

### 2. Use cases

   * Tłumaczenie wypowiedzi na konkretne języki np. w parlamencie europejskim
   * Tworzenie urządzeń które w czasie rzeczywistym wspierają tłumaczenie danego języka i które możemy wykorzystać np. gdy jesteśmy za granicą i nie znamy danego języka

### 3. How to?

   #### 3.1. Jak użyć serwisu?

   Tak jak w przypadku poprzednich usług na początku należy stworzyć odpowiedni resource, w tym przypadku Azure Speech oraz skonfiguorwać Subscription-key oraz endpoint jeśli chcemy korzystać z interfejsu REST'owego. Możemy również wykorzystać SDK, aby skorzystać z serwisu wypełniamy wtedy odpowiednią konfiguracje (np. subscription-key, service region, jaki język na jaki chcemy tłumaczyć itp.) w naszym języku programowania i wywołujemy odpowiednie funkcje.

   #### 3.2. Pricing

   * Free (bezpłatna) - 5 godzin audio na miesiąc
   * Standard - €2,11 za godzinę audio na miesiąc
