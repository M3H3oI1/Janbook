"use client";
import { Navbar, TextInput , Image, } from "keep-react";
import {
  CaretDown,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
  TwitterLogo,

} from "phosphor-react";

function NavbarComponent () {
  return (
    
    <Navbar fluid={true}>
    <Navbar.Container className="flex items-center justify-between">
      <Navbar.Brand>
        <Image
          src="/images/keep.svg"
          alt="keep"
          width="100"
          height="40"
        />
      </Navbar.Brand>

      <Navbar.Container className="flex items-center gap-6">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-4"
        >
          <TextInput
            id="#id-10"
            placeholder="Search anything"
            color="gray"
            sizing="sm"
            type="text"
            addon={<MagnifyingGlass size={20} color="#5E718D" />}
            addonPosition="left"
          />
          <Navbar.Link
            icon={<FacebookLogo size={20} color="#444" />}
            iconAnimation={false}
          />
          <Navbar.Link
            icon={<InstagramLogo size={20} color="#444" />}
            iconAnimation={false}
          />
          <Navbar.Link
            icon={<TwitterLogo size={20} color="#444" />}
            iconAnimation={false}
          />
        </Navbar.Container>
        <Navbar.Container className="flex gap-1">
          <Navbar.Toggle className="block" />
          Menu
        </Navbar.Container>
      </Navbar.Container>
      <Navbar.Collapse
        collapseType="sidebar"
        className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2"
      >
        <Navbar.Container tag="ul" className="flex flex-col gap-5">
          <Navbar.Link
            linkName="Home"
            icon={<CaretDown size={20} />}
            className="!py-0"
          />
          <Navbar.Link
            linkName="Projects"
            icon={<CaretDown size={20} />}
            className="!py-0"
          />
          <Navbar.Link
            linkName="Blogs"
            icon={<CaretDown size={20} />}
            className="!py-0"
          />
          <Navbar.Link linkName="News" className="!py-0" />
          <Navbar.Link linkName="Resources" className="!py-0" />
        </Navbar.Container>
      </Navbar.Collapse>
    </Navbar.Container>
  </Navbar>




    // <div className="z-50 sticky top-0 ">

    //   <div className="navbar bg-white shadow-md shadow-gray-300 ">
    //     <div className="flex-1 gap-2">
    //       <div className="avatar">
    //         <div className=" w-12 rounded-full">
    //           <img src="/logo/heart.png"/>
    //         </div>
    //       </div>
    //       <div className="flex">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="absolute ml-3 mt-3" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
    //         <input type="text" placeholder="Search Heartbook" className="input rounded-full text-center  bg-gray-200 w-full max-w-xs" />
    //       </div>
    //     </div>
        
    //     <div className=" gap-32 mr-[20%]">
    //    <svg className="feather feather-home h-8 w-8 hover:fill-blue-600" fill="none" height="24" stroke="currentColor"  viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    //       <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 hover:fill-blue-600" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4 4.5h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm9 0H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zM7.5 12c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5zm0-5.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg>
    //       <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 hover:fill-blue-600" height="24"  viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" /></svg>
    //       <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 hover:fill-blue-600" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" /></g><g><g /><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z" /></g></g></svg>
    //       <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 hover:fill-blue-600" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" /><g><path d="M12,12.75c1.63,0,3.07,0.39,4.24,0.9c1.08,0.48,1.76,1.56,1.76,2.73L18,18H6l0-1.61c0-1.18,0.68-2.26,1.76-2.73 C8.93,13.14,10.37,12.75,12,12.75z M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1 C4.76,14.04,4.39,14,4,14c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85 C21.93,14.21,20.99,14,20,14c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M12,6c1.66,0,3,1.34,3,3 c0,1.66-1.34,3-3,3s-3-1.34-3-3C9,7.34,10.34,6,12,6z" /></g></svg>

    //     </div>


    //     <div className="flex gap-5">
    //       <div className="dropdown dropdown-end">
    //         <label tabIndex={0} className="btn bg-slate-100 btn-circle">
    //           <div className="indicator">
    //             <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 " height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" /></svg>
    //           </div>
    //         </label>
    //         <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
    //           <div className="card-body">
    //             <span className="font-bold text-lg">8 Items</span>
    //             <span className="text-info">Subtotal: $999</span>
    //             <div className="card-actions">
    //               <button className="btn btn-primary btn-block">View cart</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>


    //       <div className="dropdown dropdown-end">
    //         <label tabIndex={0} className="btn bg-slate-100 btn-circle">
    //           <div className="indicator">
    //             <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8 " x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
    //               <path d="M12,2C6.486,2,2,6.262,2,11.5c0,2.545,1.088,4.988,3,6.772v4.346l4.08-2.039C10.039,20.858,11.02,21,12,21 c5.514,0,10-4.262,10-9.5S17.514,2,12,2z M13.167,14.417l-2.917-2.333L5,14.417l5.833-5.833l2.917,2.333L19,8.583L13.167,14.417z"></path>
    //             </svg>
    //           </div>
    //         </label>
    //         <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
    //           <div className="card-body">
    //             <span className="font-bold text-lg">8 Items</span>
    //             <span className="text-info">Subtotal: $999</span>
    //             <div className="card-actions">
    //               <button className="btn btn-primary btn-block">View cart</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>



    //       <div className="dropdown dropdown-end">
    //         <label tabIndex={0} className="btn bg-slate-100 btn-circle">
    //           <div className="indicator">
    //             <svg xmlns="http://www.w3.org/2000/svg" className=" text-white h-8 w-8" height="24" viewBox="0 0 24 24" width="24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
    //           </div>
    //         </label>
    //         <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
    //           <div className="card-body">
    //             <span className="font-bold text-lg">8 Items</span>
    //             <span className="text-info">Subtotal: $999</span>
    //             <div className="card-actions">
    //               <button className="btn btn-primary btn-block">View cart</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="dropdown dropdown-end">
    //         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    //           <div className="w-10 rounded-full">
    //             <img src="/logo/profile.jpeg" />
    //           </div>
    //         </label>
    //         <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //           <li>
    //             <a className="justify-between">
    //               Profile
    //               <span className="badge">New</span>
    //             </a>
    //           </li>
    //           <li><a>Settings</a></li>
    //           <li><a>Logout</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>


    // </div>
  );
}

export default NavbarComponent;