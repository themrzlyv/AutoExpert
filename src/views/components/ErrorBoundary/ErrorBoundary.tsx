import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AlertUi from '@components/Alert';
import { Typography } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Row className="align-items-center" style={{ height: '100vh' }}>
            <Col xs={12}>
              <AlertUi variant="error" title="Oops Error" className="w-100 mx-auto">
                <Typography variant="subtitle1">
                  Something went wrong...Please refresh the page!
                </Typography>
              </AlertUi>
            </Col>
          </Row>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
