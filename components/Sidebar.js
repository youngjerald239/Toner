import React from 'react';
import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    MusicNoteIcon,
    HeartIcon,
    RssIcon
} from "@heroicons/react/solid"

function Sidebar() {
    return (
        <div className="text-gray-700 p-5 text-sm border-r border-gray-900">
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
                <hr className="border-t-[0.1px] border-gray-900" />

                <button className="flex items-center space-x-2 
                hover:text-white">
                    <MusicNoteIcon className="h-5 w-5"/>
                    <p>Create Playlist</p>
                </button>
                <button className="flex items-center space-x-2 
                hover:text-white">
                    <RssIcon className="h-5 w-5"/>
                    <p>My Playlist</p>
                </button>
                <button className="flex items-center space-x-2 
                hover:text-white">
                    <HeartIcon className="h-5 w-5"/>
                    <p>Favorite Songs</p>
                </button>
                <button>
                    <PlusCircleIcon className="h-5 w-5"/>
                    <p>More</p>
                </button>
                <hr className="border-t-[0.1px] border-gray-900" />
            </div>
        </div>
    );
}

export default Sidebar;




