function Signup() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Full Name" className="auth-input" />
      <input type="email" placeholder="Email" className="auth-input" />
      <input type="password" placeholder="Password" className="auth-input" />
      <button className="apply-btn">Create Account</button>
    </div>
  );
}

export default Signup;