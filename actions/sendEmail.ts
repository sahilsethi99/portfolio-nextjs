"use server";

import { Resend } from "resend";
const resend =new Resend(process.env.RESEND_API_KEY); 

import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";


export const sendEmail =  async (formData:FormData) =>{
    console.log('Running on server');
    
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    //simple server-side validation
    if(!validateString(senderEmail,500)){
        return{
            error:"Invalid sender email"
        }
    }

    if(!validateString(message,5000)){
        return{
            error:"Invalid message"
        }
    }

    try{
        await resend.emails.send({
            from:'Portfolio Contact Form <onboarding@resend.dev>',
            to:'sethisahil20132013@gmail.com',
            subject:'Important Message from Portfolio Contact Form',
            reply_to: senderEmail as string,
            text: message as string,
        })

    }catch(e:unknown){
        return {
            error: getErrorMessage(e),
        };
    }
} 