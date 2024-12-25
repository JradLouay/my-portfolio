'use client'

import { useFormStatus } from 'react-dom'
import Button from './button'

function SubmitButton() {
    const { pending } = useFormStatus()
    console.log('pending', pending)

    return (
        <Button disabled={pending} type="submit" text={!pending ? "SEND MESSAGE" : "SENDING..."} />

    )
}

export default SubmitButton