"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t text-foreground">
      <div className="container mx-auto py-6 px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Forge Vision. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
