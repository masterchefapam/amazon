import Image from 'next/image';
import { useRouter } from "next/router";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
}from "@heroicons/react/outline";
import { signIn, signOut, useSession} from "next-auth/client";
import { selectItems} from '../slices/basketSlice';
import { useSelector } from 'react-redux';


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);


    return (
        <header>
            {/* Top Nav */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                       onClick={()=> router.push("/")}
                        src="https://links.papareact.com/f90" 
                        alt=""
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* Search Bar */}
                 <div className="hidden sm:flex items-center h-10 
                        cursor-pointer rounded-md flex-grow 
                        bg-yellow-400 hover:bg-yellow-500">
                     <input type="text"  className="p-2 h-full w-6 
                                        flex-grow rounded-l-md flex-shrink
                                        focus: outline-none"/>
                    <SearchIcon className="h-12 p-4 cursor-pointer "/>
                 </div>
                 {/* Right Side */}
                 <div className="text-white flex items-center text-xs 
                            space-x-6 mx-6 whitespace-nowrap ">
                        <div onClick={!session ? signIn : signOut} className="link">
                            <p>{ session ? `Hello ${session.user.name}`: 'Please SignIn'}</p>
                            <p className="font-extrabold md:text-sm">Account & List</p>
                        </div>
                        <div className="link" onClick={()=> router.push('/orders')}>
                            <p>Returns</p>
                            <p className="font-extrabold md:text-sm">& Orders</p>
                        </div>
                        <div onClick={()=> router.push("/checkout")} className="relative flex items-center link">
                            <span className="absolute top-0 right-0 bg-yellow-400 
                            rounded-full h-4 w-4 md:right-10 text-black text-center">{items.length}</span> 
                            <ShoppingCartIcon className="h-10 "/>
                            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">Basket</p>
                        </div>
                 </div>
                 
            </div>

            {/* Bottom Nav */}
            <div className="bg-amazon_blue-light space-x-3 p-2 pl-6 h-10 flex items-center text-white">
               <p className="link flex items-center">
               <MenuIcon className="h-6 mr-1 "/>
               All
              </p> 
              <p className="link">Prime Video</p>
              <p className="link">Amazon Business</p>
              <p className="link hidden">Today's Choice</p>
              <p className="link hidden lg:inline-flex">Electronics</p>
              <p className="link hidden lg:inline-flex">Food & Grocery</p>
              <p className="link hidden lg:inline-flex">Prime</p>
              <p className="link hidden lg:inline-flex">Buy Again</p>
              <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
              <p className="link hidden lg:inline-flex">Health & Personal Care</p>

              
            </div>

            
        </header>
    )
}

export default Header
