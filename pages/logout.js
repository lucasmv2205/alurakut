import { useEffect } from 'react';
import nookies from 'nookies'
import { useRouter } from 'next/router'
import { useToast } from '../src/contexts/ToastContext'

export default function Logout() {
    const router = useRouter()
    const { addToast } = useToast();

    useEffect(() => {
        nookies.destroy(null, 'USER_TOKEN')
        router.push('/login')

    })

    return null
}