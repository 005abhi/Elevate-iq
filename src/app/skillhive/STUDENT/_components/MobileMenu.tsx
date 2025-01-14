"use client";

import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Bell,
  Home,
  MessageCircle,
  Search,
  User,
  Users,
  Video,
  Menu,
  X,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-75">
          <div className="flex flex-col h-full justify-center items-center space-y-8">
            <Button
              variant="ghost"
              size="lg"
              className="text-white w-full max-w-xs"
            >
              <Home className="mr-2 h-5 w-5" />
              Home
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white w-full max-w-xs"
            >
              <Video className="mr-2 h-5 w-5" />
              Videos
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white w-full max-w-xs"
            >
              <Users className="mr-2 h-5 w-5" />
              Friends
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white w-full max-w-xs"
            >
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white w-full max-w-xs"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Messages
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
