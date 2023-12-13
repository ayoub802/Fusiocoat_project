"use client"
import { redirect } from 'next/navigation';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect, useState } from 'react';
import HeroBanner from "../../public/Fusiocoat banner.svg"
import Image from 'next/image';
import { Header } from '@/components/Header';
    import { useTranslation } from 'next-i18next'
import Item1 from "../../public/how_work1.svg"
import Item2 from "../../public/how_work2.svg"
import Item3 from "../../public/how_work3.svg"
import Item4 from "../../public/how_work4.svg"
import Product from "../../public/FC Glass.png"
import Product1 from "../../public/FC Ultimate.png"
import Product2 from "../../public/FC Smart.png"
import Product3 from "../../public/FC Boost.png"
import { Button } from '@/components/Button';
import  ProductCard  from '@/components/ProductCard';
import getProducts from '@/actions/getProducts';
import Gellery1 from "../../public/zit pic.png"
import Gellery2 from "../../public/deco pic.webp"
import Gellery3 from "../../public/gel pic.png"
import Gellery4 from "../../public/deco pic (1).webp"
import Gellery5 from "../../public/Pic1.png"
import Gellery6 from "../../public/pic2.png"
import Gellery7 from "../../public/pic3.png"
import Gellery8 from "../../public/pic4.png"
import Carsction from "../../public/Fusio coat.png"
import Pattern from "../../public/patern.svg"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Instagram, Youtube } from 'iconsax-react';
import * as z from "zod"
import '../App.css'
import { Footer } from '@/components/Footer';
import Head from 'next/head';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Contact } from '@prisma/client';
import { ProductForm } from '@/components/ContactForm';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FAQ } from '@/components/FAQ';
export const metadata = {
    title: 'Fusiocoat – Permanent Protective Coatings',
    description: 'fusiocoat E-Commerce Dashboard',
  }


export default async function SetupPage ({
  children,
}: {
  children: React.ReactNode
}) {

    
    
    const [products, setProducts] = useState<any>([])
    const fetchCategroy = async () => {
        try{
            const response = await getProducts();
            setProducts(response)
        }
        catch(error){
            console.log(error);
            
        }
    }
    useEffect(() => {
        fetchCategroy()
    }, [])
    
    console.log("Products :",products);
    const { t } = useTranslation()

  return (
    <div className='w-full overflow-hidden bg-[#000]'>
        <Head>
        <title>Fusiocoat – Permanent Protective Coatings</title>
      </Head>
      <Header />
      <div className='mt-[88px] lg:mt-[98px]'>
        <section className='relative overflow-hidden min-h-[calc(100vh_-_88px)] lg:min-h-[calc(100vh_-_98px)] bg-[#010101] flex flex-wrap pb-0'>
          <Image width={500} height={500} quality={100} src={HeroBanner} className='absolute left-0 top-0 w-full h-full object-cover object-top' alt="" />
          <div className="relative z-[2] w-full container flex justify-start items-center">
            <h2>
            </h2>
              <div className="row">
                  <div className="col-md-8 col-8">
                      <p className="text__18 text-Mgreen mb-2">FUSIOCOAT</p>
                      <h1 className="font-semibold text__48 text-Mwhite mb-2">La solution ultime pour protéger votre voiture<br className="hidden xl:block" />et lui donner un nouveau look</h1>
                      <p className="text__18 text-[#A3A3A3] mb-2">With our car rental services, you can experience the ultimate 
                      <br className="hidden xl:block" /> convenience and freedom of exploring your destination at your 
                      <br className="hidden xl:block" /> own pace.
                      </p>
                  </div>
              </div>
          </div>
        </section>

        <section className='bg-white'>
        <div className="container">
            <div className="text-center mb-10">
                <p className="mb-2 text__16">{t('HOW IT WORKS')}</p>
                <h2 className="font-semibold text__48">Pourquoi choisir notre solution<br className="hidden sm:block" /> pour votre automobile
                </h2>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-1 text-center sideLine">
            <div className="relative px-4">
                <Image width={500} height={500} quality={100} src={Item1} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                    <h5 className="font-semibold text__20 mb-2 capitalize">{t("EASY APPLICATIONS")}</h5>
                    <p className="text__14 text-[#525252]">{t('A single coating for a maximum efficiency')}</p>
            </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item2} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
                <h5 className="font-semibold text__20 mb-2 capitalize">{t('SAFE TO USE')}</h5>
                <p className="text__14 text-[#525252]">{t("Non-toxic and eco-friendly products")}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item3} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('DURABILITY')}</h5>
            <p className="text__14 text-[#525252]">{t('Unsurpassed chemical and weather resistance')}</p>
        </div>
        <div className="relative px-4">
            <Image width={500} height={500} quality={100} src={Item4} className="mb-4 mx-auto w-14 h-14 object-cover" alt="" />
            <h5 className="font-semibold text__20 mb-2 capitalize">{t('AFTER SALE')}</h5>
            <p className="text__14 text-[#525252]">{t("Shipping within 24 h – Happy or refunded – Immediate support")}</p>
        </div>
        </div>
        </div>
        </section>

          <section className='bg-white'>
            <div className="container">
                <div className="text-center mb-14">
                    <p className="mb-2 text__16">{t('OUR VALUES')}</p>
                    <h2 className="font-bold text__48">{t('LA TECHNOLOGIE')} <br className="hidden sm:block" /> FUSIOCOAT®
                    </h2>
                </div>
              <div className="gap-y-10 row">
                    <div className="col-md-12">
                        <div className="text-center">
                              <h5 className="font-bold text__20 mb-2">{t('FUSIOCOAT® est le fruit de plus de 15 ans de recherches scientifiques dans la chimie des revêtements.')} </h5>
                              <p className="text__18 text-[#525252]">
                              {t('Les produits FUSIOCOAT® apportent une durabilité sans précédent vis-a-vis des effets climatiques et chimiques pour préserver les qualités esthétiques des surfaces, tout en étant non toxiques pour l’Homme et l’ environnement.')}
                              </p>
                              <div className='mt-4'>
                                <Button title={t("En savoir plus")}/>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>

         <section className='bg-white'>
           <div className="container">
            <div className="relative">
               <Image src={Carsction} width={1500} height={1500} quality={100} alt='' className='lg:w-[60rem] md:w-[40rem] md:h-[20rem] w-[30rem] h-[15rem] -rotate-90 md:rotate-0 mx-auto lg:h-[30rem]' />
               <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute top-[50%] left-[20%] w-5 h-5 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-GLASS – REVÊTEMENT HYDROPHOBE POUR VERRES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>33,00MAD – 49,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute top-[20%] left-[50%] w-5 h-5 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product1} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE ULTIMATE – PROTECTION PERMANENTE</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>94,00MAD – 144,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                <HoverCardTrigger asChild>
                    <div className='absolute top-[30%] left-[80%] w-5 h-5 pulse rounded-full bg-[#fff] cursor-pointer'>
                        
                    </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                    <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product2} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-ONE SMART – PROTECTION POUR PEINTURES 5 ANS</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>69,00MAD – 89,00MAD</p>
                            </div>
                        </div>
                </HoverCardContent>
                </HoverCard>

                <HoverCard>
                    <HoverCardTrigger asChild>
                        <div className='absolute top-[78%] left-[80%] w-5 h-5 pulse rounded-full bg-[#fff] cursor-pointer'>
                            
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                        <div className="flex justify-between items-center space-x-4">
                            <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <Image alt='' src={Product3} width={500} height={500} quality={100}/>
                            </div>
                            <div>
                                <h2 className='text-[13px] font-semibold text-[#fff]'>FC-TRIM – PROTECTION GARNITURES</h2>
                                <p className='text-[11px] font-[400] text-[#fff]'>39,00MAD – 59,00MAD</p>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
           </div>
         </section>

        <ProductCard />

        <section className='bg-black'>
        <div className="container">
        <div className="text-center mb-10">
            <h2 className="font-bold text__48 text-[#fff]">LES AVIS DE NOS UTILISATEURS
            </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery1} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery5} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery2} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery6} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery3} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery7} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
              </div>
          </div>
          <div className="grid gap-4">
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_1" src={Gellery4} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_2" src={Gellery8} alt=""/>
              </div>
              <div>
                  <Image width={500} height={500} quality={100} className="h-auto max-w-full rounded-lg gallery_3" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
              </div>
          </div>
        </div>


        </div>  
    </section>
    
    <FAQ />
    <section className="bg-Mgreen relative overflow-hidden">
        <Image width={100} height={100} quality={100} src={Pattern} className="absolute left-0 top-0 w-full h-full object-cover" alt="" />
        <div className="text-center relative z-2 container">
            <p className="text__18 mb-2">NEWSLETTER</p>
            <h2 className="font-bold text__48 mb-8">{t('POUR TOUTE QUESTION MERCI DE NOUS')}  <br />{t('CONTACTER VIA LE FORMULAIRE CI-DESSOUS')}</h2>
{/* 
            <div className="max-w-[450px] mx-auto">
                <div className="flex items-center gap-2 justify-center mb-3">
                <Select>
                <SelectTrigger className='w-full focus:' style={{ backgroundColor: "#000",borderColor: "#000"}}>
                    <SelectValue placeholder="Choisir*" className='bg-[#fff]'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                    <SelectItem value="apple">Question technique sur nos produits</SelectItem>
                    <SelectItem value="banana">Informations partenariats professionnels</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Demander à être rappelé</SelectItem>
                    <SelectItem value="pineapple">Autres demandes</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
                </div>
                <div className="mb-3">
                        <Input type="text" className='!border-[#000] placeholder:text-[#000]' placeholder={t("Nom* et Prénom")} />
                </div>
                <div className="flex items-center gap-2 justify-center mb-3">
                      <Input type="text" className='!border-[#000] placeholder:text-[#000]' placeholder={t("Société (si applicable)")} />
                </div>
                <div className="mb-3">
                        <Input type="email" className='!border-[#000] placeholder:text-[#000]' placeholder={t("Email*")} />
                </div>
                <div className="mb-3">
                        <Input type="text" className='!border-[#000] placeholder:text-[#000]' placeholder={t("Téléphone")} />
                </div>

                <div className="mb-3">
                   <Textarea  placeholder={t("Merci d'écriture votre message*")} className='bg-transparent placeholder:text-[#000] h-52 border border-[#000]'/>
                </div>
             </div> */}

             <ProductForm />
            {/* <Button title={t("envoyer")}/> */}
        </div>
    </section>

       <Footer />
      </div>
    </div>
  );
};

