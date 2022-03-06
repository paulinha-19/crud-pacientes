import { useState, useEffect } from "react";

const getSaveValue = (key, initialValue) => {
    try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
    }
}

const useLocalStorage = (key, initialValue) => {
    let [value, setValue] = useState(() => {
        if (typeof window === "undefined") {
            return getSaveValue(key, initialValue);
        }
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, [value, key]);
    return [value, setValue];
}

export default useLocalStorage