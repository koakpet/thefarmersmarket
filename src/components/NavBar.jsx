import Link from "next/link";
import { UserCircleIcon } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

function NavBar() {
    return (
        <nav className="flex justify-between py-3 md:py-6">
            <Link href="/">the<span className="text-green-700 text-xl">FARMERS'</span>market.ng</Link>
            
            <div className="w-16 md:w-20 flex justify-between">
                <ShoppingCart />
                <UserCircleIcon />
                </div>
        </nav>
    )
}

export default NavBar;