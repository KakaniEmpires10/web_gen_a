import { IoNewspaperSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { RiDashboardFill } from "react-icons/ri";
import { BsHouseGearFill } from 'react-icons/bs'
import { BsStars } from 'react-icons/bs'
import { FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { IListNav, IListRoute } from "./Types";
import { HeartHandshake, ImageIcon } from "lucide-react";

export const ListRoute : IListRoute[] = [
    {
        icon  : <RiDashboardFill className="text-3xl"/>,
        link  : '/dashboard',
        title : "Dashboard",
    },
    {
        icon  : <BsStars className="text-3xl"/>,
        link  : '/dashboard/unggulan',
        title : "Unggulan",
    },
    {
        icon  : <HiMiniClipboardDocumentList className="text-3xl"/>,
        link  : '/dashboard/kegiatan',
        title : "Kegiatan",
    },
    {
        icon  : <IoNewspaperSharp className="text-3xl"/>,
        link  : "/dashboard/berita",
        title : "Berita",
    },
    {
        icon  : <ImageIcon className="text-3xl"/>,
        link  : "/dashboard/gallery",
        title : "Gallery",
    },
    {
        icon  : <HeartHandshake className="text-3xl"/>,
        link  : "/dashboard/afiliasi",
        title : "Affiliasi",
    },
    {
        icon  : <HiUserGroup className="text-3xl"/>,
        link  : "/dashboard/anggota",
        title : "Anggota",
    },
    {
        icon  : <FaUsers className="text-3xl"/>,
        link  : "/dashboard/user",
        title : "Users",
    },
    {
        icon  : <BsHouseGearFill className="text-3xl"/>,
        link  : "/dashboard/pengaturan",
        title : "Pengaturan",
    },
    {
        icon  : <FaSignOutAlt className="text-3xl"/>,
        link  : "/login",
        title : "Sign In",
    },
]

export const ListNav : IListNav[] = [
    {
        title : "Dashboard",
        link  : "/dashboard"
    },
    {
        title : "About Us",
        link  : "/about_us"
    },
    {
        title : "Anggota",
        link  : "/anggota"
    },
    {
        title: "Afiliasi",
        link: "/afiliasi"
    },
    {
        title : "Contact Us",
        link  : "/contact_us"
    },
    {
        title : "Berita",
        link  : "/berita"
    },
    {
        title : "Kegiatan",
        link  : "/kegiatan"
    },
    {
        title : "unggulan",
        link  : "/unggulan"
    }
]