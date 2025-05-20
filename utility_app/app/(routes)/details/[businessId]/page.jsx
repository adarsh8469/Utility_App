'use client'

import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

function BusinessDetail() {
    const { data, status } = useSession();
    const params = useParams();
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        params && getBusinessById();
    }, [params]);

    useEffect(() => {
        checkUserAuth();
    }, []);

    const getBusinessById = () => {
        GlobalApi.getBusinessById(params.businessId)
        .then(resp => {
            setBusiness(resp.businessList)
        })
    }

    const checkUserAuth = () => {
        if (status === 'loading') {
            return;
        }
        if (status === 'unauthenticated') {
            signIn('descope');
        }
    }

    return status === 'authenticated' && (
        <div>businessList</div>
    )
}

export default BusinessDetail