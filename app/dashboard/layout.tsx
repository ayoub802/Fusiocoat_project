"use client"

import Navbar from "@/components/navbar";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import firebase from 'firebase/app';
import { useRouter } from "next/router";

export default async function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

   

    return (
      <>  
          <Navbar />
          {children}
      </>
      );
  }