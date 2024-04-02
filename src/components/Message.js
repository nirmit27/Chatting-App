import React from 'react';

export default function Message(){
    return (
        <div class="mb-4 flex items-end justify-end">
            <div class="ml-11 mr-3">
                <div class="rounded-lg bg-blue-500 p-3 text-white">
                    <p class="text-sm">I need help with my account.</p>
                </div>
            </div>
            <div class="flex-shrink-0">
                <img class="h-8 w-8 rounded-full" src="user-avatar.png" alt="User Avatar" />
            </div>
        </div>
    );
}