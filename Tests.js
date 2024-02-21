// # Tests for

//on home page
// function test_createCategorySelectionDropdownWidget() {
//   createCategorySelectionDropdownWidget(
//     SpreadsheetApp.openById(SS_ID)
//   )  
// }



// for CannedResponseList.gs
// function testGetDisplayRanges() {
//   console.log(
//     getDisplayRanges(180)
//   )
// }

// function testGetResponseListData() {
//   const sheet = SpreadsheetApp
//     .openById(SS_ID)
//     .getSheetByName('Students')
  
//   // console.log(sheet)
//   const result = getResponseListData(sheet, 90, 120);
//   console.log(result);
// }

function test_getCannedResponseListData() {
  const sheet = SpreadsheetApp
    .openById(SS_ID)
    .getSheetByName('Students')

  console.log(
    "PAGE 1", 
    getCannedResponseListData(sheet)
  );
}