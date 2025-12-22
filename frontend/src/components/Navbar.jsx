import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-base-content/10 sticky top-0 z-20 backdrop-blur [background:radial-gradient(120%_120%_at_50%_10%,#d7c3a3_20%,#8c6e54_70%,#3b2f2f_100%)  ]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
              SmartNotes
            </h1>
          </Link>

          <Link to="/create" className="btn btn-primary gap-2">
            <PlusIcon className="size-5" />
            <span>Create</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
