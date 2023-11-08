import React,{useState} from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {styles} from '../styles/style';
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"

import Link from 'next/link';
import {FcGoogle} from "react-icons/fc"

type Props = {
    setOpen:any;
    setRoute:any;
}

const schema=Yup.object().shape({
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required'),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required'),
});
const Login:React.FC<Props> = ({setOpen,setRoute}) => {
    const [show,setShow]=useState(false);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: schema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
    const {errors,touched,values,handleChange,handleSubmit}=formik;
  return (
    <div className="w-full">
        <h1 className={styles.title}>Login with Udemy</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.label}>Enter Your Email</label>
            <input type="email" className={`${errors.email && touched.email && "border-red-500"} w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2  outline-none mt-[5px] font-Poppins`}
             value={values.email}
             onChange={handleChange}
             id="email"
             name="email"
             placeholder='wajid90273@gmail.com'
            />
            {
              errors.email && touched.email && (
                <span className='text-red-500 text-[12px]'>{errors.email}</span>
              )
            }
            
        <div className='w-full mt-5 relative  mb-1'>
        <label htmlFor="password" className={styles.label }>Enter Your Password</label>
        <input type={show?"text":"password"} className={`${errors.password && touched.password && "border-red-500"} w-full text-black dark:text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[5px] font-Poppins`}
             value={values.password}
             onChange={handleChange}
             id="password"
             name="password"
             placeholder='Wk90273@'
            />
           {
            !show ? (
                 <AiOutlineEyeInvisible size={20} className="absolute bottom-3 right-2 z-1 cursor-pointer text-white" onClick={()=>setShow(!show)}  />
            ):(
                <AiOutlineEye size={20} className="absolute bottom-3 right-2 z-1 cursor-pointer text-white" onClick={()=>setShow(!show)} />
            )
           }
           
        </div>
        {
              errors.password && touched.password && (
                <span className='text-red-500 text-[12px]'>{errors.password}</span>
              )
            }
           <div className='w-full mt-5'>
                 <input type="submit" value="Login" className={`${styles.button}`} />
           </div>
           <h5 className='text-center pt-2 font-Poppins text-[14px] text-black dark:text-white'>Or Join with</h5>
           <div className='flex items-center justify-center my-2'>
              <FcGoogle size={30} className="cursor-pointer mr-2"/>
              <AiFillGithub size={30} className="cursor-pointer ml-2" />
           </div>
           <h5 className='text-center pt-2 font-Poppins text-[14px] text-black dark:text-white'> Don nt have an account?  <span className={`text-[14
               px] font-Poppins font-[500] text-[#2190ff] cursor-pointer`} onClick={()=>setRoute("Sign-In")}>Sign Up</span> </h5>
           <div className='flex items-center justify-center my-2'>
             
          </div>
        </form>
    </div>
  )
}

export default Login