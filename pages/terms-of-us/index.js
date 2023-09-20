import terms from "./terms.module.css";
import Head from "next/head";
import BrandName from "../../Common/BrandName";
import Footer from "../../Common/Footer/Footer";
// import backgroundImage from &apos;../../public/bg.png&apos;;
import Image from "next/image";
const index = () => {
  return (
    <>
      <Head>
        <title>Pinch Terms of Use / Terms and Conditions</title>
        <meta
          name="description"
          content="Pinch is a mobile application that allows users to connect with other people in the vicinity and lets you know if they are available for help."
        />
      </Head>
      <div className="main-bg">
        {/* <BrandName/> */}
        <div className={terms.termsOfUse}>
          <div className={`${terms.termsofUsTitle} ${terms.textSecondary}`}>
            <h1>Pinch Terms of Use / Terms and Conditions</h1>
          </div>
          <small
            className={terms.termsUpdate}
            style={{ textDecoration: "underline" }}
          >
            Last updated on 17th August 2022
          </small>
          <p className={terms.termspara}>
            These terms of use (“Terms and Conditions”) mandate the terms on
            which the users (“You” or “Your” or “User”) access and register on
            the mobile application Pinch (Website: www.pinchapp.in) collectively
            referred to as, “the Platform”.
          </p>
          <p className={terms.termspara}>
            Please read the Terms of Use and Privacy Policy carefully before
            registering on the Platform or accessing any material, information
            through the Platform. The Company retains an unconditional right to
            modify or amend this Terms of Use without any requirement to notify
            You of the same. You can determine when this Terms of Use was last
            modified by referring to the “Last Updated” legend above. It shall
            be Your responsibility to check this Terms of Use periodically for
            changes. Your acceptance of the amended Terms of Use shall signify
            Your consent to the changes and the agreement to be legally bound by
            the same.
          </p>
          {/* <p className={terms.termspara}>
          Equiseed Wealth Private Limited operate mobile applications and
          websites www.pinchapp.in under brand names Pinch, Pinchapp. Pinch
          enables you to automatically invest into Digital Gold and Mutual
          Funds. Pinch shall, through its Application, provide micro-investment
          services to the Users (“Services”). Pinch is committed to operating
          its website and mobile applications with the highest ethical standards
          and appropriate internal controls.
        </p> */}
          <p className={terms.termspara}>
            THESE WEBSITE TERMS IS AN ELECTRONIC RECORD IN THE FORM OF AN
            ELECTRONIC CONTRACT FORMED UNDER INFORMATION TECHNOLOGY ACT, 2000
            AND RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO
            ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE
            INFORMATION TECHNOLOGY ACT, 2000. THESE TERMS DOES NOT REQUIRE ANY
            PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE.
          </p>
          <p className={terms.termspara}>
            Please note that your visit, use of or access to our websites
            <a href="https:/www.pinchapp.in"> pinchapp.in </a>
            and mobile applications (collectively referred to as “Application”)
            are subject to the following terms; if you do not agree to all of
            the following, you may not use or access the Services and
            Application in any manner.
          </p>
          <div>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              Services offered on the Pinch
            </div>
            <p className={terms.termspara}>
              The Company offers “Micro-Investing” via Digital Gold Solution
              on Pinch. These are tools to track and analyse your
              spendings/bills/expenses/cash withdrawals by reading your SMS
              with your consent.
            </p>
            <p className={terms.termspara}>
              You acknowledge the Company hereby grants You, a limited,
              non-exclusive, non-transferable, royalty free license to use the
              Platform for the purposes of availing the services from Pinch,
              collectively hereinafter referred to as (the “Platform Services”).
            </p>
          </div>
          <>
            <div className={terms.serviceTitle}>
              Digital Gold ( Partnered with Augmont Gold ){" "}
            </div>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              About Augmont
            </div>
            <p className={terms.termspara}>
              Augmont was incorporated in 2013 with the vision to provide a
              seamless, integrated offering to business and retail customers for
              anything related to gold. The idea was to leverage the power of
              technology combined with the strength of gold as an investment as
              well as a consumer good. Innovation is the bedrock of growth for
              Augmont. Whether it&#39;s innovation in processes, product design,
              or distribution, Augmont has been delivering more and efficiently
              to its customers.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              AUGMONT GOLD FOR ALL
            </div>
            <p className={terms.termspara}>
              Augmont &quot;GOLD FOR ALL&quot; is a revolutionary Goldtech
              ecosystem to make Gold accessible, affordable, useful, and
              manageable for all phases of a customer’s life. It is the one-stop
              destination for gold and silver. Augmont has derived its name from
              the combination of the words Au and Ag, the chemical symbols for
              &#39;Gold&#39; and &#39;Silver&#39; respectively. The word
              “Augment” means to increase or to make something greater by adding
              to it.
            </p>
            <p className={terms.termspara}>
              Augmont Gold For All, products aims to touch every aspect of a
              customer’s life. Gold should be seen as a life-enabling companion
              for life. To this Augmont’s constant effort is to make bigger and
              more revolutionary contributions in the value chain of precious
              metal. Augmont’s unique DNA makes it our responsibility to
              revolutionize the entire gold ecosystem and help people transform
              their dreams into reality via easy access to gold.
            </p>
            <p className={terms.termspara}>
              It is a ‘Phygital’ business model through which we sell various
              gold products like Gold Loan, Digi Gold, EMI Gold, Sell Old Gold,
              and many more through our deeply entrenched jeweller franchise
              network, doorstep delivery, and our digital platform (web and
              app).
            </p>
            <p className={terms.termspara}>
              With Augmont Gold For All, we have simplified gold and the process
              across its lifecycle. Our gold tech ecosystem is aimed to make
              gold a life enabler for our consumers as well as for our jeweller
              partners.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              VISION
            </div>
            <p className={terms.termspara}>
              Glittering a billion lives through the power of Gold
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              MISSION
            </div>
            <p className={terms.termspara}>
              To make Gold a life enabler for all our stakeholders
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              LEADING PIONEERS IN GOLD IN INDIA
            </div>
            <p className={terms.termspara}>
              Among India’s most reputed refinery &amp; bullion companies with
              deep inroads in the close-knit jeweller community Ability to
              financially hedge with the most efficient and effective price
              discovery Physically deliver across exchanges, ETFs, and other
              channels Capable of distributing bullion from 0.1 grams coins to 1
              kg bars across India More flexible and adaptive to changes in
              government policies Operates at lower costs than international
              refineries with the same level of efficiency, if not better Scale
              of Operations - Among the largest Leading Gold Refinery in India
              with annual sales surpassing US$ 3 bn Leading creator and redeemer
              of gold exchange-traded fund (ETF) units in India on all gold ETF
              schemes ETF schemes Leading delivery provider of gold on commodity
              exchanges in India
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ACCREDITATIONS AND ACCOMPLISHMENTS
            </div>
            <p className={terms.termspara}>
              Augmont’s prices are used as the most common reference prices
              across India The refinery is accredited by BIS and NABL Awarded as
              the best platform and leading refinery year on year since 2009
              &quot;India Good Delivery” member for NSE and MCX
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              THE TRAILBLAZERS
            </div>
            <p className={terms.termspara}>
              Augmont has created an extremely strong brand name in the retail
              space and as well among the jewellers (fraternity). The brand is
              the preferred partner among the retail and merchants due to the
              inevitable ecosystem developed that covers the entire value chain.
              <br /><br/>
              Augmont has been at the forefront of innovation <br/>
              <ol>
              <li> SPOT – World’s
              largest and India’s first physical gold/silver/platinum platform
              since 2008</li> 
              <li>Bullion ++ - Borrowing &amp; Lending of Gold </li>
              <li>Bullion India – India’s pioneer digital gold platform (rebranded
              as Augmont Digi-gold)</li>
              <li>OCDs- India’s first Optionally
              Convertible Debentures for commodities markets </li> 
              <li> Bullion Futures
              - Instrumental in successfully devising delivery based contracts
              for gold &amp; silver on commodity exchanges </li>
              <li> ETFs - World’s
              first Gold ETF was conceptualized by Augmont as Paper Gold in 2002
              and was filed with SEBI. </li>
              <li> EMI Jewellery - World&#39;s largest
              investible jewelry product, in tamper-proof packaging. We are the
              pioneers in making Gold accessible to all. </li>
              </ol>
               Augmont’s innovations
              have helped the jewellers in addressing the defaults and frauds of
              bullion brokers. Transparent pricing has saved 100s of crores of
              Rupees Our Platform is an online portal that facilitates Users to
              purchase/sale/transfer Gold in digital form from a brand named
              “Augmont” operated and managed by “Augmont Goldtech Private
              Limited”(hereinafter referred as “Augmont”) a company incorporated
              under the laws of India (“Services”) with CIN No.
              U51909MH2020PTC337639 You understand that the gold is being
              offered for purchase and/or sale by Augmont. As per the terms of
              Augmont, the Gold purchased by You will be accounted in a Augmont
              Customer Account and the corresponding quantity of gold will be
              kept with Sequel Vaults (hereinafter “Custodian”). In order to
              safeguard your interest Augmont has appointed a Trustee named IDBI
              Trusteeship Services Limited (hereinafter “Security Trustee”).</p> You
              may carefully know the terms of Custodian arrangement and the
              trusteeship arrangement before purchasing gold from Augmont
              through Us. We shall not be responsible for any deficiency or
              failures of the above referred parties. By clicking on “I Accept”,
              You acknowledge that You will accede to the Security Trustee
              Agreements (upon such date) and Custodian Agreement as if you had
              been named as an original party to the same and had executed each
              of such Security Trustee Agreements and Custodian Agreement; and
              will be bound by all the terms and conditions of the Security
              Trustee Agreement and Custodian Agreement; the agreements could be
              made available on demand of the user, under a strict
              confidentiality agreement. Please read the Terms of Use and
              Privacy Policy carefully before registering on the Platform or
              accessing any material, information through the Platform. The
              Company retains an unconditional right to modify or amend this
              Terms of Use without any requirement to notify You of the same.
              You can determine when this Terms of Use was last modified by
              referring to the “Last Updated” legend above. It shall be Your
              responsibility to check this Terms of Use periodically for
              changes. Your acceptance of the amended Terms of Use shall signify
              Your consent to the changes and the agreement to be legally bound
              by the same. Before using our Services and before buying the Gold,
              Users are also recommended to read the Terms of Services and
              Privacy Policy of Augmont Goldtech Private Limited which can be
              accessed at https://www.augmont.com/terms-conditions. In case of
              any conflict between this Terms and those specific terms of
              Service, those specific terms related to the specific Services,
              shall prevail to the extent of those services. IF YOU DO NOT AGREE
              TO THESE TERMS AND CONDITIONS AND AUGMONT TERMS, YOU MAY NOT USE
              THE SERVICES AND SHOULD NOT PROCEED TO CREATE ANY ACCOUNTS OR
              ACQUIRE ANY SUBSCRIPTIONS TO THE SERVICES. BY USING THE SERVICES,
              YOU ARE AGREEING TO BE BOUND BY THIS AGREEMENT, INCLUDING ALL
              AMENDMENTS MADE HERETO FROM TIME TO TIME. By using the Service of
              our Platform, you acknowledge that the Company is not responsible
              for the quality of gold offered and sold by Augmont Goldtech
              Private Limited and that any disputes in relation to the quality
              of gold shall be raised directly between Augmont Goldtech Private
              Limited and You /the end user.
            
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ELIGIBILITY
            </div>
            <p className={terms.termspara}>
              ‍By using the Services, you represent and warrant that you are
              above the 18 years of age and qualified to enter into the
              contract. If you are not eligible to enter into contracts, then
              please discontinue use of the Services and leave now.If you are
              the parent or guardian of a child under 18 years of age, by
              registering/by creating an account or profile on the Platform, you
              provide your consent to your child’s registration and you agree to
              be bound by these Terms in respect of their use of our Site. We
              will at all times assume (and by using this Site you warrant that)
              you have the legal capacity to enter into the agreement (i.e. that
              you are of sufficient age and mental capacity and are otherwise
              entitled to be legally bound in contract.Further, By using the
              Services, You confirm that you are not registered under the Goods
              and Services Tax Act, 2017 and that if, in the course of your
              relationship with our Platform and/or Augmont , you become
              registered under the Goods and Services Tax Act, 2017, you shall
              inform Augmont of your change in status immediately, and provide
              any relevant information and documents, as may be requested.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              REGISTRATION
            </div>
            <p className={terms.termspara}>
              Our Services are available to only those who have subscribed to
              our Platform by registering and creating account with us. You can
              register to our Platform by providing your personal information
              including name, age, gender and registered mobile number.
              Registration will be validated by sending one time password (OTP)
              to registered mobile number. We may also ask You for certain
              financial information, including Your billing address, bank
              account details, credit card number, expiration date and/or other
              payment related details or other payment method data, and debit
              instructions or other standing instructions to process payments
              for the Platform Services. The Company may also ask You to provide
              certain additional information about Yourself on a case-to-case
              basis. If there is any change in the account information, You
              shall promptly update Your account information on the Platform. If
              You provide any information that is untrue, inaccurate, not
              current or incomplete (or becomes untrue, inaccurate, not current
              or incomplete), or if the Company has reasonable grounds to
              suspect that such information is untrue, inaccurate, not current
              or incomplete, the Company has the right to suspend or terminate
              Your Account and refuse any and all current or future use of the
              Platform (or any portion thereof) at its discretion, in addition
              to any right that the Company may have against You at law or in
              equity, for any misrepresentation of information provided by You.
              By registering you agree to (a) provide correct details when
              prompted on the Platform and failure to do so may invalidate your
              request to use such services(b) authorise Platform and Company to
              retain the information shared by you for the purpose of using the
              Platform and/or the services and for any marketing campaign of the
              Company and/or third-party service providers and (c) by giving
              your details you agree to abide by the Terms of Use and applicable
              Privacy Policy. Also, by registering, you agree that you will not
              allow others to use your account and that you are fully
              responsible for all activities that occur under your username. We
              may assume that any communications we receive under your account
              have been made by you. By providing such personal information, you
              consent to receive all information relating to the Platform, the
              Services offered by the Platform and/or third-party providers, all
              communication, and instructions for availing special offers and
              promotional benefits. You shall solely be responsible for the
              appropriate use of the same. You shall immediately notify Company
              of any unauthorized use / breach of your password or account and
              ensure that you exit from your account at the end of each session.
              Company reserves the right to refuse service, terminate accounts,
              remove or edit content, or cancel orders in their sole discretion.
              The Company cannot and will not be liable for any loss or damage
              arising from Your failure to comply with this provision. You may
              be held liable for losses incurred by the Company or any other
              user of or visitor to the Platform due to authorized or
              unauthorized use of Your Account as a result of Your failure in
              keeping Your Account information secure and confidential.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PLATFORM SERVICES:
            </div>
            <p className={terms.termspara}>
              By registering to Our Platform, Company in collaboration with
              Augmont allows You to purchase Digital Gold and avail related
              Services of Augmont . Company hereby grants You, a limited,
              non-exclusive, non-transferable, royalty free license to use the
              Platform for the purposes of availing the Services. Our Services
              shall include but not limited to the following: a) facilitates
              buying and selling of digital gold; b) maintain a record of Your
              personal information and financial transactions in a secure and
              confidential manner; and c) promptly and efficiently respond to
              your queries relating to Your account. Upon no User transaction
              detected, Our system intelligently updates user ledger to meet the
              user&apos;s savings goal of up to 10Rs per day. (collectively referred
              as “Platform Services”) However, before placing the order and
              availing the services of Augmont, User may be required to provide
              certain KYC documentation and other information as may be required
              by Augmont in such form and manner as it may deem fit. This
              information may be requested from You at the time of registration,
              or at a later stage. It is hereby clarified that any services
              offered related to order (purchase/sale or transfer of Digital
              Gold by Augmont) are governed under specific terms and conditions
              of Augmont operated and managed by “Augmont Goldtech Private
              Limited” which can be accessed at
              https://www.augmont.com/terms-conditions It is also clarified that
              the Company is merely providing a platform to its Users to
              facilitate the transaction of sale and investment and will not be
              liable in any manner with respect to the products/ services
              offered to You by Augmont. You hereby agree and acknowledge that
              the data and information provided on the Platform does not
              constitute advice of any nature whatsoever and shall not be relied
              upon by You while making investment decisions and You shall be
              solely responsible for any investment decisions and for the
              purchase of any digital gold on the Platform. In no event shall
              the Company be liable to You for any loss or damage that may cause
              or arise from or in relation to these Terms of Use and/or due to
              use of this Platform or due to investments made using this
              Platform. As part of the Platform Services provided to You, after
              availing such services, You agree to provide honest
              feedback/review about the concerned Platform Service, if required
              by the Company. Use of the Platform: You acknowledge that the
              Services are for Your personal use and agree not to publish the
              gold prices or descriptions of gold and/or any other information
              displayed on the Platform (in lieu of Your access to the Platform)
              on any other medium. You agree to use the Platform only: (a) for
              purposes that are permitted by the Terms of Use; and (b) in
              accordance with any applicable law, regulation or generally
              accepted practices or guidelines. You agree that You shall not
              copy, reproduce, sell, redistribute, publish, enter into a
              database, display, perform, modify, alter, transmit, license,
              create derivatives from, transfer or in any way exploit any part
              of any information, content, materials, services available from or
              through the Platform, except that You may download the Platform
              for Your own personal, internal use and non-commercial use. You
              agree that You will not use the Platform in any manner or engage
              in any activity that may damage, disable or impair or adversely
              affect the use of the Platform or interfere with any other users’
              use, legal rights, or enjoyment of the Platform. Further, You
              agree not to remove any text, copyright or other proprietary
              notices contained in the content downloaded from the Platform.
              Further, while using the Platform, You undertake not to: defame,
              abuse, harass, threaten or otherwise violate the legal rights of
              others; publish, post, upload, distribute or disseminate any
              inappropriate, profane, defamatory, infringing, obscene, indecent
              or unlawful topic, name, material or information; copy, republish,
              post, display, translate, transmit, reproduce or distribute any
              content on the Platform through any medium without obtaining the
              necessary authorization from the Company; conduct or forward
              surveys, contests, pyramid schemes or chain letters; upload or
              distribute files that contain software or other material protected
              by applicable intellectual property laws unless You own or control
              the rights thereto or have received all necessary consents; upload
              or distribute files that contain viruses, corrupted files, or any
              other similar software or programs that may damage the operation
              of the Platform or another’s computer; engage in any activity that
              interferes with or disrupts access to the Platform (or the servers
              and networks which are connected to the Platform); attempt to gain
              unauthorized access to any portion or feature of the Platform, any
              other systems or networks connected to the Platform, to any of the
              Company’s server, or through the Platform, by hacking, password
              mining or any other illegitimate means; probe, scan or test the
              vulnerability of the Platform or any network connected to the
              Platform, nor breach the security or authentication measures on
              the Platform or any network connected to the Platform. reverse
              look-up, trace or seek to trace any information on any other User,
              of or visitor to, the Platform, to its source, or exploit the
              Platform or information made available or offered by or through
              the Platform, in any way whether or not the purpose is to reveal
              any information, including but not limited to personal
              identification information, other than Your own information, as
              provided on the Platform; disrupt or interfere with the security
              of, or otherwise cause harm to, the Platform, systems resources,
              accounts, passwords, servers or networks connected to or
              accessible through the Platform or any affiliated or linked sites;
              collect or store data about other Users in connection with the
              prohibited conduct and activities; use any device or software to
              interfere or attempt to interfere with the proper working of the
              Platform or any transaction being conducted on the Platform, or
              with any other person’s use of the Platform; use the Platform or
              any material or content for any purpose that is unlawful or
              prohibited by these Terms of Use, or to solicit the performance of
              any illegal activity or other activity which infringes the rights
              of the Company or other third parties; falsify or delete any
              author attributions, legal or other proper notices or proprietary
              designations or labels of the origin or source of software or
              other material contained in a file that is uploaded; violate any
              applicable laws or regulations for the time being in force within
              or outside India or anyone’s right to privacy or personality;
              violate the Terms of Use contained herein or elsewhere; and
              reverse engineer, modify, copy, distribute, transmit, display,
              perform, reproduce, publish, license, create derivative works
              from, transfer, or sell any information or software obtained from
              the Platform. ‍
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PLACING OF ORDER
            </div>
            <p className={terms.termspara}>
              You can purchase Gold on the Platform on a pre-payment basis i.e,
              once you place the order and confirms the transaction for purchase
              of Gold, and agrees to the Terms, Platform will notify Augmont.
              Once the payments are received by Company/Augmont and the KYC
              information is found acceptable, Augmont shall issue an invoice to
              You confirming the Customer Order placed within a period of 3
              (Three) business days of placing such order, in a manner it may
              deem fit. Notwithstanding anything to the contrary contained in
              these Terms, Company and/or Augmont shall be entitled to accept or
              reject the User, for any reason whatsoever, at its sole
              discretion. Once the Order is placed, You are not entitled to
              cancel a Customer Order, provided however that such Order shall
              stand cancelled if the payment fails for any reason whatsoever.
              Platform and/or Augmont reserves the right to cancel the Order, at
              its sole discretion, if Your information, provided prior to
              placing the Customer Order, is not found acceptable and The
              Platform Provider and/or Augmont are of the opinion that You are
              not eligible to purchase gold. In case of rejection of any of Your
              Order in accordance with these Terms, where payments have been
              received by Company/Augmont, such payments shall be returned to
              You in accordance with the terms and conditions of Augmont. In
              order to ensure that Your Customer Orders are fulfilled in all
              circumstances, a first and exclusive charge on the Customer Gold
              by way of hypothecation will be created in favour of Security
              Trustee. By way of these Terms, You authorize the Security Trustee
              to act on Your behalf to ensure that Your interests are adequately
              protected. The quantity of Gold purchased by You shall be stored
              with the Custodian in a vault on Your behalf (“Vault Keeper”). You
              hereby authorize (i) appointment of such Vault Keeper to safe keep
              the gold purchased; and (ii) Augmont to store such gold products
              purchased by You, including, but not limited to, bullion, coins or
              jewellery (as the case may be) in the secured vault on Your behalf
              (“Customer Gold”). It is hereby clarified that Your purchase of
              the gold corresponding to the Your Order shall be deemed to be
              completed and title in relation thereto shall be deemed to have
              been passed upon such relevant portion of the Customer Gold being
              stored in the vault with the Vault Keeper on Your behalf or upon a
              final invoice being issued by Augmont in accordance with these
              Terms, subject to applicable laws. You would be provided with free
              storage for such period as notified under the Terms, currently
              this is for a period of 5 years from the date of purchase. In the
              event that You fail to take delivery of the Gold within the free
              storage period, Company and/or Augmont would be entitled to levy a
              storage charge and sell and dispose of such Customer Gold to the
              extent necessary to recover the storage charge. To ensure that the
              Customer Gold stored in such vault is adequately protected,
              necessary insurance policy/ies has been obtained by the Vault
              Keeper, where the cost of insurance to safe keep the same will be
              borne by the Vault Keeper. Pursuant to such insurance policy/ies,
              for any loss or damage to the Customer Gold stored in the vault,
              You further authorize the Security Trustee to act as Your
              beneficiary under the insurance policy/ies and to take all steps
              necessary to protect Your interests. While the Vault Keeper has
              taken the necessary insurance policy/ies, in case of occurrence of
              an event not covered in such insurance policy/ies, the Customer
              Gold may be at risk. The insurance policy/ies obtained by the
              Vault Keeper are in line with the global industry practices and
              cover losses due to fire, lightning, theft, cyclone, earthquake,
              flood, etc. but do not cover losses due to events such as war,
              revolution, derelict weapons of war, nuclear radiation, etc. You
              hereby expressly warrant that in the event of any expenses or
              charges remaining payable to either Security Trustee or Custodian
              or otherwise till actual delivery or fulfilment of any of Your
              Orders for any reason, including where Augmont is unable to pay
              these expenses or charges for any reason whatsoever, thereby
              adversely effecting or jeopardizing the fulfilment of Your Orders/
              Requests, then the Security Trustee will be entitled to sell part
              of the Customer Gold and satisfy such outstanding expenses or
              charges as required in accordance with these Terms read with the
              Security Trustee Agreements. The sums due to You and/or gold to be
              delivered (as the case may be), after settling the aforementioned
              charges, would be dealt with in accordance with these Terms read
              with the Security Trustee Agreements.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PRICING AND PAYMENT POLICY
            </div>
            <p className={terms.termspara}>
              Except where noted otherwise, the price displayed on our Platform,
              represents the market linked price of Gold as indicated by
              Augmont. Market linked prices means that these quotes are linked
              to the prices of gold in the commercial bullion market in India.
              However, it does not indicate that the gold prices displayed on
              the Platform will always be same as that of the prevalent prices
              displayed in other commercial bullion market. As a purchaser, it
              is your responsibility to compare the prices and take appropriate
              decisions after adequate diligence. It is hereby clarified that
              the price displayed on the Platform constitute a fully binding
              offer to sell the gold at that price at the relevant time and
              constitute an invitation to offer to purchase Gold by Augmont at
              the said prices to all Users. Notwithstanding the foregoing, you
              understand that these prices may vary multiple times within a day,
              and accordingly Your payment obligations for any order will depend
              on the prices displayed at the relevant time. Payment policy:
              Payment will be accepted through the payment options made
              available on the Platform, which may include redirection to a
              payment gateways and aggregators hosted by third-party website or
              applications including UPI payments like Phone Pe -
              https://www.phonepe.com/, Paytm - https://paytm.com/. At the time
              of purchase / fulfilment / sale-back / transfer of Gold, the
              relevant taxes will be chargeable as applicable as per the
              Government regulations. However, please note that the payment
              terms, delivery, warranty and cancellation and refund policy are
              subject to the terms and conditions of Augmont which can be
              accessed at{" "}
              <a href="https://www.augmont.com/terms-conditions">
                https://www.augmont.com/terms-conditions
              </a>
              . The transactions on the Platform with will be completed only
              after successful transfer of money from Your registered bank
              account to the Company’s bank account. Please note that the
              corresponding gold quantity will be credited to Your Account
              maintained with Augmont, within 2 (two) days from the date of
              successful transfer of such amount. As you will notice from the
              Terms of Use of the Augmont, the corresponding quantity of
              physical gold will be transferred to a Custodian and the safety of
              the gold is ensured by the Trustee. Please look at Augmont Terms
              and conditions(annexed below)and understand fully the terms of
              custodian and trusteeship arrangement before making the
              investment. ‍
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DELIVERY OF GOLD
            </div>
            <p className={terms.termspara}>
              For the purposes of making delivery to You, You are required to
              provide a valid address and/or any other documents/information/
              biometric identification that may be specified in this regard by
              Company/Augmont on the Platform from time to time. You are
              required to take delivery of Your Customer Gold within such
              maximum period as shall be specified for this purpose by Augmont
              from time to time on the Platform (“Maximum Storage Period”). In
              the event that no valid address has been provided by You during
              the Maximum Storage Period, then Platform and/ Augmont shall for a
              period 1 year commencing from the date of expiry of Maximum
              Storage Period (such period being the “Grace Period”) attempt at
              least once to contact You using the contact information provided
              by You to obtain either (i) an address to which You would require
              the gold in question to be delivered or (ii) Your bank account
              details into which sale proceeds of the Customer Gold shall be
              deposited. In the event that Platform and/or Augmont has not been
              able to contact You during the applicable Grace Period using the
              contact information provided by You or where You shall during the
              Grace Period either fail to take delivery of the gold in question
              for any reason whosoever (including where You shall not have
              provided any address to take delivery of such gold); or provide
              the details for a valid bank account into which the proceeds of
              any sale of such Customer Gold is to be deposited; then upon
              expiry of the applicable Grace Period for the Customer Gold in
              question, Augmont is entitled to purchase such Customer Gold with
              the purchase price being the applicable prevailing price displayed
              on the Platform for purchase of gold from Customers. The purchase
              proceeds realized from such sale (“Final Sale Proceeds”) after
              deducting any amounts payable to Augmont as storage charges for
              storage of such gold after the Free Storage Period, shall be
              deposited into a bank account operated by the Security Trustee who
              shall be the sole signatory to such bank account. In the event
              that You shall during a period of 3 years commencing from the date
              of expiry of the applicable Grace Period (such period being the
              “Final Claim Period”) notify either Platform and/or Augmont or the
              Security Trustee that You are claiming the applicable Final Sale
              Proceeds, the Security Trustee shall issue suitable instructions
              to transfer the Final Sale Proceeds to such bank account as You
              shall notify for this purpose. Please note that to claim the Final
              Sale Proceeds You will be required to provide details of a valid
              bank account and that the Final Sale Proceeds will not be
              transferred in the absence of such details. At no time will the
              Final Sale Proceeds be paid to you in cash. In the event that You
              shall not claim Your Final Sale Proceeds within the Final Claim
              Period, then the Final Sale Proceeds shall be transferred to the
              Prime Minister’s Relief Fund or such other fund as You may
              designate for this purpose at any time prior to the expiry of the
              Grace Period.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              YOUR OBLIGATIONS AND RESPONSIBILITIES
            </div>
            <p className={terms.termspara}>
              While accessing our Platform, you shall comply with these Terms
              and Conditions and the special warnings or instructions for access
              or use posted on the Platform. You shall act always in accordance
              with the law, custom and in good faith. You may not make any
              change or alteration to the Platform or any Content or Services
              that may appear on this Platform and may not impair in any way the
              integrity or operation of the Platform. You further represent and
              warrants that: Payment for purchase of Services is made from Your
              bank account (primary holder’s bank account in case of Investment
              Account held jointly), and the same is from legitimate sources and
              remitted through approved banking channels; Before making the
              investment purchase, You shall seek independent financial
              planning, legal, accounting, tax or other professional advice, if
              required and; You have read the offer documents of Augmont
              (including its terms and conditions) and its schemes and have made
              an informed independent investment decision before investing and;
              You will not sell, trade, or otherwise transfer Your registered
              account to another party or impersonating any other person for the
              purposing of creating an account with the Platform. Without
              limiting the generality of any other provision of these Terms and
              Conditions, if you default negligently or wilfully in any of the
              obligations set forth in these Terms and Conditions, you shall be
              liable for all the losses and damages that this may cause to the
              Platform, Company, our partners or licensors.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              RETURN, REFUND AND CANCELLATION POLICY
            </div>
            <p className={terms.termspara}>
              On use of any coupon or discounts, as made available by us on the
              Platform or any other website or platform of any authorised third
              party, for purchase of Gold, the same shall be verified and
              adjusted, as may be necessary, within 7 (seven) days of use of
              such coupon or discount. Upon confirmation of the payment, You
              shall be permitted to withdraw the monies after 24 (twenty-four)
              hours of investment, and there is no minimum lock-in period. Once
              the payment has been confirmed, the same shall be binding on You
              and cannot be cancelled. You can opt out of auto investing on the
              Platform by undertaking the following actions: Tap on &apos;Locker&apos; in
              the bottom right corner on the mobile application. Go to
              &apos;Settings&apos; by tapping on the icon on the top right corner on the
              mobile application. Scroll down and find ‘AutoPay’ under
              transactions and withdrawals on the mobile application. Disable
              AutoPay by tapping on the toggle on the mobile application. You
              can also pause their roundup detection and savings for a defined
              period of time. You can find the option of pausing Your saving for
              10 (ten) days to 1 (one) month in the settings of the mobile
              application.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INTELLECTUAL PROPERTY RIGHTS
            </div>
            <p className={terms.termspara}>
              The Platform and all information, content, materials, products
              including, but not limited to text, content, photographs,
              graphics, texts, video and audio content and computer code
              (“Content”) on the Platform is owned and controlled by the Company
              and the design, structure, selection and feel and arrangement of
              the Content is protected by copyright, patent and trademark laws
              and other various intellectual property rights either in the
              favour of the Company or third parties from whom the appropriate
              permissions have been taken under applicable laws. The trademarks,
              logos and service marks displayed on the Platform (“Marks”) are
              the property of the Company and its affiliates or other respective
              third parties, as the case may be. You are not permitted to use
              the Marks without the express prior written consent of the Company
              or the third party that owns the Marks. Further, You understand
              and accept that all information, except Your personal information
              and other data submitted by You for the purposes of transacting on
              the Platform, through the Platform shall be deemed the property of
              the Company, and the Company shall be free to use any ideas,
              concepts, know-how or techniques provided by You on the Platform,
              in any manner whatsoever. On initiating a contact or query through
              the Platform, You agree to be contacted by the Company or any
              other entities with whom the Company has entered into an
              arrangement for the provisions of Services to You. ‍
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INDEMNITY
            </div>
            <p className={terms.termspara}>
              You agree to indemnify the Company, its directors and employees
              from any losses, damages, penalties, claims, costs and demands
              (including reasonable attorney fees and legal costs) arising out
              of breach or non-performance and/or non-observance of the duties
              and obligations, representations, warranties and covenants under
              the Terms of Use or due to your acts or omissions. You further
              agree to hold the Company harmless against any claims made by any
              third party due to, or arising out of, or in connection with, Your
              use of the Platform, any misrepresentation with respect to the
              data or information provided by You, Your violation of the Terms
              of Use, or Your violation of any rights of another, including any
              intellectual property rights. In no event shall the Company and
              its officers, partners, consultants, agents and employees, be
              liable to You or any third party for any special, incidental,
              indirect, consequential or punitive damages whatsoever, arising
              out of or in connection with Your use of or access to the Platform
              or Content on the Platform. The limitations and exclusions in the
              Terms of Use apply to the maximum extent permitted by applicable
              laws. ‍
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              LIMITATION IN SERVICES
            </div>
            <p className={terms.termspara}>
              Please note that Platform Services are not available in all
              geographical areas and depending on Your location, You may not be
              eligible to avail certain Platform Services offered by the Company
              as the case may be. The Company reserve the absolute right to
              determine the availability and eligibility for any of the Platform
              Service offered on the Platform.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              THIRD PARTY LINKS
            </div>
            <p className={terms.termspara}>
              ‍The Company is not responsible for the availability of content or
              other services on third party sites linked from the Platform and
              the Company urges You to read the terms of use of the respective
              third-party sites, before accessing or registering with any of
              such third-party sites. Further, the Company does not make any
              warranties and expressly disclaims all warranties express or
              implied, including without limitation, those of merchantability
              and fitness for a particular purpose, title or non-infringement
              with respect to any information or services or products that are
              available or advertised or sold through these third-party
              websites.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              FORCE MAJUERE
            </div>
            <p className={terms.termspara}>
              ‍The Company shall not be liable for failure or error of any
              transaction on the Platform or for any failure on part of the
              Company to perform any of its obligations under these Terms of Use
              if performance is prevented, hindered or delayed by a Force
              Majeure event (defined below) and in such case its obligations
              under these Terms of Use shall be suspended for so long as the
              Force Majeure event continues. The term “Force Majeure Event”
              means any event due to any cause beyond the reasonable control of
              the Company, including without limitations, unavailability of any
              communication systems, breach, or virus in the processes or
              payment or delivery mechanism, sabotage, fire, flood, explosion,
              acts of god, civil commotion, pandemic, strikes or industrial
              action of any kind, riots, insurrection, war, acts of government,
              computer hacking, unauthorised access to computer data and storage
              devices, computer crashes, malfunctioning in the computer terminal
              or the systems getting affected by any malicious, destructive or
              corrupting code or program, mechanical or technical
              errors/failures or power shut down, faults or failures in
              telecommunication etc.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              SUSPENSION AND TERMINATION:
            </div>
            <p className={terms.termspara}>
              The Terms of Use will continue to apply until terminated by either
              You or the Company as set forth below. If You object to the Terms
              of Use or are dissatisfied with the Platform, your only recourse
              is to (i) close Your registered account on the Platform; and/or
              (ii) stop accessing the Platform. In case you violate these Terms
              of Use and/ or any applicable law, the Company may, at any time
              and in its sole discretion, terminate Your Account and/or prevent
              You from accessing the Platform and/or Platform Services. The
              Company may delist You or block Your future access to the Platform
              or suspend or terminate your registered account if it believes, in
              its sole and absolute discretion that You have infringed,
              breached, violated, abused, or unethically manipulated or
              exploited any term of these Terms of Use or anyway otherwise acted
              unethically. Notwithstanding anything in this clause, these Terms
              of Use will survive indefinitely unless and until the Company
              chooses to terminate them. If You or the Company terminate Your
              use of the Platform, the Company may delete any Content or other
              materials relating to Your and the Company shall have no liability
              to You or any third party for doing so. However, Your transactions
              details may be preserved by the Company for purposes of tax or
              regulatory compliance. The Company may modify these terms at any
              time.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              GOVERNING LAWS
            </div>
            <p className={terms.termspara}>
              The Terms of Use shall be governed and construed in accordance
              with the laws of India without reference to conflict of laws
              principles.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DISPUTES
            </div>
            <p className={terms.termspara}>
              ‍With respect to any dispute regarding the Platform, all rights
              and obligations and all actions contemplated by these Terms and
              Conditions shall be governed by the laws of India and the courts
              of Karnataka state, India. To the fullest extent permitted by
              applicable law, any dispute, differences or claim arising out of
              your visit to this Platform, shall be referred to and finally
              resolved by Mediation and in accordance with the dispute
              resolution provisions under Indian Consumer Protection Act, 2019.
              Please review our other policies, including Privacy policy, posted
              on this site/Platform. These policies also govern your visit to
              our website/Platform. We reserve the right to make changes to our
              site, policies, and these Terms of Use at any time. If any of
              these conditions shall be deemed invalid, void, or for any reason
              unenforceable, that condition shall be deemed severable and shall
              not affect the validity and enforceability of any remaining
              condition. ‍
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              COMMUNICATIONS:
            </div>
            <p className={terms.termspara}>
              You hereby expressly agree to receive communication (including
              transactional messages) or by way of SMS and/or E-mail or through
              WhatsApp from the Company or any third party in connection with
              the Platform Services or Your registration on the Platform. You
              can unsubscribe/ opt-out from receiving communications through
              e-mail anytime by writing to support@pinchapp.in
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              GRIEVANCES
            </div>
            <p className={terms.termspara}>
              We are committed to resolving all disputes in a fair, effective
              and cost-efficient manner. We seek to resolve any User concerns
              through our Grievance cell. All Grievances related to the use of
              the Platform shall be addressed to Mr. Deepak Rathod (Grievance
              officer) please write to us on support@pinchapp.in Call us at
              +91-9511825453 The officer will get back to the User within 48
              hours of the receipt of the Complaint. Every grievance will be
              provided with a complaint/ticket no. which can be used to track
              the status of the grievance.Redress or closure to a grievance
              might take around one month from the date of receipt of complaint.
              Redress or closure to a grievance might take around one month from
              the date of receipt of complaint.However, if you are dissatisfied
              with our Grievance redressal mechanism, these Terms of Service
              provide that dispute will be resolved through mediation in
              accordance with Consumer Protection Act, 2019.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              GENERAL PROVISIONS
            </div>
            <p className={terms.termspara}>
              Notice: All notices from the Company will be served by email to
              Your registered email address or by general notification on the
              Platform. Any notice provided to the Company pursuant to the Terms
              of Use should be sent to{" "}
              <a href="info.pinchapp@gmail.com">info.pinchapp@gmail.com</a>
              Assignment: You cannot assign or otherwise transfer the Terms of
              Use, or any rights granted hereunder to any third The Company’s
              rights under the Terms of Use are freely transferable by the
              Company to any third party without the requirement of seeking Your
              consent. Severability: If, for any reason, a court of competent
              jurisdiction finds any provision of the Terms of Use, or any
              portion thereof, to be unenforceable, that provision shall be
              enforced to the maximum extent permissible so as to give effect to
              the intent of the parties as reflected by that provision, and the
              remainder of the Terms of Use shall continue in full force and
              effect. Waiver: Any failure by the Company to enforce or exercise
              any provision of the Terms of Use, or any related right, shall not
              constitute a waiver by the Company of that provision or right.
            </p>
          </>
          <>
            <div className={terms.serviceTitle}>AUGMONT TERMS OF USE </div>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              TrusteeTerms and Conditions
            </div>
            <p className={terms.termspara}>
              Please read the following terms and conditions before registering
              on, accessing or using the website www.augmont.com (&quot;this
              Website&quot;) or the Augmont mobile application (“this App”) or
              any similar platform (hereinafter collectively called the
              Platform). This Website and this App are owned and operated by
              Augmont Goldtech Private Limited (Formerly Augmont Precious Metals
              Private Limited).We, Augmont Goldtech Private Limited and/or our
              designated affiliates (jointly &quot;Augmont&quot;) provide the
              Platform features to you, the user, subject to your acceptance of
              the following Terms and Conditions of Access and Use, constituting
              an agreement between us (&quot;Agreement&quot;). If you continue
              to use the Platform or communicate with us, you will be deemed to
              have accepted these Terms and Conditions of Access and Use. Please
              read these Terms and Conditions of Access and Use carefully. In
              addition, when you use any current or future Augmont service or
              business you will also be subject to the guidelines, terms and
              agreements applicable to such service or business (&quot;Specific
              Terms&quot;). If the Terms and Conditions of Access and Use are
              expressly inconsistent with such Specific Terms, the Specific
              Terms will prevail.Augmont may revise these Terms and Conditions
              of Access and Use from time to time and at any time, without
              notice to you. If you do not agree to be bound by these Terms and
              Conditions of Access and Use, as modified from time to time, you
              should leave the Platform immediately.The section titles in these
              Terms and Conditions of Access and Use are for convenience only
              and have no legal effect.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ACCEPTANCE OF DISCLAIMERS AND EXCLUSIONS
            </div>
            <p className={terms.termspara}>
              You acknowledge that the disclaimers and exclusions of liability
              set forth in these Terms and Conditions of Access and Use
              represent a fair and reasonable allocation of the risks and
              benefits of the Agreement between you and us, taking all relevant
              factors into consideration. You agree that these disclaimers and
              limitations shall be enforceable to the fullest extent permitted
              by applicable law. You agree that regardless of any statute or law
              to the contrary, any claim or cause of action arising out of or
              related to use of the Platform or these Terms and Conditions of
              Access and Use must be filed within one (1) year after such claim
              or cause of action arose or be forever barred.These Terms and
              Conditions of Access and Use shall be read in conjunction with the
              Business Rules of Augmont and of the Platform. Augmont may revise
              these Business Rules from time to time and at any time, without
              notice to you. Business Rules The Platform shall facilitate
              purchase and sale of Gold and Silver with each of its specific
              users (such users are referred to as “Registered Members”).
              Bullion can be bought and sold online using the Platform&#39;s
              buying / selling option. Registered Member can buy / sell any
              quantity of gold and silver on the Platform. The value of Bullion
              is in INR terms and excludes GST and other applicable taxes. Both
              Buy and Sell prices of Bullion will be quoted exclusive of GST.
              Augmont shall raise e-invoices for the Bullion sold.Augmont shall
              provide buy / sell rates of Bullion, Registered Members shall have
              the option to either sell the Bullion to Augmont at the prevailing
              market prices or allow the custodian to store the bullion in the
              designated vaults or to request for the delivery of the
              Gold/Silver bought in the form of coins and bars online with us.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              COPYRIGHT
            </div>
            <p className={terms.termspara}>
              All content included on the Platform such as text, graphics,
              logos, button icons, images, audio clips, digital downloads, data
              compilations, and software, is the property of Augmont or its
              content suppliers and is protected by international copyright
              laws. All software used on this site is the property of Augmont or
              its software suppliers, and is protected by international
              copyright laws. The content of the Platform cannot be copied,
              reproduced, republished, uploaded, posted, transmitted or
              distributed for any non-personal use without the prior written
              approval of Augmont.Graphics, logos, page headers, button icons,
              scripts, and service names contained in or features on the
              Platform are trademarks, or trade dress of Augmont. Augmont&#39;s
              trademarks may not be used in connection with any other product or
              service, in any manner that is likely to cause confusion,
              disparage or discredit regarding Augmont and its products and
              services. All trademarks not owned by Augmont that appear on this
              site are the property of their respective owners, who may or may
              not be affiliated with, connected to, or sponsored by Augmont.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DISCLAIMER OF WARRANTIES
            </div>
            <p className={terms.termspara}>
              The Platform and all information, content, materials, products
              (including software) and services included on or otherwise made
              available to you through the Platform are provided by Augmont an
              &quot;as is&quot; and &quot;as available&quot; basis, unless
              otherwise specified in writing. Augmont makes no representations
              or warranties of any kind, express or implied, as to the operation
              of this site or the information, content, materials, products
              (including software) or services included on or otherwise made
              available to you through this site, unless otherwise specified in
              writing. You expressly agree that your use of this site is at your
              sole risk. To the full extent permissible by applicable law,
              Augmont disclaims all warranties, express or implied, including,
              but not limited to, implied warranties of merchantability and
              fitness for a particular purpose. Augmont does not warrant that
              this site; information, content, materials, products (including
              software) or services included on or otherwise made available to
              you through this site; their servers; or electronic communications
              sent from Augmont are free of viruses or other harmful components.
              Augmont will not be liable for any damages of any kind arising
              from the use of this site or from any information, content,
              materials, products (including software) or services included on
              or otherwise made available to you through this site, including,
              but not limited to direct, indirect, incidental, punitive, and
              consequential damages, unless otherwise specified expressly in
              writing.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DISPUTES
            </div>
            <p className={terms.termspara}>
              Any dispute or claim relating in any way to your visit to the
              Platform or to products or services sold or distributed by Augmont
              or through the Platform will be resolved first by arbitration. The
              Indian Arbitration and Conciliation Act of 1996 applies to this
              agreement. To begin an arbitration proceeding, you must send a
              letter requesting arbitration and describing your claim in detail
              to our address available on the Platform. The arbitration will be
              conducted in Mumbai by an independent arbitrator appointed by
              Augmont. The costs of arbitration proceedings will be borne by the
              party so instructed by the arbitrator, on merits of the case. We
              each agree that any dispute resolution proceedings will be
              conducted only on an individual basis and not in a class,
              consolidated or representative action.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ELECTRONIC COMMUNICATIONS
            </div>
            <p className={terms.termspara}>
              When you visit the Platform or send emails to us, you are
              communicating with us electronically. You consent to receive
              communications from us electronically. We may communicate with you
              by one or more of letters, e-mail, SMS or by posting notices on
              the Platform. You agree that all agreements, notices, disclosures
              and other communications that we provide to you electronically
              satisfy all legal requirements that such communications be in
              writing.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              EQUIPMENT
            </div>
            <p className={terms.termspara}>
              You shall procure and maintain all communication and other
              equipment necessary to access the Platform and the costs of any
              such equipment and communication connections or use, including any
              applicable taxes, shall be borne solely by you. You are
              responsible for operating your own equipment used to access the
              Platform.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              FINANCIAL TRANSACTIONS AND TAXES
            </div>
            <p className={terms.termspara}>
              If you wish to make any financial transactions on the Platform,
              including paying for products or services, you may be asked for
              payment information. You agree that all information you provide is
              accurate, complete and current and that you will pay all charges
              owed, including any applicable taxes. You agree that you are
              solely responsible for any personal income reporting and tax
              payments required of you by applicable government authorities.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              GOVERNING LAW AND JURISDICTION
            </div>
            <p className={terms.termspara}>
              By visiting the Platform, you agree to be bound by the applicable
              Indian laws and State laws, including those pertaining to
              taxation. This Agreement has been executed and delivered in India,
              and its interpretations, validity and performance shall be
              construed and enforced in accordance with the laws of the Republic
              of India, without regard to principles of conflict of laws, and
              shall be subject to the exclusive jurisdiction of courts at
              Mumbai, India.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INDEMNIFICATION
            </div>
            <p className={terms.termspara}>
              You agree to indemnify, defend and hold Augmont harmless from all
              claims, damages and expenses (including attorney&#39;s fees) made
              by any third party arising out of your content, your use of the
              Platform, your connection to the Platform, your violation of this
              Agreement, our Terms and Conditions of Access and Use or our
              business policies, and the development, operation, maintenance,
              use and contents of this Platform.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INDEPENDENT INVESTIGATION
            </div>
            <p className={terms.termspara}>
              You acknowledge that you have read these Terms and Conditions of
              Access and Use and agree to them in entirety. You, understand that
              we may at any time (directly or indirectly) solicit member
              referrals on terms that may differ from those contained in this
              Terms and Conditions of Access and Use. You have independently
              evaluated the desirability of associating with the Platform or of
              participating in its programs or of availing its services and/or
              products, and are not relying on any representation, guarantee or
              statements other than as set forth in this Terms and Conditions of
              Access and Use.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              LICENSE AND SITE ACCESS
            </div>
            <p className={terms.termspara}>
              Augmont grants you a limited license to access and make personal
              use of this site and not to download (other than page caching) or
              modify it, or any portion of it, except with express written
              consent of Augmont. This license does not include any resale or
              commercial use of this site or its contents; any collection and
              use of any product listings, descriptions, or prices; any
              derivative use of this site or its contents; any downloading or
              copying of account information for the benefit of another
              merchant; or any use of data mining, robots, or similar data
              gathering and extraction tools. This site or any portion of this
              site may not be reproduced, duplicated, copied, sold, resold,
              visited, or otherwise exploited for any commercial purpose without
              express written consent of Augmont. You may not frame or utilize
              framing techniques to enclose any trademark, logo, or other
              proprietary information (including images, text, page layout, or
              form) of Augmont without its express written consent. You may not
              use any Meta tags or any other &quot;hidden text&quot; utilizing
              Augmont&#39;s name or trademarks without the express written
              consent of Augmont. Any unauthorized use terminates the permission
              or license granted by Augmont. You are granted a limited,
              revocable, and nonexclusive right to create a hyperlink to the
              Platform so long as the link does not portray Augmont, or its
              products or services in a false, misleading, derogatory, or
              otherwise offensive matter. You may not use any Augmont logo or
              other proprietary graphic or trademark as part of the link without
              express written permission.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              LIMITATION OF LIABILITY
            </div>
            <p className={terms.termspara}>
              You expressly agree that use of the Platform is at your sole risk.
              While we will take all reasonable precautions to ensure
              uninterrupted and error-free operations, your access and use of
              the Platform is at your sole risk. The service is provided on an
              &quot;as is&quot; and &quot;as available&quot; basis. We and our
              licensors, suppliers, vendors, parent, holding, subsidiary and
              related companies, affiliates, officers, agents and employees
              expressly disclaim all warranties of any kind, whether express or
              implied, including, but not limited to the implied warranties of
              merchantability, fitness for a particular purpose and
              non-infringement. In no event shall Augmont be liable for any
              direct, indirect, incidental, special, punitive, consequential
              damages, or any damages whatsoever, including, but not limited to,
              damages for loss of profits, goodwill, use, data, or other
              intangible losses resulting from: The use or the inability to use
              our services or access content, The cost of procurement of
              substitute goods and services resulting from transactions entered
              into through or from the Platform, The unauthorized access to or
              alterations of your transmissions or data, Statements or conduct
              of any third party on the service, or Any other matter relating to
              any service or product offered, delivered or agreed to be
              delivered, even if Augmont has been advised of the possibility of
              damages.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              OTHER BUSINESSES
            </div>
            <p className={terms.termspara}>
              For your convenience, the Platform may provide links to the sites
              of affiliated companies and certain other businesses, which may
              not be in our control. You acknowledge that Augmont does not
              endorse these linked sites (even if they pop up in a frame) or any
              links contained in these linked sites. We are not responsible for
              examining or evaluating, and we do not warrant the offerings of,
              any of these businesses or individuals or the content of their
              website. Augmont does not assume any responsibility or liability
              for the actions, product, and content of all these and any other
              third parties. You should carefully review their privacy
              statements and other conditions of use.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PATENTS
            </div>
            <p className={terms.termspara}>
              One or more patents owned by Augmont may apply to the Platform and
              to the features and services accessible via the Platform. Portions
              of the Platform may operate under license of one or more patents.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PRICING
            </div>
            <p className={terms.termspara}>
              Except where noted otherwise, the prices displayed for products on
              the Platform represents the value of the respective product. For
              certain transactions, you shall bear fees and charges in addition
              to payment for prices displayed on the Platform. Such additional
              fees and charges shall be as are stated on the Platform. Please
              pay attention to the details of your transactions, because your
              total price for a transaction may include taxes, fees and shipping
              costs, which you are responsible for payingWith respect to
              services provided or products sold by Augmont, we cannot confirm
              the cost of a service or the price of a product until you order.
              Despite our best efforts, a small number of the items in our
              catalogue may be mispriced. If an item&#39;s correct price is
              higher than our stated price, we will, at our discretion, either
              contact you for instructions before shipping or cancel your order
              and notify you of such cancellation.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PRIVACY
            </div>
            <p className={terms.termspara}>
              The Platform is strongly committed to your right to privacy and to
              keeping your information secure. We collect your personal
              information on a need-to-know basis. Personal information
              includes, but is not limited to, first and last name, physical
              address, e-mail address, phone number, birth date, and any other
              information that itself identifies or when tied to the above
              information, may identify you as a specific individual.
              Additionally, Augmont may require you to provide additional
              information and documents for meeting its Know-Your-Client
              guidelines. The Platform does not collect personally identifiable
              information about you except when you specifically and knowingly
              provide it. Augmont uses your personally identifiable information
              also to operate the Platform and offer its services and to inform
              you of new features, services, and products from Augmont.Augmont
              may carefully select other companies to send you information about
              their products or services which are related to the Platform but
              are not necessary to its operation (an &quot;Extended
              Service&quot;). You would be provided the option to decline the
              Extended Service.Augmont may disclose your personal information if
              required to do so by law or in the good-faith belief that such
              action is necessary: (a) to conform to the edicts of law or comply
              with legal process served on Augmont; (ii) to protect and defend
              the rights or property (including intellectual property) of
              Augmont and/or of the Platform or (iii) to act under exigent
              circumstances (as Augmont may, in its sole decision decide) to
              protect the personal safety of users of the Platform, Augmont, or
              the public.The Platform may have features which provide for users
              to disclose their identities and communicate with other users.
              Your use of such features and disclosure of any personal details
              (e.g. e- mail address, mobile numbers) by you through these
              features are at your sole risk, and Augmont accepts no
              responsibility for the same.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PRODUCT DESCRIPTIONS
            </div>
            <p className={terms.termspara}>
              Augmont attempts to be as accurate as possible. However, Augmont
              does not warrant that product descriptions or other content of
              this site is accurate, complete, reliable, current, or error-free.
              If a product offered by Augmont is not as described, your sole
              remedy is to return it in unused condition for a replacement under
              the provisions of our Replacement Policy.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              RETURNS, REPLACEMENT AND TITLE
            </div>
            <p className={terms.termspara}>
              Augmont does not take title to returned items until the item
              arrives at our designated address. For more information about our
              returns and replacement, please see our Replacement Policy
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              REPLACEMENT POLICY
            </div>
            <p className={terms.termspara}>
              The following rules will apply regarding replacement of articles
              delivered to the customers: Replacement shall be sought in writing
              no later than three business days from date of delivery to the
              Registered Member; Replacement shall be subject to return of the
              delivered articles at Augmont’s office address stated for this
              purpose on the Platform; It shall be the responsibility of the
              Registered Member to ensure safe delivery of articles to Augmont’s
              custody. Till such time that the receipt of Bullion is
              acknowledged as “received” by Augmont, the risk of loss of the
              article shall remain with the concerned Registered Member;
              Replacement shall be subject to handover of the delivered article
              in its original tamper-proof packing, if any, in an intact,
              un-opened and non-mutilated condition. Decision of Augmont
              regarding the condition of the tamper-proof packing shall be final
              and conclusive; While Augmont shall try to replace a returned
              piece with a close substitute, Augmont shall have the right to
              replace the returned piece with any piece which is similar in
              composition and equal in market value on the date of replacement
              (although not necessarily similar in shape or in design) with the
              returned piece.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              REVIEWS, COMMENTS, COMMUNICATIONS, AND OTHER CONTENT
            </div>
            <p className={terms.termspara}>
              You may post reviews, comments, photos, and other content and
              submit suggestions, ideas, comments, questions, or other
              information to the Platform, so long as the content is not
              illegal, obscene, threatening, defamatory, invasive of privacy,
              infringing of intellectual property rights, or otherwise injurious
              to third parties or objectionable and does not consist of or
              contain software viruses, political campaigning, commercial
              solicitation, chain letters, mass mailings, or any form of spam.
              You may not use a false e-mail address or mobile number,
              impersonate any person or entity, or otherwise mislead as to the
              origin of a card or other content. Augmont does not regularly
              review posted content, but reserves the right (but has no
              obligation) to remove or edit such content, at its sole
              discretion.If you do post content or submit material, and unless
              we indicate otherwise, you grant Augmont a nonexclusive,
              royalty-free, perpetual, irrevocable, and fully sub-licensable
              right to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, and display such content
              throughout the world in any media. You grant Augmont and its
              sub-licensees the right to use the name that you submit in
              connection with such content, if they choose. You represent and
              warrant that you own or otherwise control all of the rights to the
              content that you post; that the content is accurate; that use of
              the content you supply does not violate this policy and will not
              cause injury to any person or entity; and that you will indemnify
              Augmont for all claims resulting from content you supply. Augmont
              has the right but not the obligation to monitor and edit or remove
              any activity or content. Augmont takes no responsibility and
              assumes no liability for any content posted by you or any third
              party.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              SITE POLICIES, MODIFICATION, AND SEVERABILITY
            </div>
            <p className={terms.termspara}>
              please review our other policies posted on this site. These
              policies also govern your visit to the Platform. We reserve the
              right to make changes to our site, policies, and these Terms and
              Conditions of Access and Use at any time. If any of these Terms
              and Conditions of Access and Use is deemed invalid, void, or for
              any reason unenforceable, that condition shall be deemed severable
              and shall be modified so as to give effect to the economic intent
              of such impugned provision, and shall not affect the validity and
              enforceability of the remaining Terms and Conditions of Access and
              Use.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              TERMINATION
            </div>
            <p className={terms.termspara}>
              Augmont reserves the right to discontinue, in whole or in part,
              any portion of the Platform services or programs with or without
              notice. This discontinuation may relate to all users, certain
              groups of users, or to certain individual users.This Agreement and
              the license rights granted hereunder shall remain in full force
              and effect unless terminated or cancelled for any of the following
              reasons: (a) immediately by Augmont for any unauthorized access or
              use by you; (b) immediately by Augmont if you assign or transfer
              (or attempt to do so) any rights granted to you under this
              Agreement; (c) immediately, if you violate any of the other terms
              and conditions of Terms and Conditions of Access and Use.
              Termination or cancellation of this Agreement shall not affect any
              right or relief to which Augmont may be entitled at law or in
              equity. Upon termination of this User Agreement, all rights
              granted to you will terminate and return to Augmont.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              VOID WHERE PROHIBITED
            </div>
            <p className={terms.termspara}>
              Although the Platform is accessible worldwide, not all products or
              services discussed or referenced on the Platform are available to
              all persons or in all geographic locations or jurisdictions. The
              Platform reserves the right to limit the provision of any product
              or service to any person, geographic area or jurisdiction it so
              desires, in its sole discretion and to limit the quantities of any
              such product or service that it provides. Any offer for any
              product or service made on the Platform is void where prohibited.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              YOUR ACCOUNT
            </div>
            <p className={terms.termspara}>
              If you use this site, you are responsible for maintaining the
              confidentiality of your account and password and for restricting
              access to your computer, and you agree to accept responsibility
              for all activities that occur under your account or password.
              Augmont does not offer services or sell products to parties under
              the age of 18 years. Augmont reserves the right to refuse service,
              terminate accounts, remove or edit content, or cancel orders and
              instructions at its sole discretion.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ELIGIBILITY
            </div>
            <p className={terms.termspara}>
              You may use the Platform only if you are an Indian citizen,
              residing in India, and are eligible to enter into contracts under
              Indian law. Non-Indian citizens and non-resident Indians cannot
              participate on the Platform at present.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              YOUR REGISTRATION OBLIGATIONS
            </div>
            <p className={terms.termspara}>
              In consideration of your use of the Platform, you agree to:
              Provide true, accurate, current and complete information about
              yourself as prompted by the registration form required by the
              Platform (such information being the &quot;Registration
              Data&quot;), and Maintain and promptly update the Registration
              Data to keep it true, accurate, current and complete. In addition,
              if required you fill and sign all forms and documents which form
              part of your account opening kit, and supply us with all the
              relevant legal documents and financial information which law
              requires us to maintain. You warrant and represent that all
              information that you supply to us is accurate and truthful. You
              also expressly authorize Augmont to obtain reports concerning your
              credit standing and business conduct.You can open an augmont
              account with us by entering your mobile number and verifying the
              same with after verifying your OTP sent to your mobile
              number.Notwithstanding the foregoing, we may provide you with
              access to some parts of the Platform without you registering as a
              user. In that case, your identification is based on other means of
              identification that we deem appropriate. You warrant and represent
              that all information provided for this other means of
              identification is accurate and truthful. You further agree that
              such information may be collected and disclosed to us and used in
              accordance with these Terms and Conditions of Access and Use.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DISAPPROVAL OF APPLICATION
            </div>
            <p className={terms.termspara}>
              If you provide any information that is untrue, inaccurate, not
              current or incomplete, or Augmont has reasonable grounds to
              suspect that such information is untrue, inaccurate, not current
              or incomplete, Augmont has the right to suspend or terminate your
              account and refuse any and all current or future use of the
              Platform (or any portion thereof) without any liability to you.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              ACCOUNT SECURITY
            </div>
            <p className={terms.termspara}>
              upon completing the registration process with the Platform, the
              system will create unique customer id for you. You are responsible
              for maintaining the confidentiality of account, and are fully
              responsible for all activities that occur under your account. You
              agree to (a) immediately notify Augmont of any unauthorized use of
              your password or account or any other breach of security, and (b)
              ensure that you exit from your account at the end of each session.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              TERMINATION OF ACCOUNT
            </div>
            <p className={terms.termspara}>
              You agree that Augmont, in its sole discretion, may terminate your
              password, Account or your use of the Platform. Augmont may
              terminate your Account and remove any content within the Platform
              for any reason, including, without limitation, if Augmont, in its
              sole opinion, believes that you have violated or acted
              inconsistently with the letter or spirit of these Terms and
              Conditions of Access and Use. Augmont may also, in its sole
              discretion and at any time, discontinue the Platform, or any part
              thereof, without notice. You may also request Augmont to terminate
              your account with us by sending an email to the customer help desk
              from your registered email id. You agree that any termination of
              your access to the Platform under any provision of these Terms and
              Conditions of Access and Use may be effected without prior notice,
              and acknowledge and agree that Augmont may immediately deactivate
              or delete your account and all related information and files in
              your account and/or bar any further access to such files or to the
              Platform. Further, you agree that Augmont shall not be liable to
              you or any third-party for any termination of your access to the
              Service. However, on such termination, Augmont shall, based on
              request from the customer, deliver the bullion lying in the vaults
              in the form of coins and/or bars, sell the fractional parts and
              return the net amount of money standing to the credit of your
              Account
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INVESTMENT DECISIONS
            </div>
            <p className={terms.termspara}>
              Augmont may publish research and opinions on the Platform, for
              your information. You may not rely on any such information for
              forming your investment decisions. You acknowledge that Augmont or
              the Platform and its officers, directors, employees, agents and
              affiliates will have no liability with respect to transactions in
              or for your Account and your investment decisions.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              SYSTEMS
            </div>
            <p className={terms.termspara}>
              Operations on the Platform shall be conducted on an automated
              basis. Registered Members will be required to connect to the
              Platform over the Internet. Operations on the Platform shall be
              allowed through suitable internet-connected devices of a
              Registered Member. Each Registered Member shall login their
              respective augmont account by entering their respective mobile
              number. A Registered Member shall have a non-exclusive permission
              to use the Platform in the ordinary course of business. A
              Registered Member shall not have any title, rights or interest
              with respect to the Platform, its facilities, software and the
              information provided by Augmont and the Platform. The permission
              to use the Platform shall be subject to payment of such charges as
              Augmont and the Platform may prescribe from time to time.A
              Registered Member shall not, by herself/himself or by through any
              other person(s), directly or indirectly: Use the Platform for any
              purpose other than that approved and specified by the Platform;
              Copy, alter or modify the Platform, or make the Platform available
              to any other person; Use the Platform in any manner other than the
              manner as specified by Augmont; Attempt - directly or indirectly -
              to decompile, dissemble or reverse engineer the Platform; Publish,
              supply, show or make available to any other person or reprocess,
              retransmit, store or use the facilities of the Platform.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              CONTROL &amp; REPORTING SYSTEMS
            </div>
            <p className={terms.termspara}>
              The Platform may, at the decision of Augmont, cease operations in
              Bullion (Selected denominations of Gold and Silver as specified by
              the Platform) on the system for such an amount of time and for
              such reasons as it may deem fit in the best interests of the
              Registered Members and the overall markets. Orders, if any, in
              violation of an operation cease, will be rejected by the Platform.
              Details of transactions conducted by Registered Members would be
              updated with the back-office systems of Augmont on a real time
              basis. Registered Members can access the reports of their
              transactions over the Platform. Augmont may record such additional
              information about the buying and selling conducted on the Platform
              as it may consider relevant or necessary for its own use.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              INTERMEDIARIES
            </div>
            <p className={terms.termspara}>
              Augmont may appoint Intermediaries and Distributors who shall
              assist us in distributing our products to you. Augmont shall
              communicate all the transaction details to you directly by means
              of emails, sms and any other medium. and it is your responsibility
              to ensure that you receive this communication. When you visit the
              Platform or send e-mails to us, you are communicating with us
              electronically. You consent to receive communications from us
              electronically. We may communicate with you by one or more of
              letters, e-mail, SMS or by posting notices on the Platform. You
              agree that all agreements, notices, disclosures and other
              communications that we provide to you electronically satisfy all
              legal requirements that such communications be in writing. Augmont
              shall not be responsible to you in the event of default or any
              wrongful, dishonest, criminal, fraudulent act or wilful misconduct
              or gross negligence on the part of these Intermediaries. However,
              you shall immediately inform Augmont on occurrence of such an
              event through e- mails/telephone/fax or any other convenient
              means. The activities of the Intermediaries and its personnel/
              representative(s) shall not be construed to be activities of
              Augmont.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              FORCE MAJEURE
            </div>
            <p className={terms.termspara}>
              In case of inability of Augmont to make deliveries of coins, bars
              and jewelery bullion due to reasons beyond its control, Augmont
              may require that the deliveries be effectuated through specific
              modes, including through local agents / jewelers. In such a case,
              you agree to bear any additional costs and fees necessary for the
              delivery to be complete.
            </p>
          </>
          <>
            <div className={terms.serviceTitle}>
              TERMS &amp; CONDITIONS FOR DIGIGOLD AND SYSTEMATIC INVESTMENT PLAN{" "}
            </div>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              DIGIGOLD:
            </div>
            <p className={terms.termspara}>
              Through the Platform, Augmont shall facilitate buy and sell of
              Gold and Silver (Bullion).All such buy and sell transactions are
              final and non-reversible.Augmont shall provide buy/sell quotes for
              the prices of Bullion, which shall be linked, based on a formula,
              to the prices of gold and silver in the spot market. You may buy
              any quantity of Bullion through the Platform, subject to policies
              framed in this regard by Augmont. Augmont shall issue an invoice
              with Bullion (as the case may be) purchased by you. The Bullion
              purchased will be delivered to and stored with a custodian in a
              vault on your behalf and at your request by default. The cost of
              insurance of Bullion will be borne by Augmont.You shall have the
              option to (a) sell gold / silver from your Platform account back
              to Augmont at the prices shown on the Platform at the time of
              sale, or (b) request for the delivery of the gold/silver in the
              form of coins and bars online from us or (c) transfer the
              gold/silver to another account.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              PLACEMENT OF ORDERS
            </div>
            <p className={terms.termspara}>
              The market prices of bullion shown on the Platform would be an
              invitation to offer to all eligible Account holders. An order
              legitimately placed by an eligible Account holder would constitute
              an offer for purchase or sale of the Gold or Silver, as the case
              may be. Augmont may accept or reject such an offer, at its
              discretion.Though orders would usually be attended to within
              seconds, certain orders, at Augmont&#39;s discretion, may be
              subject to manual review and entry, which may cause delays in the
              processing of your orders. You also accept that you will receive
              the price at which your order executes in our systems, which may
              be different from the price at which Gold or Silver is trading at
              when you enter your order into our system. You acknowledge that
              you cannot modify an order once placed and that orders may get
              executed at a price significantly unfavorable to you, depending
              upon market fluctuations.BUYING / SELLINGThe common parameters
              with respect to buying / selling are as follows: Buy / Sell Price
              Spreads: The Platform will continuously provide buy / sell prices
              for the gold / silver on the platform. The buy / sell prices and
              the spread between them could change on the basis of various
              factors including price volatility, supply factors, external
              market conditions, etc. Price Quote Requests: Registered Members
              could request market price quotes for gold / silver they wish to
              buy / sell in, and could buy and sell at the quoted price by
              placing orders. Currently this facility is not available. An order
              which does not confirm to the specifications laid down by Augmont
              and the Platform shall be considered as void. Quantity of Gold /
              Silver earned through any promotional offers on Augmont app is
              non-saleable. However, a customer can request a physical delivery
              of this Gold / Silver by paying nominal making and delivery
              charges. Cashback or amount received through any promotional
              offers on Augmont app cannot be withdrawn. However, this can be
              used to purchase Gold / Silver or to request physical delivery of
              Gold / Silver on the Augmont app. Buying / selling
              FunctionsFollowing functions can be performed by the Registered
              member: Buy: A Registered member can buy gold and silver in any
              quantity in grams upto four decimals. There is no upper limit on
              purchase quantity. The customer shall pay the amount using a
              payment gateway immediately at the time of buying the gold/silver.
              Upon successful execution of buying, the purchased Bullion will
              reflect in the Registered Member’s Platform Account. The
              Registered Member can also utilize his/her business deposit for
              the buying of Golf and Silver. On execution of every buy order,
              Augmont / the Platform will purchase corresponding quantity of
              physical Bullion (as the case may be) and deliver it to the
              custodian who stores their bullion in the designated secured
              vaults. Hold: The Bullion purchased by a Registered Member can be
              stored with the custodian in a designated vault. Sell: The gold
              and silver held by a Registered Member can be sold back to Augmont
              in any quantity in grams upto four decimals. Registered member can
              sell only the bullion which is lying in the vault on his/her
              behalf. Upon successful execution of sale, the sold quantity of
              Bullion will be deducted from the Registered Member’s Platform
              Account and the appropriate amount of funds will be added to
              her/his Account. The gold or silver bought cannot be sold within
              48 hours from the time of buying.TAXES, BROKERAGE AND OTHER
              CHARGESNo brokerage will be charged to Registered Members for any
              buy and sell done by them. For each buy and sell conducted by a
              Registered Member, an e-invoice will be generated in the name of
              the Member.All taxes, duties, levies etcetera, as applicable, will
              be borne by the concerned Registered Member. Augmont shall not be
              responsible for such statutory taxes.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              AGENTS
            </div>
            <p className={terms.termspara}>
              In order to ensure smooth and efficient operations, Augmont may
              appoint one or more agents (including a Commission agent) on your
              behalf, from time to time. If required, you agree to ratify such
              appointment(s) retrospectively. All agents shall have the right to
              terminate their appointment at any time, without prior notice to
              you.The Commission agent appointed by Augmont on your behalf shall
              be appointed for a limited purpose of representing you and acting
              on your behalf - to take deliveries/constructive deliveries, make
              and receive payments for trades done by you on the Platform. Your
              acceptance of these Terms and Conditions of Access and Use shall
              form consideration for appointment of the Commission Agent.All
              payments from and to you shall be appropriated through the
              Commission agent as and when required. Notwithstanding the above
              mechanism, all statutory liability (including GST and other
              applicable taxes) shall always be to your account, and you shall
              indemnify the Commission Agent for any losses suffered for acting
              as your agent.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              REQUEST DELIVERY
            </div>
            <p className={terms.termspara}>
              The Platform offers services for users who wish to request for the
              delivery of the gold and silver bought by the users and lying in
              the vaults. The Platform displays the articles that are available
              for delivery along with the making and delivery charges for each
              article. Some items may appear slightly larger or smaller than
              actual size due to screen defaults and photography techniques.
              Sometimes the items may be represented larger than the actual size
              in order to clearly show details or smaller than the actual size
              in order to show the entire item. The Company shall not be liable
              for any legal action on this account. All the details regarding
              the product shall be clearly displayed on the Platform.This
              facility shall be available to all registered users of the
              Platform. Any registered user who wishes to request delivery of
              the gold and silver from the Platform can choose from the
              selection of Jewellery and Coins and Bars available on the
              Platform and add the item to the shopping
              cart.ProductInfrequently, data may be inaccurately displayed on
              the Platform due to system errors. Augmont reserves the right to
              correct any and all errors when they do occur and Augmont shall
              not honour inaccurate or erroneous prices. The delivery charges on
              the Platform are also subject to change without notice. For any
              order the delivery charges on the day the order is confirmed
              prevails. The delivery charges of the products listed on the
              Platform are fixed and not negotiable.DeliveryDelivery shall be
              made by the Company / courier agent at your doorstep. All items
              shall be delivered directly to such person and under any
              circumstances whatsoever, the Member cannot change the recipient
              details after the order is processed. The Member has the option to
              change the shipping address, before the product is actually
              shipped. In the event the Member wishes to change the shipping
              address, he / she has to log-in to his / her user account on the
              Platform and click on the &quot;Change Shipping Address&quot;
              button next to the shipping address and change the address or can
              request the helpdesk via email. However the Shipping Address
              cannot be changed once the order is processed.Recipient accepting
              delivery should carefully examine the package delivered and shall
              not accept deliveries where the packaging has been tampered with.
              The recipient receiving the delivery also has the option to open
              the package and check its contents prior to accepting the delivery
              or signing the delivery receipt. They shall not accept deliveries,
              where they find that the box is empty or the contents are damaged
              or the contents are not in accordance to the order placed.The
              recipient, upon signing the delivery receipt, acknowledges the
              receipt of the product in terms of the order placed with the
              Company. The Company is not liable to the Customer / recipient for
              any refund / replacement, under any circumstance, for any
              subsequent complaints with respect to such deliveriesIf the
              recipient is not available at the time of delivery, the Company /
              courier agent shall try and deliver the item thrice before
              returning the same to Augmont. All costs for re- shipment and
              handling in the case of non-delivery to the Customer shall be
              chargeable to the Customer.Return &amp; Replacement PolicyIn the
              event you receive a damaged / defective article or an article that
              does not comply with the specifications as per your original
              order, you are required to get in touch with the customer service
              team within 3 business days from the date of receipt of such
              delivery.Upon receiving your complaint, Augmont shall verify the
              authenticity and the nature of the complaint. If Augmont is
              convinced that the complaint is genuine, Augmont shall provide a
              free replacement subject to the Product being sealed and is
              returned in the same tamper proof blister packaging in which it
              was delivered to the Customer. However, in the event of frivolous
              and unjustified complaints regarding the quality and content of
              the products, Augmont reserves the right to pursue necessary legal
              actions against you and you will be solely liable for all costs
              incurred by Augmont in this regard.Before accepting shipment of
              any product, kindly ensure that the product’s packaging is not
              damaged or tampered. If you observe that the package is damaged or
              tampered, request you to refuse to accept delivery and inform
              Augmont at the earliest. The return process of the product may be
              restricted by Augmont depending on the nature and category of the
              product.RefundsAny refunds due by Augmont to the user for
              non-availability of articles shall be credited to the registered
              user’s business deposits balance with Augmont.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              TRANSFER THROUGH SUCCESSION
            </div>
            <p className={terms.termspara}>
              Any gold / silver lying in vault and the business deposit is
              non-transferrable unless specifically allowed by Augmont. However,
              in case of death or insanity, Augmont shall transfer such gold /
              silver, and advance balance to your legal heir(s) after the
              required due diligence and your legal heir(s) shall be regarded as
              the Registered User thereafter.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              SYSTEMATIC INVESTMENT PLAN
            </div>
            <p className={terms.termspara}>
              Systematic Investment Plan (henceforth referred to as “SIP&quot;)
              is a disciplined accumulation of Gold/Silver. The SIP enables the
              member to buy gold and silver of a certain fixed amount every
              month and accumulate Gold/Silver at periodic intervals at a
              “Configured Price”. The Configured Price for SIP shall be
              calculated by the Platform on every Business Day and shall be
              displayed on the Platform before 1 pm which shall be final and
              binding for everyone. A Business Day means any day other than
              Sunday or a day declared as holiday under the Negotiable
              Instruments Act, 1881 or a day on which normal business could not
              be transacted due to storms, floods, strikes, riots or any other
              events as Augmont may specify from time to time. To start the SIP,
              the member needs to log in to his/her account, click on the SIP
              link and fill in a simple form specifying the choices and submit.
              After successfully submitting SIP application, the member will get
              a confirmation sms/email. The member can start their SIP with the
              minimum amount of ₹ 1000 per month and can invest in multiples of
              ₹ 1000 thereafter. The member gets an option to buy additional
              quantities of gold and silver in the existing SIP and the said
              quantity shall be added to the SIP quantity for the tenure. The
              member can choose the duration of this SIP which can range from 1
              year to 10 years. The member gets an option to choose the SIP date
              cycle from the four options viz. 5th/12th/19th/26th of every
              month. e.g. If the member submits the SIP application on 7th
              October and selects the SIP cycle date as 12th of each month, then
              the SIP will initiate on 12th October. However, if they choose the
              SIP cycle date as 5th of each month, then the SIP start date will
              be 5th November. One cannot change the amount of SIP, duration and
              cycle date once the request is submitted. In order to change one
              has to terminate the existing SIP and register for a new one.
              There are no charges currently for doing the same. The frequency
              of buying is once per month. So, if the member chooses the SIP
              amount to be ₹ 1000 per month in SIP, ₹ 1000 is utilized for
              purchasing the Gold/Silver. The Registered Member can request for
              termination of his existing SIP by contacting the customer help
              desk. SIP will be terminated only upon the completion of the
              current SIP cycle month. e.g. If the member has selected 5th of
              every month as his SIP cycle date and his SIP is active, and the
              member decides to exit the SIP on 10th of the month, the cycle
              will continue till 4th of next month and then terminate.At the end
              of SIP tenure or on SIP termination, the member may sell the gold
              and silver at the market price displayed on the Platform.
              Alternatively, the member can request for termination of his
              account with us in which case the gold and silver shall get sold
              at the market rate and the proceeds shall be remitted to the
              member&#39;s bank account. You may not sell Gold / Silver under
              SIP but you can request the delivery of the gold and silver
              accumulated during the tenure of the SIP. Alternately you may sell
              the gold and silver under the SIP at the end of the tenure. In
              case you miss your monthly SIP installment, you will be given a
              grace period of 60 days. Within the grace period, if you do not
              transfer sufficient funds in your account, then your SIP may be
              treated as ’defaulted’ and your SIP may be irreversibly
              terminated. The SIP is neither a financial product nor a deposit
              scheme but a disciplined method of accumulating Gold/Silver.
              Augmont offers no investment advice or any assured returns while
              promoting the SIP. TERMS AND CONDITIONS FOR EMI The Scheme is
              unique and shall not be linked to any other existing or future
              Schemes/Offers and is not transferable under any circumstances.
              The product purchased and the specifications mentioned upon Order
              Confirmation cannot be changed during the tenure of the scheme and
              the Customer shall make the payments as per the payment schedule
              provided during Order confirmation. The money paid as booking
              amount under the Scheme shall not bear any interest. Augmont shall
              issue a system generated Proforma Invoice to the customer at the
              time of Order Confirmation, a Payment Receipt upon payment of
              every EMI and Final Tax Invoice at the time of Delivery of the
              Product. The product shall be delivered at the delivery location
              provided by Customer within 14 working days of receiving the full
              payment from the Customer. The Customer may be provided a grace
              period of 5 days every month beyond his/her respective payment due
              date. In case the customer fails to make payment beyond such grace
              period, then Augmont at its sole discretion may cancel the order
              as per the terms explained below. When a Customer cancels the
              Purchase Order before the payment of last EMI or where Augmont
              cancels the Purchase Order of the Customer pursuant to above,
              Augmont shall be entitled to deduct such charges in the following
              manner from the amount paid by the Customer towards the Purchase
              of the Product: a. The cancellation charges for each product shall
              be updated by Augmont on a daily basis for facilitating
              cancellation.b. If the cancellation charges as on the date and
              time of cancellation is higher/lower than the Order Value, then
              the difference between the order value and the cancellation rate
              as on the date of cancellation plus an amount equivalent to 2.36%
              of the order value shall be deducted from the payments made by the
              customer and balance shall be refunded to the customer’s bank
              account only. Any changes in GST or any other government taxes
              shall be collected from the customer at the time of
              delivery/closure. In the unfortunate event of death of the
              customer, the product shall be handed over to the legal heir of
              the Customer after due verification. Augmont reserves the right to
              alter the terms and conditions without intimation to the customer
              and the customer shall abide with such alterations. In case of any
              dispute, the courts of Mumbai shall have exclusive jurisdiction to
              resolve such disputes. Order fulfilment by Augmont is subject to
              the realization of the total Purchase Price from the Customer. The
              Customer is advised that proper KYC is updated at the time of
              purchasing the Product to enable Augmont to identify the Bona fide
              Customer. In any case the Customer will be prompted to provide
              their PAN details once the Customer’s Purchase Order reaches a
              certain threshold limit. Augmont reserves the right to stop
              facilitating the Scheme on Platform at its sole discretion. All
              Orders previously placed shall stand active and shall be fulfilled
              by Augmont. Augmont does not charge any processing fee for the
              purpose of facilitating the Scheme for its Customers The
              photographs and impressions displayed on the platform are for
              reference only and are not to scale. The size, colour, finish,
              lustre, and other visual parameters of the actual product may
              differ to an extent from the photographs and impressions displayed
              on the Platform. The Products shall be considered to have a defect
              in quality if they have an inherent material or manufacturing
              defect. Minor deviations from the image shown on the Platform
              shall not qualify as a defect. Augmont shall not be liable for any
              action on this account. Augmont or Platform shall not be
              responsible for any unauthorized use of credit or debit card for
              making any transaction and shall have no liability either to the
              true holder of any credit or debit card or to the concerned bank
              for any unauthorized / fraudulent use of payment instruments. In
              no event Augmont shall be held liable to the true holder of any
              credit or debit card or to the concerned bank for processing and
              fulfilling its obligation upon realization of entire Purchase
              Price towards such fraudulent transaction. Augmont will
              communicate with the Customer by email or other electronic methods
              which will be deemed as adequate means for service of notice or
              communication. All transactions on the Platform and use of
              services of Augmont shall be subject to true, fair and accurate
              disclosure of information by the Customer as may be called for.
              The recipient of the Products is obliged to produce identity proof
              and/or address proof or such other documents to verify and
              establish as being bona fide Purchaser/ Recipient at the time of
              delivery to ensure safe delivery of the Products purchased.
              Delivery Delivery shall be made by the Company / courier agent at
              your doorstep. All items shall be delivered directly to such
              person and under any circumstances whatsoever, the Member cannot
              change the recipient details after the order is processed. The
              Member has the option to change the shipping address, before the
              product is actually shipped. In the event the Member wishes to
              change the shipping address, he / she has to log-in to his / her
              user account on the Platform and click on the &quot;Change
              Shipping Address&quot; button next to the shipping address and
              change the address or can request the helpdesk via email. However,
              the Shipping Address cannot be changed once the order is
              processed. Recipient accepting delivery should carefully examine
              the package delivered and shall not accept deliveries where the
              packaging has been tampered with. The recipient receiving the
              delivery also has the option to open the package and check its
              contents prior to accepting the delivery or signing the delivery
              receipt. They shall not accept deliveries, where they find that
              the box is empty or the contents are damaged or the contents are
              not in accordance to the order placed. The recipient, upon signing
              the delivery receipt, acknowledges the receipt of the product in
              terms of the order placed with the Company. The Company is not
              liable to the Customer / recipient for any refund / replacement,
              under any circumstance, for any subsequent complaints with respect
              to such deliveries. If the recipient is not available at the time
              of delivery, the Company / courier agent shall try and deliver the
              item thrice before returning the same to Augmont. All costs for
              re-shipment and handling in the case of non-delivery to the
              Customer shall be chargeable to the Customer. Return &amp;
              Replacement Policy In the event you receive a damaged / defective
              article or an article that does not comply with the specifications
              as per your original order, you are required to get in touch with
              the customer service team within 3 business days from the date of
              receipt of such delivery. Upon receiving your complaint, Augmont
              shall verify the authenticity and the nature of the complaint. If
              Augmont is convinced that the complaint is genuine, Augmont shall
              provide a free replacement subject to the Product being sealed and
              is returned in the same tamper proof blister packaging in which it
              was delivered to the Customer. However, in the event of frivolous
              and unjustified complaints regarding the quality and content of
              the products, Augmont reserves the right to pursue necessary legal
              actions against you and you will be solely liable for all costs
              incurred by Augmont in this regard. Before accepting shipment of
              any product, kindly ensure that the product’s packaging is not
              damaged or tampered. If you observe that the package is damaged or
              tampered, request you to refuse to accept delivery and inform
              Augmont at the earliest. The return process of the product may be
              restricted by Augmont depending on the nature and category of the
              product. Refunds Any refunds due by Augmont to the user for
              non-availability of articles shall be credited to the registered
              user’s business deposits balance with Augmont.
            </p>
            <div className={`${terms.titlemain} ${terms.textSecondary}`}>
              FAQs – Digi Gold
            </div>
            <p className={terms.termspara}>
              What is the DigiGold product sold by Augmont? DigiGold facilitates
              the purchase of physical bullion (i.e. bars of Gold/Silver) for as
              low as Re. 1 with the ease of online access. The customer can
              request for the delivery of Gold/Silver purchased from Augmont
              anytime they want in the form of coins/ bars and jewellery and it
              will be delivered at your doorstep. Customers can also sell the
              bullion (bought from us) in a secured and convenient manner back
              to Augmont. What is the purity of the gold/silver that Augmont
              offers to customers in the DigiGold product? Augmont, through its
              online platform, offers 24 carat 999 Gold and 24 carat 999
            </p>
          </>
          
          <p className={terms.termspara} >
            Pinch App
            <div>Registered Office address: H.No 3549-Y Sector 15v Part III Sonipat , Haryana , 131001 </div>
            <div>Tel: +918646762345 </div>
            <div>Email : info.pinchapp@gmail.com</div>
          </p>
        </div>
      </div>
    </>
  );
};

export default index;
