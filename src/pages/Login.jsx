function Login() {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <button className="apply-btn">Login</button>
    </div>
  );
}

export default Login;