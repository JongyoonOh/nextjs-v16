// src/app/tanstack/page.tsx
'use client';
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table';

type User = { name: string; age: number; role: string; };
const data: User[] = [
  { name: 'John', age: 30, role: 'Developer' },
  { name: 'Jane', age: 25, role: 'Designer' },
];

const columnHelper = createColumnHelper<User>();
const columns = [
  columnHelper.accessor('name', { header: '이름' }),
  columnHelper.accessor('age', { header: '나이' }),
  columnHelper.accessor('role', { header: '직무' }),
];

export default function TanstackPage() {
  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">TanStack Table v8</h1>
      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="border border-gray-300 p-2 bg-gray-100">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border border-gray-300 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}