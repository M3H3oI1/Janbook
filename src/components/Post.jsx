import Mind from "./Mind";
import Carosel from "./Carosel";


function Post() {
    return (
        <div className=" lg:flex flex-col gap-10 col-span-4 lg:w-5/12 mx-auto" >
            <Carosel></Carosel>
        
        <div className="sm:w-full lg:card glass bg-white">
            <Mind></Mind>
        </div>

        <div className="card  glass bg-white">
            <div className="card-actions justify-between mt-7">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="flex w-10 rounded-full">
                            <img src="/public/card/vivo.jpg" />

                        </div>
                        <p className=" font-bold">Vivo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </label>
                </div>

                <div className="flex flex-row gap-3 mr-3">
                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </div>
                    </button>

                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                    </button>

                </div>

            </div>


            <p className="py-5 px-5 ">The wait is finally over 🤩
                #vivoV29 #5G is available now all over Bangladesh💙
                So what you are waiting for?
                Buy Now vivo #V295G only at 56,999 BDT 🥳
                To purchase, visit your nearest vivo-authorized store & our vivo official e-store👇
                https://shop.vivo.com/bd/product/2077
                #vivoV295G #DelightInEveryPortrait #V29 #vivoVSeries
                #vivoV29Series
                #LoveBangladesh #Lovevivo #vivoBangladesh</p>

            <video width="830" controls autoPlay >
                <source src="/public/video/vivo V29e.mp4" type="video/mp4" />
            </video>
            <div className="flex">
                <div className="avatar-group -space-x-2 py-3 mx-2 ">
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/haha.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/wow.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/sad.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/angry.png" />
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <p>15k</p>
                </div>

                <div className="flex mt-5 ml-[55%] gap-4 ">

                    <p>1k comments</p>
                    <p>2k share</p>
                </div>
            </div>
            <hr className=" w-[95%] mx-4" />

            <div className="flex justify-evenly py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8"  height="19px" version="1.1" viewBox="0 0 20 19" width="20px" ><title /><g fill="none" id="Icons" stroke="none" ><g id="Group" stroke="#000000" transform="translate(-2.000000, -2.000000)"><g id="Shape" transform="translate(3.000000, 3.314575)"><path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" /><path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.370771,0.564104226 10.370771,0.564104226 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" /></g></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" height="24" viewBox="0 0 24 24" width="24" ><path d="M20 12L13.6 5V8.5C10.4 8.5 4 10.6 4 19C4 17.8333 5.92 15.5 13.6 15.5V19L20 12Z" stroke="black" /></svg>
            </div>

        </div>
      

        <div className="card  glass bg-white">
            <div className="card-actions justify-between mt-7">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="flex w-10 rounded-full">
                            <img src="/public/card/ta.webp" />
                        </div>
                        <p className=" font-bold">cricbot</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </label>
                </div>

                <div className="flex flex-row gap-3 mr-3 ">
                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </div>
                    </button>

                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                    </button>

                </div>

            </div>
            <video width="830" controls >
                <source src="/public/video/cric.mp4" type="video/mp4" />
            </video>

            <div className="flex">
                <div className="avatar-group -space-x-2 py-3 mx-2 ">
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/haha.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/wow.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/sad.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/angry.png" />
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <p>15k</p>
                </div>

                <div className="flex mt-5 ml-[55%] gap-4 ">

                    <p>1k comments</p>
                    <p>2k share</p>
                </div>
            </div>
            <hr className=" w-[95%] mx-4" />

            <div className="flex justify-evenly py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="19px" version="1.1" viewBox="0 0 20 19" width="20px" ><title /><g fill="none" id="Icons" stroke="none" ><g id="Group" stroke="#000000" transform="translate(-2.000000, -2.000000)"><g id="Shape" transform="translate(3.000000, 3.314575)"><path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" /><path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.370771,0.564104226 10.370771,0.564104226 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" /></g></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" height="24" viewBox="0 0 24 24" width="24" ><path d="M20 12L13.6 5V8.5C10.4 8.5 4 10.6 4 19C4 17.8333 5.92 15.5 13.6 15.5V19L20 12Z" stroke="black" /></svg>
            </div>
        </div>






        <div className="card py-4 bg-white">
            <div className="card-actions justify-between mt-7">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="flex w-10 rounded-full">
                            <img src="/public/card/iam.jpg" />
                        </div>
                        <p className=" text-xl font-bold">আই এম তো অবাক </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </label>
                    <p>2hr</p>
                </div>

                <div className="flex flex-row gap-3 mr-3">
                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </div>
                    </button>

                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                    </button>

                </div>

            </div>
            <figure><img src="/public/card/fun.jpg" className=" h-[600px] w-full" alt="car!" /></figure>
            <div className="flex">
                <div className="avatar-group -space-x-2 py-3 mx-2 ">
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/haha.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/wow.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/sad.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/angry.png" />
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <p>15k</p>
                </div>

                <div className="flex mt-5 ml-[55%] gap-4 ">

                    <p>1k comments</p>
                    <p>2k share</p>
                </div>
            </div>
            <hr className=" w-[95%] mx-4" />

            <div className="flex justify-evenly py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="19px" version="1.1" viewBox="0 0 20 19" width="20px" ><title /><g fill="none" id="Icons" stroke="none" ><g id="Group" stroke="#000000" transform="translate(-2.000000, -2.000000)"><g id="Shape" transform="translate(3.000000, 3.314575)"><path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" /><path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.370771,0.564104226 10.370771,0.564104226 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" /></g></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" height="24" viewBox="0 0 24 24" width="24" ><path d="M20 12L13.6 5V8.5C10.4 8.5 4 10.6 4 19C4 17.8333 5.92 15.5 13.6 15.5V19L20 12Z" stroke="black" /></svg>
            </div>

        </div>









        <div className="card  glass bg-white">
            <div className="card-actions justify-between mt-7">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="flex w-10 rounded-full">
                            <img src="/public/card/tara.png" />
                        </div>
                        <p className=" font-bold">Tara Sutaria</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </label>
                </div>

                <div className="flex flex-row gap-3 mr-3">
                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </div>
                    </button>

                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                    </button>

                </div>

            </div>
            <p className="py-5 px-5" >
                I have got all the Volume in my hair and now, so can you!
                The nutrient-rich, plump-it-up power of StBotanica India
                #GoVolume Hair Shampoo is the assortment of Brahmi Extract
                , Wheat Protein and Pea Protein that gives each strand a
                beautiful boost.Straight, curly or wavy, feel free to make
                better choices for your hair with the rich & fortifying,
                nature-inspired #GoRange that offers solutions for all hair
                types! #GoHairCare #ToxinFree #ScientificallyNatural
                #GoodHairDays #StBotanicaXTaraSutaria #NaturalHair
                #VoluminousHair #BecauseYouAreBeautiful
                #StBotanica #ad #paidpartnership  </p>
            <figure><img src="/public/card/tara1.png" className=" h-[600px] w-full" alt="car!" /></figure>
            <div className="flex">
                <div className="avatar-group -space-x-2 py-3 mx-2 ">
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/love.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/care.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/wow.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/sad.png" />
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <p>15k</p>
                </div>

                <div className="flex mt-5 ml-[55%] gap-4 ">

                    <p>1k comments</p>
                    <p>2k share</p>
                </div>
            </div>
            <hr className=" w-[95%] mx-4" />

            <div className="flex justify-evenly py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="19px" version="1.1" viewBox="0 0 20 19" width="20px" ><title /><g fill="none" id="Icons" stroke="none" ><g id="Group" stroke="#000000" transform="translate(-2.000000, -2.000000)"><g id="Shape" transform="translate(3.000000, 3.314575)"><path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" /><path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.370771,0.564104226 10.370771,0.564104226 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" /></g></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" height="24" viewBox="0 0 24 24" width="24" ><path d="M20 12L13.6 5V8.5C10.4 8.5 4 10.6 4 19C4 17.8333 5.92 15.5 13.6 15.5V19L20 12Z" stroke="black" /></svg>
            </div>

        </div>










        <div className="card  glass bg-white">
            <div className="card-actions justify-between mt-7">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="flex w-10 rounded-full">
                            <img src="/public/card/vivo.jpg" />

                        </div>
                        <p className=" font-bold">Vivo</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                            <polygon fill="#42a5f5" points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"></polygon><polygon fill="#fff" points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"></polygon>
                        </svg>
                    </label>
                </div>

                <div className="flex flex-row gap-3 mr-3">
                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </div>
                    </button>

                    <button className=" btn btn-ghost btn-circle btn-sm">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                    </button>

                </div>

            </div>


            <p className="py-5 px-5 ">The wait is finally over 🤩
                #vivoV29 #5G is available now all over Bangladesh💙
                So what you are waiting for?
                Buy Now vivo #V295G only at 56,999 BDT 🥳
                To purchase, visit your nearest vivo-authorized store & our vivo official e-store👇
                https://shop.vivo.com/bd/product/2077
                #vivoV295G #DelightInEveryPortrait #V29 #vivoVSeries
                #vivoV29Series
                #LoveBangladesh #Lovevivo #vivoBangladesh</p>

            <figure><img src="/public/card/Vivoc.jpg" className=" h-[600px] w-full" alt="car!" /></figure>
            <div className="flex">
                <div className="avatar-group -space-x-2 py-3 mx-2 ">
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/haha.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/wow.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/sad.png" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-5">
                            <img src="/public/emoji/angry.png" />
                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <p>15k</p>
                </div>

                <div className="flex mt-5 ml-[55%] gap-4 ">

                    <p>1k comments</p>
                    <p>2k share</p>
                </div>
            </div>
            <hr className=" w-[95%] mx-4" />

            <div className="flex justify-evenly py-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="19px" version="1.1" viewBox="0 0 20 19" width="20px" ><title /><g fill="none" id="Icons" stroke="none" ><g id="Group" stroke="#000000" transform="translate(-2.000000, -2.000000)"><g id="Shape" transform="translate(3.000000, 3.314575)"><path d="M0.571428571,6.68542457 L4,6.68542457 L4,16.6854246 L0.571428571,16.6854246 C0.255837286,16.6854246 0,16.3410282 0,15.9161938 L0,7.45465534 C0,7.02982092 0.255837286,6.68542457 0.571428571,6.68542457 Z" /><path d="M4,7.43542457 L7.29966809,1.04231764 C7.78713518,0.0977581736 8.94803678,-0.272742337 9.8925769,0.214762241 C10.0690433,0.305841656 10.2303505,0.423683717 10.370771,0.564104226 C10.370771,0.564104226 10.370771,0.564104226 10.370771,0.564104226 C10.9333801,1.12671336 11.2494506,1.8897751 11.2494506,2.68542457 L11.2494506,5.68542457 L16.500278,5.68542457 C16.9305244,5.68542457 17.3400569,5.87017416 17.624795,6.19272057 C17.9095331,6.51526698 18.0420596,6.94455262 17.988694,7.37147657 L16.863694,15.3714776 C16.7698634,16.1221204 16.1317626,16.6854246 15.375278,16.6854246 L4,16.6854246" /></g></g></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" height="24" viewBox="0 0 24 24" width="24" ><path d="M20 12L13.6 5V8.5C10.4 8.5 4 10.6 4 19C4 17.8333 5.92 15.5 13.6 15.5V19L20 12Z" stroke="black" /></svg>
            </div>

        </div>     

    </div>
    );
}

export default Post;