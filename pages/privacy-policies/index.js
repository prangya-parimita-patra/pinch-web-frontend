import Head from "next/head";
import BrandName from "../../Common/BrandName";
import Footer from "../../Common/Footer/Footer";
import backgroundImage from "../../public/bg.png";
import Image from "next/image";
import privacyStyle from "./privacy.module.css";

const index = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Pinchapp</title>
        <meta
          name="description"
          content="Pinch is an application that enables 
        you to keep your credit card and debit card information handy. It 
        securely stores all your card details in one place."
        />
      </Head>
      <div className="main-bg">
        {/* <BrandName /> */}
        <div className={privacyStyle.policies}>
          <div
            className={`${privacyStyle.privacyTitle} ${privacyStyle.textSecondary}`}
          >
            <h1>Privacy Policy</h1>
          </div>
          <small
            className={privacyStyle.privacyUpdate}
            style={{ textDecoration: "underline" }}
          >
            Last updated on 17th August 2022
          </small>

          <p className={privacyStyle.privacypara}>
            This Privacy Policy is incorporated by reference into Pinch App
            Private Limited Terms of Service (the “Terms”).
          </p>
          <p className={privacyStyle.privacypara}>
            Website pinchapp.in and/or the mobile application ‘Pinch’
            (collectively referred to as the “Platform”) is owned and operated
            by Equiseed Wealth Private Limited, a private limited company having
            its registered office at Raj Tarang, Dahisar East, 400068. which
            shall include its affiliates and group entities, together referred
            to as “Company”, “We”, “Us” or “Our”.
          </p>
          <p className={privacyStyle.privacypara}>
            This Privacy Policy applies to all the Users whose Personal
            Information has been processed by Us in the course of our business,
            mobile applications, forums, blogs, and other online or offline
            offerings
          </p>
          <p className={privacyStyle.privacypara}>
            We respect your privacy and hence handle your personal data with the
            utmost care and confidentiality. Please read the Privacy Policy
            carefully prior to using or registering on the Platform or
            accessing/availing the services on the Platform inter alia in
            relation to purchase/sale/transfer of Digital Gold from a brand
            named Augmont Goldtech Private Limited”(hereinafter referred as
            “Augmont”) a company incorporated under the laws of India
            (“Services”).
          </p>
          <p className={privacyStyle.privacypara}>
            Also please read the Privacy Policy carefully prior to using or
            registering on the Platform or accessing/availing the services on
            the Platform including interalia in relation to mutual fund
            distribution, stock broking services, investment advisory services
            and KRA/KYC verification (“Services”).
          </p>
          <p className={privacyStyle.privacypara}>
            This Privacy Policy specifies the manner in which personal data and
            other information is collected, received, stored, processed,
            disclosed, transferred, dealt with or otherwise handled by the
            Company. This Privacy Policy does not apply to information that You
            provide to, or that is collected by, any third-party (excluding the
            Company or its affiliates set out in paragraph 4 below) through the
            Platform, and any Third-Party Sites that You access or use in
            connection with the services offered on the Platform.
          </p>
          <p className={privacyStyle.privacypara}>
            It is important that you read this privacy notice together with any
            other privacy policy or fair processing notice we may provide on
            specific occasions or when we are collecting or processing Personal
            Information about You so that You are fully aware of how and why we
            are using Your Personal Information . Additionally, we also
            recommend you to read the terms and privacy policy of Augmont which
            can be accessed at{" "}
            <a
              href="https://www.augmont.com/privacy-policy"
              className={privacyStyle.textSecondary}
            >
              https://www.augmont.com/privacy-policy
            </a>
          </p>
          <p className={privacyStyle.privacypara}>
            This privacy notice supplements the other notices/policy and is not
            intended to supersede them.
          </p>
          <p className={privacyStyle.privacypara}>
            By visiting the Platform, You (“You” or “Your”), accept and agree to
            be bound by the terms and conditions of this privacy policy
            (“Privacy Policy”). This Privacy Policy is incorporated into and
            subject to the terms of use of the Platform (“Terms”) and shall be
            read harmoniously and in conjunction with the Terms.
          </p>

          <div className={privacyStyle.informationPoints}>
            <ol>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                COLLECTION OF INFORMATION
              </li>
              <p>
                <ul style={{ listStyle: "none" }}>
                  <li className={privacyStyle.privacypara}>
                    1.1 Information that You Provide to Us:
                  </li>
                  <div>
                    <p className={privacyStyle.privacypara}>
                      We collect, utilise, and handle your personal information,
                      including sensitive information, in order to provide you
                      with the services. The sorts of personal information we
                      may collect (directly from you or through third-party
                      sources) and our privacy standards are determined by the
                      nature of your connection with the Company as well as
                      applicable legal obligations.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      While registering on Our Platform for using Our Services,
                      We collect Your Personal Information including sensitive
                      personal information such as name, mobile number, email
                      address, password, date of birth, gender. We use your
                      contact information, such as your email address or phone
                      number, to authenticate your account and keep it, to
                      secure our services and to help prevent spam, fraud, and
                      abuse. We also use contact information to personalize our
                      Services, enable certain account features and to send you
                      information about our Services. If you provide us with
                      your phone number and email id, you agree to receive text
                      messages from Equiseed Wealth / Pinch to that number. In
                      addition to the Personal Information mentioned above and
                      in order to provide Services to You when you purchase Gold
                      in excess of 30grams We may also collect your KYC
                      information including Your Proof of identity like Aadhaar
                      number, driving license, PAN number, finger – print
                      details and signature solely for completing the account
                      opening procedures and authenticating Your transactions on
                      the Platform. The act of providing Your Aadhaar is
                      voluntary in nature and the Company, hereby agrees and
                      acknowledges that they will collect, use and store such
                      details in compliance with applicable laws and this
                      Privacy.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      Furthermore, you may provide to Us voluntarily while
                      registering on Our Platform for using Our Services, such
                      as mobile number, email address, password, date of birth,
                      gender, Permanent Account Number (PAN), signature, marital
                      status, nominee details, We may also ask You for certain
                      financial information, including Your billing address,
                      bank account details, credit card number, expiration date
                      and/or other payment related details or other payment
                      method data, and debit instructions or other standing
                      instructions to process payments for the Services. We may
                      ask You to provide certain additional information about
                      Yourself on a case to case basis. All information
                      disclosed by You shall be deemed to be disclosed willingly
                      and without any coercion. No liability pertaining to the
                      authenticity/ genuineness/misrepresentation/
                      fraud/negligence, etc. of the information disclosed shall
                      lie on the Company nor will the Company be in any way
                      responsible to verify any information obtained from You;
                    </p>
                    <p className={privacyStyle.privacypara}>
                      We may retrieve from Your records available with third
                      party including from Know Your Customer (KYC) Registration
                      Agency (KRA) such as name, KYC details, KYC status,
                      father’s name, occupation, address details and related
                      documents.;
                    </p>
                    <p className={privacyStyle.privacypara}>
                      Further, if You choose to invest through the Platform, We
                      will also collect information about Your transactions
                      including transaction status and details and Your
                      investment behaviour;{" "}
                    </p>
                    <p className={privacyStyle.privacypara}>
                      When and if You download and/or use the Platform through
                      Your mobile, We may receive information about Your
                      location, Your IP address, and/or Your mobile device,
                      including a unique identifier number for Your device. We
                      may use this information to provide You with
                      location-based Services including but not limited to
                      search results and other personalized content. You can
                      withdraw Your consent at any time by disabling the
                      location-tracking functions on Your mobile. However, this
                      may affect Your enjoyment of certain functionalities on
                      Our Platform.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      You may also be asked for certain financial information,
                      including UPI autopay mandate via Paytm, PhonePe or
                      Razorpay. All the payment transactions made through the
                      Platform are electronically processed by third party
                      service provider. All UPI payments and/or card payments
                      are subject to authorisation by UPI service providers
                      and/or card issuer and are electronically processed by UPI
                      payment aggregators or approved payment gateway provider
                      including Phone Pe - https://www.phonepe.com/, Paytm -
                      https://paytm.com/, Razorpay: https://razorpay.com/.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      If You choose to post messages on our message boards, chat
                      rooms or other message areas or leave feedback, We will
                      collect and store such information You provide to Us. We
                      retain this information as necessary to resolve disputes,
                      provide customer support, respond to queries and inquires,
                      and troubleshoot problems and improve the Services.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      If You send us correspondence, such as emails or letters,
                      or if other users or third parties send us correspondence
                      about Your activities or postings on the Platform, We may
                      collect and retain such information into a file specific
                      to You for responding to Your request and addressing
                      concerns in relation to Your use of the Platform. We shall
                      be entitled to retain Your Personal Information and other
                      information for such duration as may be required for the
                      purposes specified hereunder and will be used by Us only
                      in accordance with this Privacy Policy.
                    </p>
                    <p className={privacyStyle.privacypara}>
                      We may ask You to provide certain additional information
                      about Yourself on a case-to-case basis. All information
                      disclosed by You shall be deemed to be disclosed willingly
                      and without any coercion. No liability pertaining to the
                      authenticity/ genuineness/misrepresentation/
                      fraud/negligence, etc. of the information disclosed shall
                      lie on the Company nor will the Company be in any way
                      responsible to verify any information obtained from You.
                    </p>
                  </div>
                  <li className={privacyStyle.privacypara}>
                    1.2 Automated Collected Information
                  </li>
                  <div>
                    <ol type="a">
                      <li className={privacyStyle.privacypara}>
                        Information on usage and logs :
                      </li>
                      <div>
                        <p className={privacyStyle.privacypara}>
                          Our servers (which may be hosted by a third-party
                          service provider) collect information from you, such
                          as your browser type, operating system, Internet
                          Protocol (IP)address (a number that is automatically
                          assigned to your computer when you use the Internet,
                          which may vary from session to session), domain name,
                          and/or the date/time of your visit, in order to make
                          our Platform and Services more useful to you. We use
                          this data to analyse our traffic and see how our
                          visitors interact with our website. Although we may be
                          able to link this information to your account, it will
                          not allow you to be personally identifiable. We use
                          this information to improve your technical access to
                          our services (for example, by adapting our services to
                          the terminal equipment you&apos;re using) and to
                          detect and prevent any misuse. We also use anonymized
                          usage data for statistical reasons and to improve our
                          site. We will also collect information on Your
                          transactions, including transaction status and
                          details, as well as Your investment behaviour, if You
                          opt to invest using the Platform. We use this
                          information to offer you with services.
                        </p>
                      </div>
                      <li className={privacyStyle.privacypara}>
                        Location Information :
                      </li>
                      <div>
                        <p className={privacyStyle.privacypara}>
                          We may receive information about Your location, IP
                          address, and/or mobile device, including a unique
                          identifying number for Your device, if You download
                          and/or use the Platform through your mobile device.
                          This information may be used to provide You with
                          location-based Services, such as search results and
                          other tailored content. You can revoke Your consent at
                          any moment by turning off the location-tracking
                          features on your smartphone. However, this may limit
                          Your ability to use some features on Our Platform.
                        </p>
                      </div>

                      <li className={privacyStyle.privacypara}>
                        Information from third parties :
                      </li>
                      <div>
                        <p className={privacyStyle.privacypara}>
                          We acquire information from third parties using
                          tracking technology to track and store activities on
                          our service. Third-party data on browser-based,
                          network-based, AD-tracking, and user UX behaviour
                          tracking is gathered. We collect data to better
                          understand and track user behaviour as a security and
                          connection integrity measure. We shall preserve such
                          information for our own records and never share it
                          with anybody else.
                        </p>
                        <p className={privacyStyle.privacypara}>
                          Also, keep in mind that third-party services&apos;
                          policies govern how they collect, use, store, and
                          disclose Your information, and Platform and/or Company
                          shall have no liability or responsibility for the
                          privacy practises or other actions of any third-party
                          services that may be enabled within the Service.
                        </p>
                      </div>
                      <li className={privacyStyle.privacypara}>Cookies : </li>
                      <div>
                        <p className={privacyStyle.privacypara}>
                          We collect information about the date and time of your
                          visit, as well as the content you looked for and
                          viewed, using cookies and URL information. Cookies are
                          little digital signature files that your web browser
                          saves and uses to remember your preferences when you
                          visit thePlatform. They can also be used to track your
                          repeat visits to the site. To provide you with a more
                          personal and engaging experience on our Site, we may
                          use both session Cookies (which expire once you shut
                          your web browser) and permanent Cookies (which stay on
                          your computer until you delete them). Persistent
                          Cookies can be deleted by following the instructions
                          in your Internet browser&apos;s help file.
                        </p>
                      </div>
                    </ol>
                  </div>
                </ul>
                <div className={privacyStyle.privacypara}>
                  <p>
                    The following are the basic categories in which we utilise
                    cookies, web beacons, and other similar technologies:
                  </p>
                  <div>
                    <ol type="i">
                      <li className={privacyStyle.privacypara}>
                        Required for operations. Cookies, web beacons, and other
                        similar technologies that are required for the operation
                        of our Services may be used. This includes technology
                        that allow you to access our Services; those that are
                        required to identify unusual site behaviour, prevent
                        fraudulent activity, and improve security; and those
                        that allow you to use our services such as product
                        information, stored search, or similar functions.
                      </li>
                      <li className={privacyStyle.privacypara}>
                        Related to Performance. We may use cookies, web beacons,
                        or other similar technologies to evaluate the
                        performance of our Services, such as as part of our
                        analytic practises to help us understand how our
                        visitors use our Services, determine if you have
                        interacted with our messaging, determine whether you
                        have viewed an item or link, or to improve the content,
                        applications, services, or tools available on our
                        Services;
                      </li>
                      <li className={privacyStyle.privacypara}>
                        Related to Functionality. When accessing or using our
                        Services, we may use cookies, web beacons, or other
                        similar technologies to provide you with better
                        functionality. This could include recognising you when
                        you sign into our Services or keeping track of your
                        selected preferences, interests, or previously viewed
                        items so that we can improve the presentation of
                        material on our Services.
                      </li>
                      <li className={privacyStyle.privacypara}>
                        <p>
                          Targeting or advertising-related We may use
                          first-party or third-party cookies and web beacons on
                          our Services or on third-party sites to display
                          content, such as adverts tailored to your interests.
                          This involves utilising technology to determine the
                          utility of adverts and content given to you, such as
                          whether you have clicked on an advertisement. If you
                          want to opt out of the Technologies we use on our
                          Platform, services, applications, or tools, you can do
                          so by blocking, uninstalling, or disabling them
                          according to your browser&apos;s or device&apos;s
                          capabilities.
                        </p>
                        <p>
                          We use the information we gather to deliver Services
                          and features on the Platform that are most likely to
                          meet Your needs, as well as to modify the Platform to
                          make Your experience safer and easier.
                        </p>
                        <p>
                          You can, however, visit the Platform without exposing
                          your identity or any Personal Information about
                          yourself. We shall only collect and store Non-Personal
                          Information in this circumstance. You are no longer
                          anonymous to Us once you have provided us with your
                          Personal Information. We specify which fields are
                          required and which fields are optional for You
                          whenever feasible while supplying information to Us.
                          You always have the option of not providing Personal
                          Information to Us through the Platform by declining to
                          use a specific Service or feature offered by Us on the
                          Platform that needs such information. Based on Your
                          behaviour on the Platform, we may automatically
                          monitor certain information about You.
                        </p>
                        <p>
                          This data is used to conduct internal research on Your
                          demographics, interests, and behaviour in order to
                          better understand, protect, and serve You. The Company
                          compiles and analyses this data on an aggregated
                          basis, not individually, and in a way that does not
                          directly identify You.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </p>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                USAGE OF YOUR INFORMATION
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  We utilise both personal and non-personal information for the
                  following purposes:
                </p>
                <ul>
                  <li>
                    to supply and improve the Services requested on the
                    Platform;
                  </li>
                  <li>to settle disagreements and troubleshoot issues;</li>
                  <li>
                    to assist in promoting a safe service on the Platform and
                    protecting the Platform&apos;s, Services&apos;, and
                    users&apos; security and integrity;
                  </li>
                  <li>
                    obtain payment from You in connection with the Services,
                  </li>
                  <li>
                    keep you informed about deals, products, services, and
                    updates available both online and offline;
                  </li>
                  <li>
                    personalise Your Platform experience or exchange marketing
                    materials with You;
                  </li>
                  <li>
                    to detect, prevent, and protect Us on the Platform from any
                    mistakes, fraud, or other unlawful or prohibited activities;
                  </li>
                  <li>uphold and communicate our rules and conditions;</li>
                  <li>
                    to process and fulfil Your Service request, or to reply to
                    Your comments and questions on the Platform;
                  </li>
                  <li>to get in touch with you;</li>
                  <li>
                    to enable Our business partners and/or affiliates to send
                    You personalised messages;
                  </li>
                  <li>
                    to transmit critical information or changes in the
                    Company&apos;s Services, usage of the Platform, and the
                    terms/policies that govern the relationship between You and
                    the Company, as well as Our affiliates, as described in
                    paragraph 3 below for delivering services to You; and
                  </li>
                  <li>
                    after getting Your consent at the time of collected for any
                    other purpose.
                  </li>
                </ul>
                <div>
                  <p className={privacyStyle.privacypara}>
                    Furthermore, by clicking on the authentication email/message
                    issued by the Company to Your registered email address
                    and/or registered mobile number, You may give Your explicit
                    approval to connect/integrate Your email account(s) and/or
                    registered mobile number with Your account on the Platform.
                    In each occasion, you will be explicitly asked if you want
                    to link your email address and/or registered cellphone
                    number to your Platform account. You can also connect one or
                    more of Your email accounts to Your Platform account to
                    provide Us access to them. Once connected, the Platform will
                    securely access and analyse your emails and passwords, as
                    well as any text messages sent to your registered mobile
                    number, to populate and track Your investment details and
                    history, including those made through the Platform account,
                    and consolidate them in one place.
                  </p>
                  <p className={privacyStyle.privacypara}>
                    You also agree and consent to Us collecting, storing,
                    processing, transferring, and sharing information (including
                    Personal Information) about You with third parties such as
                    entities registered under applicable laws with the
                    Securities Exchange Board of India, National Stock Exchange
                    of India Limited/BSE Limited/Central Registry of
                    Securitisation Asset Reconstruction and Security Interest of
                    India (CERSAI)/payment gateways/collecting banks/KRAs, and
                    so on.
                  </p>
                  <p className={privacyStyle.privacypara}>
                    In addition to the foregoing, We identify and use Your IP
                    address to assist us in diagnosing and resolving problems
                    with Our server, as well as administering the Platform. Your
                    IP address is also used to identify you and collect broad
                    demographic data.
                  </p>
                  <p className={privacyStyle.privacypara}>
                    We may invite You to participate in optional online surveys
                    from time to time. You may be asked for your contact
                    information and demographic information in these surveys
                    (like zip code, age, or income level). We use this
                    information to personalise Your Platform experience by
                    showing you stuff that we think you&apos;ll like and
                    displaying content based on your preferences. We will use
                    Your Personal Information to send You promotional emails,
                    but You will have the option to opt-out of receiving such
                    emails from Us. If You choose not to receive promotional
                    emails, the Company may nevertheless send You
                    non-promotional communications, such as information about
                    the Services and Your Platform account.
                  </p>
                  <p className={privacyStyle.privacypara}>
                    The Company will only use the data received through this
                    integration to provide the Services and to improve Your
                    experience with the Platform&apos;s features, as well as to
                    consolidate your investment details and history. The Company
                    agrees and acknowledges that it will not use or transfer any
                    data or information obtained from the integration of email
                    addresses with the Platform account to third parties for the
                    purpose of displaying advertisements, including retargeting,
                    tailored, or interest-based advertising. However, in order
                    to provide you with the Services, we may share your
                    information with Augmont and its affiliates. You also accept
                    and consent to Us collecting, storing, processing,
                    transferring, and sharing information (including Personal
                    Information) about You with third parties for the sole
                    purpose of processing your transaction requests for the
                    Services. We will not disclose Your Personal Information
                    with another Platform user or vice versa unless and until
                    You specifically give Us your consent to do so.
                  </p>
                </div>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                INFORMATION SHARING
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  We may share Your Personal Information and/or other
                  Non-Personal Information with Our partners, collaborators, and
                  affiliates, such as Equiseed Wealth Pvt ltd, Augmont, BSE Star
                  MF and its subsidiaries, in order for them to provide Services
                  to You via the Platform. Please be aware that this Privacy
                  Policy will apply to all information shared with our partners,
                  collaborators, and affiliates or made available to our
                  partners, collaborators, and affiliates.
                </p>
                <p className={privacyStyle.privacypara}>
                  Pinch may gather Your Aadhaar, finger-print details, and
                  signature in addition to your Personal Information in order to
                  provide Services to You. This information is used strictly for
                  completing account opening procedures and authenticating Your
                  transactions on the Platform. The act of supplying Your
                  Aadhaar is voluntary, and the Company, Pinch, hereby
                  undertakes to collect, use, and retain such information in
                  accordance with applicable laws and this Privacy Policy.
                </p>
                <div>
                  <p className={privacyStyle.privacypara}>
                    To the extent necessary, the Company may disclose Your
                    information:
                  </p>
                  <ul>
                    <li>
                      must follow the law and respond to legitimate demands and
                      legal processes;
                    </li>
                    <li>
                      to safeguard the Company&apos;s, Our users&apos;, and
                      others&apos; rights and property, including to enforce the
                      Terms, and
                    </li>
                    <li>
                      in an emergency to safeguard the Company&apos;s,
                      users&apos;, or any other person&apos;s personal safety
                      and assets. The Company is not responsible for alerting
                      You or requesting Your approval or consent in such an
                      event.
                    </li>
                  </ul>
                </div>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                INFORMATION COLLECTION AND LINKS TO OTHER THIRD-PARTY WEBSITES
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  In the event of a merger, sale, reorganisation, amalgamation,
                  joint ventures, assignment, restructuring of business, or
                  transfer or disposition of all or any portion of Our business,
                  We and Our affiliates may share/transfer/assign all of Your
                  Personal Information and other information with any other
                  business entity(ies) in compliance with applicable laws.
                </p>
                <p className={privacyStyle.privacypara}>
                  Our Platform may provide links to other third-party platforms
                  (&quot;Third-Party Sites&quot;) that may gather Personal
                  Information about you, such as your IP address, browser type,
                  or operating system. The Company is not responsible for the
                  security of such information, their privacy policies, or the
                  content of the Third-Party Sites in any way. These third-party
                  service providers and Third-Party Sites may have their own
                  privacy rules that govern the storage and preservation of Your
                  personal information. This Privacy Policy does not apply to
                  any information that is given to, stored on, or utilised by
                  these third-party providers and Third-Party Sites. When You
                  visit a Third-Party Site, we urge that You read the privacy
                  policy to see how the Third-Party Site protects Your
                  information.
                </p>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                Connecting Your Email Account
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  By clicking on the authentication email delivered by the
                  Company to Your registered email address, you can also give
                  Your explicit approval to connect/integrate Your email
                  account(s) with Your account on the Platform. In each
                  occasion, you will be explicitly asked if you want to link
                  your email address to your Platform account. You can also
                  connect one or more of Your email accounts to Your Platform
                  account to provide Us access to them.
                </p>
                <p className={privacyStyle.privacypara}>
                  Once connected, the Platform will securely access and analyse
                  your emails, including any attachments from CAMS or
                  Karvy&apos;s Consolidated Account Statement (CAS), as well as
                  any passwords, to populate and track Your investment details
                  and history, including those made through the Platform
                  account, and consolidate them in one place. The Company will
                  only use the data received through this integration to provide
                  the Services and to improve Your experience with the
                  Platform&apos;s features, as well as to consolidate your
                  investment information and history. The Company agrees and
                  acknowledges that it will not use or transfer any data or
                  information obtained from the integration of email addresses
                  with the Platform account to third parties for the purpose of
                  providing adverts, such as retargeting, personalised, or
                  interest-based advertising. In addition, the Company agrees to
                  guarantee that all of its employees, agents, contractors, and
                  successors follow all applicable laws at all times.
                </p>
                <p className={privacyStyle.privacypara}>
                  We recommend You to review the information before consenting
                  to the Platform&apos;s integration of your email addresses
                  with your account. You can de-link your email addresses from
                  the account you created on the Platform at any moment by using
                  the Platform&apos;s features to manage these connections.
                  Permissions for Google Mail, for example, can be found at
                  myaccount.google.com/permissions. Any time a user wishes, they
                  can de-link their access to their email accounts.
                </p>
                <p className={privacyStyle.privacypara}>
                  Pinch will adhere to the Google API Services User Data Policy,
                  including the Limited Use limitations, when using information
                  obtained via Google APIs.
                </p>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                Security Measures and Precautions{" "}
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  In accordance with relevant laws, Our Platform has appropriate
                  security measures and protections in place to protect Your
                  privacy and Personal Information from loss, misuse,
                  unauthorised access, disclosure, destruction, and alteration.
                  Furthermore, We provide the usage of a secure server whenever
                  You change or access Your account on the Platform or any
                  information related to it.
                </p>
                <p className={privacyStyle.privacypara}>
                  We cannot, however, guarantee the security of any information
                  You transmit to the Company, or that Your Personal Information
                  and/or other Non-Personal Information provided for the
                  purposes of using the Services or Platform will not be
                  accessed, disclosed, altered, or destroyed if any of Our
                  security measures and safeguards are breached. It is also
                  clarified that You have the responsibility to ensure that You
                  take adequate physical, managerial, and technical safeguards
                  at Your end to preserve the integrity and security of Your
                  data, which includes but is not limited to Your Personal
                  Information, for as long as You access and/or use the Platform
                  (directly or indirectly).Encryption technology will be used to
                  protect payment information transmitted on or via the
                  Platform. You expressly agree that your information will be
                  shared with third-party service providers, such as payment
                  gateways, in order to process payments and handle your
                  payment-related information. As a result, the Company cannot
                  guarantee that transmissions of Your payment-related
                  information or Personal Information will always be safe, or
                  that unauthorised third parties will never be able to bypass
                  the Company&apos;s or its third-party service providers&apos;
                  security measures. The Company disclaims all liability and
                  responsibility for the disclosure of Your personal information
                  as a result of transmission mistakes, unauthorised third-party
                  access, or other events beyond its control.You play a critical
                  part in ensuring the security of Your personal information.
                  You must not share Your Personal Details or any other account
                  security information with anybody. With respect to Your use of
                  the Platform operated by Us and Our Services, the Company has
                  taken reasonable steps to protect Your privacy. However, We
                  are not responsible for any unauthorised or unlawful
                  disclosures of Your personal information by third parties
                  outside of Our control.
                </p>
              </div>

              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                POLICY ON DATA STORAGE AND RETENTION
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  As you use Cloudflare&apos;s services, we collect and store
                  your data and Personal Information, and we&apos;ll keep it for
                  as long as it&apos;s needed to fulfil the objectives for which
                  it was collected. Processed and non-identifiable data, on the
                  other hand, will be kept indefinitely.
                </p>
                <p className={privacyStyle.privacypara}>
                  We consider the amount, nature, and sensitivity of the
                  personal data, the potential risk of harm from unauthorised
                  use or disclosure of your personal data, the purposes for
                  which we process your personal data and whether we can achieve
                  those purposes through other means, and the applicable legal
                  requirements when determining the appropriate retention period
                  for personal data.
                </p>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                DISCLAIMER
              </li>
              <div>
                <p>
                  The Company is only offering a Augmont distributor platform
                  that facilitates sale and investment transactions for Users
                  and will not be held liable in any way for the
                  products/services provided to You. You agree and acknowledge
                  that the data and information provided on the Platform does
                  not constitute advice of any kind and should not be relied
                  upon by You when making investment decisions, and that You are
                  solely responsible for any investment decisions and mutual
                  fund purchases made on the Platform.
                </p>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                Your Consent and Privacy Policy Changes
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  Consent from You: You signal Your approval of the provisions
                  of the Privacy Policy by accessing the Platform or setting
                  up/creating an account on the Platform for the purpose of
                  using the Platform&apos;s Services at that time.
                </p>
                <p className={privacyStyle.privacypara}>
                  Withdrawal of consent: You have the right to revoke the
                  consent you have given here at any time. This revocation of
                  consent must be addressed to support@pinchapp.in in writing.
                  We request that you do not access the Platform or use the
                  Services if you do not provide your consent, and we reserve
                  the right to refuse to provide you with any services through
                  the Platform if you do not provide your consent. In this case,
                  the Company may delete or de-identify Your information
                  (personal or otherwise) to make it anonymous and untraceable
                  to You.
                </p>
                <p className={privacyStyle.privacypara}>
                  Changes to the Privacy Policy: We reserve the right to amend,
                  modify, add, or remove elements of this Privacy Policy at any
                  time and without prior notice to You. Any modifications or
                  upgrades will go into effect right away. This Privacy Policy
                  should be checked for updates on a regular basis. By looking
                  at the &quot;Last Updated&quot; legend above, you can see if
                  there have been any changes. Acceptance of the revised Privacy
                  Policy signifies Your willingness to be legally bound by the
                  changes.
                </p>
              </div>
              <li
                className={`${privacyStyle.informationTitle} ${privacyStyle.textSecondary}`}
              >
                GRIEVANCE OFFICER
              </li>
              <div>
                <p className={privacyStyle.privacypara}>
                  If You have any privacy concerns , please feel free to reach
                  out to the grievance officer, the name and contact details of
                  this Officer have been provided below: <br />
                  Name: Divye Behl <br/>
                  Email:info.pinchapp@gmail.com
                </p>
                <p>   
                  He shall try to acknowledge the
                  complaint within fourty eight hours and dispose of such
                  complaint within a period of fifteen days from the date of
                  receipt of complaint. 
                </p>
                <p className={privacyStyle.privacypara}>  
                  Effective as on 20 August 2022
                </p>
                <p className={privacyStyle.privacypara}>
                  Registered Office address: H.No 3549-Y Sector 15 Part III Sonipat <br/>
                  Tel: +91 8976448110  <br />
                  Email : info.pinchapp@gmail.com
                </p>
              </div>
            </ol>
          </div>
        </div>
        {/* <Footer /> */}
      </div>

      {/* <div className="background-img">
        <Image
          src={backgroundImage}
          width={2880}
          height={13428}
          alt="Background_image"
          placeholder="blur"
        />{" "}
      </div> */}
    </>
  );
};

export default index;
