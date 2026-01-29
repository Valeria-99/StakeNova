import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { Logo } from '../common/Logo';

export const Header = () => {
  const { isLoggedIn, login } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Logo />

      <nav className="hidden md:flex gap-6">
        <a href="#">Product</a>
        <a href="#">Docs</a>
        <a href="#">Community</a>
      </nav>

      <div className="relative">
        {!isLoggedIn ? (
          <button onClick={login} className="btn-primary">
            Log In
          </button>
        ) : (
          <>
            <button onClick={() => setOpen(!open)}>
              Profile
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded bg-black">
                <div className="px-4 py-2 opacity-50">Dashboard</div>
                <div className="px-4 py-2 opacity-50">Settings</div>
                <div className="px-4 py-2 opacity-50">Logout</div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};
