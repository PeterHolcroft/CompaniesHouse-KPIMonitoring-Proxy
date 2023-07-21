const express = require('express');
const https = require('https');

const app = express();

app.get('/company/:companyId', (req, res) => {
  const { companyId } = req.params;

  // Encode the companyId to handle special characters in the URL
  const encodedCompanyId = encodeURIComponent(companyId);

  const options = {
    hostname: 'api.company-information.service.gov.uk',
    path: `/company/${encodedCompanyId}`, // Use the encoded value in the path
    method: 'GET',
    headers: req.headers,
    rejectUnauthorized: false
  };

  const secondEndpointRequest = https.request(options, (secondEndpointResponse) => {
    let responseData = '';

    secondEndpointResponse.on('data', (chunk) => {
      responseData += chunk;
    });

    secondEndpointResponse.on('end', () => {
      const parsedResponse = JSON.parse(responseData);
      res.status(200).json(parsedResponse);
    });
  });

  secondEndpointRequest.on('error', (error) => {
    console.error('Error calling the second endpoint:', error);
    res.status(200).json({});
  });

  secondEndpointRequest.end();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API proxy server listening on port ${port}`);
});
