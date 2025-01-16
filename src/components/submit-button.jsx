'use client'

import Button from './button'

function SubmitButton({ loading }) {

    return (
        <Button disabled={loading} type="submit" text={!loading ? "SEND MESSAGE" : "SENDING..."} />

    )
}

export default SubmitButton