"use client";
import { Button } from "@/components/nurui/future-button";
import { ShoppingCart } from "lucide-react";

export default function FutureButtonDemo() {
  return (
    <div className="flex justify-center py-20">
      <Button variant="destructive">
        <ShoppingCart className="w-4 h-4 mr-2" />
        Purchase Item
      </Button>
    </div>
  );
}
