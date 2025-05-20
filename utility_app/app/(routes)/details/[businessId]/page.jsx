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

    return status === 'authenticated' && business && (
        <div className='py-8 md:py-20 px-10 md:px-36 mt-8'>
            <BusinessInfo business = {business}/>
            <div className='grid grid-cols-4 mt-16'>
                <div className='col-span-4 md:col-span-3'>
                    <BusinessDescription business = {business}/>
                </div>
                <div className='hidden md:block'>
                    <SuggestedBusinessList business = {business}/>
                </div>
            </div>
        </div>
    )
}

export default BusinessDetail