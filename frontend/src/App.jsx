import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="coffee" className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(120%_120%_at_50%_10%,#d7c3a3_20%,#8c6e54_70%,#3b2f2f_100%)  ]" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
