import React, { useEffect, useRef, useState } from "react";
import S from "../styles/Terminal.module.scss";
import { useNavigate } from "react-router-dom";
import { addCommandLine } from "../utils/terminal";

const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState("");
  const lastestCommand = useRef<string>("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const currentInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    let delay: number = 0;
    onLoadCommands.forEach((command, index) => {
      setTimeout(() => {
        addCommandLine(terminalRef, command.command);
      }, delay);
      command.delay && (delay += command.delay);
    });
    return () => {
      terminalRef.current && (terminalRef.current.innerHTML = "");
    };
  }, []);

  useEffect(() => {
    lastestCommand.current = currentCommand;
    return () => {
      lastestCommand.current = "";
    };
  }, [currentCommand]);

  const createInput = (prompt?: string): JSX.Element => {
    return (
      <div>
        {prompt != null ? `${prompt} ` : "$ "}
        <input
          type="text"
          ref={currentInput}
          onChange={(event) => {
            setCurrentCommand(event.target.value);
          }}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>
    );
  };

  const handleCommand = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (["y", "yes"].includes(lastestCommand.current.toLowerCase())) {
        console.log(lastestCommand.current);
        return navigate("/welcome");
      } else if (["n", "no"].includes(lastestCommand.current.toLowerCase())) {
        addCommandLine(terminalRef, createInput());
      } else {
        console.log(currentInput.current);
        if (currentInput.current) {
          currentInput.current.setAttribute("disabled", "disabled");
          addCommandLine(
            terminalRef,
            <>{lastestCommand.current}: command not found</>
          );
          addCommandLine(terminalRef, createInput());
        }
      }
    }
  };

  interface onLoadCommandsProps {
    command: JSX.Element;
    delay?: number;
  }
  const onLoadCommands: onLoadCommandsProps[] = [
    { command: <>* DNS request received...</>, delay: 500 },
    { command: <>* Fetching IP address...</>, delay: 500 },
    { command: <>* Exchanging packets...</>, delay: 1000 },
    { command: <>* Establishing secure connection...</>, delay: 1000 },
    { command: <>* Sending HTTP request...</>, delay: 500 },
    { command: <>* Waiting for server response...</>, delay: 500 },
    { command: <>* Rendering content...</>, delay: 500 },
    {
      command: createInput("Website ready! Would you like to enter? [Y/N]:"),
      delay: 0,
    },
  ];

  return <div ref={terminalRef} className={S.content}></div>;
};

export default Terminal;
