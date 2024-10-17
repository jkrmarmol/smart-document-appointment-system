'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Document } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import moment from 'moment';
import { formatCurrency } from '@/lib/utils';

export const columns: ColumnDef<Document>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'price',
    header: 'price',
    cell: ({ row }) => formatCurrency(row.original.price)
  },
  {
    accessorKey: 'createdAt',
    header: 'CREATED AT',
    cell: ({ row }) => moment(row.original.createdAt).format('DD MMM YYYY')
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
