import React from "react";

export interface ContextProps {
    a: number;
    b: string;
    changeA: (newA: number) => void;
}



export const ctx = React.createContext<ContextProps | undefined>(undefined);