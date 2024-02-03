import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatComponent } from "./features/chat/ChatComponent";
import { LawyerDirectory } from "./features/LawyersList/LawyersDirectory";
import { Bot } from "./features/bot/Bot";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/lawyers" element={<LawyerDirectory />} />
          <Route path="/bot" element={<Bot />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
