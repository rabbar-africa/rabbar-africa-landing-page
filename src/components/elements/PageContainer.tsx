import { cn } from "@/lib/utils";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-340 px-2 sm:px-6 h-full", className)}
    >
      {children}
    </div>
  );
}
