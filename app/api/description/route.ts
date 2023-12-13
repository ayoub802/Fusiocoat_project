import { NextResponse } from 'next/server';

import prismadb from '@/lib/prismadb';
import { orderBy } from 'firebase/firestore';

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();

    const {  content, productId, } = body;



    if (!content) {
      return new NextResponse("content is required", { status: 400 });
    }

    const store = await prismadb.productDescription.create({
      data: {
        content,
        productId,
      }
    });
  
    return NextResponse.json(store);
  } catch (error) {
    console.log('[STORES_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

// export async function DELETE(
//   { params }: { params: { productId: string } }
//   ) {
//     try {
//       if (!params.productId) {
//         return new NextResponse("Store id is required", { status: 400 });
//       }
  
//       const store = await prismadb.product.delete({
//         where: {
//           id: params.productId,
//         }
//       });
      
    
//       return NextResponse.json(store);
//     } catch (error) {
//       console.error('Error deleting user:', error);
//       return new NextResponse("Internal error", { status: 500 });
//     }
//   };

export async function GET(
  req: Request,
) {
  try {


    const product = await prismadb.product.findMany({
      include: {
        images: true,
        category: true,
      }
    });
  
    return NextResponse.json(product);
  } catch (error) {
    console.log('[CATEGORIES_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};