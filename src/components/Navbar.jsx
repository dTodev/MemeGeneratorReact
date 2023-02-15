import trollFace from "../assets/trollface-image.png";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <img src={trollFace} alt="" className="logo-image" />
      <h1 className="logo-text">Meme Generator</h1>
      <h3 className="nav-title">React Course - Project 3</h3>
    </nav>
  );
}
