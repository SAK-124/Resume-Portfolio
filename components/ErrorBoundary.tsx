import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 font-mono">
                    <h1 className="text-4xl text-red-500 mb-4">System Malfunction</h1>
                    <p className="text-xl mb-8 text-zinc-400">An error occurred while loading the interface.</p>

                    <div className="bg-zinc-900 p-6 rounded-lg border border-red-500/30 max-w-3xl w-full overflow-auto">
                        <p className="text-red-400 font-bold mb-2">{this.state.error?.toString()}</p>
                        <pre className="text-xs text-zinc-500 whitespace-pre-wrap">
                            {this.state.errorInfo?.componentStack}
                        </pre>
                    </div>

                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-3 bg-white text-black font-bold rounded hover:bg-zinc-200 transition-colors"
                    >
                        Reboot System
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
