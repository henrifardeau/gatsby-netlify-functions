// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(event),
  }
}
