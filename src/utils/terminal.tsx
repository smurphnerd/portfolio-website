import { createRoot } from "react-dom/client";

export const addCommandLine = (
  terminalRef: React.RefObject<HTMLDivElement>,
  content: JSX.Element
): void => {
  const commandLine = document.createElement("div");
  createRoot(commandLine).render(content);
  terminalRef.current && terminalRef.current.appendChild(commandLine);
};

// interface CommandsProps {
//   command: string;
//   return: JSX.Element;
// }

// export const Commands: CommandsProps[] = [
//   { command: "ls", return: <>website.html&nbsp;&nbsp;secret.txt </> },
// ];

interface onLoadCommandsProps {
  command: JSX.Element;
  delay?: number;
}
