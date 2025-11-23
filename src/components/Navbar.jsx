import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar(){

    return(
        <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-indigo-600">
                SmartLMS
                </Link>

                {/* Menu */}
                <nav className="flex items-center gap-5">
                <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                    isActive
                        ? "text-indigo-600 font-medium"
                        : "text-gray-600"
                    }
                >
                    Courses
                </NavLink>

                <Link
                    to="/login"
                    className="px-4 py-1 bg-indigo-600 text-white rounded"
                >
                    Login
                </Link>
                </nav>

            </div>
    </header>
    );
}