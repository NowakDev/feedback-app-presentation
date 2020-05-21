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
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
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
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={contactList} width="70%" />
        <Text
          fontSize="32px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
        >
          Jest to komponent, który służący do przechowywania naszych kontaktów
          do których będziemy chcieli wysyłać zaproszenia do wystawiania opinii
          o danym pracowniku
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={contactForm} height="60%" />
        <Text
          fontSize="30px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
        >
          W prawym górnym rogu znajduje się przycisk do otwarcia formularza,
          który umożliwia nam dodanie kontaktu do naszej listy.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista kontaktów
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={contactFormSuccess} width="80%" />
        <Text
          fontSize="26px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
        >
          Po poprawnym dodaniu kontaktu wyświetli nam się komunikat na górze
          strony, informujący nas o sukcesie.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={employeeFeedbacks} width="80%" />
        <Text
          fontSize="20px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
        >
          Po wybraniu pracownika który nas interesuje, przechodzimy do widoku
          jego feedbacków. Na tym widoku mamy wgląd do wszystkich feedbacków
          które dany pracownik otrzymał do tej pory. Możemy też stworzyć nowe
          zaproszenie do wystawienia oceny
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={invitationForm} height="70%" />
        <Text
          fontSize="26px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
        >
          W formularzu wpisujemy potrzebne informacje oraz wybieramy adresatów
          do któych chcemy wysłać zaproszenie na temat danego pracownika. W
          liście adresatów możemy wybrać osobę z naszej listy kontaktów lub z
          listy pracowników. Jeżeli osoba do której chcemy wysłać prośbę o
          wystawienie feedbacku nie ma na żadnej liście, możemy ją bezpośrednio
          dodać z tego formularza po naciśnięciu przycisku dodaj kontakt.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="start">
        <Image src={emailPreview} height="55%" />
        <Text
          fontSize="26px"
          color="black"
          textAlign="left"
          margin="0"
          padding="0"
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
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox
        height="100%"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Image src={invitationSuccess} width="100%" marginTop="60px" />
        <Text
          fontSize="26px"
          color="black"
          textAlign="left"
          margin="0px"
          padding="0px"
          marginTop="60px"
        >
          Po wysyłce maila ukaże nam się wiadomość na górze strony informująca
          nas o tym, że udało się pomyślnie stworzyć zaproszenie oraz link,
          który otworzy nam panel w którym bedziemi mieli informacje o danym
          zaproszeniu.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="fade" backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Lista feedbacków
      </Heading>
      <FlexBox height="100%" flexDirection="row" alignItems="flex-start">
        <Image src={rightPanel} width="70%" />
        <Text
          fontSize="26px"
          color="black"
          textAlign="left"
          marginTop="0px"
        ></Text>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
