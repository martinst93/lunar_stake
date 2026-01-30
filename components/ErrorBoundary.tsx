"use client";

import { ERROR_BOUNDARY } from "@/constants";
import { ICONS } from "@/constants/Icons";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown): void {
    console.error("UI Error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center">
          <div className="space-y-4">
            <div className="text-6xl">{ICONS.EXPLOSION}</div>
            <h2 className="text-xl font-orbitron text-lunar-gradient">
              {ERROR_BOUNDARY.SOMETHING_WENT_WRONG}
            </h2>
            <p className="text-white/60">
              {ERROR_BOUNDARY.PLEASE_REFRESH_OR_TRY_LATER}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
