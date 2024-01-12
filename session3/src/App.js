import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState([ //글 제목
    '[12월 월간기록] 건대 분좋카 추천',
    '[React] state와 props 차이',
    '[코딩테스트] 백준 개똥벌레 풀이'
  ]);

  const [likes, setLikes] = useState([0, 0, 0]); //좋아요 상태 관리하는 state
  const [blank, setBlank] = useState(''); //빈칸 상태 관리하는 state

  return (
    <div className="App">
      <div className="black-nav">
        <h4>나경's Blog</h4>
      </div>

      {title.map((a, i) => (//title의 갯수만큼 반복, a는 title 배열의 현재 게시물 제목을 나타냄, i는 인덱스
        <div className="list" key={i}>
          <h4>
            {a} {/*현재 게시물 제목*/}
            <span onClick={() => {
              let copy = [...likes]; //likes 배열의 복사본 생성
              copy[i] = copy[i] + 1; //누를때마다 좋아요 수 증가
              setLikes(copy); //likes 상태 업데이트
            }}> 👍</span> {likes[i]} {/*현재 게시물의 좋아요 수*/}
          </h4>
          <p>2024-01-12</p>
          <hr/>
        </div>
      ))}

      <div className='publish'>
        <input 
          value={blank}
          onChange={(e) => setBlank(e.target.value)}
        />
        <button onClick={() => {
          let copy = [blank, ...title];//새로운 게시물의 제목(blank)를 현재 게시물 목록(title)의 앞부분에 추가, ...title은 기존의 제목들을 나타냄
          setTitle(copy); //title 상태 업데이트
          setLikes([0, ...likes]);// 새 게시물의 좋아요 수 0으로 초기화, 기존 좋아요는 그대로 유지
          setBlank('');//글쓰기 버튼을 누르면 blank를 빈 문자열로 설정
        }}>글쓰기</button>
      </div>
    </div>
  );
}

export default App;
