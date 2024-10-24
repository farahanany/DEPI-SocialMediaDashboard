import { FaHome, FaSignInAlt, FaListAlt, FaUserPlus, FaSearch } from 'react-icons/fa'; // Added FaSearch for Search Profile

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <FaHome />,   // Icon for Dashboard
        link: "/Dashboard"
    },

    {
        title: "Search Profile",
        icon: <FaSearch />,   // Icon for Search Profile Page
        link: "/searchprofile"  // Link to Search Profile page
    },
    
    {
        title: "User List",
        icon: <FaListAlt />,   // Icon for User List Page
        link: "/UserListPage"
    },
    {
        title: "Login",
        icon: <FaSignInAlt />,   // Icon for Login Page
        link: "/login"
    },
    {
        title: "Sign Up",
        icon: <FaUserPlus />,   // Icon for Sign Up Page
        link: "/register"
    }
];
