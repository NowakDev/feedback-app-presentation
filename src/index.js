import React from "react";
import ReactDOM from "react-dom";
import contactList from "./static/images/contactList.png";
import contactForm from "./static/images/contactFormAddContact.gif";
import contactFormSuccess from "./static/images/contactListSuccess.png";
import addInvitation from "./static/images/addInvitation.gif";
import employeeFeedbacks from "./static/images/feedbackList.gif";
import emailPreview from "./static/images/invitationEmailPreview.png";
import invitationSuccess from "./static/images/linkToPanel.gif";
import rightPanel from "./static/images/rightPanel.png";
import leftPanel from "./static/images/openResponsePanel.gif";
import statuses from "./static/images/statuses.png";
import billennium from "./static/images/Sygnatura.svg";
import openResponsePanelList from "./static/images/openResponsePanelList.gif";

import {
  Box,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Image,
  ListItem,
  Progress,
  Slide,
  Text,
  UnorderedList,
} from "spectacle";

import logo from "./static/images/feedback-app-logo2.svg";
import mainView from "./static/images/employeeList.png";
import evaluationPage from "./static/images/evaluationPage.png";
import thankYouPage from "./static/images/thankYouPage.png";
import evaluationPageMobile1 from "./static/images/mobileEvaluation.png";
import evaluationPageMobile2 from "./static/images/evaluationPage-mobile-2.png";
import evaluationPageTablet1 from "./static/images/tableEvaluationPage.jpg";
import evaluationPageTablet2 from "./static/images/evaluationPage-tablet-2.png";
import "./index.css";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header:
      '"Billennium-SemiBold", "Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, sans-serif',
    text:
      '"Billennium-Regular", "Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif',
  },
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen color="black" />
    </Box>
    <Box padding="1em">
      <Progress color="#ff5a00" />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide backgroundColor="#f8f9fa">
      <FlexBox height="100%">
        <FlexBox size={600} borderRadius="50%" backgroundColor="#ff5a00">
          <Image src={logo} size={500} />
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Wstęp
      </Heading>
      <FlexBox flexDirection="column">
        <Text color="black" textAlign="justify">
          Głównym celem aplikacji jest przyspieszenie procesu wystawiania próśb
          o opinię na temat pracowników Billennium, jak również szybszego wglądu
          do zebranych odpowiedzi. Feedbacki są zbierane i opisane w jednym
          miejscu co umożliwia nam łatwy do nich dostęp. Wszystko w aplikacji
          jest dostępne w jasny i przejrzysty sposób.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Technologie
      </Heading>
      <FlexBox
        height="100%"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="start"
      >
        <div>
          <Text color="black">Frontend</Text>
          <UnorderedList>
            <ListItem color="black">
              <CodeSpan>ReactJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>React hooks</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>Storybook</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>Fabric-UI</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>TypeScript</CodeSpan>
            </ListItem>
          </UnorderedList>
        </div>
        <div>
          <Text color="black">Backend</Text>
          <UnorderedList>
            <ListItem color="black">
              <CodeSpan>NodeJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>ExpressJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>PassportJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>NestJS</CodeSpan>
            </ListItem>
            <ListItem color="black">
              <CodeSpan>TypeORM</CodeSpan>
            </ListItem>
          </UnorderedList>
        </div>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Główny widok - lista pracowników
      </Heading>
      <FlexBox>
        <Image src={mainView} width="65%" />
        <Text
          fontSize="20px"
          color="black"
          margin="0px 16px"
          lineHeight="30px"
          textAlign="left"
        >
          Po udanym logowaniu jesteśmy przekierowywani na główny widok aplikacji
          - listę pracowników. Lista odzwierciedla hierarchię aktualnie
          zalogowanego użytkownika. Za pomocą pola do wyszukiwania możemy
          znaleźć pracownika i klikając na niego przejść do jego listy
          feedback'ów co pokażemy w dalszej części prezentacji. Po lewej stronie
          widzimy także menu nawigacyjne do przechodzenia pomiędzy listami a po
          kliknięciu w pole 'Wyślij zaproszenie' otwiera się panel do jego
          tworzenia.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox>
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Jest to komponent, który służy do przechowywania naszych kontaktów -
          osób do których będziemy chcieli wysyłać zaproszenia do wystawienia
          opinii o danym pracowniku. W prawym górnym rogu znajduje się pasek do
          wyszukiwania który umożliwia nam przeszukanie naszej listy.
        </Text>
        <Image src={contactList} width="65%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox alignItems="center">
        <Image src={contactForm} width="70%" />
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          W prawym górnym rogu znajduje się przycisk do otwierania formularza,
          który umożliwia nam dodanie kontaktu do naszej listy.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox>
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Po poprawnym dodaniu kontaktu na górze strony wyświetli się komunikat
          informujący nas o sukcesie.
        </Text>
        <Image src={contactFormSuccess} width="65%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Image src={employeeFeedbacks} width="70%" />
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Po wybraniu pracownika z listy, przechodzimy do widoku jego
          feedbacków. Na tym widoku mamy wgląd do wszystkich feedbacków które
          dany pracownik otrzymał do tej pory.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox>
        <Image src={statuses} width="150%" />
        <Text
          fontSize="20px"
          color="black"
          margin="0px 16px"
          textAlign="left"
          lineHeight="30px"
        >
          Statusy informują nas o tym w jakim stanie znajduje się aktualnie dany
          feedback.
          <UnorderedList
            fontSize="18px"
            color="black"
            margin="0px"
            textAlign="left"
            padding="0px"
          >
            <ListItem>
              Partial mówi o tym, że na wybrany feedback odpowiedziała część z
              osób poproszonych o wystawienie opinii.
            </ListItem>
            <ListItem>
              {" "}
              Completed mówi o tym, że na wybrany feedback odpowiedzieli wszyscy
              z proszonych o wystawienie opinii.
            </ListItem>
            <ListItem>
              Pending mówi o tym, że na wybrany feedback nie otrzymaliśmy
              jeszcze żadnej odpowiedzi, a status oczekiwania nie jest dłuższy
              niż 7 dni
            </ListItem>
            <ListItem>
              NoAnswer mówi o tym, że na wybrany feedback nie otrzymaliśmy
              żadnej odpowiedzi, a status oczekiwania jest dłuższy niż 7 dni
            </ListItem>
          </UnorderedList>
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Text fontSize="20px" color="black" textAlign="left">
          Aby stworzyć nowe zaproszenie należy kliknąć "Stwórz zaproszenie".
          Otworzy nam się formularz w którym wpisujemy potrzebne informacje oraz
          wybieramy adresatów do któych chcemy wysłać zaproszenie na temat
          danego pracownika. W liście adresatów możemy wybrać osobę z naszej
          listy kontaktów lub z listy pracowników. Jeżeli osoby do której chcemy
          wysłać prośbę o wystawienie feedbacku nie ma na żadnej liście, możemy
          ją dodać bezpośrednio z tego formularza po naciśnięciu przycisku
          "Dodaj kontakt".
        </Text>
        <Image src={addInvitation} width="70%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Image src={emailPreview} width="65%" />
        <Text
          fontSize="20px"
          color="black"
          margin="0px 16px"
          textAlign="left"
          lineHeight="30px"
        >
          Z pozycji formularza możemy włączyć podgląd maila, który zostanie
          wysłany do wcześniej wybranych przez nas adresatów. Na szablonie
          znajdziemy informacje o użytkowniku, który chce wysłać maila
          (aktualnie zalogowany użytkownik), o pracowniku, którego chcemy ocenić
          oraz nazwę projektu w którym brał udział. W miejscu napisu Odbiorco w
          docelowym mailu znajduje się imie i nazwisko odbiorcy danego maila.
          Taki mail zostanie wysłany do wszystkich adresatów których zaznaczymy.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox>
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Po wysyłce maila na górze strony ukaże nam się wiadomość informująca o
          tym, że udało się pomyślnie stworzyć zaproszenie oraz link, po
          kliknięciu którego otworzy się panel z informacjami dotyczącymi danego
          zaproszenia.
        </Text>
        <Image src={invitationSuccess} width="70%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox>
        <Image src={openResponsePanelList} width="65%" />
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Panel otwiera nam się też poprzez kliknięcie na dany feedback
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Po wejściu w szczegóły zaproszenia zobaczymy panel boczny, w którym
          mamy podstawowe informacje na jego temat: status, kiedy zostało
          utworzone, kiedy otrzymaliśmy ostatnią odpowiedź, jakiej firmy i
          jakiego projektu dotyczy oraz listę wszystkich osób, do których
          zostało wysłane.
        </Text>
        <Image src={rightPanel} width="65%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Image src={leftPanel} width="65%" />
        <Text fontSize="20px" color="black" textAlign="left" lineHeight="30px">
          Po kliknięciu w adresata, który oddał feedback wysunie się kolejny
          panel z jego szczegółami. Zobaczymy na nim odpowiedzi na pytania z
          formularza oceny, dane o oceniającym (firma, stanowisko) oraz datę
          otrzymania odpowiedzi i czas, jaki upłynął od wysłania zaproszenia.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>

    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Text fontSize="20px" color="black" lineHeight="30px" textAlign="left">
          Pracownik poproszony o wystawienie opinii po kliknięciu w przycisk
          'Wystaw opinię' w otrzymanym od nas mailu zobaczy w przeglądarce nowe
          okno z formularzem oceny pracownika. Strona jest w pełni responsywna,
          co pozwoli na wypełnienie formularza na dowolnym urządzeniu.
        </Text>
        <Image src={evaluationPage} width="65%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika - widok mobile
      </Heading>
      <FlexBox height="500px">
        <Image src={evaluationPageMobile1} height="99%" />
        <Image src={evaluationPageMobile2} height="100%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika - widok tablet
      </Heading>
      <FlexBox height="500px">
        <Image src={evaluationPageTablet1} height="99%" />
        <Image src={evaluationPageTablet2} height="100%" />
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Strona podziękowań
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Image src={thankYouPage} width="65%" />
        <Text
          fontSize="20px"
          color="black"
          margin="20px"
          lineHeight="30px"
          textAlign="left"
        >
          Po pomyślnym wysłaniu oceny osoba oceniająca zostaje przekierowana na
          stronę z podziękowaniami.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Rozwój
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="flex-start">
        <Text fontSize="32px" color="black" textAlign="left" marginTop="0px">
          W przyszłości planujemy dodać kolejne szablony formularza oceny
          pracownika, żeby osoby z różnych stanowisk mogły otrzymać ocene
          dopasowaną do ich potrzeb. Planujemy też dodać tłumaczenie na język
          angielski aby osoby z innych krajów mogły swobodnie korzystać z
          aplikacji. Planowana jest też integracja z naszym systemem DCMT.
        </Text>
      </FlexBox>
      <FlexBox height="100%" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <FlexBox height="100%">
        <Heading margin="0px" color="#ff5a00">
          Dziękujemy za uwagę :)
        </Heading>
      </FlexBox>
      <FlexBox height="150px" alignItems="flex-end">
        <Image width="150px" src={billennium} />
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
