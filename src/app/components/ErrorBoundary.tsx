'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              抱歉，出现了一些问题
            </h2>
            <p className="text-gray-600 mb-6">
              我们正在努力修复，请稍后再试
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="btn-primary"
            >
              重试
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
} 