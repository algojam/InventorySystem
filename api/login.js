export default function handler(request, response) {
  // Kunin ang password na ipinasa mula sa body ng request
  const { password } = request.body;

  // Kunin ang iyong secret password mula sa Vercel Environment Variables
  const secretPassword = process.env.LOGIN_PASSWORD;

  // I-check kung tama ang password
  if (password === secretPassword) {
    // Kung tama, magpadala ng success=true
    response.status(200).json({ success: true, message: 'Login successful' });
  } else {
    // Kung mali, magpadala ng success=false
    response.status(401).json({ success: false, message: 'Invalid password' });
  }
}