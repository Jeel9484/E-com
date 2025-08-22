import { Dropdown } from "@/components/atoms/dropdown";
import { CartDropdown } from "@/components/molecules/HomeDemoV1/Dropdown/cartdropdown";
import { ProfileDropdown } from "@/components/molecules/HomeDemoV1/Dropdown/profiledropdown";
import { ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function HeaderIcons() {
  const { state } = useCart();
  return (
    <div className="items-center hidden md:flex gap-2">
      <Dropdown
        trigger={
          <div className="relative cursor-pointer">
            <ShoppingBag className="w-7 h-7" />
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center z-10">
              {state.itemCount > 99 ? '99+' : state.itemCount}
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
