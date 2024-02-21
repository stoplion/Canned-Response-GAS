function buildErrorCard(message) {
  const errorSection = CardService.newCardSection()
    .setHeader(`<font color="${ERROR_COLOR}">Error</font>`)
    .addWidget(
      CardService
        .newDecoratedText()
        .setStartIcon(
          CardService.newIconImage()
            .setIconUrl(ICON.ERROR)
            .setAltText('error icon')
        )
        .setText(`<font color="${ERROR_COLOR}">${message}</font>`)
        
    )

  const card = CardService.newCardBuilder()
    .addSection(
      errorSection
    )
    .build();

  return card;
}


// ### NOTIFICATIONS
function notificationCallback(message) {
  return CardService
    .newActionResponseBuilder() 
    .setNotification(
      CardService
        .newNotification()
        .setText(message)
    )
    .build()
}

// ### NAVIGATION BUTTONS
// adds an add button icon
// navs to new card res builder
function addAddButtonWidget(category = null) {
  const newReponseAction = CardService.newAction()
    .setFunctionName('onCreateNewResponse')
    .setLoadIndicator(CardService.LoadIndicator.SPINNER)

  // if category, ship it accross to  builder card

  if (category) {
    newReponseAction.setParameters({
      category
    })
  }

  const buttonWidget = CardService.newImageButton()
    .setIconUrl(ICON.ADD)
    .setAltText('Add a new Canned Response')
    .setOnClickAction(newReponseAction)

  return buttonWidget;
}

/**
 * @returns {CardService.TextButton}
 */
function addHomeButtonWidget() {
  const newResponseAction = CardService
    .newAction()
    .setFunctionName('onHomePageRebuild')
    .setLoadIndicator(CardService.LoadIndicator.SPINNER);

  const buttonWidget = CardService
    .newTextButton()
    .setText('HOME')
    .setOnClickAction(newResponseAction)

  return buttonWidget;
}

/**
 * @returns {CardService.Navigation}
 */
function onHomePageRebuild() {
  const ss = SpreadsheetApp.openById(SS_ID);

  return CardService
    .newNavigation()
    .updateCard(
      buildHomePageCard(ss)
    )

  // return CardService
  //   .newNavigation()
  //   .popToRoot();
}













