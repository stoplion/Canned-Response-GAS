// ####### NEW CANNED RESPONSE #######

function onCreateNewResponse(e) {
   console.log(JSON.stringify(e, null, 2))

  const message = `Placeholder for create new response card`;

  return notificationCallback(message);
}
