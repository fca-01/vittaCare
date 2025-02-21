"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"


export function SideBar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[80%] flex flex-col justify-center items-center bg-[#dae2cb] text-xl font-sans">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>

  )
}
