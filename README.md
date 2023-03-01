# project_Pocketmon

## 프로젝트 포켓몬

아주 간단한 웹 공부 사이트 제작
가져가기를 누르면 랜덤한 포켓몬 사진을 띄워 준다

nodejs-express 라이브러리를 활용해 프론트엔드를 구현했다. Express- Handlebar를 활용해 데이터바인딩을 처리하고, 백엔드에서 MySQL과 연동해 데이터를 처리했다. 배포는 Ngrok 터널링 기술을 통해 활용했다. 차후 구글클라우드 혹은 AWS를 활용해 자동배포를 목적으로 하고 있다.

###  🛠️ 사용 tool 
* [Node.js](https://nodejs.org/en/docs/)
    * [Express](https://expressjs.com/ko/)
    * [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
    * [MySQL](https://www.mysql.com/)
* [Ngrok](https://ngrok.com/docs)
* [AWS / elasticbeans](https://docs.aws.amazon.com/ec2/index.html?nc2=h_ql_doc_ec2)
* [AWS / RDS](https://ap-northeast-2.console.aws.amazon.com/rds/home?region=ap-northeast-2)

---
<img width="566" alt="image" src="https://user-images.githubusercontent.com/96401839/216385396-9af7c201-c3c7-4a62-901a-c86a0a470349.png">
가져가기를 누른다면?????

<img width="372" alt="image" src="https://user-images.githubusercontent.com/96401839/216385449-4ba03137-7ec9-4a0b-a6c1-6f6e097704dd.png">
짜잔~~ 당신의 포켓몬입니다~~~

---
### 🎯 개선사항 Have To
1. 다시 뽑기 버튼 추가
2. AWS 웹 서비스 띄우기
3. 포켓몬 사진 더 추가
4. 방문자수 카운트 추가
5. GET, POST 구조 변경하기
6. 방명록 추가하기 DB 구조로
7. 사진에 대응하는 이름 출력하기 

### 🌱 Vesrsion 
v.1.0.0 : 가장 기초적인 내용만 구현했다. 메인 file은 app.js

### 🐱 Git convention
1. 모든 배포는 main에서 진행한다. main branch는 건드리지 않도록
2. 기능을 추가하기 위한 작업은 develop에서 진행된다. 
3. 목표로 한 기능이 구현되고 정상적으로 작동한다면 main에 PR-Merge을 진행한다.

### ⚖️ Commit convention
    1. Feat : ' ' -> 기능추가 , 삭제 , 변경
    2. Fix : ' ' -> 버그 수정
    3. Refactor : ' ' -> 코드 구조 변경, 리팩토링
    4. Test : ' ' -> 테스트 기능 구현, 삭제예정
    5. Style : ' ' -> 코드 스타일, 구조 변경, 동작에 영향 X
    5. Docs : ' ' -> Readme 등 문서 변경
    6. Etc : ' ' -> 위에 해당하지 않는 여러 사유


---
#### 📚 Source & Reference
[포켓몬 사진들](https://pokemonkorea.co.kr/pokedex)

[한권으로 끝내는 Node & Express](http://www.yes24.com/Product/Goods/99941527)