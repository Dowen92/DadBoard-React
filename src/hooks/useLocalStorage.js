import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
    
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : initialValue;
        } catch (e) {
            console.warn("useLocalStorage parse error:", e);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch(e) {
            console.warn("useLocalStorage set error:", e);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}