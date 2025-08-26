import Link from "next/link";
import { UserCircleIcon } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import MaxWidthWrapper from "./MaxWidthWrapper";

function NavBar() {
    return (
        <MaxWidthWrapper>
            <nav className="bg-white py-3 md:py-6">
            <div className="flex justify-between ">
                <Link href="/" className="festive font-normal md:text-3xl">the<span className="atma text-green-700 text-2xl font-semibold md:text-5xl md:align-sub">farmers'</span>market</Link>
            
            
                <div className="flex justify-between gap-3 items-center">
                    <input type="search" name="Search" id="search" className="text-2xl hidden md:block bg-slate-300 rounded-4xl" />
                        <ShoppingCart />
                        <UserCircleIcon />

                </div>
                {/* <input type="search" name="Search" id="search" className="text-2xl md:hidden bg-slate-300 rounded-4xl" /> */}
            </div>
        </nav>
        </MaxWidthWrapper>
        
    )
}

export default NavBar;