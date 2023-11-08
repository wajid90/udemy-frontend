import Link from 'next/link';
import React,{FC,useState} from 'react'
import NavItems from './NavItems';
import ThemeSwitcher from './ThemeSwitcher';
import {HiOutlineMenuAlt3, HiOutlineUserCircle} from "react-icons/hi"
import CustomModel from './CustomModel';
import Login from '../components/Login';

type Props = {
    open:boolean,
    setOpen:(open:boolean) => void;
    activeItem:number;
    route:string;
    setRoute:any
}

const Header:FC<Props> = ({open,setOpen,activeItem,route,setRoute}) => {
    const [active, setActive]=useState(false);
    const [openSidebar,setOpenSidebar]=useState(false);

    if(typeof window !== 'undefined'){
          window.addEventListener("scroll",()=>{
            if(window.scrollY > 85){
              setActive(true);
            }else{
              setActive(false);
            }
          })
    }
    const handleSideBar=(e:any)=>{
        if(e.target.id==="screen"){
            setOpenSidebar(false);
        }
        
    }
  return (
    <div className="w-full relative">
     <div className={`${active ?"dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[60px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500" :"w-full border-b dark:border-[#ffffff1c] h-[60px] z-[80] dark:shadow" }`}>
       <div className="w-[95%] 800:w-[92%] mx-auto  h-full">
            <div className="w-full h-[60px] flex items-center justify-between p-3">
                <div>
                     <Link href={'/'} className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                        Udemy
                     </Link>
                </div>
                <div className='flex items-center'>
                    <NavItems activeItem={activeItem} isMobile={false}/>
                    <ThemeSwitcher/>
                    <div className="800px:hidden">
                        <HiOutlineMenuAlt3
                           size={25}
                           className="cursor-pointer dark:text-white text-black"
                           onClick={()=>setOpenSidebar(true)}
                        />
                       
                    </div>
                    <HiOutlineUserCircle
                          size={25}
                          className="hidden 800px:block cursor-pointer dark:text-white text-black mx-4"
                          onClick={()=>setOpen(true)}

                        />
                </div>

            </div>


       </div>

        {/* mobile sidebar */}

        {
            openSidebar && (
                <div className='fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]' onClick={handleSideBar} id="screen">
                <div className='w-[70%] fixed h-screen bg-white z-[999999999] dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0'>
               
                   <NavItems  activeItem={activeItem} isMobile={true}/>
                   <HiOutlineUserCircle
                       size={25}
                       className="cursor-pointer dark:text-white text-black mx-auto"
                       onClick={()=>setOpen(true)}
                   />
                   <br />
                   <br />
                   <p className="text-[12px] px-2 pl-5 text-black dark:text-white w-full text-center">Copyright c 2023</p>
                 </div>
                </div>    
            )
        }
     </div>

     {
      route==="Login" && (
        <>
          {
            open && (
              <CustomModel open={open} setOpen={setOpen} setRoute={setRoute} activeItem={activeItem} component={Login}/>
            )
          }
        </>
      )
     }
     {
      route==="Sign-Up" && (
        <>
         
        </>
      )
     }
    </div>
  )
}

export default Header