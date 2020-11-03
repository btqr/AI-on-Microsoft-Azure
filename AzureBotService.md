# Azure Bot Service i QnA Maker

Azure Bot Service oraz QnA Maker to usługi pozwalające nam na tworzenie inteligentnych botów klasy korporacyjnej. Można z ich pomocą stworzyć dowolnego bota np. wirtualnego asystenta który poprawi jakość dostarczanych usług oraz zautomatyzuje nasze procesy biznesowe.

### 1. Intro
   #### 1.1. Przedstawienie oraz usługi serwisu

   Azure Bot Service - usługa ta pozwala na tworzenie, zarządzanie oraz publikowanie botów tekstowych wchodzących w interakcje z naszymi klientami. Bota można użyć jako wirtualnego asystenta w celu zmniejsza ilości pytań napływających od użytkowników. Bot ten może być prosty jak i skomplikowany, obsługujący wielowątkowe konwersacje.
   
   Azure QnA Maker - usługa ta umożliwia stworzenie oraz wytrenowanie modelu bazy pytań oraz odpowiedzi, tak by mogły zostać wykorzystane przez naszego bota do poprowadzenia konwersacji. Zazwyczaj umieszczamy tutaj najczęściej zadawane pytania po to by bot był w stanie odpowiedzieć na jak najwięcej pytań od użytkowników. Nasza baza będzie stawała się coraz bardziej inteligenta wraz z upływem czasu ponieważ uczy się zachowań użytkowników.

   Usługi Azure Bot Service oraz Azure QnA Maker są często używane razem by stworzyć w pełni działającego bota mającego bogatą baze pytań i odpowiedzi.

### 2. Use cases
    
   * Stworzenie bota odpowiadającego na pytania klientów naszego hotelu
   * Stworzenie bota doradzającego jaka oferta ubezpieczeniowa będzie dla nas (klientów) najlepsza 
   * Stworzenie bota odpowiadającego na pytania dotyczące kwarantanny domowej będącej skutkiem zarażenia się koronawirusem

### 3. How to?
   #### 3.1. Jak użyć serwisu?

   Na początku musimy utworzyć naszą baze pytań w usłudze QnA Maker. Bazę pytań możemy wygenerować na podstawie FAQ osadzanego na naszej stronie, zaimportować predefiniowane źródło danych typu chit-chat (pogawędki) lub stworzyć pytania i odpowiedzi manualnie. Oczywiście możemy łączyć nasze sposoby na tworzenie bazy danych. Po utworzeniu bazy powinniśmy wytrenować nasz model a następnie go opublikować, tak aby udostępniał interfejs REST'owy dla innych naszych usług.

   Kolejnym krokiem jest utworzenie bota w usłudze Azure Bot Service. Najprościej jest to zrobić z poziomu usługi QnA Maker, która tworzy bota odrazu z podłączonym modelem bazy pytań oraz odpowiedzi i publikuje takiego bota. W tym momencie bot jest już gotowy do użycia. Bota możemy rozszerzyć o dodatkowe funkcjonalności, przede wszystkim możemy dodać swój własny kod oraz skonfigurować różne kanały komunikacji z botem.

   #### 3.2. Pricing

   * QnA Maker
     * Subskrypcja free (bezpłatna) - max 3 zapytania na sekundę, 100 na minutę oraz 50 000 na miesiąc. Każdy dokument do 1 MB, max 3 dokumenty zarządzane na miesiąc
     * Subskrypcja standard - max 3 zapytania na sekundę, 100 na minutę. €8,433 dla nieograniczonej liczby dokumentów zarządzanych w miesiącu
   * Azure Bot Service
     * Subskrypcja free (bezpłatna) - nieograniczona ilość komunikatów na kanałach standardowych i max. 10 000 komunikatów miesięcznie na kanałach Premium
     * Subskrypcja S1 - nieograniczona ilość komunikatów na kanałach standardowych i €0,422 za 1000 komunikatów na kanałach premium