import Link from "next/link";

export const ProfileDropdown = () => (
  <div className="px-4 py-2">
     <h2 className="text-base text-black border-b border-gray-300">Account</h2>
    <Link href="/account/login" className="block py-1 hover:underline">
     Login
    </Link>
    <Link href="/account/register" className="block py-1 hover:underline">
     Create Account
    </Link>
  </div>
);
