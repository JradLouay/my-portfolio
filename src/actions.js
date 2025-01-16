"use server"
import supabase from "@/utils/supabaseClient";
import { verifyRecaptchToken } from "./utils/recaptcha";


export async function sendMessage(recaptchaToken, formData) {
    if (!recaptchaToken) {
        return null
    }

    //verify token
    const result = await verifyRecaptchToken(recaptchaToken)
    // send message
    if (result.success && result.score === 0.9) {
        const message = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };
        const { error, status } = await supabase
            .from("messages")
            .insert([
                { Name: message.name, email: message.email, message: message.message },
            ])
            .select();
        if (error) {
            console.log(error);
        }
        return { status }
    }


}