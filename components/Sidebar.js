import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon
} from "@heroicons/react/solid"

function Sidebar() {
    return (
        <div className="text-gray-700">
            <div>
                <button className="flex items-center space-x-2 
                hover:text-white">
                    <HomeIcon className="h-5 w-5"/>
                    <p>Home</p>
                </button>
                <button className="flex items-center space-x-2 
                hover:text-white">
                    <SearchIcon className="h-5 w-5"/>
                    <p>Search</p>
                </button>
                <button className="flex items-center space-x-2 
                hover:text-white">
                    <LibraryIcon className="h-5 w-5"/>
                    <p>My Library</p>
                </button>
                <button>
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>More</p>
                </button>
            </div>
        </div>
    );
}

export default Sidebar;




