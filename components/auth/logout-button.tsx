'use client';

import { signOut } from "@/lib/actions/auth";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

/**
 * Logout button component - Client Component
 * Uses Server Actions for logout
 */
export default function LogoutButton() {
  return (
    <form action={signOut}>
      <Button 
        type="submit"
        variant="outline" 
        size="sm"
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </form>
  );
}
