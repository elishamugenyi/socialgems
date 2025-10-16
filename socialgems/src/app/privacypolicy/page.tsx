'use client'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PrivacyPolicy() {

    return(
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            
            <div className="flex-grow py-4 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
                    <div className="px-4 py-6 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
                        
                        {/* Header */}
                        <div className="mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                Social Gems Privacy Policy/Notice
                            </h3>
                        </div>

                        <div className="mb-4 sm:mb-6">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Introduction
                            </h2>
                            <h1 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                                Last modified: 14 August 2025
                            </h1>
                        </div>

                        <div className="prose prose-lg max-w-none space-y-8">
                            
                            {/* Introduction */}
                            <section className="mb-2">
                                <p className="text-gray-700 leading-relaxed mb-2">
                                    This privacy notice describes how we will collect, use, 
                                    share and otherwise process your personal data in connection with
                                    your use of:
                                </p>
                                
                                <ul className="list-disc list-inside space-y-2 mb-2 ml-4 text-gray-700">
                                    <li>Social Gems mobile application software <strong>(App)</strong></li>
                                    <li>Any of our services that is accessible through the App <strong>(Services)</strong></li>
                                </ul>
                                
                                <div className="bg-black-50 mb-2">
                                    <p className="text-black">
                                      This App is not intended for children and we do not knowingly collect data relating to children.
                                    </p>
                                </div>
                                
                                <p className="text-gray-700 leading-relaxed">
                                    Please read the following carefully to understand our practices 
                                    regarding your personal data and how we will treat it.
                                </p>
                            </section>

                            {/* Important information and who we are */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-black mb-2">Important Information and Who We Are</h2>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    <strong>TEK JUICE LIMITED</strong> is the controller and is responsible for your personal data (we, us or our in this notice).
                                </p>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    As a member of a group of companies, we will share your personal data with other members of our group as set out below.
                                </p>
                                
                                <p className="text-black leading-relaxed">
                                    We have appointed a data privacy manager. If you have any questions about this privacy notice, please contact them using the details set out below.
                                </p>
                            </section>

                            {/* Contact details */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact details</h2>
                                
                                <p className="text-black leading-relaxed mb-2 font-bold">Our full details are:</p>
                                
                                <div className="bg-gray-50 p-6 rounded-lg mb-2">
                                    <ul className="list-disc list-inside space-y-3 text-black">
                                        <li><strong>Full name of legal entity:</strong> <strong>TEK JUICE LIMITED</strong></li>
                                        <li><strong>Email address:</strong> <a href="mailto:Wensi@tekjuice.co.uk" className="text-blue-600 hover:text-blue-800">Wensi@tekjuice.co.uk</a></li>
                                        <li><strong>Postal address:</strong> <strong>19 The Office Village, North Road, Loughborough, Leicestershire, England, LE11 1QJ</strong>
                                        </li>
                                    </ul>
                                </div>
                                
                                <p className="text-black leading-relaxed">
                                    You have the right to make a complaint at any time to the Information Commissioner's 
                                    Office (ICO), the UK regulator for data protection issues.
                                </p>
                            </section>

                            {/* Changes to the privacy notice */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">Changes to the privacy notice and your duty to inform us of changes</h2>
                                
                                <p className="text-black leading-relaxed mb-4">
                                    We keep our privacy notice under regular review.
                                </p>
                                
                                <p className="text-black leading-relaxed mb-4">
                                    This version was last updated on the date stated at the beginning of the policy. 
                                    It may change and, if it does, those changes will be posted on this page and 
                                    notified to you when you next start the App or log onto your account. 
                                    You may be required to read and acknowledge the changes to continue your 
                                    use of the App or the Services.
                                </p>
                                
                                <p className="text-black leading-relaxed">
                                 It is important that the personal data we hold 
                                 about you is accurate and current. Please keep us 
                                 informed if your personal data changes during our 
                                 relationship with you. Please visit the Profile 
                                 section to update your details.
                                 </p>
                            </section>

                            {/* Third party links and sites */}
                            <section className="mb-12">
                                <h2 className="text-2xl font-bold text-black mb-6">Third party links and sites</h2>
                                
                                <p className="text-black leading-relaxed mb-4">
                                    Our App and Services may, from time to time, contain links to and from the websites of third parties. Please note that these websites (and any services accessible through them) are controlled by those third parties and are not covered by this privacy notice.
                                </p>
                                
                                <p className="text-black leading-relaxed">
                                    You should review their own privacy notices to understand how they use your personal data before you submit any personal data to these websites or use these services.
                                </p>
                            </section>

                            {/* The Data We Collect About You */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">The Data We Collect About You</h2>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    We collect, use, store, and transfer different kinds of personal data about you.
                                </p>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    For example, when you register with us and through your transactions and interactions with us.
                                </p>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    We may also obtain additional information about you from other sources, such as social media and websites associated with you. The App also uses common automatic information collection and tracking technologies, such as cookies and beacons, to collect information about you.
                                </p>

                                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Description of categories of personal data</h2>
                                
                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        <strong>Identity Data:&nbsp;</strong> first name, last name, title, date of birth and Profile Data.
                                    </li>
                                    <li>
                                        <strong>Contact Data:&nbsp;</strong> first name, last name, contact address, email address and telephone numbers, 
                                        your communication preferences, and copies of communications between you and us.
                                    </li>
                                    <li>
                                        <strong>Profile Data:&nbsp;</strong> your email address, username and password.
                                    </li>
                                    <li>
                                        <strong> Transaction Data:&nbsp;</strong>
                                             billing and delivery addresses, payment card details, 
                                            history of your payments, purchases, deliveries, 
                                            returns and refunds and the applicable terms and 
                                            conditions of your purchases.
                                    </li>
                                    <li>
                                        <strong>Device Data: &nbsp;</strong>
                                             the type of device you use, your unique device identifier, 
                                            mobile network information, your mobile operating system, 
                                            the type of mobile browser you use, IP address, time zone setting.
                                    </li>
                                    <li>
                                        <strong>Content Data:&nbsp;</strong>
                                         information that you store or 
                                        generate in the App, being [photos, videos and associated metadata, 
                                        check-ins, posts and messages].
                                    </li>
                                    <li>
                                        <strong>Usage Data:&nbsp;</strong>
                                         logs and detail of your use of our Apps and Services, 
                                        being the dates and times on which you download, access and 
                                        update the App and our Services, any error or debugging 
                                        information, and the resources that you access and the actions 
                                        we and you take in relation to them and Cookies Data.
                                    </li>
                                    <li>
                                        <strong>Security Data:&nbsp;</strong>
                                         information we collect about your use of the App, our Services 
                                        and our Sites in order to ensure your and our other users' safety 
                                        and security, being Usage Data, the Cookies Data and the information 
                                        provided to us by our payment processing provider.
                                    </li>
                                    <li>
                                        <strong>Cookies Data:&nbsp;</strong>
                                         the information collected through the cookies and 
                                        similar technologies listed in our Cookies Notice.
                                    </li>
                                    <li>
                                        <strong>Direct Marketing Data:&nbsp;</strong>
                                         your direct marketing preferences, consents for 
                                        receiving direct marketing from us and/or our third parties and 
                                        the history of the direct marketing communications we have sent to you.
                                    </li>
                                    <li>
                                        <strong>Location Data:&nbsp;</strong>
                                         your current location as disclosed by GPS technology WiFi 
                                        connections, your IP address for the time period where you 
                                        have permitted us to collect it.
                                    </li>
                                    <li>
                                        <strong>Connected Data:&nbsp;</strong>
                                         information stored on your Device that you permit the App 
                                        to connect to, being Contacts lists, login information, and camera data.
                                    </li>
                                    <li>
                                        <strong>Social Media Data:&nbsp;</strong>
                                         your social media account information.
                                    </li>
                                    <li>
                                        <strong>Feedback Data:&nbsp;</strong>
                                         your feedback and survey responses.
                                    </li>
                                    <li>
                                        <strong>Personalization Data:&nbsp;</strong>
                                         Cookies Data, Device Data, Content Data, Transaction Data, 
                                        Connected Data, Social Media Data, Usage Data, Location Data, 
                                        and the preferences we have inferred you have and use to 
                                        personalize the App and Services, being the preferences noted in your account.
                                    </li>
                                    <li>
                                        <strong>Competition Data:&nbsp;</strong>
                                         information about the competitions you enter with us, 
                                        being your competition history, the applicable terms 
                                        and conditions, associated third parties and any additional privacy notices.
                                    </li>
                                </ul>
                                <div className="mt-2 space-y-4">
                                    <p className="text-black">
                                        We do not intentionally collect any special categories of personal 
                                        data about you (this includes details about your race or ethnicity, 
                                        religious or philosophical beliefs, sex life, sexual orientation, 
                                        political opinions, trade union membership, information about your 
                                        health, and genetic and biometric data).
                                    </p>
                                    
                                    <p className="text-black">
                                        We may collect data relating to criminal offences through the measures 
                                        we take to secure and protect our App and users.
                                    </p>
                                </div>
                            </section>

                            {/* How We Collect Your Personal Data */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">How We Collect Your Personal Data</h2>
                                
                                <p className="text-gray-700 leading-relaxed mb-2">We collect your personal data in the following ways:</p>
                                
                                <div className="space-y-4 mt-2">
                                    <div className="bg-white mb-2">
                                        <p className="text-black">
                                            <strong>Registration:&nbsp;</strong> 
                                            we collect your Identity Data and Contact Data when you register 
                                            your account with us.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Communications:&nbsp;</strong>
                                            when you communicate with us via email, one of our online forms or chat we collect your Contact Data.
                                            If you contact us through the App using the chat function, we also collect Device and Cookies Data 
                                            to operate our chat function and respond to your messages. If the communication relates to an error
                                            or problem you are having with the App or one of our Services, we will also collect Usage Data 
                                            for diagnosis and improvement.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Information you generate when using our App and Services; &nbsp;</strong> 
                                            each time you access and use our App and Services we collect Content, Device, 
                                            Cookies, Personalization and Usage Data. We collect Content Data where 
                                            you upload it to the App or interact with the content available on the App. 
                                            We collect Device, Cookies, Personalisation and Usage Data by using cookies 
                                            and other similar technologies
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Information we collect through monitoring the use of our App, Sites and Services; </strong> 
                                            Each time you access and use our App and Services we collect information 
                                            about that access and use, being Device, Content, Cookies, and Usage Data.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Additional information we otherwise collect through our App, Sites and Services where we have your consent to do so; &nbsp;</strong> 
                                            where you provide your consent, we collect your Location Data on an ongoing 
                                            basis while you have the App installed on your device.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Direct Marketing; &nbsp;</strong> 
                                            we collect and record Direct Marketing Data when we add you to our 
                                            marketing database, you request to change your direct marketing 
                                            preferences, or you interact with our direct marketing communications, 
                                            or we receive prospect information from our data broker partners.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black">
                                            <strong>Connected Data; &nbsp;</strong> 
                                            we collect Connected Data when you choose to connect your connected device 
                                            to your account.
                                        </p>
                                    </div>
                                    <div className="bg-white mt-2">
                                        <p className="text-black"><strong>Social Media Data;</strong> <br />
                                        We collect Social Media Data when you choose to connect your social media account to your account.</p>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold text-black mt-4">Information we receive from third parties and publicly available sources</h3>
                                
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    We will receive personal data about you from the third parties and public sources set out below:
                                </p>
                                
                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        <strong>Device and Cookies Data from the following parties: &nbsp;</strong>
                                            analytics providers, including Google Analytics; advertising networks; 
                                            search information providers, including Google.
                                    </li>
                                    <li>
                                        <strong>Contact, Financial and Transaction Data &nbsp;</strong>
                                            from providers of technical, payment and delivery services such as 
                                            Stripe based inside the UK.S
                                    </li>
                                    <li>
                                        <strong>Identity and Contact Data &nbsp;</strong>
                                            from publicly available sources such as Companies House and the 
                                            electoral register based inside your jurisdiction; and
                                    </li>
                                    <li>
                                        <strong>Social media sites, including <strong>Facebook and Instagram; &nbsp;</strong></strong>
                                            When you log in using your Facebook or Instagram account, we collect data as permitted
                                            by your privacy settings and Facebook’s API, including Identity, Profile, and Social 
                                            Media Data.
                                    </li>
                                    <li>
                                        <strong>Cookies; &nbsp;</strong>
                                            we use cookies (small files placed on your device) and other 
                                            tracking technologies on the App and in our direct marketing 
                                            emails to improve your experience and our development of the 
                                            App and our Services. For detailed information on the cookies we use, 
                                            the purposes for which we use them and how you can exercise your choices 
                                            regarding our use of your cookies, <strong>(see our cookie notice).
                                        </strong>
                                    </li>
                                </ul>
                            </section>

                            {/* How We Use Your Personal Data */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">How We Use Your Personal Data</h2>
                                
                                <p className="text-black mt-2">
                                    We use your personal data to provide you with the services you request and other purposes, including:
                                </p>

                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        <strong>Service Delivery; &nbsp;</strong>
                                            To operate the Social Gems App, process transactions, and provide customer support.
                                    </li>
                                    <li>
                                        <strong>Personalization:&nbsp;</strong>
                                            To tailor content and offers based on your Profile, Usage, and 
                                            Social Media Data (e.g., suggesting friends’ content or location-based deals).
                                    </li>
                                    <li>
                                        <strong>Marketing:&nbsp;</strong>
                                            To send you updates or promotions, with your consent, 
                                            using Marketing and Communications Data.
                                    </li>
                                    <li>
                                        <strong>Improvement: &nbsp;</strong>
                                            To analyze Usage and Feedback Data to enhance app features.
                                    </li>
                                    <li>
                                        <strong>Security and verification: &nbsp;</strong>
                                            To protect your account using Security and Device Data, 
                                            and to verify user identities, especially for influencers 
                                            claiming social media accounts.
                                    </li>
                                    <p className="text-black text-lg underline font-bold ml-5 mt-4">Specific Use of Facebook and Instagram Data</p>
                                    <li>
                                        <strong>Collection: &nbsp;</strong> 
                                            When you (as an influencer or user) add your Facebook or 
                                            Instagram account during registration or profile setup, 
                                            we collect your name, email, profile details, verification 
                                            status (e.g., whether the account is verified by the platform), 
                                            follower count, and (with your consent) other Social Media 
                                            Data (e.g., friends list, public posts). This is done via OAuth 
                                            authentication to ensure secure access.
                                    </li>
                                    <li>
                                        <strong> Use for Verification: &nbsp;</strong> 
                                            We use this data to confirm that you own the social media account you claim, 
                                            validate its verification status (e.g., blue checkmark or equivalent), 
                                            and confirm your follower count. This helps prevent fraud, ensures 
                                            authenticity in talent-business connections, and maintains the integrity of 
                                            the platform. For example:
                                    </li>
                                    <li>
                                    <strong>Account Ownership: &nbsp;</strong>
                                        By linking via OAuth, we verify that the login credentials match the claimed account.
                                    </li>
                                    <li>
                                        <strong>Verification Status: &nbsp; </strong>
                                            We check platform-provided indicators (e.g., Instagram's verified badge) 
                                            to confirm the account's legitimacy.
                                    </li>
                                    <li>
                                        <strong>Follower Count:  &nbsp;</strong>
                                            We access and store the public follower number to match 
                                            it against your claims, aiding in influencer qualification 
                                            for opportunities.
                                    </li>
                                    <li>
                                        <strong>Additional Uses:  &nbsp;</strong>
                                            Beyond verification, this data personalises your experience 
                                            (e.g., tailored offers based on your profile) and enhances social 
                                            interactions within the app, compliant with Facebook’s Platform Terms.
                                    </li>
                                    <li>
                                        <strong>Consent and Controls: &nbsp;</strong>
                                            You provide explicit consent during the login process, where this 
                                            privacy notice is displayed and a clear permission prompt explains 
                                            the verification purpose. You can withdraw consent or unlink your 
                                            account at any time via your profile settings, which will stop further 
                                            data access from these platforms. If consent is withdrawn, we may retain 
                                            minimal verification data (e.g., follower count snapshot) for record-keeping 
                                            if required by our service contracts, but it will no longer be used for active 
                                            personalization. 
                                    </li>
                                    <li>
                                        <strong>Performance of a contract.&nbsp;</strong>
                                            Where we need to process your personal data to perform a contract with you or 
                                            where you ask us to take steps before we enter into a contract with you. 
                                            Where we rely on performance of a contract and you do not provide the necessary 
                                            information, we will be unable to perform your contract.
                                    </li>
                                    <li>
                                        <strong>Legitimate interests.&nbsp;</strong>
                                            Where it is necessary for our legitimate interests (or those of a third party) 
                                            and your interests and fundamental rights do not override those interests. 
                                            We make sure we consider and balance any potential impact on you 
                                            (both positive and negative) and your rights before we process your 
                                            personal data for our legitimate interests. You can obtain further information 
                                            about how we assess our legitimate interests against any potential impact on 
                                            you in respect of specific activities by contacting us.
                                    </li>
                                    <li>
                                        <strong>Legal obligation.&nbsp;</strong>
                                            Where we need to use your personal data to comply with a legal or 
                                            regulatory obligation. Where we rely on legal obligation and you do not 
                                            provide the necessary information, we may be unable to fulfil a right you 
                                            have or comply with our obligations to you, or we may need to take additional 
                                            steps, such as informing law enforcement or a public authority or applying for 
                                            a court order. 
                                    </li>
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Delivery and improvement of our App and purchases &nbsp;
                                    </p>

                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To permit you to install the App and register you as a new App user 
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Identity<br />
                                                            Contact <br />
                                                            Financial <br />
                                                            Device<br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (delivering our App to you)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To take steps towards providing you with services 
                                                            at your request, to process and fulfil in-App 
                                                            campaigns and deliver services to you, including managing 
                                                            payments and sending you service communications 
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Identity <br />
                                                            Contact <br />
                                                            Transaction <br />
                                                            Device<br />
                                                            Location<br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Performance of a contract
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To provide you with your membership benefits, 
                                                            fulfil campaigns or redemption of Gems within the App
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Identity <br />
                                                            Contact <br />
                                                            Transaction<br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Performance of a contract
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Enforce our terms and conditions, including to 
                                                            collect money owed to us by you
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Identity
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (to recover debts due to us) and legal obligation
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* second table */}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Account management and profiling &nbsp;
                                    </p>

                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Combining the information we collect about you into a single 
                                                            customer account profile
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact <br />
                                                            Direct Marketing <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate Interests (to publicise and grow our business)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/*third table*/}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                    Direct marketing &nbsp;
                                    </p>

                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To send you direct marketing communications via email, 
                                                            text and/or push notification
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact <br />
                                                            Device <br />
                                                            Direct Marketing
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Consent
                                                            Unless we can rely on the soft opt-in and you 
                                                            have not opted out, in which case we rely on 
                                                            Legitimate Interest (to publicise and grow our business)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To send you direct marketing communications by 
                                                            telephone or post or email
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact <br />
                                                            Device <br />
                                                            Direct Marketing
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (to publicise and grow our business)
                                                            Unless you have opted out, in which case we rely on Consent
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/*fourth table*/}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Troubleshooting, improvement and security &nbsp;
                                    </p>

                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To administer, monitor and improve our business, 
                                                            Services and this App including troubleshooting, 
                                                            data analysis and system testing
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Identity <br />
                                                            Contact <br />
                                                            Device <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (for running our business, 
                                                            provision of administration and IT services, network security, 
                                                            maintaining the security of our App and Services, providing a 
                                                            secure service to users and preventing fraudulent and other misuse of our App) 
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Applying security measures to our processing of your personal data, 
                                                            including processing in connection with the App
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            All personal data under this privacy notice
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legal obligation (applying appropriate technical and 
                                                            organisational measures under the GDPR)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Otherwise monitoring use of the App and deploying 
                                                            appropriate security measures
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Contact <br />
                                                        Security <br />
                                                        Transaction <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (running our business, provision of 
                                                            administration and IT services, network security, maintaining 
                                                            the security of our App and services, providing a secure 
                                                            service to users and preventing fraudulent and other misuse of our App)
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*fifth table*/}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Rights and obligations &nbsp;
                                    </p>
                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To comply with our other legal obligations, including compliance with 
                                                            tax legislation, judicial, law enforcement and government authorities' 
                                                            requests
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            All personal data under this privacy notice
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legal obligation (under laws of the UK, Uganda or relevant jurisdiction) 
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*sixth table*/}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Cookies and personalisation &nbsp;
                                    </p>
                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To deploy and process personal data collected via Cookies that 
                                                            are placed on your device, as set out in the cookies note.
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Cookies
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (delivering and securing the App and our Services)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To deploy and process personal data collected via Cookies 
                                                            that are not strictly necessary, as set out in the cookies note.
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Cookies
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Consent
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To deliver (personalised) advertisements to you
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Personalisation
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Consent
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/*seventh table*/}
                                    <p className="text-black text-lg font-bold ml-5 mt-4">
                                        Other communications &nbsp;
                                    </p>
                                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                                        <div className="min-w-full px-4 sm:px-0">
                                            <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To notify you of changes to the App, Services, 
                                                            your purchases and our terms and conditions 
                                                            for ongoing contracts
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            For ongoing or prospective contracts, Performance of a contract 
                                                            Otherwise, Legitimate interests (in servicing our users and prospective users)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To notify you of updates to this privacy notice
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact <br />
                                                            Transaction <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legal obligation (to inform you of our processing under Articles 13 
                                                            and 14 of the UK GDPR [and the EU GDPR])
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To respond to your requests to exercise your rights under this notice
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            As relevant to your request
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legal obligation (complying with data subject requests under 
                                                            Chapter 3 of the UK GDPR and the EU GDPR)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To enable you to participate in a prize draw or competition 
                                                            (where applicable, please also see the separate prize or 
                                                            competition privacy notice)
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Contact <br />
                                                        Direct Marketing <br />
                                                        Competition <br />
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (in growing and publicising our business)
                                                            Unless you have previously opted out, where we will rely on Consent
                                                            Performance of a contract (once you have entered)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To ask you to complete a survey and process your response
                                                             (where applicable, please also see the separate privacy notice)
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Contact
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Legitimate interests (to analyse how users use our products or 
                                                        Services and to develop them and grow our business)
                                                        Unless you have previously opted out, where we will rely on Consent
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            To otherwise respond to your enquiries, fulfil your 
                                                            requests and to contact you where necessary
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            As relevant to your enquiry or request
                                                        </td>
                                                        <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                            Legitimate interests (service our users and prospective users) 
                                                            and legal obligation
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                {/*eighth table*/}
                                <p className="text-black text-lg font-bold ml-5 mt-4">
                                    Personal data sharing &nbsp;
                                </p>
                                <div className="overflow-x-auto -mx-4 sm:mx-0">
                                    <div className="min-w-full px-4 sm:px-0">
                                        <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Share personal data with our third-party providers 
                                                        for purposes not otherwise set out above 
                                                    </td>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Identity <br /> 
                                                        Contact <br /> 
                                                        Transaction <br /> 
                                                        Device <br /> 
                                                        Location <br /> 
                                                    </td>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Legitimate interests (for the purpose relevant to the recipient, 
                                                        as set out at "Disclosures of your personal data")
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/*ninth table*/}
                                <p className="text-black text-lg font-bold ml-5 mt-4">
                                    Business contacts &nbsp;
                                </p>
                                <div className="overflow-x-auto -mx-4 sm:mx-0">
                                    <div className="min-w-full px-4 sm:px-0">
                                        <table className="w-full table-auto border border-black text-black text-sm sm:text-base">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Purpose or activity</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[150px]">Type of personal data</th>
                                                    <th className="border border-black px-2 sm:px-4 py-2 font-bold text-black text-left min-w-[200px]">Lawful basis for processing</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Process personal data relating to staff members of our 
                                                        business contacts, including suppliers, customers and prospects
                                                    </td>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Contact
                                                    </td>
                                                    <td className="border border-black px-2 sm:px-4 py-2 align-top">
                                                        Legitimate interests (servicing and receiving products or 
                                                        services, to or from our business contacts and carry out our B2B business)
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="text-black text-lg font-bold ml-5 mt-4">
                                    Automated decision making and profiling &nbsp;
                                </p>
                                <p className="text-black ml-5 mt-2">
                                    We do not make decisions based solely on automated processing 
                                    or profiling that produce legal effects concerning you 
                                    (or have similarly significant effects).
                                </p>
                                <p className="text-black text-lg font-bold ml-5 mt-4">
                                    Criminal offence data and special category data &nbsp;
                                </p>
                                <p className="text-black ml-5 mt-2">
                                    We do not intentionally collect criminal offence data about you. 
                                    However we may process data relating to criminal offences in 
                                    monitoring the use of our App for security purposes, 
                                    where we suspect you may have committed a crime, 
                                    such as attempting to make a fraudulent purchase or 
                                    claim or circumvent the security of the App or Services. 
                                    In such circumstances we will provide that information to 
                                    law enforcement and/or use it to establish, exercise or defend a 
                                    legal claim. In those circumstances, according to the type of 
                                    activity and purpose, we will rely on legitimate interests 
                                    (protecting our business, employees and other users) and legal obligation 
                                    (where required by legal, judicial or law enforcement to disclose or process that information). 
                                </p>
                                <p className="text-black ml-5 mt-2">
                                    Special categories of personal data
                                </p>
                                <p className="text-black ml-5 mt-2">
                                    We process the following special categories of personal data about you.
                                </p>
                            </ul>

                                
                            </section>

                            {/* Sharing Your Personal Data */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">Sharing Your Personal Data</h2>
                                
                                <p className="text-black leading-relaxed mb-2">
                                    We may share your personal data with the following third parties:
                                </p>
                                <p className="text-black mt-2">
                                    <strong>Internal third parties; &nbsp;</strong>
                                    other companies in the Tek Juice Group and other associated 
                                    companies acting as processors who provide IT and system 
                                    administration services and undertake leadership reporting.
                                </p>
                                <p className="text-black mt-2">
                                    <strong> External third parties; &nbsp;</strong>
                                        Your Appstore Provider and mobile network operator to allow you to install the App.
                                </p>
                                
                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        Service providers acting as processors based in the UK, 
                                        Uganda and other jurisdictions who provide IT and system 
                                        administration services, hosting services for our App, 
                                        delivery and logistics services, payment processing, 
                                        fraud and identity verification providers, customer 
                                        service support, email delivery and administration, 
                                        and data storage and analysis.
                                    </li>
                                    <li>
                                        Our professional advisors acting as controllers based in Uganda and 
                                        the UK including lawyers, auditors, insurers, consultants and who 
                                        provide legal, accounting, insurance and services
                                    </li>
                                    <li>
                                        Your service providers that you have appointed and 
                                        we need to contact to fulfil your requests, such as your 
                                        banking or payment card provider to process your transactions.
                                    </li>
                                    <li>
                                        Marketing and promotional partners and co-operatives acting 
                                        as processors or joint controllers with whom we share data 
                                        to enhance our offerings and identify prospective customers.
                                    </li>
                                    <li>
                                        Third party partners where you have subscribed to receive marketing from or with them.
                                    </li>
                                    <li>
                                        Specific third parties listed in the table [
                                        Purposes for which we will use your personal data] above.
                                    </li>
                                    <li>
                                        Third parties to whom we may choose to sell, transfer or 
                                        merge parts of our business or our assets. Alternatively, 
                                        we may seek to acquire other businesses or merge with them. 
                                        If a change happens to our business, then the new owners may 
                                        use your personal data in the same way as set out in this privacy
                                        notice.
                                    </li>
                                    <li>
                                        HM Revenue and Customs, regulators, law enforcement, public authorities 
                                        or other third parties based in the UK , Uganda or relevant jurisdiction 
                                        where necessary to exercise our rights or comply with a legal obligation.
                                    </li>
                                    <li>
                                        Facebook and Instagram: Data is shared back to these platforms as part of 
                                        the authentication process, per their terms. Your Facebook and Instagram data 
                                        may be included in these shares, with appropriate safeguards.
                                    </li>
                                </ul>
                            </section>

                            {/* International transfers */}
                            <section className="mb-2 mt-2">
                                <h2 className="text-2xl font-bold text-black mb-2">International Transfers</h2>
                                
                                <p className="text-black mb-2">
                                    Whenever we transfer your personal data out of the EEA other than between our group 
                                    companies, we ensure a similar degree of protection is afforded to it by ensuring 
                                    at least one of the following safeguards is implemented:
                                </p>
                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        We will only transfer your personal data to countries that have been 
                                        deemed to provide an adequate level of protection for personal data.
                                    </li>
                                    <li>
                                        Where we use certain service providers located outside the EEA, 
                                        we use specific contracts approved which give personal data the same 
                                        protection it has in the EEA. For further details.
                                    </li>
                                </ul>
                                <p className="text-black mb-2">
                                    Please contact data privacy manager using the contact details above 
                                    if you want further information on the specific mechanism used by 
                                    us when transferring your personal data out of the EEA.
                                </p>
                            </section>

                            {/* Data security */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">How we protect your data/Data security</h2>
                                
                                <p className="text-black mb-2">
                                    All information you provide to us is stored on our secure servers. 
                                    Any payment transactions carried out by us or our chosen third-party 
                                    provider of payment processing services will be encrypted using Secured 
                                    Sockets Layer (SSL) technology and are stored on a secure server. 
                                    Where we have given you (or where you have chosen) a password that 
                                    enables you to access certain parts of our App or Services, you are 
                                    responsible for keeping this password confidential. We ask you not to 
                                    share a password with anyone.
                                </p>
                                <p className="text-black mb-2">
                                    Once we have received your information, we will use strict procedures and 
                                    security features to protect your personal data from loss, unauthorized 
                                    use or access.
                                </p>
                                <p className="text-black mb-2">
                                    Certain Services include social networking, chat room or forum features. 
                                    Ensure when using these features that you do not submit any personal 
                                    data that you do not want to be seen, collected or used by other users.
                                </p>
                                <p className="text-black mb-2">
                                    We have put in place procedures to detect and respond to personal data breaches 
                                    and notify you and any applicable regulator when we are legally required to do so.
                                </p>
                            </section>

                            {/* Data retention */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">Data Retention</h2>
                                
                                <p className="text-black mb-2">
                                    In some circumstances you can ask us to delete your data: see below for further information.
                                </p>
                                <p className="text-black mb-2">
                                    Once we no longer have a legal right to hold your personal data, we will delete or, 
                                    in some circumstances, we will anonymise your personal data 
                                    (so that it can no longer be associated with you) for research or statistical purposes, 
                                    in which case we may use this information indefinitely without further notice to you.
                                </p>
                            </section>

                            {/* Your Legal Rights */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">Your Legal Rights</h2>
                                
                                <p className="text-black mb-2">
                                    You have the following rights under data protection laws in relation to your personal data.
                                </p>
                                <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                    <li>
                                        <strong>Access.&nbsp;</strong>
                                            Request access to and/or a copy of the personal data we process about you 
                                            (commonly known as a data subject access request). This enables you to 
                                            check that we are lawfully processing it.
                                    </li>
                                    <li>
                                        <strong>Correction.&nbsp;</strong>
                                            Request correction of any incomplete or inaccurate data we hold about you. 
                                            (We may need to verify the accuracy of the new data you provide to us.)
                                    </li>
                                    <li>
                                        <strong>Deletion.&nbsp;</strong>
                                            Request us to delete or remove personal data where there is no good reason for 
                                            us continuing to process it. You also can ask us to delete or remove your 
                                            personal data where you have successfully exercised your right to object 
                                            to processing (see below), where we have processed your information 
                                            unlawfully or where we need to erase your personal data to comply with law. 
                                            (In some cases, we may need to continue to retain some of your personal data 
                                            where required by law. If these apply, we will notify you at the time of our response.)
                                    </li>
                                    <li>
                                        <strong>Objection.&nbsp;</strong>
                                            Object to us processing your personal data where (a) we are relying on 
                                            legitimate interests as the lawful basis and you feel the processing 
                                            impacts on your fundamental rights and freedoms, or (b) the processing 
                                            is for direct marketing purposes. In some cases, we may refuse your 
                                            objection if we can demonstrate that we have compelling legitimate grounds 
                                            to continue processing your information which override your rights and freedoms.
                                    </li>
                                    <li>
                                        <strong>Restriction.&nbsp;</strong>
                                            Request that we restrict or suspend our processing of your personal data:
                                            <ul className="list-disc list-inside space-y-3 pl-8 text-black">
                                                <li>
                                                    if you want us to establish the data's accuracy;
                                                </li>
                                                <li>
                                                    where our use of the data is unlawful, but you do not want us to erase it;
                                                </li>
                                                <li>
                                                    where we no longer require it, but you need us to hold onto it to establish, 
                                                    exercise or defend legal claims; or
                                                </li>
                                                <li>
                                                    you have objected to our use of your data, but we need to verify 
                                                    whether we have overriding legitimate grounds to use it.
                                                </li>
                                            </ul>
                                    </li>
                                    <li>
                                        <strong>Data portability. &nbsp;</strong>
                                            Request we transfer certain of your personal data to you or your 
                                            chosen third party in a structured, commonly used, machine-readable format. 
                                            This right only applies to information processed by automated means that 
                                            we process on the lawful bases of consent or performance of a contract.
                                    </li>
                                    <li>
                                        <strong>Withdraw consent.&nbsp;</strong>
                                            Withdraw your consent at any time where we are relying on consent to process your 
                                            personal data. Please know that this does not affect the lawfulness of any 
                                            processing carried out before you withdraw your consent, and after withdrawal, 
                                            we may not be able to provide certain products or services to you. 
                                            We will advise you if this is the case at the time you withdraw your consent.
                                    </li>
                                    <li>
                                        <strong>Complain to the relevant data protection regulator. &nbsp;</strong>
                                            If you are unhappy with how we process your personal data, we ask that you contact 
                                            us first using the details below so that we have the chance to put it right. 
                                            However, you also have the right to make a complaint to the ICO or applicable 
                                            data protection register at any time.
                                    </li>
                                </ul>
                                <p className="text-black mb-2">
                                    You can exercise any of these rights at any time by contacting us at
                                    <a 
                                        href="mailto:wensi@tekjuice.co.uk" 
                                        className="text-black text-blue-700 font-medium hover:text-purple-700 transition-colors"
                                        >
                                        &nbsp;wensi@tekjuice.co.uk
                                    </a>
                                </p>
                            </section>

                            {/* Contact Details */}
                            <section className="mb-2">
                                <h2 className="text-2xl font-bold text-black mb-2">Contact Details</h2>
                                
                                <div>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        We have appointed a data privacy manager. If you have any questions about 
                                        this privacy notice or our data protection practices, please contact the 
                                        data privacy manager. Our contact details are
                                        <a 
                                            href="mailto:wensi@tekjuice.co.uk" 
                                            className="text-black text-blue-700 font-medium hover:text-purple-700 transition-colors"
                                        >
                                        &nbsp;wensi@tekjuice.co.uk
                                    </a> and 
                                    <a 
                                        href="mailto:Nobert@tekjuice.co.uk" 
                                        className="text-black text-blue-700 font-medium hover:text-purple-700 transition-colors"
                                        >
                                        &nbsp;Nobert@tekjuice.co.uk
                                        </a>
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}