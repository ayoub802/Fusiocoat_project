"use client"

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string;
  phone: string;
  createdAt: string;
  nom: string,
  societe: string,
  email: string,
  message: string,
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "message",
    header: "Message",
  },
  {
    accessorKey: "societe",
    header: "Societe",
  },
];