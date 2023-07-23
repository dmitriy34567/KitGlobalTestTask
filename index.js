const Imap = require('node-imap');
require('dotenv').config();

//без використання гугл апі тестове завдання можна реалізувати наступним методом. За допомогою інструменту imap. 
//Але попередньо потрібно включити опцію Доступ до додатків і менш захищених додатків в гмейл налаштуваннях

const imapConfig = {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    tls: process.env.EMAIL_TLS === 'true',
  };

const imap = new Imap(imapConfig);

function openInbox(cb) {
  imap.openBox('INBOX', true, cb);
}

imap.once('ready', function() {
  openInbox(function(err, box) {
    if (err) throw err;
    const searchCriteria = ['UNSEEN'];
    imap.search(searchCriteria, function(err, results) {
      if (err) throw err;
      console.log(`У вас  ${results.length} не прочитаних листів.`);
      imap.end();
    });
  });
});

imap.once('error', function(err) {
  console.error(err);
});

imap.connect();
