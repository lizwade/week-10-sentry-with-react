import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built with React ⚛️ | 
        <a href="#" target="_blank" rel="noopener noreferrer">@liz</a> | 
        <a href="https://github.com/CodingOdysseyOrginal" target="_blank" rel="noopener noreferrer">@Christopher</a> | 
        <a href="#" target="_blank" rel="noopener noreferrer">@sami</a> | 
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
