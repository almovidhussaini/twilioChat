const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


// const accountSid = 'ACa03021afe10b7915f64744b3f1af7d36';
// const authToken = '172b9d8f99f1a5cb7cbf98d76d884c75';



const accountSid = 'ACa02eb5b750a6980b0ef20d9e1cf85a3a';
const authToken = 'ad23931d5b94db38ab53b6cde5864cef';

const client = require('twilio')(accountSid,authToken);


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/makeCall', async (req,res) => {
    // console.log('route getting')
    const fromNumber = '+13464234566';
    // const toNumber = '(205) 850-5907';
    const toNumber = '8777584391'

    // const fromNumber = req.body.userPhoneNumber;
    // const toNumber = req.body.toNumber

    // console.log(fromNumber, toNumber,'from and to number')
    // console.log(req.body,'request body')

    // let url =`${app}/api/hubspot/twilio/twiml`
    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: toNumber,
        from: fromNumber,
    })
    .then(call => {
        console.log(call.sid); // Log the SID to the console
        res.status(200).send(`Call initiated: ${call.sid}`);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
});

// app.post('/incomingCall', req,res)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });