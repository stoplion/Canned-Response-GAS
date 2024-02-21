// ####### CANNED RESPONSE LIST #######
function onCannedReponseList(e) {
  // console.log(JSON.stringify(e, null, 2))

  const categoryId =
    e.commonEventObject.formInputs.category.stringInputs.value[0]

  console.log({ categoryId })

  const ss = SpreadsheetApp.openById(SS_ID)

  const sheet = ss.getSheets().find((s) => {
    // console.log('s.getSheetId()', typeof Number(s.getSheetId()), s.getSheetId())
    // console.log('categoryId[0]', typeof Number(categoryId[0]), categoryId)
    return Number(s.getSheetId()) === Number(categoryId)
  })

  const responseListData = getCannedResponseListData(sheet)

  const card = CardService.newCardBuilder()
    .addSection(responseListDetailsSection(responseListData.sheetName))
    .addSection(responseSelectionSection(responseListData))

  if (responseListData.rangeGroups.length > 1) {
    card.setFixedFooter(createResponseListFooter(responseListData))
  }

  return card.build()
}

/**
 *
 * @param {Object}  e  - event object
 * @returns {CardService.Card}
 */
function onCannedResponseListUpdate(e) {
  console.log(JSON.stringify(e, null, 2))
}
/**
 * An array of object for each response row in the Canned Response App Sheet
 * @typeDef {Object} listData
 * @property {String} sheetName - The name of the selected sheet.
 * @property {Array[Object]} responseList - Array object for each response row item.
 * @property {Number} responseList.num - Numbering of row from 1.
 * @property {String} responseList.sub - Name of sub-section
 * @property {String} responseList.title - Title of response item.
 * @property {Array[Object]} rangeGroups - Sets of view ranges for sections of available responses
 * @property {Object} rangeGroups[].start - Start row number
 * @property {Number} rangeGroups[].end - End rown number
 * @property {Number} rangeGroups[].isActive - Is current actively viewed range of responses.
 * @property {String|Undefined} direction - "next", "previous" for range group selection.
 */

/**
 * Gets the canned response list data from the selected sheet.
 * @param {SpreadsheetApp.Sheet} sheet - Selected category sheet tab ID.
 * @param {Array[Object]} [rangeGroups] - Array of objects [{start:Row Number, end:Row Number, isActive: boolean}]
 * @param {String|undefined} [direction] - The direction the user navigated in the list (next or previous). Undefined is list < RESPONSES_DISPLAYED
 * @returns {listData}
 */
function getCannedResponseListData(
  sheet,
  rangeGroups = false,
  direction = undefined
) {
  let sheetName, responseList

  if (rangeGroups) {
    //selected next or previous
    sheetName = sheet.getName()

    // get prev selected range group
    // and the following group that was selected
    const lastActiveGroupIdx = rangeGroups.findIndex((group) => {
      return group.isActive
    })

    const nextActiveGroupIdx =
      direction === 'next' ? lastActiveGroupIdx + 1 : lastActiveGroupIdx - 1

    responseList = getResponseListData(
      sheet,
      rangeGroups[lastActiveGroupIdx].start,
      rangeGroups[nextActiveGroupIdx].end
    )

    rangeGroups[lastActiveGroupIdx].isActive = false
    rangeGroups[nextActiveGroupIdx].isActive = true
  } else {
    // home page condition
    sheetName = sheet.getName()
    const lastDataRow = sheet.getLastRow()

    // returns array of object {start: number, end: number, isActive: boolean}[]
    rangeGroups = getDisplayRanges(lastDataRow)

    // home page shows first range group
    responseList = getResponseListData(
      sheet,
      rangeGroups[0].start,
      rangeGroups[0].end
    )
  }

  return {
    sheetName,
    responseList,
    rangeGroups,
    direction: undefined,
  }
}

/**
 * @param { Number } lastRow
 * @returns {Array[Object]} - array of range objects
 */
function getDisplayRanges(lastRow) {
  let rangeGroups = []

  if (lastRow === SHEET_TAB_ROW_START) {
    rangeGroups = [
      {
        start: 2,
        end: 2,
        isActive: true,
      },
    ]
  } else {
    for (let i = SHEET_TAB_ROW_START; i < lastRow; i += RESPONSES_DISPLAYED) {
      // RESPONSES_DISPLAYED = 30, SHEET_TAB_ROW_START = 2
      const indexPlusRange = i + RESPONSES_DISPLAYED - 1

      const range = {
        start: i,
        end: indexPlusRange > lastRow ? lastRow : indexPlusRange, //snap to last row if over
        isActive: false,
      }

      rangeGroups.push(range)
    }

    rangeGroups[0].isActive = true
  }

  return rangeGroups
}

/**
 * @param {SpreadsheetApp.Sheet} sheet
 * @param {Number} startRow — starting row number
 * @param {Number} endRow – end row number
 * @returns {Array[Object]} [{num, sub, title}]
 */
function getResponseListData(sheet, startRow, endRow) {
  const responseList = sheet
    .getRange(`A${startRow}:B${endRow}`)
    .getValues()
    .map((row, idx) => {
      return {
        num: String(idx + startRow - SHEET_TAB_ROW_START + 1),
        sub: row[0],
        title: row[1],
      }
    })

  return responseList
}

/**
 * create details
 * @param {String} sheetName
 * @returns {CardService.CardSection}
 */
function responseListDetailsSection(sheetName) {
  const buttonSetWidget = CardService.newButtonSet()
    .addButton(addHomeButtonWidget())
    .addButton(addAddButtonWidget(sheetName))

  const responseHeaderTextWidget = CardService.newTextParagraph().setText(
    '<b>Select a canned response</b>'
  )

  const section = CardService.newCardSection()
    .setHeader(`Category: <b>${sheetName}</b>`)
    .addWidget(buttonSetWidget)
    .addWidget(responseHeaderTextWidget)
  return section
}

/**
 * @param {listData} responseListData
 * @returns {CardService.CardSection}
 */
function responseSelectionSection(responseListData) {
  const responseList = responseListData.responseList
  const sheetName = responseListData.sheetName

  console.log('responseList', 'sheetName')
  console.log({ responseList }, { sheetName })

  const section = CardService.newCardSection()

  responseList.forEach((response) => {
    const responseDecoratedTextWidget = CardService.newDecoratedText()
      .setTopLabel(`${response.num}. ${response.sub}`)
      .setText(response.title)
      .setWrapText(true)
      .setOnClickAction(
        CardService.newAction()
          .setFunctionName('onCannedResponsePage')
          .setParameters({
            sheetName,
            responseNum: response.num,
          })
          .setLoadIndicator(CardService.LoadIndicator.SPINNER)
      )

    section.addWidget(responseDecoratedTextWidget)
  })

  return section
}

/**
 * Creates a response list footer with navigation buttons.
 * @param {listData} responseListData
 * @returns {CardService.CardSection}
 */
function createResponseListFooter(responseListData) {
  const footer = CardService.newFixedFooter()

  /**
   * @param {String} direction
   * @returns {CardService.Action}
   */
  function sendOnCannedResponseListUpdate(direction) {
    return CardService.newAction()
      .setFunctionName('onCannedResponseListUpdate')
      .setLoadIndicator(CardService.LoadIndicator.SPINNER)
      .setParameters({
        sheetName: responseListData.sheetName,
        direction,
        rangeGroups: JSON.stringify(responseListData.rangeGroups),
      })
  }

  //determine what button to include
  const rangeGroups = responseListData.rangeGroups
  const length = rangeGroups.length - 1
  const activePosition = rangeGroups.findIndex((group) => group.isActive)

  if (activePosition === 0) {
    //first page
    footer
      .setPrimaryButton(CardService.newTextButton('NEXT >>'))
      .setOnClickAction(sendOnCannedResponseListUpdate('next'))
  } else if (activePosition === length) {
    //last page
    footer
      .setPrimaryButton(CardService.newTextButton('<< PREVIOUS'))
      .setOnClickAction(sendOnCannedResponseListUpdate('previous'))
  } else {
    // in the middle
    footer
      .setPrimaryButton(CardService.newTextButton('NEXT >>'))
      .setSecondaryButton(CardService.newTextButton('<< PREVIOUS'))
      .setOnClickAction(sendOnCannedResponseListUpdate('previous'))
  }

  return footer
}
