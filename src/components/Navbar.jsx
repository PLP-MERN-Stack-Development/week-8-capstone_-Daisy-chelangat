import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">
        <Link to="/">SocialApp</Link>
      </h1>

      <ul className="flex gap-4">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/profile/123" className="hover:underline">Profile</Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">Login</Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">Register</Link>
        </li>
      </ul>
    </nav>
  );
}
