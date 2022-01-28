import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon
} from "@heroicons/react/solid"

function Sidebar() {
    return (
        <div>
            <div>
                <button>
                    <HomeIcon className="h-5 w-5"/>
                    <p>Home</p>
                </button>
                <button>
                    <SearchIcon className="h-5 w-5"/>
                    <p>Search</p>
                </button>
                <button>
                    <LibraryIcon className="h-5 w-5"/>
                    <p>Library</p>
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




