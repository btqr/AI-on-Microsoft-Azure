# Azure Custom Vision

### 1. Intro
   #### 1.1. Przedstawienie oraz usługi serwisu

   Azure Custom Vision to usługa z dziedziny uczenia maszynowego, która pozwala na klasyfikację oraz detekcję obiektów na obrazie. Wystarczy, że wrzucimy do Azure'a obrazki wraz z samodzielnie zdefiniowanymi tagami (labelami) i usługa ta sama wytrenuje model, który pozwala na rozróżnianie obrazków z różnymi tagami. Duża zaletą jest to, że nie musimy posiadać dużego zbioru danych zdjęć, jednak w takim przypadku obrazki nie mogą być klasyfikowane na podstawie subtelnych różnic np. małych rys. Detekcja obiektów natomiast pozwala na znalezienie współrzędnych szukanego obiektu na obrazie. 

### 2. Use cases

   * Aplikacja webowa pozwalająca na rozróżnianie rasy psa na podstawie zuploadowanego zdjęcia
   * Aplikacja webowa rozpoznająca model samochodu, któremu zrobiliśmy zdjęcie
   * Aplikacja webowa stwierdzająca czy człowiek jest chory na jakąś chorobę na podstawie zrobionego zdjęcia skóry

### 3. How to?
   #### 3.1. Jak użyć serwisu?

   Na początku musimy zalogować się do portalu https://www.customvision.ai/, a następnie stworzyć projekt i przypisać go do jednej z naszych resource group. Podczas tworzenia projektu możemy różnie go skonfigurować podająć różny typ projektu (klasyfikacja lub detekcja), typ klasfyikacji (kilka tagów na obrazek lub jeden tag na obrazek) i domenę (np. jedzenie). Kolejno możemy zuplodować obrazki z różnymi tagami i naciśnać przycisk "train model" by zacząć trenowanie modelu. Po wytrenowaniu mamy dostępne statystyki opisujące przebieg i wynik trenowania modelu. By skorzystać z modelu możemy użyć usługi REST'owej i wykonać zapytanie podając odpowiednie nagłówki takie jak Prediction-Key, Request URL i Content-type lub użyć SDK jeśli nasz język oprogramowania jest wspierany.

   #### 3.2. Pricing

   Korzystając z usługi mamy do wyboru dwie konfiguracje cenowe:
   - Free - Maksymalnie 20 zaptania na sekundę, do 2 projektów, do 1 godziny trenowania na miesiąc, do 5000 obrazów na projekt, do 10000 prognoz miesięcznie. Funkcje: transkacje przekazywania, uczenia i przewidywania
   - Standard - Maksymalnie 10 zapytań na sekundę (maks 100 projektów)
     - €1,687 za każde 1000 zapytań
     - €16,866 za każdą godzinę trenowania modelu
     - €0,591 za każde 1000 obrazów trzymanych w magaznie obrazów (jeden obraz max 6MB)
