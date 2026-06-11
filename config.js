export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send(`window.GEMINI_API_KEY = "${process.env.GEMINI_API_KEY}";`);
}
