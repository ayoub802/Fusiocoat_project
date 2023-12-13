"use client"

import getProduct from '@/actions/getProduct';
import getSmilairProducts from '@/actions/getSimilairProduct';
import { Header } from '@/components/Header';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import { get } from 'http';
import { Facebook, Instagram, ShoppingCart, Youtube } from 'iconsax-react';
import { Expand } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Logo from "../../../../public/logo.png"
import '../../../App.css'
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import useCart from '@/hooks/use-cart';
import  ProductSimlair   from '@/components/ProductSimlair';
import Currency from '@/components/currency';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);

  
  if (!product) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden bg-[#fff]">
        <Header />
        <div className='mt-[88px] lg:mt-[28px]'>
            <section>
                <div className="container">
                <nav className="flex">
                    <ol role="list" className="flex items-center">
                        <li className="text-left">
                        <div className="-m-1">
                            <a href="/" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Home </a>
                        </div>
                        </li>

                        <li className="text-left">
                        <div className="flex items-center">
                            <span className="mx-2 text-gray-400">/</span>
                            <div className="-m-1">
                            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">{product[0].category.name} </a>
                            </div>
                        </div>
                        </li>

                    </ol>
            </nav>
                    <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={product[0].images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <div className='flex gap-3 items-center mb-2'>
                                <h3><Currency value={product[0].price}/></h3>
                                <h3>-</h3>
                                <h3><Currency value={product[0].priceBig}/></h3>
                            </div>
                        <Info data={product[0]} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductSimlair product={product}/>
                    </div>
                </div>
            </section>

            <section className="pb-6 bg-Mblack">
                <div className="container">
                        <div className="mb-10 gap-y-8 row">
                            <div className="col-md-3">
                                <Image width={100} height={100} quality={100} src={Logo} className='w-[150px] h-[35px] mb-2' alt="" />
                                <p className="text__16 text-[#D4D4D4] mb-4">Revêtements céramiques pour voitures, avions, bâteaux, vitrages</p>
                                <div className="flex items-center gap-3">
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                    <Facebook
                                        size="18"
                                        color="#FFF"
                                        variant="Bold"
                                        />
                                    </a>
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                    <Instagram
                                        size="18"
                                        color="#FFF"
                                        />
                                    </a>
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                        <Youtube
                                        size="18"
                                        color="#FFF"
                                        variant="Bold"
                                        />
                                    </a>

                                </div>
                            </div>
                            <div className="col-6 col-md-2 offset-md-1">
                                <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">NAVIGATION</h5>
                                <div className="flex flex-wrap gap-3 font-medium text__16">
                                    <a className="inline-block w-full text-Mwhite" href="/blog">ACCUEIL</a>
                                    <a className="inline-block w-full text-Mwhite" href="/about">EN SAVOIR PLUS</a>
                                    <a className="inline-block w-full text-Mwhite" href="/careers">AUTOMOBILE</a>
                                    <a className="inline-block w-full text-Mwhite" href="/contact">AÉRONAUTOQUE</a>
                                    <a className="inline-block w-full text-Mwhite" href="/contact">MARINE</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">MENU</h5>
                                <div className="flex flex-wrap gap-3 font-medium text__16">
                                    <a className="inline-block w-full text-Mwhite" href="/blog">En savoir plus</a>
                                    <a className="inline-block w-full text-Mwhite" href="/about">Boutique</a>
                                    <a className="inline-block w-full text-Mwhite" href="/careers">Devnire partenaire</a>
                                    <a className="inline-block w-full text-Mwhite" href="/contact">Contactez-vous</a>
                                    <a className="inline-block w-full text-Mwhite" href="/contact">Mentions légales</a>
                                    <a className="inline-block w-full text-Mwhite" href="/contact">Conditons générales de vente</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">INFORMATIONS</h5>
                                <div className="flex flex-wrap gap-3 font-medium text__16">
                                    <a className="inline-block w-full text-Mwhite" href="/privacy">42 Rue Georges Besse, 30000 Nîmes, France</a>
                                    <a className="inline-block w-full text-Mwhite" href="/terms">info@fusiocoat.com</a>
                                </div>
                            </div>
                            <div className="col-6 col-md-2">
                                <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">NOS PRODUITS</h5>
                                <div className="flex flex-wrap gap-3 font-medium text__16">
                                    <a className="inline-block w-full text-Mwhite" href="/privacy">FC-ONE ULTIMATE</a>
                                    <a className="inline-block w-full text-Mwhite" href="/terms">FC-ONE SMART</a>
                                    <a className="inline-block w-full text-Mwhite" href="/terms">FC-BOOST</a>
                                    <a className="inline-block w-full text-Mwhite" href="/terms">FC-GLASS</a>
                                    <a className="inline-block w-full text-Mwhite" href="/terms">FC-TRIM</a>
                                </div>
                            </div>
                            {/* <div className="col-md-4">
                                <h5 className="font-medium text-[#A3A3A3] text__16 mb-3">Link</h5>
                                <div className="flex items-center gap-3">
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                    <Facebook
                                        size="20"
                                        color="#FFF"
                                        variant="Bold"
                                        />
                                    </a>
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                    <Instagram
                                        size="20"
                                        color="#FFF"
                                        />
                                    </a>
                                    <a href="#!" className='border border-[#a03030] w-10 h-10 flex justify-center items-center rounded-full'>
                                        <Youtube
                                        size="20"
                                        color="#FFF"
                                        variant="Bold"
                                        />
                                    </a>

                                </div>
                            </div> */}
                        </div>
                        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between gap-y-2 items-center px-4 py-2 bg-[#262626] rounded-full">
                            <p className="text-center text__14 text-[#A3A3A3] sm:!order-1 order-2">© 2023 FUSIOCOAT® WHD AGENCY.</p>
                            <div className="flex items-center justify-center sm:justify-end gap-6 order-1 sm:!order-2">
                                <a className="inline-block text__16 text-Mwhite flex-shrink-0" href="/privacy">Privacy Policy</a>
                                <a className="inline-block text__16 text-Mwhite flex-shrink-0" href="/terms">Term &amp; Conditioner</a>
                            </div>
                        </div>
                </div>
            </section>

        </div>
    </div>  
  )
}

export default ProductPage;