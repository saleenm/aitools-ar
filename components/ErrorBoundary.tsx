'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('[ErrorBoundary]', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="min-h-[300px] flex items-center justify-center p-8">
          <div className="max-w-md w-full text-center rounded-2xl p-8"
            style={{ background: 'rgba(13,17,23,0.9)', border: '1px solid rgba(139,92,246,0.25)' }}>
            {/* Error icon */}
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)' }}>
              <svg width="28" height="28" fill="none" stroke="#a78bfa" strokeWidth="1.5" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </div>

            <h2 className="text-xl font-black text-white mb-2">Something went wrong</h2>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {this.state.error?.message || 'An unexpected error occurred. Please try again.'}
            </p>

            <button
              onClick={this.handleRetry}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', boxShadow: '0 4px 14px rgba(139,92,246,0.3)' }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 20px rgba(139,92,246,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 4px 14px rgba(139,92,246,0.3)')}>
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
