"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { use, useState } from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Search, UserPlus2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FormUser from "./form/FormUser";
import { usePathname } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: String;
}

export function DataTableUser<TData, TValue>({
  columns,
  data,
  title,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  const subURL = title.toLowerCase();
  const currentURL = usePathname();

  return (
    <div>
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter Nama..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border-gray-500"
        />
        {currentURL === "/dashboard/user" ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button><UserPlus2 className="mr-2" /> Tambah User</Button>
            </DialogTrigger>
            <DialogContent className="border-l-4 border-l-primary">
              <DialogHeader>
                <DialogTitle>Tambah user</DialogTitle>
              </DialogHeader>
              <FormUser />
            </DialogContent>
          </Dialog>
        ) : (
          <Button asChild>
            <Link href={`/dashboard/${subURL}/add_${subURL}`}>
              <UserPlus2 className="mr-2" /> Tambah {title}
            </Link>
          </Button>
        )}
      </div>
      <div className="relative mt-16">
        <Alert className="absolute -top-10 left-0 right-0 w-[95%] m-auto z-[5]">
          <AlertTitle>Hai User!</AlertTitle>
          <AlertDescription>
            Disini nih buat lihat daftar {title}{" "}
            <span className="font-bold">Gen A</span> yang terdaftar, selamat
            melihat
          </AlertDescription>
        </Alert>

        <div className="overflow-y-auto">
          <Table className="bg-white/75 border-t-4 border-primary border-b-2 w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="h-[100px]" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="align-bottom" key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    className="whitespace-nowrap xl:whitespace-normal"
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="flex justify-end gap-5 mt-4">
        <Button
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage}
        >
          Previous Page
        </Button>
        <Button
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
}
