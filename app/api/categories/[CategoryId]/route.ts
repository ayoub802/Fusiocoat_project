import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
  productId?: string;
}

export async function DELETE(
  req: Request,
  { params }: { params: IParams }
    ) {

      try {
          
        
        // if (!params.productId) {
        //   return new NextResponse("Product id is required", { status: 400 });
        // }
        params.productId = "c5119e47-96fd-4845-b83a-fb5f0a75823e";
    
        // if (!productId || typeof productId !== 'string') {
        //   throw new Error('Invalid ID');
        // }
        const product= await prismadb.category.delete({
          where: {
            id: params.productId,
          }
        });

        // const product = await prismadb.product.delete({
        //   where: {
        //     id: params.id
        //   },
        // });
      
        return NextResponse.json(product);
      } catch (error) {
        console.error('Error deleting user:', error);
        return new NextResponse("Internal error", { status: 500 });
      }
    };
