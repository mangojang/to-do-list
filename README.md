# to-do-list

---

할 일을 관리하는 to-do-list 애플리케이션 입니다. 

React를 기반으로 하였으며,  상태 관리 라이브러리 종류에 따라 제작하였습니다.  각 종류에 따른 코드는 각 branch 별로 확인 가능 합니다.  

(기본 main branch 는 context API 사용 버전 입니다. )

백엔드는 [원티드 프리온 보딩 사전과제](https://github.com/walking-sunset/selection-task.git)의 도움을 받았습니다.

** 본 사이트는 상업적인 목적이 없습니다. 

![todo-main](https://github.com/mangojang/to-do-list/assets/42363123/8dc576d3-8762-458d-a1f5-ff5cd5085767)
## 배포 주소

---

> [https://to-do-list-mangojang.vercel.app/todo](https://to-do-list-mangojang.vercel.app/todo)
> 

## 시작 가이드

---

### Requirements

- Node v16 이상

### Installation

```bash
git clone https://github.com/mangojang/to-do-list.git
```

### Start

```bash
npm install
npm start
```

## 기술 스택

---

프론트 구현에 사용 한 기술은 다음 과 같습니다.

- 개발 환경 : Create React App
- react-router
- Axios
- Styled Components
- recoil

백엔드는 [링크](https://github.com/walking-sunset/selection-task) 참고 바랍니다.

## 주요 기능

---

주요 기능은 다음과 같습니다

- 로그인
    - JWT 토큰 인증 방식 기반의 로그인
    - 이메일, 비밀번호 유효성 검사 기능 적용 ( 이메일 : `@` 포함, 비밀번호: 8자 이상)
    
    ![todo-login](https://github.com/mangojang/to-do-list/assets/42363123/69988e76-68ed-4040-8b3a-aad8c9add318)
    
- 회원 가입
    
    ![todo-signup](https://github.com/mangojang/to-do-list/assets/42363123/353d16de-b99a-4690-a96b-500edfbe1e7a)
    
- To-do-list
    
    ![todo-todo](https://github.com/mangojang/to-do-list/assets/42363123/11857d9c-4fe9-45ab-9b7d-a9976db3c1eb)
    
    - 할일 등록
    - 할일 수정
    - 할일 삭제
    - 완료 여부 체크

## Contact

---

mangojang :  mangojang994@gmail.com

## License

---

MIT License