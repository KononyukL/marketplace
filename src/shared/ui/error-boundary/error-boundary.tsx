import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <FallbackErrorComponent
          error={error}
          onReset={this.resetErrorBoundary}
        />
      );
    }

    return children;
  }
}

interface FallbackProps {
  error: Error | null;
  onReset: () => void;
}

const FallbackErrorComponent = ({ error, onReset }: FallbackProps) => (
  <div style={{ padding: "20px", textAlign: "center" }}>
    <h1>Oops! Something went wrong.</h1>
    <p>
      {error?.message ||
        "An unexpected error has occurred. Our team has been notified."}
    </p>
    <button onClick={onReset} style={{ marginTop: "20px" }}>
      Try Again
    </button>
  </div>
);
