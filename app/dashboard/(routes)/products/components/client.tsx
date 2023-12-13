"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { ProductColumn, columns } from "./columns";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import * as z from "zod"
import ImageUpload from "@/components/ui/image-upload";
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import prismadb from "@/lib/prismadb";
import ImageUploading from 'react-images-uploading';
import getCategories from "@/actions/getCategories";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Label } from "@/components/ui/label";

interface ProductsClientProps {
  data: ProductColumn[];

};


type ProductFormValues = z.infer<typeof formSchema>
const formSchema = z.object({
  // name: z.string().min(1),
  images: z.object({ url: z.string() }).array(),
  // price: z.coerce.number().min(1),
  // categoryId: z.string().min(1),
});

export const ProductsClient: React.FC<ProductsClientProps> =  ({
  data,
})  => {
  const params = useParams();
  const router = useRouter();
  const [isOpenModel, setIsOpenModel] = useState(false)
  const [categories, setCategories] = useState<any>([])
  const [images, setImages] = useState<File | null>(null);
  const maxNumber = 69;

  const { register, handleSubmit } = useForm()
  // const defaultValues =  {
  //   name: '',
  //   // images: [],
  //   // price: 0,
  //   // categoryId: '',
  // }

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      images: [],
    }
  });


  const [loading, setLoading] = useState(false);

  const fetchCategroy = async () => {
    try{
      const response = await getCategories();
      setCategories(response)
    }
    catch(error){
      console.log(error);
      
    }
  }
  useEffect(() => {
    fetchCategroy()
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setImages(file || null);
  };

  const onSubmit = async (data: any) => {
    // try {
    //   setLoading(true);
    //   const response = await axios.post('/api/product',values);
    //   // window.location.assign(`/${response.data.id}`);
    //   router.refresh();
    //   toast.success("Product Added");
    //   console.log(response.data);
      
    // } catch (error) {
    //   toast.error('Something went wrong');
    // } finally {
    //   setLoading(false);
    // }
    console.log(data);
  };
  // const categories = await prismadb.category.findMany({});
  const [name, setName] = useState('');
  const [image, setImage] = useState<null | File>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setImage(selectedFile || null);
  };

//   const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
//     for (let i = 0; i < event.target.files.length; i++) {
//          images.push(event.target.files[i]);  
//     }
// }
  return (
    <> 
      <div className="flex items-center justify-between">
        <Heading title={`Products (${data.length})`} description="Manage products for your store" />
        <Button  onClick={() => router.push(`/dashboard/products/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />

    </>
  );
};
