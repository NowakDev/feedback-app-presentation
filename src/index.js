import React from "react";
import ReactDOM from "react-dom";
import contactList from "./static/images/contactList.png";
import contactForm from "./static/images/contactForm.png";
import contactFormSuccess from "./static/images/contactFormSuccess.png";
import employeeFeedbacks from "./static/images/employeeFeedbacks.png";
import invitationForm from "./static/images/invitationForm.png";
import emailPreview from "./static/images/emailPreview.png";
import invitationSuccess from "./static/images/invitationSuccess.png";
import rightPanel from "./static/images/rightPanel.png";
import leftPanel from "./static/images/leftPanel.png";

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
import mainView from "./static/images/mainview.png";
import evaluationPage from "./static/images/evaluationPage.png";
import thankYouPage from "./static/images/thankYouPage.png";
import evaluationPageMobile1 from "./static/images/evaluationPage-mobile-1.png";
import evaluationPageMobile2 from "./static/images/evaluationPage-mobile-2.png";
import evaluationPageTablet1 from "./static/images/evaluationPage-tablet-1.png";
import evaluationPageTablet2 from "./static/images/evaluationPage-tablet-2.png";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
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
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="#ff5a00">
          Wstęp
        </Heading>
        <Text color="black" textAlign="center">
          Nasza aplikacja służy do zbierania i przetrzymywania feedbacków o
          pracownikach naszej firmy. Feedbacki są zbierane z firm zewnętrznych,
          jak i naszej firmy.
        </Text>
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
              <CodeSpan>Nodejs</CodeSpan>
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
          </UnorderedList>
        </div>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Główny widok - lista pracowników
      </Heading>
      <FlexBox>
        <Image src={mainView} width="70%" />
        <Text
          fontSize="20px"
          color="black"
          margin="22px"
          lineHeight="30px"
          textAlign="justify"
          lineHeight="30px"
        >
          Po udanym logowaniu jesteśmy przekierowywani na główny widok aplikacji
          - listę pracowników. Lista odzwierciedla hierarchię aktualnie
          zalogowanego użytkownika. W tym przypadku jest to hierachia jednego z
          manager'ów. Za pomocą pola do wyszukiwania możemy wyszukać pracownika
          i klijac na niego przejść do jego listy feedback'ów. Po lewej stronie
          widzimy także menu nawigacyjne do przechodzenia pomiędzy listami a po
          kliknięciu w pole 'Wyślij zaproszenie' otwiera się panel do jego
          stworzenia.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Jest to komponent, który służący do przechowywania naszych kontaktów
          do których będziemy chcieli wysyłać zaproszenia do wystawiania opinii
          o danym pracowniku
        </Text>
        <Image src={contactList} width="70%" />
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox alignItems="center">
        <Image src={contactForm} width="70%" />
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          W prawym górnym rogu znajduje się przycisk do otwarcia formularza,
          który umożliwia nam dodanie kontaktu do naszej listy.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Po poprawnym dodaniu kontaktu wyświetli nam się komunikat na górze
          strony, informujący nas o sukcesie.
        </Text>
        <Image src={contactFormSuccess} width="70%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Image src={employeeFeedbacks} width="70%" />
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Po wybraniu pracownika który nas interesuje, przechodzimy do widoku
          jego feedbacków. Na tym widoku mamy wgląd do wszystkich feedbacków
          które dany pracownik otrzymał do tej pory. Możemy też stworzyć nowe
          zaproszenie do wystawienia oceny
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox flexDirection="row" alignItems="center">
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          W formularzu wpisujemy potrzebne informacje oraz wybieramy adresatów
          do któych chcemy wysłać zaproszenie na temat danego pracownika. W
          liście adresatów możemy wybrać osobę z naszej listy kontaktów lub z
          listy pracowników. Jeżeli osoba do której chcemy wysłać prośbę o
          wystawienie feedbacku nie ma na żadnej liście, możemy ją bezpośrednio
          dodać z tego formularza po naciśnięciu przycisku dodaj kontakt.
        </Text>
        <Image src={invitationForm} width="70%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Image src={emailPreview} width="70%" />
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Z pozycji formularza możemy włączyć podgląd maila, który zostanie
          wysłany do wcześniej wybranych przez nas adresatów. Na szablonie
          znajdziemy informacje o użytkownik, który chce wysłać maila, o
          pracowniku, którego chcemy ocenić oraz nazwę projektu w którym brał
          udział. Taki mail zostanie wysłany do wszystkich adresatów których
          zaznaczymy.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox>
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Po wysyłce maila ukaże nam się wiadomość na górze strony informująca
          nas o tym, że udało się pomyślnie stworzyć zaproszenie oraz link,
          który otworzy nam panel w którym bedziemi mieli informacje o danym
          zaproszeniu.
        </Text>
        <Image src={invitationSuccess} width="70%" />
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Image src={rightPanel} width="70%" />
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Po wejściu w szczegóły zaproszenia zobaczymy panel boczny, w którym
          mamy podstawowe informacje na jego temat: kiedy zostało utworzone,
          kiedy otrzymaliśmy ostatnią odpowiedź, jakiej firmy i jakiego projektu
          dotyczy oraz listę wszystkich osób, do których zostało wysłane.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox alignItems="center">
        <Text
          fontSize="22px"
          color="black"
          textAlign="justify"
          lineHeight="30px"
        >
          Po kliknięciu w adresata, który oddał feedback wysunie się kolejny
          panel z jego szczegółami. Zobaczymy na nim odpowiedzi na pytania z
          formularza oceny, dane o oceniającym (firma, stanowisko) oraz datę
          otrzymania odpowiedzi i czas, jaki upłynął od jego wysłania.
        </Text>
        <Image src={leftPanel} width="70%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Image src={evaluationPage} width="70%" />
        <Text
          fontSize="20px"
          color="black"
          margin="22px"
          lineHeight="30px"
          textAlign="justify"
          lineHeight="30px"
        >
          Pracownik poproszony o wystawienie opinii po kliknięciu w przycisk
          'Wystaw opinię' w otrzymanym od nas mailu zobaczy w przeglądarce nowe
          okno z formularzem oceny pracownika. Strona jest w pełni responsywna,
          co pozwoli na wypełnienie formularza na dowolnym urządzeniu.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika - widok mobile
      </Heading>
      <FlexBox height="550px">
        <Image src={evaluationPageMobile1} height="100%" />
        <Image src={evaluationPageMobile2} height="100%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika - widok tablet
      </Heading>
      <FlexBox height="550px">
        <Image src={evaluationPageTablet1} height="100%" />
        <Image src={evaluationPageTablet2} height="100%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Strona podziękowań
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Text
          fontSize="22px"
          color="black"
          margin="20px"
          lineHeight="30px"
          textAlign="justify"
        >
          Po pomyślnym wysłaniu oceny osoba oceniająca zostaje przekierowana na
          stronę z podziękowaniami.
        </Text>
        <Image src={thankYouPage} width="70%" />
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
