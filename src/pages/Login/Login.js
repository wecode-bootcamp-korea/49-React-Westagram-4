import React from "react";
import "./Login.scss";
import {Link} from "react-router-dom";

const Login = () => {


  return (
    <div className="login">
      <header>
        <img className="mainLogo" src={process.env.PUBLIC_URL + '/Logo.png'} alt="위코드의 로고" />
        <img className="textLogo" src={process.env.PUBLIC_URL + '/logo_wecode.png'} alt="위코드의 한글 로고" />
      </header>
      <section className="textBlock">
        <input type="email" id="email" placeholder="이메일"/>
        <input type="password" id="password" placeholder="비밀번호"/>
        <input type="button" id="btn" value="로그인"/>
        <ul>
          <li><Link to='/main'>회원 가입</Link></li>
          <li>비밀번호 찾기</li>
        </ul>
      </section>
    </div>
  );
};

export default Login;
