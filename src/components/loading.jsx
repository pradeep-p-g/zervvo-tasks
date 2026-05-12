import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="w-12 h-12 animate-spin" />
    </div>
  );
}
