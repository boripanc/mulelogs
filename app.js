const express = require('express');
const db = require("../modules/pg");
var format = require("date-format");
const app = express()
const port = 3000

app.post('/logs', async (req, res) => {
    console.log(req);
  var x = await db.none(
    "INSERT INTO public.analyticslogs "+
"(apiid, apiversionid, orgid, hostid, clientid, transactionid, receivedts, repliedts, clientip, verb, \"path\", statuscode, useragent, requestbytes, responsebytes, requestdisposition, policyviolation, apiname, apiversion, instancename, applicationname, eventid, flowname, muleappname, deploymenttype) "+
"VALUES(${apiId}, ${apiVersionId},${orgId},${hostId},${clientId},${transactionId},${receivedTs},${repliedTs},${clientIp},${verb},${path},${statusCode},${userAgent},${requestBytes},${responseBytes},${requestDisposition},${policyViolation},${apiName},${apiVersion},${instanceName},${applicationName},${eventId},${flowName},${muleAppName},${deploymentType});",req.body  );
  res.send({ status: "ok" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})