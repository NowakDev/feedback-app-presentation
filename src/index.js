import React from "react";
import ReactDOM from "react-dom";

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
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
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

const cppCodeBlock = indentNormalizer(`
#include <iostream>
#include <cstdlib>
#include <sstream>
#include <pthread.h>
struct thread_data_t
{
   int  thread_id;
   std::string message;
};
void *print_thread_message(void *thread_arg)
{
   struct thread_data_t *thread_data;
   thread_data = (struct thread_data_t *) thread_arg;
   cout << "Thread ID: " << thread_data->thread_id;
   cout << "Message: " << thread_data->message << endl;
   pthread_exit(NULL);
}
int main()
{
  pthread_t threads[NUM_THREADS];
  struct thread_data_t thread_data[NUM_THREADS];
  for (int i = 0; i < NUM_THREADS; i++)
  {
    auto curried_add = [](int x) -> function<int(int)> { return [=](int y) { return x + y; }; };
    auto answer = curried_add(i)(5);
    std::stringstream message;
    message << "The math result is " << answer << "!";
    thread_data.thread_id = i;
    thread_data.message = message.str();
    int err = pthread_create(&threads, NULL, print_thread_message, (void *)&thread_data[i]);
    if (err)
    {
      exit(-1)
    }
  }
  return 0;
}`);

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide backgroundColor="#f8f9fa">
      <FlexBox height="100%">
        <FlexBox size={600} borderRadius="50%" backgroundColor="#ff5a00">
          <Image src={logo} size={500} />
        </FlexBox>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="#ff5a00">
          Wstęp
        </Heading>
        <Text color="black" textAlign="center">
          Nasza aplikacja służy do zbierania i przetrzymywania feedbacków o
          pracownikach naszej firmy. Feedbacki są zbierane z firm zewnętrznych
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
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Image src={mainView} width="60%" />
        <Text
          fontSize="20px"
          color="black"
          margin="20px"
          lineHeight="30px"
          textAlign="justify"
        >
          Po udanym logowaniu jesteśmy przekierowywani na główny widok aplikacji
          - listę pracowników. Lista odzwierciedla hierarchię aktualnie
          zalogowanego użytkownika. W tym przypadku jest to hierachia jednego z
          manager'ów. Za pomocą pola do wyszukiwania możemy wyszukać pracownika
          i klijac na niego przejść do jego listy feedback'ów. Po lewej stronie
          widzimi także menu nawigacyjne do przechodzenia pomiędzy listami a po
          kliknięciu w pole 'Wyślij zaproszenie' otwiera się panel do jego
          stworzenia.
        </Text>
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Text
          fontSize="20px"
          color="black"
          margin="20px"
          lineHeight="30px"
          textAlign="justify"
        >
          Po kliknięciu w przycisk 'Wystaw opinię' w otrzymanym od nas mailu w
          przeglądarce otwiera się okno z formularzem do oceny pracownika.
          Strona jest w pełni responsywna, co pozwoli na wypełnienie formularza
          na dowolnym urządzeniu.
        </Text>
        <Image src={evaluationPage} width="60%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Ocena pracownika - widok mobilny
      </Heading>
      <FlexBox height="400px">
        <Image src={evaluationPageMobile1} height="100%" />
        <Image src={evaluationPageMobile2} height="100%" />
        <Image src={evaluationPageTablet1} height="100%" />
        <Image src={evaluationPageTablet2} height="100%" />
      </FlexBox>
    </Slide>
    <Slide backgroundColor="#f8f9fa">
      <Heading margin="0px" color="#ff5a00">
        Strona podziękowań
      </Heading>
      <FlexBox display="flex" width="100%" justifyContent="space-around">
        <Image src={thankYouPage} width="60%" />
        <Text
          fontSize="20px"
          color="black"
          margin="20px"
          lineHeight="30px"
          textAlign="justify"
        >
          Po pomyślnym wysłaniu oceny osoba oceniająca zostaje przekierowana na
          stronę z podziękowaniami.
        </Text>
      </FlexBox>
    </Slide>
    <Slide transitionEffect="slide">
      <Heading>Code Blocks</Heading>
      <Stepper
        defaultValue={[]}
        values={[
          [1, 1],
          [23, 25],
          [40, 42],
        ]}
      >
        {(value, step) => (
          <Box position="relative">
            <CodePane
              highlightStart={value[0]}
              highlightEnd={value[1]}
              fontSize={18}
              language="cpp"
              autoFillHeight
            >
              {cppCodeBlock}
            </CodePane>

            <Box
              position="absolute"
              bottom="0rem"
              left="0rem"
              right="0rem"
              bg="black"
            >
              {/* This notes container won't appear for step 0 */}

              {step === 1 && (
                <Text fontSize="1.5rem" margin="0rem">
                  This is a note!
                </Text>
              )}

              {step === 2 && (
                <Text fontSize="1.5rem" margin="0rem">
                  You can use the stepper state to render whatever you like as
                  you step through the code.
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Stepper>
      <Text>
        Code Blocks now auto size and scroll when there is an overflow of
        content! They also auto-wrap longer lines.
      </Text>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear elementNum={0}>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear elementNum={2}>
          <ListItem>
            Just identify the order with the prop{" "}
            <CodeSpan>elementNum</CodeSpan>!
          </ListItem>
        </Appear>
        <Appear elementNum={1}>
          <ListItem>Out of order</ListItem>
        </Appear>
      </OrderedList>
    </Slide>
    <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill("")
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide>
    <Slide>
      <Markdown>
        {`
          # Layout Tables in Markdown
          | Browser         | Supported | Versions |
          |-----------------|-----------|----------|
          | Chrome          | Yes       | Last 2   |
          | Firefox         | Yes       | Last 2   |
          | Opera           | Yes       | Last 2   |
          | Edge (EdgeHTML) | No        |          |
          | IE 11           | No        |          |
        `}
      </Markdown>
    </Slide>
    <Markdown containsSlides>
      {`
        ### Even write multiple slides in Markdown
        > Wonderfully formatted quotes
        1. Even create
        2. Lists in Markdown
        - Or Unordered Lists
        - Too!!
        Notes: These are notes
        ---
        ### This slide was also generated in Markdown!
        \`\`\`jsx
        const evenCooler = "is that you can do code in Markdown";
        // You can even specify the syntax type!
        \`\`\`
        ### A slide can have multiple code blocks too.
        \`\`\`c
        char[] someString = "Popular languages like C too!";
        \`\`\`
        Notes: These are more notes
      `}
    </Markdown>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById("root"));
