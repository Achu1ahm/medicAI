import React, { useContext, useRef, useState } from "react";
import DOMPurify from "dompurify";
import authService from "../services/auth.service";
import apiService from "../services/api";
import { AppContext, AppContextType, AppProviderProps, Message } from "../types";

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const lastMsg = useRef<HTMLDivElement>(null);
    const [messageText, setMessageText] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([
        {
            from: "ai",
            text: "Hi there! I'm your AI assistant, I'm here to help you out with your questions. Ask me anything you want.",
        },
    ]);
    const [processing, setProcessing] = useState<boolean>(false);

    const handleSubmission = async (): Promise<void> => {
        if (!messageText.trim() || processing) return;

        const sanitizedMessageText = DOMPurify.sanitize(messageText);

        const userMessage: Message = {
            from: "human",
            text: sanitizedMessageText,
        };

        setMessages(prev => [...prev, userMessage]);
        setMessageText("");
        setProcessing(true);

        try {
            const response = await apiService.sendMessage(messageText);
            setMessages(prev => [...prev, response]);
        } catch (err) {
            const error = "Error Processing this message. Please try again later.";
            setMessages((prev) => [
                ...prev,
                {
                    from: "ai",
                    text: error,
                },
            ]);
        } finally {
            setProcessing(false);
            setTimeout(() =>
                lastMsg.current?.scrollIntoView({
                    behavior: "smooth",
                })
            );
        }
    };

    return (
        <AppContext.Provider
            value={{
                lastMsg,
                messageText,
                setMessageText,
                processing,
                setProcessing,
                messages,
                setMessages,
                handleSubmission,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

export const useChatContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useGlobalContext must be used within an AppProvider");
    }
    return context;
};