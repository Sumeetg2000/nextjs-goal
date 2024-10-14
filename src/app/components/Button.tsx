"use client";

import UserAvatar from "@/public/userAvatar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleDropdown}
        className='flex items-center text-lg font-semibold hover:text-gray-300'
      >
        <UserAvatar />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className='absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg z-10 flex justify-center'>
          <button
            onClick={handleLogout}
            className='m-2 text-red-500 hover:underline'
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
