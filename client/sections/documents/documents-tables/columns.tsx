'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Document } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import moment from 'moment';

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
  // {
  //   accessorKey: 'id',
  //   header: 'ID'
  // },
  {
    accessorKey: 'name',
    header: 'NAME'
  },
  {
    accessorKey: 'price',
    header: 'price'
  },
  {
    accessorKey: 'dayBeforeRelease',
    header: 'DAYS BEFORE RELEASE'
  },
  {
    accessorKey: 'createdAt',
    header: 'CREATED AT',
    cell: ({ row }) => moment(row.original.createdAt).format('DD MMM YYYY')
  },
  {
    accessorKey: 'updatedAt',
    header: 'UPDATED AT',
    cell: ({ row }) => moment(row.original.createdAt).format('DD MMM YYYY')
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
