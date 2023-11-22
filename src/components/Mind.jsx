

function Mind() {
    return (
        <div>
            <div className="card-body  text-center">
                <div className="flex gap-4 ">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/public/logo/profile.jpeg" />
                            </div>
                        </label>
                    </div>
                    <div>
                        <input type="text" placeholder="What's on your mind,Emam Mehedi?" className="input rounded-full bg-gray-200  sm:w-full md:w-full lg:w-[600px] " />
                    </div>
                </div>
                <hr className="text-red-500 w-full" />
                <div className="card-actions gap-6  ">
                    <button className="btn btn-ghost"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="#ed3453"><path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>live video</button>
                    <button className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="#37b755" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" /></svg>Photo/Video</button>
                    <button className="btn btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="#f2b424" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>Feeling/activity </button>

                </div>
            </div>
        </div>
    );
}

export default Mind;