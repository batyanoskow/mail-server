const EmailService = require("../service/email-service");
const formidable = require('formidable');

class EmailController{
    async sendMails(req, res , next){
        try {
            const form = formidable({ multiples: true });
            form.parse(req, (err, fields, files) => {
              if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Помилка на сервері');
                return;
              }
        
              // Отримуємо шлях до тимчасового файлу
              const filePath = files.file.filepath;
              EmailService.sendMessageToEmails(filePath);
              
              // Зчитуємо вміст файлу з тимчасового файлу
              
            });
            res.send("УСПІШНО")
           }
           catch(e){
               console.log(e)
           }
    }
}

module.exports = new EmailController();