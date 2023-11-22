
function Rightbar() {
    return (
        <div className="invisible md:visible fixed top-20 h-[90vh] overflow-y-scroll y right-4 pl-6 w-[350px]">
            <div className="flex justify-between">
                <p className="font-bold ">Contacts</p>
                <div className="flex gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:bg-gray-200 rounded-full" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:bg-gray-200 rounded-full" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                </div>
            </div>

            <ul>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className="w-10 rounded-full">
                            <img src="/public/image/chamk.jpg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Anila Yasmin</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full">
                            <img src="/public/image/tara.jpeg" />right-0
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Afrin Khan</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full">
                            <img src="/public/image/amir.webp" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Anamika Oishe</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full ring ring-blue-600 ring-offset-2">
                            <img src="/public/image/hayat.jpg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Bubly Khan</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full">
                            <img src="/public/image/hand.jpeg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Fatema Islam</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full ring ring-blue-600 ring-offset-2">
                            <img src="/public/image/erce.jpeg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Fatehi Islam</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full">
                            <img src="/public/image/ercel.jpg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Geniya Islam</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className=" w-10 rounded-full ring ring-blue-600 ring-offset-2">
                            <img src="/public/logo/profile.jpeg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Imran Hasan Mehedi</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className="w-10 rounded-full ring ring-blue-600 ring-offset-2">
                            <img src="/public/image/handel.jpeg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Sup-Sup</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg" >
                    <div className="avatar online">
                        <div className="w-10 rounded-full ">
                            <img src="/public/image/nora.jpg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Jara Islam</p>
                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar online">
                        <div className="w-10 rounded-full ring ring-blue-500 ring-offset-2">
                            <img src="/public/image/sanj.jpg" />
                        </div>
                    </div>
                    <p className=" font-bold mt-3">Tuba Islam</p>
                </li>
            </ul>



            <hr className="border-gray-300 mt-3" />
            <p className="font-bold mt-3">Your community chats</p>
            <ul>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src="/public/image/general.png" />
                        </div>
                    </div>
                    <div>
                        <p className=" font-semibold">General Chat</p>
                        <p className=" text-xs">Laravel & PHP Developers</p>
                    </div>

                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src="/public/image/laravel.png" />
                        </div>
                    </div>
                    <div>
                        <p className=" font-semibold">General Discussion</p>
                        <p className=" text-xs">Laravel & PHP Developers</p>
                    </div>

                </li>
                <li className="flex gap-4 py-2 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar">
                        <div className="w-10 h-10 rounded-full">
                            <img src="/public/image/laravel.png" />
                        </div>
                    </div>
                    <div>
                        <p className=" font-semibold">General Discussion</p>
                        <p className=" text-xs">Laravel & PHP Developers</p>
                    </div>

                </li>


                <hr className="border-gray-300 mt-3" />
                <p className="font-bold mt-3">Group conversations</p>

                <li>
                    <div className="flex gap-2 py-1 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar-group  -space-x-3 mt-3">
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/logo/profile.jpeg" />
                            </div>
                        </div>
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/image/tara.jpeg" />
                            </div>
                        </div>
                    </div>

                    <p className=" font-bold mt-5">Emam And Tara</p>
                    </div>
                </li>

                <li>
                    <div className="flex gap-2 py-1 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar-group  -space-x-3 mt-3">
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/logo/profile.jpeg" />
                            </div>
                        </div>
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/image/tara.jpeg" />
                            </div>
                        </div>
                    </div>

                    <p className=" font-bold mt-5">Emam And </p>
                    </div>
                </li>

                <li>
                    <div className="flex gap-2 py-1 px-2 hover:bg-gray-300 rounded-lg">
                    <div className="avatar-group  -space-x-3 mt-3">
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/logo/profile.jpeg" />
                            </div>
                        </div>
                        <div className="avatar online">
                            <div className="w-8">
                                <img src="/public/image/tara.jpeg" />
                            </div>
                        </div>
                    </div>

                    <p className=" font-bold mt-5">Emam And Tara</p>
                    </div>
                </li>


            </ul>

        </div>
    );
}

export default Rightbar;