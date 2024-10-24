import { FaHome, FaSignInAlt, FaListAlt, FaUserPlus, FaSearch, FaBell, FaEnvelope } from 'react-icons/fa'; // Added FaBell for Notifications and FaEnvelope for Messages

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
        title: "Notifications",
        icon: <FaBell />,   // Icon for Notifications Page
        link: "/notifications"  // Link to Notifications page
    },
    {
        title: "User List",
        icon: <FaListAlt />,   // Icon for User List Page
        link: "/userlistpage"
    },

    {
        title: "Messages",
        icon: <FaEnvelope />,   // Icon for Messages Page
        link: "/messages"  // Link to Messages page
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
