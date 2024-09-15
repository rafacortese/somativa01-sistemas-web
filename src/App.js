import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    const validEmail = "rafacortese@hotmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Acessar</button>
      </div>
      <div>
        <label>{message}</label>
      </div>
    </div>
  );
}

export default App;
