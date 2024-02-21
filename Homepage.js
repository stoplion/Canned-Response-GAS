// ### Home page
function onHomepage(e) {
  console.log(JSON.stringify(e, null, 2))

  let build;
  let ss;

  // validate user / access to canned responses app ss

  try {
    ss = SpreadsheetApp.openById(SS_ID);
  } catch (e) {
    const message = `
      You don't have access to the 
      <a href="https://docs.google.com/spreadsheets/d/${SS_ID}">
        Canned Response App Sheet
      </a>
      Please contact sheet owner. 
    `;

    build = buildErrorCard(message);
    return build;
  }

  build = buildHomePageCard(ss);

  return build;
}


function buildHomePageCard(ss) {
  const header = CardService.newCardHeader()
    .setImageUrl(ICON.LOGO)
    .setImageAltText('Canned Response Logo')
    .setTitle("Canned Responses")
    .setSubtitle("For Sheets, Docs, Slides & Gmail")


  const categorySelectionSection = CardService.newCardSection()
    .setHeader("Category")
    .addWidget(
      createCategorySelectionDropdownWidget(ss)
    );

  const addNewResponseSection = CardService.newCardSection()
    .addWidget(
      createNewResponseDecoratedTextWidget()
    )

  const card = CardService.newCardBuilder()
    .setHeader(header)
    .addSection(categorySelectionSection)
    .addSection(addNewResponseSection)
    .build()

  return card;
}

function createCategorySelectionDropdownWidget(ss) {

  const onSelectAction = CardService.newAction()
    .setFunctionName("onCannedReponseList")
    .setLoadIndicator(CardService.LoadIndicator.SPINNER)

  const categorySelectionWidget = CardService.newSelectionInput()
    .setTitle('Category')
    .setFieldName("category")
    .setType(CardService.SelectionInputType.DROPDOWN)
    .setOnChangeAction(onSelectAction)
    .addItem("Select a category..", 'none', true)

  ss.getSheets().forEach(sheet => {
    const sheetName = sheet.getName();
    //each sheet tab id
    const sheetId = String(sheet.getSheetId());

    if (!SHEET_EXCLUDE.includes(sheetName)) {
      console.log(sheetName, sheetId);
      
      categorySelectionWidget.addItem(
        sheetName,
        sheetId, 
        false
      )
    }
  })

  return categorySelectionWidget;
}

function createNewResponseDecoratedTextWidget() {
  const addButton = addAddButtonWidget()
  
  const responseDecoratedTextWidget = CardService
    .newDecoratedText()
    .setText("Add a new Canned Response")
    .setWrapText(true)
    .setButton(
      addButton
    )
  return responseDecoratedTextWidget;
}



