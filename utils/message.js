export async function sendMessage(chatId,text){
    const telegramApi=`https://api.telegram.org/bot${process.env.BOT_TOKEN}`
    const url=`${telegramApi}/sendMessage`
    try{
        // console.log(chatId," ---------- ",text);
        // console.log(process.env.BOT_TOKEN)
        const response=await fetch(url,{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                chat_id:chatId,
                text:text
            })
        })
        if(!response.ok){
            console.log("Failed to send a message--->",await response.text());
        }

    }catch(err){
        console.log("Error occurred while sending message--->",err);
    }
}
