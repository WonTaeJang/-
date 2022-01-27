# Nodejs

## Server란?
- 서버: 요청을 받으면 요청한 내용을 보내주는 프로그램, 요청을 처리할 수 있는 기계 

- 요청 4가지: 
    - 1) 읽기(GET)
    - 2) 쓰기(POST)
    - 3) 수정(PUT)
    - 4) 삭제(DELETE)

 ## NodeJS란? 
 - javascript runtime
 - 자바스크립트 실행창, 실행환경 = runtime
 - V8 자바스크립트 해석 엔진 사용
 - javascript 라는 언어
    - HTML 조작과 변경

## NodeJS 특징
- Non-blocking/IO
- SNS, 채팅서비스에 유리함(요청이 많음)
- 코드가 매우 짧고 쉬워서 빠른 개발 가능
- 만들게 웹서비스가 아니면 좋지 않다. 

## REST API
- REST: Representational State Transfer
- API: Application Programming Interface
- API란: 웹서버와 고객간의 요청방식
- REST 원칙
    - 1. Uniform interface
    - 2. Client-Server 역할 구분
    - 3. Stateless
    - 4. Cacheable
    - 5. Layerd System
    - 6. Code on Demand
- 

## 기타 기능
- nodemon: 저장을 하면 자동으로 서버를 재실행해준다.
- npm install -g nodemon
- nodemon server.js 
