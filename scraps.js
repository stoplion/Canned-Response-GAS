// function buildCard() {
//   let cardSection1SelectionInput1Action2 = CardService.newAction()
//     .setFunctionName("back")
//     .setParameters({})

//   let cardSection1ButtonList1Button3 = CardService.newTextButton()
//     .setText("Home")
//     .setOnClickAction(cardSection1SelectionInput1Action2)

//   let cardSectionButtonList1 = CardService.newButtonSet()
//     .addButton(cardSection1ButtonList1Button3)

//   let cardSection1 = CardService.newCardSection()
//     .setHeader("Response")
//     .addWidget(cardSectionButtonList1)


//   let cardSection2 = CardService.newCardSection() 
//     .addWidget(
//       CardService
//         .newTextInput()
//         .setTitle('Title')
//         .setFieldName('Add a description title..')
//         .setHint('Title')
//         .setMultiline(true)
//     )
//     .addWidget(
//       CardService
//         .newTextInput()
//         .setTitle('Category')
//         .setFieldName('Select a Category')
//         .setHint('Category')
//     )
//     .addWidget(
//       CardService
//         .newTextInput()
//         .setTitle('Sub-Category')
//         .setFieldName('Add a Sub-Category')
//         .setHint('Sub-Category')
//     )
//     .addWidget(
//       CardService
//         .newTextInput()
//         .setTitle('Response')
//         .setFieldName('Add a Response')
//         .setHint('Response')
//         .setMultiline(true)
//     )

//   let cardFooter1Button1Action = CardService.newAction()
//     .setFunctionName("TODO")
//     .setParameters({})

//   let cardFooter1Button1 = CardService.newTextButton()
//     .setText("Insert")
//     .setAltText("Next Responses")
//     .setOnClickAction(cardFooter1Button1Action)

//   let cardFooter1 = CardService.newFixedFooter()
//     .setPrimaryButton(cardFooter1Button1)

//   let card = CardService.newCardBuilder()
//     .addSection(cardSection1)
//     .addSection(cardSection2)
//     .setFixedFooter(cardFooter1)
//     .build()

//   return card
// }


// function buildCard() {
//   let cardSection1SelectionInput1Action2 = CardService.newAction()
//     .setFunctionName("back")
//     .setParameters({})

//   let cardSection1SelectionInput1Action1 = CardService.newAction()
//     .setFunctionName("TODO")
//     .setParameters({})

//   let cardSection1ButtonList1Button1 = CardService.newTextButton()
//     .setText("BACK")
//     .setTextButtonStyle(CardService.TextButtonStyle.TEXT)
//     .setAltText("go back")
//     .setOnClickAction(cardSection1SelectionInput1Action1)

//   let cardSection1ButtonList1Button2 = CardService.newImageButton()
//     .setIcon(CardService.Icon.DESCRIPTION)
//     .setAltText("add new response")
//     .setOnClickAction(cardSection1SelectionInput1Action2)

//   let cardSection1ButtonList1Button3 = CardService.newTextButton()
//     .setText("Home")
//     .setOnClickAction(cardSection1SelectionInput1Action2)

//   let cardSectionButtonList1 = CardService.newButtonSet()
//     .addButton(cardSection1ButtonList1Button1)
//     .addButton(cardSection1ButtonList1Button3)
//     .addButton(cardSection1ButtonList1Button2)
    

//   let cardSection1 = CardService.newCardSection()
//     .setHeader("Response")
//     .addWidget(cardSectionButtonList1)


//   let cardSection2 = CardService.newCardSection()
//     .addWidget(
//       CardService.newDecoratedText()
//         .setTopLabel("Title")
//         .setText("6. New Job 1")
//         .setWrapText(true)
//     )
//     .addWidget(
//       CardService.newDecoratedText()
//         .setTopLabel("Category")
//         .setText("Friends")
//         .setWrapText(true)
//     )
//     .addWidget(
//       CardService.newDecoratedText()
//         .setTopLabel("Sub-category")
//         .setText("Congrats")
//         .setWrapText(true)
//     )
//     .addWidget(
//       CardService.newDecoratedText()
//         .setTopLabel("Response")
//         .setText("Congrats on the new gig! I have no doubt you'll rock it and make your boss very happy they hired you.")
//         .setWrapText(true)
        
//     )

//   let cardFooter1Button1Action = CardService.newAction()
//     .setFunctionName("TODO")
//     .setParameters({})

//   let cardFooter1Button1 = CardService.newTextButton()
//     .setText("Next >>")
//     .setAltText("Next Responses")
//     .setOnClickAction(cardFooter1Button1Action)

//   let cardFooter1Button2 = CardService.newTextButton()
//     .setText("<< Prev")
//     .setAltText("Prev Responses")
//     .setOnClickAction(cardFooter1Button1Action)

//   let cardFooter1 = CardService.newFixedFooter()
//     .setPrimaryButton(cardFooter1Button1)
//     .setSecondaryButton(cardFooter1Button2)

//   let card = CardService.newCardBuilder()
//     .addSection(cardSection1)
//     .addSection(cardSection2)
//     .setFixedFooter(cardFooter1)
//     .build()

//   return card
// }

// list of responses
// function buildCard() {
//   let cardSection1SelectionInput1Action2 = CardService.newAction()
//     .setFunctionName("back")
//     .setParameters({})

//   let cardSection1SelectionInput1Action1 = CardService.newAction()
//     .setFunctionName("TODO")
//     .setParameters({})

//   let cardSection1ButtonList1Button1 = CardService.newTextButton()
//     .setText("BACK")
//     .setTextButtonStyle(CardService.TextButtonStyle.TEXT)
//     .setAltText("go back")
//     .setOnClickAction(cardSection1SelectionInput1Action1)

//   let cardSection1ButtonList1Button2 = CardService.newImageButton()
//     .setIcon(CardService.Icon.DESCRIPTION)
//     .setAltText("add new response")
//     .setOnClickAction(cardSection1SelectionInput1Action2)

//   let cardSectionButtonList1 = CardService.newButtonSet()
//     .addButton(cardSection1ButtonList1Button1)
//     .addButton(cardSection1ButtonList1Button2)

//   let cardSection1 = CardService.newCardSection()
//     .setHeader("Category [selected cat]")
//     .addWidget(cardSectionButtonList1)
//     .addWidget(
//       CardService.newTextParagraph().setText("<b>Select a Canned Response</b>")
//     )

//   let cardSection2 = CardService.newCardSection()
//     .addWidget(
//       CardService.newDecoratedText().setTopLabel("1. Birthday").setText("Fun 1")
//     )
//     .addWidget(
//       CardService.newDecoratedText().setTopLabel("2. Birthday").setText("Fun 2")
//     )
//     .addWidget(
//       CardService.newDecoratedText().setTopLabel("3. Birthday").setText("Fun 3")
//     )

//   let cardFooter1Button1Action = CardService.newAction()
//     .setFunctionName("TODO")
//     .setParameters({})

//   let cardFooter1Button1 = CardService.newTextButton()
//     .setText("Next >>")
//     .setAltText("Next Responses")
//     .setOnClickAction(cardFooter1Button1Action)

//   let cardFooter1Button2 = CardService.newTextButton()
//     .setText("<< Prev")
//     .setAltText("Prev Responses")
//     .setOnClickAction(cardFooter1Button1Action)

//   let cardFooter1 = CardService.newFixedFooter()
//     .setPrimaryButton(cardFooter1Button1)
//     .setSecondaryButton(cardFooter1Button2)

//   let card = CardService.newCardBuilder()
//     .addSection(cardSection1)
//     .addSection(cardSection2)
//     .setFixedFooter(cardFooter1)
//     .build()

//   return card
// }





// First Card
// function buildCard() {
//   let cardHeader1 = CardService.newCardHeader()
//       .setTitle('Canned Responses')
//       .setSubtitle('For Sheet, Docs, Slides & Gmail')
//       .setImageUrl(
//           'https://lh3.google.com/u/0/d/1vsXTVCVGT79Hp0Q4UGKxKrwQfGGkvY5W')
//       .setImageStyle(CardService.ImageStyle.CIRCLE);

//   let cardSection1SelectionInput1Action1 = CardService.newAction()
//       .setFunctionName('TODO')
//       .setParameters({});

//   let cardSection1SelectionInput1 = CardService.newSelectionInput()
//       .setFieldName('category')
//       .setTitle('Category')
//       .setType(CardService.SelectionInputType.DROPDOWN)
//       .addItem('Billing', 'billing', false)
//       .addItem('Support', 'support', false)
//       .addItem('Friend', 'friend', false)
//       .addItem('Students', 'students', false)
//       .addItem('Legal', 'legal', false)
//       .setOnChangeAction(cardSection1SelectionInput1Action1);

//   let cardSection1 = CardService.newCardSection()
//       .setHeader('Category')
//       .addWidget(cardSection1SelectionInput1);

//   let cardSection2DecoratedText1Button1Action1 = CardService.newAction()
//       .setFunctionName('TODO')
//       .setParameters({});

//   let cardSection2DecoratedText1Button1 = CardService.newImageButton()
//       .setIconUrl('https://lh3.google.com/u/0/d/1oEGavEhL3EvFRmvWXcdjXQeMhysev8Ij')
//       .setAltText('Send an email')
//       .setOnClickAction(cardSection2DecoratedText1Button1Action1);

//   let cardSection2DecoratedText1 = CardService.newDecoratedText()
//       // .setTopLabel('Top label')
//       .setText('Add new Canned Response')
//       .setButton(cardSection2DecoratedText1Button1);

//   let cardSection2 = CardService.newCardSection()
//       .setHeader('Top label')
//       .addWidget(cardSection2DecoratedText1);

//   let card = CardService.newCardBuilder()
//       .setHeader(cardHeader1)
//       .addSection(cardSection1)
//       .addSection(cardSection2)
//       .build();

//   return card;
// }
