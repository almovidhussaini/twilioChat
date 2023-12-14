import React, {useState} from 'react'
import twilio from 'twilio';

const accountSid = 'ACa03021afe10b7915f64744b3f1af7d36';
const authToken = '172b9d8f99f1a5cb7cbf98d76d884c75';

const client = twilio(accountSid,authToken);


function Messages() {

    const [text, setText] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);

    const sendSMS = async () => {
        try {
            const message = await client.messages.create({
                body,
                from: '+12058505907',
                to:`${phoneNumber}`,
            })

            onsole.log('Message sent successfully:', message.sid);

            return message.sid;
        }
        catch(error){
            console.log('Error sending message:', error);
            throw error;
        }
    }
  return (
    <div>
      <h1>send Message</h1>
    </div>
  )
}

export default Messages
