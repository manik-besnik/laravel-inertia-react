import React, {useState} from 'react';
import {Head, router} from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Check from "@/Components/SvgIcons/Check.jsx";
import CloseIcon from "@/Components/SvgIcons/Close.jsx";


const Setting = ({setting}) => {


    const settingData = setting ? JSON.parse(setting.setting_data) : null;
    const signUpCoin = settingData.sign_up_free_coin ? settingData.sign_up_free_coin : 20
    const bannerLink = settingData.sidebar_banner_link ? settingData.sidebar_banner_link : null
    const [signUpFreeCoin, setSignUpFreeCoin] = useState(signUpCoin)
    const [sidebarBannerLink, setSidebarBannerLink] = useState(bannerLink)
    const [sidebarBannerFile, setSidebarBannerFile] = useState(settingData?.sidebar_banner)
    const [logo, setLogo] = useState(settingData?.logo)
    const [customTaskIcon, setCustomCTaskIcon] = useState(settingData?.custom_task_icon)
    const [extensionLink, setExtensionLink] = useState(settingData?.extension_link)
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState(null);

    const updateSetting = (formData) => {
        router.put(route('admin.setting.update'), {settings: formData}, {
            onSuccess: () => {
                alert('Setting Updated')
            }
        })
    }

    const handleUpdateExtensionLink = () => {

        const formData = {
            ...settingData,
            extension_link: extensionLink
        }
        updateSetting(formData)
    }

    const handleUpdateCoin = () => {

        const formData = {
            ...settingData,
            sign_up_free_coin: signUpFreeCoin
        }
        updateSetting(formData)
    }
    const handleUpdateSidebarBannerLink = () => {

        const formData = {
            ...settingData,
            sidebar_banner_link: sidebarBannerLink
        }
        updateSetting(formData)
    }

    const handleUpdateSetting = (key, value) => {

        const formData = {
            ...settingData,
            [key]: value
        }

        updateSetting(formData)
    }


    const handleSidebarBannerChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setMessage('Please select a valid image.');
                setSidebarBannerFile(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
            };

            setSidebarBannerFile(file)
            reader.readAsDataURL(file);
        }
    }

    const handleSidebarBannerUpload = async () => {

        if (!sidebarBannerFile) {
            setMessage("Image Not Selected")
            return;
        }
        const formData = new FormData();
        formData.append('file', sidebarBannerFile)
        formData.append('old_file', settingData?.sidebar_banner)
        const response = await axios.post(route('admin.setting.upload-file'), formData)
        if (response.status === 200) {
            if (response.data.success) {
                handleUpdateSetting('sidebar_banner', response.data.uploaded_file)
            }
        }
    }

    const handleLogoChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setMessage('Please select a valid image.');
                setLogo(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
            };

            setLogo(file)
            reader.readAsDataURL(file);
        }
    }
    const handleCustomTaskIconChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg', 'image/webp', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setMessage('Please select a valid image.');
                setCustomCTaskIcon(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
            };

            setCustomCTaskIcon(file)
            reader.readAsDataURL(file);
        }
    }

    const handleCustomTaskIconUpload = async () => {

        if (!customTaskIcon) {
            setMessage("Image Not Selected")
            return;
        }
        const formData = new FormData();
        formData.append('file', customTaskIcon)
        formData.append('old_file', settingData?.custom_task_icon)
        const response = await axios.post(route('admin.setting.upload-file'), formData)
        if (response.status === 200) {
            if (response.data.success) {
                handleUpdateSetting('custom_task_icon', response.data.uploaded_file)
            }
        }
    }
    const handleLogoUpload = async () => {

        if (!logo) {
            setMessage("Image Not Selected")
            return;
        }
        const formData = new FormData();
        formData.append('file', logo)
        formData.append('old_file', settingData?.logo)
        const response = await axios.post(route('admin.setting.upload-file'), formData)
        if (response.status === 200) {
            if (response.data.success) {
                handleUpdateSetting('logo', response.data.uploaded_file)
            }
        }
    }


    return (
        <>
            <Head title="Setting"/>

            <AdminLayout
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Setting | Maketop</h2>}
            >
                <div
                    className={`${success ? 'flex' : 'hidden'} flex items-center justify-between mt-5 sm:mt-[30px] gap-2 w-[420px] px-2 sm:px-2.5 py-1.5 sm:py-2 rounded sm:rounded-md bg-[#00b47d]`}>
                    <div className="flex items-center gap-1.5">
                        <Check color='#FFFFFF' className={`w-4 h-4 md:w-5 md:h-5`}/>
                        <span
                            className='text-xs leading-[14px] sm:text-sm text-white'>{message}</span>
                    </div>

                    <button onClick={() => setSuccess(false)}>
                        <CloseIcon className="h-4 w-4 sm:h-5 sm:w-5" color='#ffffff'/>
                    </button>
                </div>
                <div className='flex flex-col py-3 gap-3'>
                    <div className="flex items-center py-3 gap-3 w-[800px]">
                        <p className='w-[400px] text-sm font-medium text-text-primary'>
                            Extension Link:
                        </p>

                        <input type="text"
                               value={extensionLink}
                               className='block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0'
                               placeholder='Extension Link'
                               onChange={(e) => setExtensionLink(e.target.value)}/>

                        <button type='button' className='text-sm rounded-md px-2 py-1.5 bg-card-and-hover'
                                onClick={handleUpdateExtensionLink}>Update
                        </button>
                    </div>
                    <div className="flex items-center py-3 gap-3 w-[800px]">
                        <p className='w-[400px] text-sm font-medium text-text-primary'>Sign Up Free Coin: </p>

                        <input type="number"
                               value={signUpFreeCoin}
                               max='100000'
                               min='0'
                               className='block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0'
                               placeholder='Coin'
                               onChange={(e) => setSignUpFreeCoin(e.target.value)}/>

                        <button type='button' className='text-sm rounded-md px-2 py-1.5 bg-card-and-hover'
                                onClick={handleUpdateCoin}>Update
                        </button>
                    </div>
                    <div className="flex items-center py-3 gap-3 w-[800px]">
                        <p className='w-[400px] text-sm font-medium text-text-primary'>Sidebar Banner Link: </p>

                        <input type="text"
                               value={sidebarBannerLink}
                               className='block h-8 w-[200px] bg-side-and-button rounded-md text-sm placeholder:text-sm placeholder:text-t-disabled border-none outline-none focus:ring-0'
                               placeholder='Sidebar Banner Link'
                               onChange={(e) => setSidebarBannerLink(e.target.value)}/>

                        <button type='button' className='text-sm rounded-md px-2 py-1.5 bg-card-and-hover'
                                onClick={handleUpdateSidebarBannerLink}>Update
                        </button>
                    </div>
                    <div className='flex items-center gap-3 w-[800px]'>
                        <p className='w-[400px] text-sm font-medium text-text-primary'>Sidebar
                            Banner: {settingData?.sidebar_banner}</p>
                        <label
                            className={`bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                        >Change
                            <input type="file" className="hidden" onChange={(e) => handleSidebarBannerChange(e)}/>
                        </label>
                        <button onClick={handleSidebarBannerUpload}
                                className={`px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`}
                        >Upload Banner
                        </button>
                    </div>
                    <div className='flex items-center gap-3 w-[800px]'>
                        <p className='w-[400px] text-sm font-medium text-text-primary'>Logo: {settingData?.logo}</p>
                        <label
                            className={`bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                        >Change
                            <input type="file" className="hidden" onChange={(e) => handleLogoChange(e)}/>
                        </label>
                        <button onClick={handleLogoUpload}
                                className={`px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`}
                        >Upload Logo
                        </button>
                    </div>

                    <div className='flex items-center gap-3 w-[800px]'>
                        <p className='w-[400px] text-sm font-medium text-text-primary'>Custom Task
                            Icon: {settingData?.custom_task_icon}</p>
                        <label
                            className={`bg-side-and-button px-2 sm:px-3 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  hover:bg-card-and-hover text-text-primary`}
                        >Change
                            <input type="file" className="hidden" onChange={(e) => handleCustomTaskIconChange(e)}/>
                        </label>
                        <button onClick={handleCustomTaskIconUpload}
                                className={`px-2 py-1.5 rounded sm:rounded-[6px] text-xs sm:text-sm leading-[15px] sm:leading-[20px] font-medium  bg-card-and-hover text-text-primary`}
                        >Update Icon
                        </button>
                    </div>
                </div>
            </AdminLayout>

        </>
    );
}

export default Setting;
