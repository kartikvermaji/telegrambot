import { sendMessage } from "@/utils/message";

export default async function handler(req, res) {
  if(req.method=="POST"){
    console.log("BODY--->",req.body)
    const chatid=req.body.message.chat.id;
    const text=req.body.message.text;
    if(text=="ping"){
      await sendMessage(chatid,"pong"); 
    }else{
      await sendMessage(chatid,text); 
    }
    
    res.status(200).send("OK")
  }else{
    res.setHeader("Allow",['POST']);
    res.status(500).send("Its not a POST request")
  }
}
