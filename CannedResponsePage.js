// ####### CANNED RESPONSE PAGE #######
function onCannedResponsePage(e) {
  console.log(JSON.stringify(e, null, 2))

  const params = e.commonEventObject.parameters;

  const message = `You select item ${params.responseNum} in ${params.sheetName}`

  return notificationCallback(message);
}
