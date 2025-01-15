import React from 'react'

const ModalSocialAccounts = ({accounts}) => {


    return (
        <div>
            <h4 className='mb-6 subtitle font-semibold text-text-primary'>Social Accounts</h4>
            <div className='w-full flex flex-col gap-2'>
                {accounts.length > 0 && accounts.map((account, index) => (
                    <div className='flex border-b border-b-focus-outline pb-3 gap-3' key={index}>
                        <p className='basis-1/3 text-sm font-medium text-text-primary capitalize'>{account.type}: </p>
                        <p className='basis-2/3 text-sm font-medium text-text-primary'>{account.account_url}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ModalSocialAccounts
