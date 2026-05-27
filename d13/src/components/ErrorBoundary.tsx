import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode; sectionName: string; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error caught in ${this.props.sectionName}:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-box">
          <h4>Section Error</h4>
          <p>The system failed to load this isolated component layout securely.</p>
        </div>
      );
    }
    return this.props.children;
  }
}