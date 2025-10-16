'use client'
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function CookiePolicy() {
    return(
        <div className="min-h-screen flex flex-col bg-gray-50">
            
            <div className="flex-grow py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-6 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                        
                        {/* Header */}
                        <div className="mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                Updated Cookie Policy - Social Gems 5.3.25
                            </h3>
                        </div>

                        <div className="prose prose-lg max-w-none space-y-8">
                            
                            {/* Introduction */}
                            <section className="mb-2">
                                <p className="text-black mb-2">
                                    Our App uses cookies to distinguish you from other users. 
                                    This helps us to provide you with a good experience when you 
                                    browse our App and also allows us to improve our service.
                                </p>
                                <p className="text-black mb-2">
                                    A cookie is a small file of letters and numbers that we store 
                                    on your device if you agree. Cookies contain information that 
                                    is transferred to your device's hard drive.
                                </p>
                                <p className="text-black mb-2">
                                    We use the following cookies:
                                </p>
                                
                                <ul className="list-disc list-inside space-y-2 mb-2 ml-4 text-black">
                                    <li>
                                        <strong>Strictly necessary cookies. &nbsp;</strong>
                                            These are cookies that are required for the operation of our APP. 
                                            These essential cookies are always enabled because our APP won’t 
                                            work properly without them. They include, for example, cookies 
                                            that enable you to log into sour APP, access a campaign 
                                            or make use of e-billing services.
                                    </li>
                                    <li>
                                        <strong>Analytical or performance cookies. &nbsp;</strong>
                                            These allow us to recognise and count the number of visitors
                                            and to see how visitors move around our APP when they are using it. 
                                            This helps us to improve the way our APP works, for example, by 
                                            ensuring that users are finding what they are looking for easily.
                                    </li>
                                    <li>
                                        <strong>Functionality cookies. &nbsp;</strong>
                                            These are used to recognise you when you return to our APP. 
                                            This enables us to personalise our content for you, greet you by 
                                            name and remember your preferences (for example, your choice of language or region).
                                    </li>
                                    <li>
                                        <strong>Targeting cookies.  &nbsp;</strong>
                                            These cookies record your visit to our APP, the pages you have visited and the 
                                            links you have followed. We will use this information to make our APP and the 
                                            advertising displayed on it more relevant to your interests. 
                                            We may also share this information with third parties for this 
                                            purpose so that they can serve you with relevant advertising on 
                                            their websites or APPs.
                                    </li>
                                    <p className="text-black mb-2">
                                        You can find more information about the individual cookies we 
                                        use and the purposes for which we use them in the table below:
                                    </p>
                                    {/*table*/}
                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[120px]">
                                                        Cookie Title <br />
                                                        Cookie Name
                                                    </th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[100px]">More information</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            _TekJuice.Auth
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            This cookie ensures the security and integrity of user accounts by: <br /> <br />
                                                            1.	Managing user authentication. <br />
                                                            2.	Allowing users to securely log in and access their accounts, <br />
                                                            3.	Enabling users to navigate restricted areas and perform actions available only to authenticated users. <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            N/A
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            _ga_GG0RMYYQ0B, _ga 
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Google Analytics uses cookies for various purposes related to 
                                                            tracking and analysing traffic and user behaviour. 
                                                            Here are the primary purposes of cookies used by Google 
                                                            Analytics for GDPR compliance: <br /> <br />

                                                            1.	<strong>Analytics and Performance: &nbsp;</strong>Google Analytics cookies are primarily 
                                                            utilized to collect information about how visitors interact with a 
                                                            website. They track and report data on website traffic, such as the 
                                                            number of visitors, their source, pages visited, time spent on the 
                                                            site, and other related statistics. This data helps website owners 
                                                            understand and improve their site's performance and user experience. <br />

                                                            2.	<strong>User Experience Improvement:&nbsp;</strong> The cookies help in understanding user 
                                                            preferences and behavior, allowing website owners to optimize content, 
                                                            design, and usability to enhance the overall user experience.
                                                            <br />
                                                            3.	<strong>Marketing and Advertising:&nbsp;</strong> Google Analytics cookies may also be used 
                                                            to provide insights for targeted marketing and advertising strategies. 
                                                            These cookies can track user behavior across various websites, allowing 
                                                            for more targeted and personalized advertising campaigns.
                                                            <br />
                                                            4.	<strong>Customization and Personalization:&nbsp;</strong> By tracking user interactions, 
                                                            Google Analytics cookies contribute to creating a more personalized 
                                                            experience for website visitors. This can include providing tailored 
                                                            content or recommendations based on users' browsing history and interests.
                                                            <br />
                                                            5.	<strong>Conversion Tracking:&nbsp;</strong> These cookies assist in measuring and tracking 
                                                            specific user actions on a website, such as purchases, form submissions, 
                                                            or other conversions, helping website owners understand the effectiveness 
                                                            of their marketing and site content.
                                                            <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </ul>  


                                <p className="text-black mb-2">
                                    Please note that third parties may also use cookies, over which we 
                                    have no control. These named third parties may include, for example, 
                                    advertising networks and providers of external services like web 
                                    traffic analysis services. These third party cookies are likely to 
                                    be analytical cookies or performance cookies or targeting cookies:
                                </p>
                                <p className="text-black mb-2">
                                To deactivate the use of third party advertising cookies, you may visit the relevant consumer page to manage the use of these types of cookies
                                </p>
                                <p className="text-black mb-2">
                                    To opt out of being tracked by Google Analytics across all websites, 
                                    visit &nbsp;
                                    <a href="http://tools.google.com/dlpage/gaoptout" 
                                        className="text-black text-blue-700 font-medium hover:text-purple-700 transition-colors">
                                            http://tools.google.com/dlpage/gaoptout
                                    </a>.
                                </p>
                                <p className="text-black mb-2">
                                    However, if you use your settings to block all cookies 
                                    (including essential cookies) 
                                    you may not be able to access all or parts of our APP.
                                </p>
                                <p className="text-black mb-2">
                                    Except for essential cookies.
                                </p>
                                <p className="text-black mb-2">
                                If you have any questions or concerns about our use of cookies, please send us an email at &nbsp; 
                                <a href="mailto:wensi@tekjuice.co.uk" 
                                    className="text-black text-blue-700 font-medium hover:text-purple-700 transition-colors">
                                        wensi@tekjuice.co.uk
                                </a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}