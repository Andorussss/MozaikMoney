import React, { useState, useEffect } from "react";
import ErrorIndicator from "../errors";

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const errorHandler = () => {
            setHasError(true);
        };

        window.addEventListener("error", errorHandler);

        return () => {
            window.removeEventListener("error", errorHandler);
        };
    }, []);

    if (hasError) {
        return <ErrorIndicator/>;
    }

    return children;
};

export default ErrorBoundary;