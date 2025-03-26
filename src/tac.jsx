import { ScrollText } from "lucide-react";
import Footer from "./Components/Footer";
import Navbar from "./Nav/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Mobilefooter from "./Mobilefooter";
import { useMediaQuery } from "react-responsive";
import BackToTopButton from "./BackToTopButton";
import Logo from "./Components/logo";

function tac() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      <Logo></Logo>
      <BackToTopButton></BackToTopButton>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        {/* <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-5 py-8 sm:px-8 lg:px-10 flex items-center gap-4">
            <ScrollText className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Terms and Conditions
            </h1>
          </div>
        </header> */}

        {/* Main Content */}
        <main className="max-w-[150rem] mx-auto px-5 py-10 sm:px-8 lg:px-10">
          <div className="bg-white shadow-lg rounded-lg p-8 sm:p-10">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-8 text-3xl">
                By visiting our site, you are agreeing to be bound by the
                following terms and conditions. We may change these terms and
                conditions at any time. Your continued use of KLobTech means
                that you accept any new or modified terms and conditions that we
                come up with. Please re-visit the 'Terms of Use' link at our
                site from time to time to stay abreast of any changes that we
                may introduce.
              </p>

              {/* Sections */}
              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  1. Registration
                </h2>
                <ul className="list-disc pl-8 text-gray-600 space-y-3 text-3xl">
                  <li>
                    By registering, you certify that all information you
                    provide, now or in the future, is accurate.
                  </li>
                  <li>
                    If you do not login at KLobTech for a continuous period of
                    90 days your registration may get automatically cancelled.
                  </li>
                  <li>
                    KLobTech reserves the right, in its sole discretion, to deny
                    you access to this website or any portion thereof without
                    notice for the following reasons:
                    <ul className="list-[circle] pl-8 mt-3 space-y-2 text-3xl">
                      <li>
                        immediately by KLobTech for any unauthorized access or
                        use by you.
                      </li>
                      <li>
                        immediately by KLobTech if you assign or transfer (or
                        attempt the same) any rights granted to you under this
                        Agreement;
                      </li>
                      <li>
                        immediately, if you violate any of the other terms and
                        conditions of this User Agreement.
                      </li>
                    </ul>
                  </li>
                  <li>I agree to get periodic SMS alerts.</li>
                  <li>I agree to get periodic newsletters.</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  2. License
                </h2>
                <p className="text-gray-600 text-3xl">
                  KLobTech hereby grants you a limited, non-exclusive,
                  non-assignable and non-transferable license to access KLobTech
                  provided and expressly conditioned upon your agreement that
                  all such access and use shall be governed by all of the terms
                  and conditions set forth in this USER AGREEMENT.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  3. Copyright & No Retransmission of Information
                </h2>
                <p className="text-gray-600 text-3xl">
                  KLobTech as well as the design and information contained in
                  this site is the valuable, exclusive property of KLobTech and
                  nothing in this Agreement shall be construed as transferring
                  or assigning any such ownership rights to you or any other
                  person or entity.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  4. DELAYS IN SERVICES:
                </h2>
                <p className="text-gray-600 text-3xl">
                  Neither KLobTech(including its and their directors, employees,
                  affiliates, agents, representatives or subcontractors) shall
                  be liable for any loss or liability resulting, directly or
                  indirectly, from delays or interruptions due to electronic or
                  mechanical equipment failures, telephone interconnect
                  problems, defects, weather, strikes, walkouts, fire, acts of
                  God, riots, armed conflicts, acts of war, or other like
                  causes. KLobTechshall have no responsibility to provide you
                  access to KLobTechwhile interruption of KLobTechis due to any
                  such cause shall continue.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  5. LIABILITY DISCLAIMER:
                </h2>
                <p className="text-gray-600 text-3xl">
                  YOU EXPRESSLY AGREE THAT USE OF THE WEBSITE IS AT YOUR SOLE
                  RISK. THE CONTENTS, INFORMATION, SOFTWARE, PRODUCTS, FEATURES
                  AND SERVICES PUBLISHED ON THIS WEB SITE MAY INCLUDE
                  INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY
                  ADDED TO THE CONTENTS HEREIN. KLobTechAND/OR ITS RESPECTIVE
                  SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS WEB
                  SITE AT ANY TIME. THIS WEB SITE MAY BE TEMPORARILY UNAVAILABLE
                  FROM TIME TO TIME DUE TO REQUIRED MAINTENANCE,
                  TELECOMMUNICATIONS INTERRUPTIONS, OR OTHER DISRUPTIONS.
                  KLobTech(AND ITS OWNERS, SUPPLIERS, CONSULTANTS, ADVERTISERS,
                  AFFILIATES, PARTNERS, EMPLOYEES OR ANY OTHER ASSOCIATED
                  ENTITIES, ALL COLLECTIVELY REFERRED TO AS ASSOCIATED ENTITIES
                  HEREAFTER) SHALL NOT BE LIABLE TO USER OR MEMBER OR ANY THIRD
                  PARTY SHOULD KLobTechEXERCISE ITS RIGHT TO MODIFY OR
                  DISCONTINUE ANY OR ALL OF THE CONTENTS, INFORMATION, SOFTWARE,
                  PRODUCTS, FEATURES AND SERVICES PUBLISHED ON THIS WEBSITE.
                  KLobTechAND/OR ITS RESPECTIVE ASSOCIATED ENTITIES MAKE NO
                  REPRESENTATIONS ABOUT THE SUITABILITY OF THE CONTENTS,
                  INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES
                  CONTAINED ON THIS WEB SITE FOR ANY PURPOSE. ALL SUCH CONTENTS,
                  INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES ARE
                  PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. KLobTechAND/OR
                  ITS ASSOCIATED ENTITIES HEREBY DISCLAIM ALL WARRANTIES AND
                  CONDITIONS WITH REGARD TO THESE CONTENTS, INFORMATION,
                  SOFTWARE, PRODUCTS, FEATURES AND SERVICES, INCLUDING ALL
                  IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS
                  FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND
                  AVAILABILITY. IN NO EVENT SHALL KLobTechAND/OR ITS ASSOCIATED
                  ENTITIES BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE,
                  INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR
                  IN ANY WAY CONNECTED WITH THE USE OF THIS WEB SITE OR WITH THE
                  DELAY OR INABILITY TO USE THIS WEBSITE, OR FOR ANY CONTENTS,
                  INFORMATION, SOFTWARE, PRODUCTS, FEATURES AND SERVICES
                  OBTAINED THROUGH THIS WEB SITE, OR OTHERWISE ARISING OUT OF
                  THE USE OF THIS WEB SITE, WHETHER BASED ON CONTRACT, TORT,
                  STRICT LIABILITY OR OTHERWISE, EVEN IF KLobTechOR ANY OF ITS
                  ASSOCIATED ENTITIES HAS BEEN ADVISED OF THE POSSIBILITY OF
                  DAMAGES.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  6. USE OF MESSAGE BOARDS, CHAT ROOMS AND OTHER COMMUNICATION
                  FORUMS:
                </h2>
                <p className="text-gray-600 text-3xl">
                  If this Web site contains message/bulletin boards, chat rooms,
                  or other message or communication facilities (collectively,
                  "Forums"), you agree to use the Forums only to send and
                  receive messages and material that are proper and related to
                  the particular Forum. By way of example, and not as a
                  limitation, you agree that when using a Forum, you shall not
                  do any of the following: Defame, abuse, harass, stalk,
                  threaten or otherwise violate the legal rights (such as rights
                  of privacy and publicity) of others. Publish, post, distribute
                  or disseminate any defamatory, infringing, obscene, indecent
                  or unlawful material or information. Upload files that contain
                  software or other material protected by intellectual property
                  laws (or by rights of privacy of publicity) unless you own or
                  control the rights thereto or have received all necessary
                  consents. Upload files that contain viruses, corrupted files,
                  or any other similar software or programs that may damage the
                  operation of another's computer Conduct or forward surveys,
                  contests, or chain letters. Download any file posted by
                  another user of a Forum that you know, or reasonably should
                  know, cannot be legally distributed in such manner.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  7. EQUIPMENT AND OPERATION
                </h2>
                <p className="text-gray-600 text-3xl">
                  You shall provide and maintain all telephone/internet and
                  other equipment necessary to access KLobTech and the costs of
                  any such equipment and/or telephone/internet connections or
                  use, including any applicable taxes, shall be borne solely by
                  you. You are responsible for operating your own equipment used
                  to access KLobTech.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  8. INFORMATION DISCLAIMER:
                </h2>
                <p className="text-gray-600 text-3xl">
                  You acknowledge that the information provided through
                  KLobTechis compiled from sources, which are beyond the control
                  of KLobTechThough such information is recognized by the
                  parties to be generally reliable, the parties acknowledge that
                  inaccuracies may occur and KLobTechdoes not warrant the
                  accuracy or suitability of the information. For this reason,
                  as well as the possibility of human and mechanical errors and
                  other factors, YOU ACKNOWLEDGE THAT KLobTechIS PROVIDED TO YOU
                  ON AN "AS IS, WITH ALL FAULTS" BASIS. KLobTechEXPRESSLY
                  DISCLAIMS ANY AND ALL WARRANTIES, WHETHER EXPRESS, ORAL,
                  IMPLIED, STATUTORY OR OTHERWISE, OF ANY KIND TO THE USERS
                  AND/OR ANY THIRD PARTY, INCLUDING ANY IMPLIED WARRANTIES OF
                  ACCURACY, TIMELINESS, COMPLETENESS, MERCHANTABILITY AND
                  FITNESS FOR A PARTICULAR PURPOSE, AS WELL AS ANY WARRANTIES
                  ARISING BY VIRTUE OF CUSTOM OF TRADE OR COURSE OF DEALING AND
                  ANY IMPLIED WARRANTIES OF TITLE OR NON-INFRINGEMENT. IN
                  ADDITION, KLobTech IN PROVIDING THE INFORMATION MAKES NO
                  ENDORSEMENT OF ANY PARTICULAR SECURITY, MARTKET PARTICIPANT,
                  OR BROKERAGE. FURTHER, KLobTechDOES NOT REPRESENT OR WARRANT
                  THAT IT WILL MEET YOUR REQUIREMENTS OR IS SUITABLE FOR YOUR
                  NEEDS. Under this User Agreement, you assume all risk of
                  errors and/or omissions in KLobTech including the transmission
                  or translation of information. You assume full responsibility
                  for implementing sufficient procedures and checks to satisfy
                  your requirements for the accuracy and suitability of KLobTech
                  including the information, and for maintaining any means,
                  which you may require for the reconstruction of lost data or
                  subsequent manipulations or analyses of the information under
                  the User Agreement. YOU AGREE THAT KLobTech(INCLUDING ITS AND
                  THEIR OFFICERS, DIRECTORS, EMPLOYEES, AFFILIATES, GROUP
                  COMPANIES AGENTS, REPRESENTATIVES OR SUBCONTRACTORS) SHALL NOT
                  IN ANY EVENT BE LIABLE FOR ANY SPECIAL, INCIDENTAL OR
                  CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO
                  USE KLobTechFOR ANY PURPOSE WHATSOEVER. KLobTechAND IT'S
                  AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS SHALL
                  HAVE NO LIABILITY IN TORT, CONTRACT, OR OTHERWISE TO USER
                  AND/OR ANY THIRD PARTY.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  9. LINKS TO THIRD PARTY SITES
                </h2>
                <p className="text-gray-600 text-3xl">
                  The links in this site will allow you to leave KLobTech. The
                  linked sites are not under the control of KLobTech.
                  KLobTechhas not reviewed, nor approved these sites and is not
                  responsible for the contents or omissions of any linked site
                  or any links contained in a linked site. The inclusion of any
                  linked site does not imply endorsement by KLobTechof the site.
                  Third party links to KLobTechshall be governed by a separate
                  agreement.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  10. INDEMNIFICATION:
                </h2>
                <p className="text-gray-600 text-3xl">
                  YOU SHALL INDEMNIFY, DEFEND AND HOLD HARMLESS
                  KLobTech(INCLUDING ITS AND THEIR OFFICERS, DIRECTORS,
                  EMPLOYEES, AFFILIATES, GROUP COMPANIES, AGENTS,
                  REPRESENTATIVES OR SUBCONTRACTORS) FROM ANY AND ALL CLAIMS AND
                  LOSSES IMPOSED ON, INCURRED BY OR ASSERTED AS A RESULT OF OR
                  RELATED TO: (a) your access and use of KLobTech(b) any
                  non-compliance by user with the terms and conditions hereof;
                  or (c) any third party actions related to users receipt and
                  use of the information, whether authorized or unauthorized.
                  Any clause declared invalid shall be deemed severable and not
                  affect the validity or enforceability of the remainder. These
                  terms may only be amended in a writing signed by KlobTech
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  11. CONFLICTING TERMS:
                </h2>
                <p className="text-gray-600 text-3xl">
                  If there is any conflict between this User Agreement and other
                  documents, this User Agreement shall govern, whether such
                  order or other documents is prior to or subsequent to this
                  User Agreement, or is signed or acknowledged by any director,
                  officer, employee, representative or agent of KLobTech.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  12. ATTORNEY'S FEES:
                </h2>
                <p className="text-gray-600 text-3xl">
                  If mcd takes action (by itself or through its associate
                  companies) to enforce any of the provisions of this User
                  Agreement, including collection of any amounts due hereunder,
                  mcd shall be entitled to recover from you (and you agree to
                  pay), in addition to all sums to which it is entitled or any
                  other relief, at law or in equity, reasonable and necessary
                  attorney's fees and any costs of any litigation.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  13. ENTIRE AGREEMENT:
                </h2>
                <p className="text-gray-600 text-3xl">
                  This User Agreement constitutes the entire agreement between
                  the parties, and no other agreement, written or oral, exists
                  between you and KLobTech. By using the Information on KLobTech
                  you assume full responsibility for any and all gains and
                  losses, financial, emotional or otherwise, experienced,
                  suffered or incurred by you. KLobTechdoes not guarantee the
                  accuracy, completeness or timeliness of, or otherwise endorse
                  in any way, the views, opinions or recommendations expressed
                  in the Information, does not give investment advice, and does
                  not advocate the purchase or sale of any security or
                  investment by you or any other individual. The Information is
                  not intended to provide tax, legal or investment advice, which
                  you should obtain from your professional advisor prior to
                  making any investment of the type discussed in the
                  Information. The Information does not constitute a
                  solicitation by the information providers, KLobTechor other of
                  the purchase or sale of securities. THE SERVICE IS PROVIDED
                  "AS IS," WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTY FOR
                  INFORMATION, DATA, SERVICES, UNINTERRUPTED ACCESS, OR PRODUCTS
                  PROVIDED THROUGH OR IN CONNECTION WITH THE SERVICE.
                  SPECIFICALLY, KLobTechDISCLAIMS ANY AND ALL WARRANTIES,
                  INCLUDING, BUT NOT LIMITED TO: (i) ANY WARRANTIES CONCERNING
                  THE AVAILABILITY, ACCURACY, USEFULNESS, OR CONTENT OF
                  INFORMATION, PRODUCTS OR SERVICES; AND (ii) ANY WARRANTIES OF
                  TITLE, WARRANTY OF NON-INFRINGEMENT, WARRANTIES OF
                  MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THIS
                  DISCLAIMER OF LIABILITY APPLIES TO ANY DAMAGES OR INJURY
                  CAUSED BY ANY FAILURE OF PERFORMANCE, ERROR, OMISSION,
                  INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR
                  TRANSMISSION, COMPUTER VIRUS, COMMUNICATION LINE FAILURE,
                  THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, ALTERATION OF,
                  OR USE OF RECORD, WHETHER FOR BREACH OF CONTRACT, TORT,
                  NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION. NEITHER
                  KLobTechNOR ANY OF ITS EMPLOYEES, AGENTS, SUCCESSORS, ASSIGNS,
                  AFFILIATES, GROUP COMPANIES OR CONTENT OR SERVICE PROVIDERS
                  SHALL BE LIABLE TO YOU OR OTHER THIRD PARTY FOR ANY DIRECT,
                  INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING
                  OUT OF USE OF SERVICE OR INABILITY TO GAIN ACCESS TO OR USE
                  THE SERVICE OR OUT OF ANY BREACH OF ANY WARRANTY. BECAUSE SOME
                  COUNTRIES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
                  LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE
                  LIMITATION MAY NOT APPLY TO YOU. IN SUCH COUNTRIES, THE
                  RESPECTIVE LIABILITY OF KLobTech ITS EMPLOYEES, AGENTS,
                  SUCCESSORS, ASSIGNS, AFFILIATES, GROUP COMPANIES AND CONTENT
                  OR SERVICE PROVIDERS RESPECTIVE LIABILITY IS LIMITED TO THE
                  AMOUNT PROVIDED UNDER SAID LAW. FURTHER, YOU AGREE AND
                  UNDERSTAND THAT ALL SERVICES PROVIDED ARE NON-REFUNDABLE AND
                  THAT YOU SHOULD CAREFULLY CONSIDER WHETHER OUR SERVICES ARE
                  ABLE TO MEET YOUR NEEDS.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  14. TERMINATION:
                </h2>
                <p className="text-gray-600 text-3xl">
                  This User Agreement and the license rights granted hereunder
                  shall remain in full force and effect unless terminated or
                  cancelled for any of the following reasons: (a) immediately by
                  KLobTechfor any unauthorized access or use by you (b)
                  immediately by KLobTechif you assign or transfer (or attempt
                  the same) any rights granted to you under this Agreement; (c)
                  immediately, if you violate any of the other terms and
                  conditions of this User Agreement. Termination or cancellation
                  of this Agreement shall not affect any right or relief to
                  which KLobTechmay be entitled, at law or in equity. Upon
                  termination of this User Agreement, all rights granted to you
                  will terminate and revert to KLobTech. Except as set forth
                  herein, regardless of the reason for cancellation or
                  termination of this User Agreement, the fee charged if any for
                  access to KLobTechis non-refundable for any reason.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-4xl font-semibold text-gray-800 mb-5">
                  15. JURISDICTION:
                </h2>
                <p className="text-gray-600 text-3xl">
                  The terms of this agreement are exclusively based on and
                  subject to Indian law. You hereby consent to the exclusive
                  jurisdiction and venue of courts in Jaipur, India in all
                  disputes arising out of or relating to the use of this
                  website. Use of this website is unauthorized in any
                  jurisdiction that does not give effect to all provisions of
                  these terms and conditions, including without limitation this
                  paragraph.
                </p>
              </section>

              <footer className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-2xl text-gray-500 text-center">
                  © 2018 - KLobTech. All Rights Reserved
                </p>
              </footer>
            </div>
          </div>
        </main>
      </div>

      {isMobile && <Mobilefooter></Mobilefooter>}
      {!isMobile && <Footer></Footer>}
    </>
  );
}

export default tac;
