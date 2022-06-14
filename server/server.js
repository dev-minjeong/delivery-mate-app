// express 모듈 불러오기
const express = require('express');
const app = express();

// 포트번호 할당
const PORT = process.env.PORT || 5000;

// 서버 응답 확인
app.get('/', (request, respond) => {
  respond.send('Delivery Mate App');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server : http://localhost:${PORT}/`);
});