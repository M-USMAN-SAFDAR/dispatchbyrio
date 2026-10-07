import { Component } from 'react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-dark flex items-center justify-center">
          <div className="container-custom text-center py-16 sm:py-20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary text-3xl">!</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto">
              We're sorry, an unexpected error occurred. Please try refreshing the page.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false })
                  window.location.reload()
                }}
                className="btn-primary px-8 py-3.5"
              >
                Refresh Page
              </button>
              <Link to="/" className="btn-outline px-8 py-3.5"
                onClick={() => this.setState({ hasError: false })}
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
