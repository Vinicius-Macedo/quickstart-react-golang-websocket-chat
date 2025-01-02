import { DarkThemeSwitch } from "../components/DarkThemeSwitch";
import { useEffect, useState, useRef } from "react";

interface IndexProps {}
export function Index(props: IndexProps) {
  const [userData, setUserData] = useState({
    username: "",
    message: "",
    action: "username",
  });

  const [connectedUsers, setConnectedUsers] = useState<string[]>([]);
  const [messages, setMessages] = useState<{ username: string; message: string }[] | null>(null);

  const ws = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    ws.current = new WebSocket("ws://localhost:80/api/ws");

    ws.current.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.current.onclose = () => {
      console.log("Disconnected from WebSocket server");
      setTimeout(connectWebSocket, 5000); // Reconnect after 5 seconds
    };

    ws.current.onerror = (err: Event) => {
      console.error("Error:", err);
    };

    ws.current.onmessage = (response: MessageEvent) => {
      const data = JSON.parse(response.data);

      switch (data.action) {
        case "list_users":
          setConnectedUsers(data.connected_users);
          break;
        case "broadcast":
          const newMessage = { username: data.username, message: data.message };
          setMessages((prevMessages) => (prevMessages ? [...prevMessages, newMessage] : [newMessage]));
          break;
      }
    };
  };

  useEffect(() => {
    connectWebSocket();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (ws.current) {
        ws.current.send(JSON.stringify({ action: "left" }));
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newUserData = { ...userData, [name]: value };

    setUserData(newUserData);

    if (name === "username" && ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(newUserData));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const jsonData = {
      username: userData.username,
      message: userData.message,
      action: "broadcast",
    };

    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(jsonData));
    }
  };

  return (
    <>
      <div className="grid grid-cols-3 min-h-screen p-8 gap-16">
        <div className="flex flex-col gap-4">
          <p className="dark:text-white font-semibold">CHAT</p>
          <hr />
          {connectedUsers.length > 0 ? (
            connectedUsers.map((user, index) => (
              <p key={index} className="dark:text-white">
                - {user}
              </p>
            ))
          ) : (
            <p className="dark:text-white/50">Digite seu nome para ver quem está online</p>
          )}
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <p className="dark:text-white font-semibold">BATE PAPO</p>
          <hr />
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleInputsChange}
              className="p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={userData.message}
              onChange={handleInputsChange}
              className="p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded">
              Send
            </button>
          </form>
          {messages ? (
            messages.map((message, index) => (
              <div key={index} className="flex gap-4">
                <p className="dark:text-white">{message.username}:</p>
                <p className="dark:text-white">{message.message}</p>
                <hr />
              </div>
            ))
          ) : (
            <p className="dark:text-white/50">Sem mensagens</p>
          )}
        </div>
      </div>
      <DarkThemeSwitch />
    </>
  );
}
