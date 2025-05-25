'use client'

import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';

function BusinessDetail() {
    const { data, status } = useSession();
    const params = useParams();
    const [business, setBusiness] = useState(null); // Start as null for clarity

    useEffect(() => {
        params && getBusinessById();
    }, [params]);

    useEffect(() => {
        checkUserAuth();
    }, [status]);

    const getBusinessById = () => {
        GlobalApi.getBusinessById(params.businessId)
            .then(resp => {
                setBusiness(resp.businessList);
            });
    };

    const checkUserAuth = () => {
        if (status === 'loading') return;
        if (status === 'unauthenticated') {
            signIn('descope');
        }
    };

    const loading = !business; // Define loading condition

    return status === 'authenticated' && (
        <div className='py-8 px-4 sm:px-8 md:px-20 lg:px-36'>
            <BusinessInfo business={business} loading={loading} />
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-12'>
                <div className='md:col-span-3'>
                    <BusinessDescription business={business} loading={loading} />
                </div>
                <div className='md:col-span-1'>
                    <SuggestedBusinessList business={business} />
                </div>
            </div>
        </div>
    );
}

export default BusinessDetail;