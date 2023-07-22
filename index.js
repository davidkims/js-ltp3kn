const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', // 사용하려는 이메일 서비스 (여기서는 gmail)
    auth: {
      user: 'your-email@gmail.com', // 이메일 계정
      pass: 'your-password' // 이메일 계정의 비밀번호
    }
});

let mailOptions = {
    from: 'your-email@gmail.com', // 보내는 이메일 주소
    to: 'recipient-email@gmail.com', // 받는 이메일 주소
    subject: 'Testing email with Node.js', // 메일 제목
    text: 'Hello, this is a test email from Node.js!' // 메일 본문
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
