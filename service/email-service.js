const fs = require("fs");
const MailService = require('./mail-service');
class EmailService {
    async sendMessageToEmails(filePath , html){
        fs.readFile(filePath, async (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            let splitedData = data.toString().split(",");
            // Вміст файлу міститься в змінній data
            for(let i = 0; i < splitedData.length; i++){
                 await MailService.sendMail(splitedData[i] , html)  
            }
            // Видалення тимчасового файлу
            fs.unlink(filePath, (err) => {
              if (err) {
                console.error(err);
              }
            });
          });
    }
}
module.exports = new EmailService();
