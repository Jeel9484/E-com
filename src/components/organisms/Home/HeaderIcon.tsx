import { Dropdown } from "@/components/atoms/dropdown";
import { CartDropdown } from "@/components/molecules/HomeDemoV1/Dropdown/cartdropdown";
import { ProfileDropdown } from "@/components/molecules/HomeDemoV1/Dropdown/profiledropdown";
import { ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function HeaderIcon() {
  const { state } = useCart();
  return (
    <div className="items-center gap-2 hidden md:flex">
      <Dropdown
        trigger={
          <div className="relative">
            <ShoppingBag className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {state.itemCount}
            </span>
          </div>
        }
      >
        <CartDropdown />
      </Dropdown>
      <Dropdown trigger={<User className="w-7 h-7" />}>
        <ProfileDropdown />
      </Dropdown>
    </div>
  );
}
