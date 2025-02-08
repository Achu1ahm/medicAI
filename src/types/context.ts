import {ReactNode, RefObject, createContext } from "react";

export interface Message {
    from: "ai" | "human";
    text: string;
  }
  
  
export interface AppContextType {
    lastMsg: RefObject<HTMLDivElement>;
    messageText: string;
    setMessageText: (text: string) => void;
    processing: boolean;
    setProcessing: (processing: boolean) => void;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    handleSubmission: () => Promise<void>;

  }
  
export interface AppProviderProps {
    children: ReactNode;
  }
  
  // Create the context with an initial undefined value
export const AppContext = createContext<AppContextType | undefined>(undefined);

