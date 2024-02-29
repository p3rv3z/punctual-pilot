import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import {
  ActionButtonsRow,
  Content,
  Editor,
  NotePreviewList,
  RootLayout,
  Sidebar,
} from "./components";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-2" />
      </Sidebar>
      <Content className="border-l bg-zinc-900/50 border-l-white/20">
        <Editor />
      </Content>
    </RootLayout>
  );
}

export default App;
