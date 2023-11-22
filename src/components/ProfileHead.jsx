
function ProfileHead() {
    return (
        <>
            <div className=" bg-white h-[700px]   relative ">

                <img src="/public/icon/valo.jpg" className=" h-[450px] w-[70%] mx-auto rounded-lg" alt="" />

                <div className="absolute bottom-[200px]">
                    <div className="avatar pl-80 flex gap-6">
                        <div className="w-32  rounded-full ring ring-blue-500 ring-offset-base-100 ring-offset-2">
                            <img src="/public/logo/profile.jpeg" />
                        </div>
                        <p className=" font-bold text-2xl mt-12 ">Emam Mehedi (Imran) <br /> <span className=" font-medium">2k friends</span> </p>
                        
                    </div>
                </div>

            </div>

            <div>

            </div>

        </>


    );
}

export default ProfileHead;