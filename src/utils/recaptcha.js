export function generateRecaptchaToken() {
    return new Promise((resolve) => {
        grecaptcha.ready(async function () {
            const token = await grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCH_PUBLIC_KEY, { action: 'contactMessage' });
            if (!token) {
                resolve(null)
            }
            resolve(token)
        });
    })
}


export async function verifyRecaptchToken(generatedKey) {
    const privateKey = process.env.RECAPTCH_PRIVATE_KEY

    if (!privateKey) {
        throw ('No private key is found')
    }

    const verificationUrl = new URL('https://www.google.com/recaptcha/api/siteverify')
    verificationUrl.searchParams.append('secret', privateKey)
    verificationUrl.searchParams.append('response', generatedKey)

    return (await fetch(verificationUrl, { method: 'post' })).json()

}