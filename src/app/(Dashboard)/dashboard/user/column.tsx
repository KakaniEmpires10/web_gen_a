"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, FileEdit, Trash2 } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="p-0 h-4"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
          <ArrowUpDown className="ml-2 w-3" />
        </Button>
      );
    },
    cell: ({ row }) => {
      for (let countRow = 1; countRow < columns.length; countRow++) {
        const count = columns[countRow];
        return (
          <p></p>
        )
      }
    }
  },
  {
    accessorKey: "image",
    header: "Profile",
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.getValue("image")} />
          <AvatarFallback className="font-semibold text-black">NO</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "nama",
    header: "Nama",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "username",
    header: "Username"
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <Badge variant="outline">{row.getValue("role")}</Badge>;
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex justify-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="sm" className="rounded-full">
                  <FileEdit className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Edit
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="sm"
                  className="rounded-full"
                  variant="destructive"
                >
                  <Trash2 className="w-3" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                Delete
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    },
  },
];
