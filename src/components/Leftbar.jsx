import { Link } from "react-router-dom";

function Leftbar() {
    return (
        <div className="grid grid-cols-6 py-4 px-2 gap-1 ">
            <div className="invisible md:visible fixed top-20 w-80">
                <ul>
                    <li >
                        <Link to={"/Profile"} className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <div className="avatar ">
                                <div className="w-10 rounded-full ">
                                    <img src="/logo/profile.jpeg" />
                                </div>
                            </div>
                            <p className=" font-bold mt-3">Emam Mehedi</p>
                        </Link>
                    </li>

                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/friend.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2">Find Friends</p>
                        </a>
                    </li>

                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/memories.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2">Memories</p>
                        </a>
                    </li>

                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/saved.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2">Saved</p>
                        </a>
                    </li>

                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/messen.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2 ">Messenger</p>
                        </a>
                    </li>

                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/groups.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2">Groups</p>
                        </a>
                    </li>


                    <li>
                        <a href="" className="flex gap-3 py-2 pl-3 hover:bg-gray-300 rounded-lg">
                            <img src="/icon/video.png" className="h-10 w-10" alt="" />
                            <p className="font-bold mt-2">Video</p>
                        </a>
                    </li>


                    <li className="font-bold"><details className="dropdown">
                        <summary className="btn btn-ghost justify-start px-2 w-80 text-right ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-gray-200 rounded-full hover:bg-gray-200 " height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
                            <p className="text-base normal-case">See more</p></summary>

                        <ul className="p-4 rounded-lg">
                        <li>
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/calendar.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Event</p>
                                </a>
                            </li>
                            <li>
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/feed.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Feeds</p>
                                </a>
                            </li>
                            
                                
                            <li>
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/gaming.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Gaming Video</p>
                                </a>
                            </li>

                            <li >
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/MARKET.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Market Place</p>
                                </a>
                            </li>

                            <li >
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/kids.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Messenger Kids</p>
                                </a>
                            </li>

                            <li>
                                <a href="" className="flex gap-3 py-2  hover:bg-gray-300 rounded-lg">
                                    <img src="/icon/page.png" className="h-10 w-10" alt="" />
                                    <p className="font-bold mt-2">Pages</p>
                                </a>
                            </li>
                        </ul>
                    </details></li>
                </ul>

                <hr className=" border-gray-300 mt-3" />
                <div>
                    <p className="font-bold text-gray-600 mt-3 pl-3">Your shortcuts</p>
                </div>

                <ul>
                    <li>
                        <a className="avatar flex gap-2 py-2  hover:bg-gray-300 rounded-lg">
                            <div className="w-10 rounded-xl mx-3">
                                <img src="/icon/valo.jpg" />
                            </div>
                            <p className=" font-semibold text-sm mt-3 ">Valorant Gameplay Bangladesh</p>
                        </a>
                    </li>
                    <li>
                        <a className="avatar flex gap-2 py-2  hover:bg-gray-300 rounded-lg">
                            <div className="w-10 rounded-xl mx-3">
                                <img src="/icon/react.png" />
                            </div>
                            <p className=" font-semibold text-sm mt-3 ">React js Community</p>
                        </a>
                    </li>
                    <li>
                        <a className="avatar flex gap-2 py-2  hover:bg-gray-300 rounded-lg">
                            <div className="w-10 rounded-xl mx-3">
                                <img src="/icon/lara.jpeg" />
                            </div>
                            <p className=" font-semibold text-sm mt-3 ">Php Laravel With Framework</p>
                        </a>
                    </li>
                    <li>
                        <a className="avatar flex gap-2 py-2  hover:bg-gray-300 rounded-lg">
                            <div className="w-10 rounded-xl mx-3">
                                <img src="/icon/valo.jpg" />
                            </div>
                            <p className=" font-semibold text-sm mt-3 ">Valorant Gameplay</p>
                        </a>
                    </li>
                </ul>


            </div >

        </div >
    );
}

export default Leftbar;

