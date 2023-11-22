import { Link } from "react-router-dom";

function Login() {
    return (
        <div>
            <div className="hero h-[723px] bg-[#f0f2f5] ">
                <div className="hero-content flex flex-col lg:flex-row">
                    <div className="text-center right-9 lg:text-left">
                        <h1 className=" text-6xl font-bold py-4 text-[#0866ff]">heartbook</h1>
                        <p className=" font-semibold text-2xl">Heartbook helps you connect and share</p>
                        <p className=" font-semibold  text-2xl">with the people in your life.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full  max-w-sm bg-white shadow-lg">
                        <form className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white"></span>
                                </label>
                                <input type="email" placeholder="Email address or phone number" className="input input-error border-gray-400 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white"></span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-error border-gray-400" required />
                            </div>
                            <div className="form-control py-2">
                                <Link to={"/click"}> <button className="btn btn-secondary w-full text-xl text-white">Log in</button></Link>
                            </div>
                            <div className="text-center">
                                <a href="#" className="  link link-hover text-pink-700">Forgotten password?</a>
                            </div>
                            <hr className="mt-4" />
                            <div className="form-control py-2">

                                <div>

                                    <button className="btn bg-[#4CAF50] mx-16 normal-case text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Create New Account</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h1 className="font-bold text-3xl">Sign Up</h1>
                                            <p className="">Its quick and easy.</p>
                                            <hr className=" w-full" />
                                            <div className="flex py-3 gap-2">
                                                <label className="label">
                                                    <span className="label-text text-white"></span>
                                                </label>
                                                <input type="text" placeholder="First name" className="input input-primary border-gray-400" required />
                                                <input type="text" placeholder="Surname" className="input input-primary border-gray-400 " required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white"></span>
                                                </label>
                                                <input type="email" placeholder="Mobile number or email address " className="input input-primary border-gray-400 " required />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-white"></span>
                                                </label>
                                                <input type="password" placeholder="Password" className="input input-primary border-gray-400 " required />
                                            </div>

                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <Link>Create a Page for a celebrity, brand or business.</Link>
            </div>

        </div>


    );
}

export default Login;