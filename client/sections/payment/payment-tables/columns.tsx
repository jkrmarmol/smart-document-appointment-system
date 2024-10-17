'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Document, Payment } from '@/constants/data';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import moment from 'moment';
import { Badge } from '@/components/ui/badge';

export const columns: ColumnDef<Payment>[] = [
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
    accessorKey: 'isAvailable',
    header: 'Status',
    cell: ({ row }) => {
      if (row.original.isAvailable) {
        return <Badge className="bg-green-500 text-white">Available</Badge>;
      } else {
        return <Badge className="bg-red-500 text-white">Not Available</Badge>;
      }
    }
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
