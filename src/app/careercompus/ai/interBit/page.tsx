"use client";

import { Conversation } from "../InterviewPrep/components/conversation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Sidebar } from "../../../components/Sidebar";
import "./globals.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className="layout">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Fullscreen Spline Background */}
      <div className="background-container">
        <Spline scene="https://prod.spline.design/aRzLTmRb9aGpaUZc/scene.splinecode" />{" "}
      </div>

      {/* Content Overlay */}
      <main className="fixed top-0 right-0 p-4">
        <div className="w-full max-w-sm">
          <Card className="bg-black/90 shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">
                Start Your AI career helper
              </CardTitle>
              <CardDescription className="text-gray-600">
                Interact with our AI career helper below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Conversation />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
