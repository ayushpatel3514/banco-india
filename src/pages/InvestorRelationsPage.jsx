import React, { useState, useEffect } from "react";
import "./InvestorRelationsPage.css";

const TABS = [
  "Investor Relations",
  "Our Policies",
  "Financial Results",
  "Annual Report",
  "Disclosures under Regulation 46 of the SEBI",
];

const parseLines = (raw) =>
  raw
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

const splitInTwo = (items) => {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
};

/* -------------------- COMPANY ANNOUNCEMENTS -------------------- */

const companyAnnouncementsRaw = `
Trading window closure notice 31.12.2025
Intimation of Press Release by Wholly Owned Subsidiary
List of Shareholders whose shares are liable for transfer to IEPF in FY 2025-26
Copy of Newspaper Publication dtd. 20.12.2025
Copy of Newspaper Publications dtd. 16.12.2025 (Special Window for re-Lodgement of Transfer Requests of Physical Shares)
Clarification on Increase in Volume – BSE
Clarification on Increase in Volume – NSE
Copy of Newspaper publication dtd. 15.11.2025 regarding Interim Dividend 2025-26 and record date
Intimation of specimen copy of the email communication sent to shareholders regarding Tax Deduction at Source (TDS) / Withholding Tax on Interim Dividend
Outcome of Board Meeting dtd.13.11.2025
Intimation of Board Meeting dtd. 13.11.2025
Copy of Newspaper Publications dtd. 16.10.2025 (Special Window for re-Lodgement of Transfer Requests of Physical Shares)
Copy of Newspaper Publications dtd. 16.10.2025 (100 Days Campaign- “Saksham Niveshak”)
Clarification on movement in price of security – BSE NSE
Intimation of Appointment of Senior Management Personnel dtd 04.10.2025
Intimation of Resignation of Senior Management Personnel dtd 01.10.2025
Intimation of change of Email ID of RTA
Trading window closure notice 30.09.2025
Intimation of Appointment of Secretarial Auditor of the Company
AGM 2025 – Voting Results
Proceedings of 64th AGM held on 19.09.2025
Clarification on Increase in Volume – BSE
Intimation under Regulation 30 – Subsidiary Updates
Intimation of specimen copy of letter sent to shareholders whose email address are not registered with Company / Depository / RTA
Copy of newspaper publication dtd. 26.08.2025 (64th AGM Notice, Annual Report & e-voting)
Copy of Newspaper Publications dtd. 21.08.2025 (100 Days Campaign- “Saksham Niveshak”)
Copy of Newspaper Publications dtd. 21.08.2025 (Special Window for re-Lodgement of Transfer Requests of Physical Shares)
Copy of Newspaper Publication dtd. 13.08.2025 (64th AGM Advance Notice)
Intimation about 64th Annual General Meeting, Book Closure Period and Cut-Off Date
Appointment of Cost Auditors of the Company
Appointment of Secretarial Auditors of the Company
Outcome of Board Meeting dtd. 08.08.2025
Intimation of Board Meeting dtd. 08.08.2025
List of Shares liable for transfer to IEPF in FY 2025-26 (2)
Copy of Newspaper Publication dtd. 18.07.2025
Postal Ballot Voting Results 28.06.2025
Trading window closure notice 30.06.2025
Intimation of Resignation of Senior Management Personnel dtd 21.06.2025
Copy of Newspaper Publication dtd. 30.05.2025
Postal Ballot Notice Dtd. 17.05.2025
List of Shares liable to transfer to IEPF in FY 2025-26
Copy of Newspaper Publication dtd. 27.05.2025
Intimation of Appointment of Chief Financial Officer (KMP) of the Company
Intimation of Appointment of Additional Director and Whole-time Director (KMP) of the Company
Intimation of revised contact details of Key Managerial Personnel (KMP) pursuant to Regulation 30(5) of SEBI (LODR), Regulations, 2015
Outcome of Board Meeting dtd. 17.05.2025
Intimation of Board Meeting dtd. 17.05.2025
Intimation under Regulation 30 – Subsidiary Updates
Intimation of Press Release by Wholly Owned Subsidiary
Intimation under Regulation 30 – Subsidiary Updates
Clarification on Increase in Volume – BSE
Clarification on Increase in Volume – NSE
Intimation regarding RTA’s Dedicated Portal for shareholder queries / service request
Intimation under Regulation 30 – Subsidiary Updates
Intimation of Press Release by Wholly Owned Subsidiary
Intimation of change of Email Id and Website of RTA
Intimation of Resignation of Whole-time Director & CFO
Intimation of Press Release by Wholly Owned Subsidiary
Postal Ballot Voting Results 26.03.2025
Trading window closure notice 31.03.2025
Intimation of resubmission of readable copy of unaudited Financial Results 31.12.2024
Copy of Newspaper Publication dtd. 25.02.2025
Postal Ballot Notice Dtd. 08.02.2025
Intimation of update on acquisition of business undertaking of Padra Coating Works LLP
Copy of Newspaper Publication dtd. 11.02.2025
Intimation of acquisition of business undertaking of Padra Coating Works LLP on going concern basis
Intimation of completion of second and final term of Independent Directors of the Company
Intimation of appointment and re-appointment of Independent Directors of the Company
Intimation of Interim Dividend for the F.Y. 2024-25 and Record Date
Outcome of Board Meeting dtd. 08.02.2025
Intimation of Board Meeting dtd. 08.02.2025
Intimation of Press Release by Wholly Owned Subsidiary
Intimation of Change in Name of RTA
Intimation of Allotment of Bonus Equity Shares
Intimation of details of proposed Allotment of Bonus Equity Shares
Trading window closure notice 31.12.2024
Copy of Newspaper Publication dtd. 23.12.2024
Intimation of Record Date for the purpose of Bonus Issue
Postal Ballot Voting Results 19.12.2024
Copy of Newspaper publication dtd. 20.11.2024
Postal Ballot Notice Dtd. 13.11.2024
Intimation of revised contact details of Key Managerial Personnel (KMP) pursuant to Regulation 30(5) of SEBI (LODR), Regulations, 2015
Intimation of Appointment of Company Secretary and Compliance Officer of the Company
Outcome of Board Meeting Dtd. 13.11.2024
Notice of Board Meeting dtd. 13.11.2024
Intimation dtd 09.10.2024 – Change in Senior Management Personnel
Intimation dtd 09.10.2024 – Change in Senior Management Personnel
Trading window closure notice 30.09.2024
Intimation of completion of final and second term of Independent Directors of the Company
AGM 2024 – Voting Results
Proceedings of 63rd AGM held on 20.09.2024
Copy of newspaper publication dtd. 24.08.2024
Copy of Newspaper Publication- 63rd Annual General Meeting
Intimation About 63rd Annual General Meeting, Book Closure Period And Cut-Off Date
Intimation of Appointment of Secretarial Auditor (2024-25)
Outcome of Board Meeting dtd. 09.08.2024
Notice of Board Meeting dtd. 09.08.2024
Subsidiary Updates(NSE)
List of Shares liable to transfer to IEPF in FY 2024-25
Copy of Newpaper Advertisement dtd. 28.06.2024
Trading window closure notice 30.06.2024
Resignation of Company Secretary & Compliance officer dtd 24.06.2024
Intimation under Regulation 30- Subsidiary Updates
Outcome of Board Meeting dtd. 29.05.2024
Board Meeting dtd. 29.05.2024
Annual Secretarial Compliance Report 31.03.2024
Subsidiary Updates
Intimation of Appointment of Senior Management Personnel dtd. 10.05.2024
Intimation of Appointment of Senior Management Personnel dtd 02.05.2024
Intimation of Appointment of Senior Management Personnel dtd 04.04.2024
Intimation of Resignation of Senior Management Personnel dtd 02.04.2024
Intimation of Resignation of Senior Management Personnel dtd 02.04.2024
Postal Ballot Voting Results 27.03.2024
Trading window closure notice 31.03.2024
Subsidiary Updates
Newspaper Advertisement regarding Postal Ballot
Postal Ballot Notice dtd. 05.02.2024
Copy of Public notice dtd. 05.02.2024 published on 06.02.2024 regarding Interim Dividend 2023-24 and Record date
Outcome of Board Meeting dtd. 05.02.2024
Intimation Under Reg. 30- Appointment and Reappointments of Director
Board Meeting dtd. 05.02.2024
Trading window closure notice 31.12.2023
Intimation Under Reg. 30 – Newspaper Advertisement
DETAILS OF SHARES LIABLE FOR TRANSFER TO IEPF DURING THE YEAR 2023-24
Outcome of Board Meeting dtd. 06.11.2023
Board Meeting dtd. 06.11.2023
Intimation of Resignation of Senior Management Personnel dtd 21.10.2023
Intimation of Change in RTA Address
Announcement under Regulation 30 – Subsidiary Update
Announcement under Regulation 30 – Subsidiary Update
Trading window closure notice 30.09.2023
AGM 2023- Voting Results
Proceedings of 62nd AGM held on 22.09.2023
Copy of Newspaper publication dtd. 25.08.2023
Copy of Newspaper publication dtd. 15.08.2023
Intimation about 62nd AGM date, Book Closure Period, Dividend Payment date and Cut off Date
Outcome of Board Meeting dtd. 07.08.2023
Intimation Under Reg. 30- Appointment of Secretarial Auditors
Intimation Under Reg. 30- Appointment of Director
Intimation of appointment of Senior Management Personnel dtd. 03.08.2023
Board Meeting dtd. 07.08.2023
Trading window closure notice 30.06.2023
Intimation under Regulation 30- Newspaper Advertisement
DETAILS OF SHARES LIABLE FOR TRANSFER TO IEPF DURING THE YEAR(Oct’23)
Consolidated RPT Report for the half year ended 31.03.2023
Outcome of Board Meeting dated 20.05.2023
Annual Secretarial Compliance Report 31.03.2023
Board Meeting dated 20.05.2023
Trading window closure notice 31.03.2023
Copy of the Public Notice dated 13.02.2023 Published on 14.02.2023 for Interim Dividend for FY2022-23 and Record Date
Outcome of Board Meeting dated 13.02.2023
Board-Meeting Intimation 13.02.2023
Intimation under Reg. 30- Newspaper Advertisement
DETAILS OF SHARES LIABLE FOR TRANSFER TO IEPF DURING THE YEAR 2022-23 (Feb 2023)
Trading window closure notice 31.12.2022
Consolidated RPT Report for the half year ended September 2022
Outcome of Board meeting dated 12.11.2022
Board-Meeting Intimation 12.11.2022
Trading Window Closure Notice – 30.09.2022
AGM 2022 -Voting Results
Proceedings of 61st AGM held on 22.09.2022
Copy of Newspaper Advertisement dated 25.08.2022
Brief Profile of Secretarial Auditors of the Company
Copy of Newspaper publication dated 12.08.2022
Intimation about 61st Annual General Meeting, Book Closure, Dividend Payment and Cut-off date
Outcome of Board Meeting dated 10.08.2022
Board Meeting dtd. 10.08.2022
Trading Window Closure Notice 30.06.2022
Consolidated RPT Report for the half year ended March 2022
Outcome of Board meeting dated 26.05.2022
Appointment of Internal Auditor
Annual Secretarial Compliance Report: 31.03.2022
Intimation under Reg. 30- Newspaper Advertisement
DETAILS OF SHARES LIABLE FOR TRANSFER TO IEPF DURING THE YEAR 2022-23
Board Meeting dtd. 26.05.2022
Trading Window Closure Notice 31.03.2022
Outcome of Board Meeting dated 05.02.2022
Board Meeting dtd. 05.02.2022
Trading Window Closure Notice 31.12.2021
Consolidated RPT Report for Half Year Ended September 2021
Outcome of Board Meeting dated 09.11.2021
Board Meeting dated 09.11.2021
Trading Window Closure Notice 30.09.2021
AGM 2021 Voting Results
Outcome of 60th AGM held on 21.09.2021
Copy of newspaper publication dtd 27.08.2021
Copy of Newspaper Publication dtd. 23.08.2021
Intimation about 60th Annual General Meeting, Book Closure, Dividend Payment and Cut-off Date
Contact details of Key Managerial Personnel
Appointment of Company Secretary and Compliance Officer
Resignation of Company Secretary and Compliance Officer
Outcome of Board Meeting dated 13.08.2021
Board Meeting dtd 13.08.2021
Trading Window Clsoure 30.06.2021
Annual Secretarial Compliance Report 31.03.2021
Contact details of Key Managerial Personnel
Outcome of Board Meeting dated 25.06.2021
Board Meeting dtd. 25.06.2021 Intimation to Stock Exchanges
Intimation under Reg30 – Incorporation of WOS
Intimation under Regulation 30- Copy of Newspaper Advt
Details of Shares Liable for Transfer to IEPF during the year 2021-22
Announcement to Stock Exchanges
TRADING WINDOW CLOSURE NOTICE 31.03.2021
Outcome of Board Meeting dated 10.02.2021
MD RESIGNATION 10.02.2021
COPY ADVT BOARD METING 10.02.2021
BORAD MEETING INITMATION TO BSE NSE 10.02.2021
COPY OF IEPF ADVT SUBMITTED BSE NSE JANUARY 2021
LIST OF SHARESHOLDERS WHOSE SHARES ARE DUE FOR TRANSFER IN 2021
TRADING WINDOW CLOSURE INTIMATION 31.12.2020
Outcome of Board Meeting dated 13.11.2020
NEWS PAPER ADVERTISEMENT BOARD MEETING ON 13.11.2020
BOARD MEETING INTIMATION 13.11.2020 TO BSE NSE
TRADING WINDOW CLOSURE INTIMATION 01.10.2020
AGM 2020 VOTING RESULT
AGM OUTCOME 2020
BSE NSE AGM ADVT 31.08.2020
BSE NSE AGM ADVT 06.08.2020
COPY OF IEPF ADVT SUBMITTED TO STOCK EXCHANGES AUG_2020
LIST OF SHAREHOLDERS WHOSE SHARES ARE DUE FOR TRANSFER DURING 2020 TO IEPF
Outcome of Board Meeting dated 17.07.2020
BOARD MEETING INTIMATION 17.07.2020 TO BSE AND NSE
Trading Window Closure 01.07.2020
Outcome of Board Meeting dated 11.06.2020
Board Meeting Intimation 11 06 2020 to BSE and NSE
Cessation of on Non- Executive Non – Independent Director
Board Meeting Intimation Paper Advertisement
Board Meeting Intimation Paper Advertisement
Board Meeting Intimation Paper Advertisement
DIRECTOR APPOINTMENT INFO 25.04.2020
CONTACT INFO 25.04.2020
Trading Window Closure 01.04.2020
Outcome of Board Meeting dated 11.03.2020
News Paper Advt of Record Date submitted to Stock Exchange
Revised Record Date submitted to Stock Exchange MARCH 2020
Board Meeting intimation for consideration Interim Dividend for Financial Year ending on 31.03.2020
Outcome of Board Meeting dated 14.02.2020
Copy of Public Advt submitted to BSE and NSE
Voting Result of Postal Ballot 2019-20
Trading Window Intimation dated 01.01.2020
Public Advt copy of despatch of Postal Ballot Notice 2019
Postal Ballot Notice 2019
Out come of Board Meeting
News Paper advt copy to Stock Exchanges intimation of Board Meeting to be held on 11.11.2019
Intimation of Board Meeting to be held on 11.11.2019
Closure of Trading Window for the Quarter and period ended on 30.09.2019
Voting Result of the Annual General Meeting held on 23.09.2019
Out come of AGM held on 23.09.2019
Copy of Advt for AGM 2019 submitted to BSE and NSE
Outcome of Board Meeting dated 09.08.2019 / Revised AGM Date
Intimation of Board Meeting to be held on 09.08.2019
Notice in respect of Equity Shares due for transfer to IEPF Authority In 2019
List of Shareholders whose shares are due in 2019 for transfer to IEPF
INTIMATION FOR TRADING WINDOW CLOSURE 01.07.2019
ANNUAL SEC COMPLIANCE CERT 31.03.2019
Disclosure of Related Party Transactions – 31.03.2019
Outcome of Board Meeting dated 30.05.2019
Re-Schedule of Board/Committee Meetings
Board Meeting intimation for Audited Financial Result for FY 31.03.2019
Closure of Trading Window
Disclosure of Unpublished Price Sensitive Information
Disclosure under Regulation 30 of the SEBI
Intimation of Board Meeting
Intimation of Trading Window Closure for Quarter & Period 31.12.2018
Details of Shares Transferred to IEPF Authority in 2018
Outcome of Board Meeting dated 25.10.2018
Notice of Board Meeting to be held on 25.10.2018
Intimation of Closure of Trading Window
AGM 2018 Voting Results
Outcome of AGM 2018 dated 22.09.2018
Public Notice submitted to Stock Exchange
List of Shareholders whose shares are due in 2018 for transfer to IEPF
Outcome of Board Meeting dated 06.08.2018
Board Meeting Intimation
Intimation of Closure of Trading Window
Outcome of Board Meeting dated 30.05.2018
Notice of Board Meeting to be held on 30.05.2018
Notice for Trading Window Closure
Copy of Recorded of Advertisement in Business Standard 17.03.2018
Outcome of Board Meeting dated 16.03.2018
Board Meeting for Consideration of Interim Dividend
Outcome of Board Meeting dated 14.02.2018
Notice of Board Meeting to be held on 14.02.2018
Notice of Board Meeting to be held on 14.11.2017
Submission of Notice in respect of Transfer of Equity Shares of the Company to Investor Education and Protection Fund (IEPF) Authority
Voting Results of AGM dated 23.09.2017
Proceeding of AGM dated 23.09.2017
Newspaper Notice for AGM on 23.09.2017
Outcome of Board Meeting dated 31.07.2017
Notice of Board Meeting dated 31.07.2017
Outcome of Board Meeting dated 22.05.2017
Notice of Board Meeting dated 22.05.2017
Outcome of Board Meeting dated 27.04.2017
Outcome of Board Meeting dated 06.02.2017
Notice of Board Meeting dated 06.02.2017
Notice in Newspaper for Interim Dividend 16-17
Outcome of Board Meeting dated 11.01.2017
Notice of BM dated 11.01.2017
Notice in newspapers for IEPF
Outcome of Board Meeting dated 08.12.2016
Revised Intimation for Board Meeting dated 08.12.2016
Notice of Board Meeting dated 08.12.2016
Outcome of Board Meeting dated 12.11.2016
Notice of Board Meeting dated 12.11.2016
Outcome of AGM dated. 17.09.2016
Voting Results of AGM dated. 17.09.2016
Newspaper Notice for AGM on 17.09.2016
Letter for Cut-off date dated 11.08.2016
Clarification dated 11.08.2016
Outcome of Board Meeting dated 01.08.2016
Notice of Reschedule Board Meeting 01.08.2016
Notice of Board Meeting dated 26.07.2016
Declaration dated 28.05.2016
Outcome of Board Meeting dated 26.05.2016
Notice of Board Meeting Dated 26.05.2016
Outcome of Board Meeting Dated 30.04.2016
Outcome of Board Meeting Dated 29.01.2016
Notice of Board Meeting Dated 29.01.2016
Outcome of Board Meeting Dated 06.11.2015
Notice of Board Meeting Dated 06.11.2015
Outcome of 54th Annual General Meeting.
Notice of Board Meeting for Un-Audited Financial Results for the Quarter ended on 30.06.2015
Public Noitce for 54th AGM
Board Meeting outcome 04.07.2015
Board Meeting outcome 01.11.2014
AGM outcome 23.09.2014
Public Notice (Eng.) 53rd AGM
Public Notice (Guj.) 53rd AGM
BOARD Meeting outcome 09.08.2014
BOARD Meeting outcome 14 07 2014
Additional Information on proposal of slump sale 09.05.2014 (BSE)
BOARD Meeting outcome 08 05 2014
SEZ Update – NSE
Reschedule of the Board Meeting for consideration of Audited Financial Result for the year ended on 31.03.2012 (BSE)
Reschedule of the Board Meeting for consideration of Audited Financial Result for the year ended on 31.03.2012 (NSE)
SEZ Update – BSE
Stock Exchange Intimation
Result of the Postal Ballot Process
Email Notification
Additional Information on proposal of slump sale 15.07.2011 (BSE)
Additional Information on proposal of slump sale 15.07.2011 (NSE)
Board Meeting outcome 14.07.2011 (BSE)
Board Meeting outcome 14.07.2011 (NSE)
BM 27 05 2011 OUTCOME
LMML April 2011
`;

const companyAnnouncements = parseLines(companyAnnouncementsRaw);
const [companyAnnouncementsLeft, companyAnnouncementsRight] =
  splitInTwo(companyAnnouncements);

/* -------------------- UNCLAIMED DIVIDEND -------------------- */

const unclaimedDividendSections = [
  {
    title: "As of March 2025",
    items: [
      "Details of Unclaimed / Unpaid Dividend for the previous seven years as on 31st March, 2025",
    ],
  },
  {
    title: "As of March 2023",
    items: [
      "For Year 2022-23",
      "For Year 2021-22",
      "For Year 2020-21",
      "For Year 2019-20",
      "For Year 2018-19",
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
    ],
  },
  {
    title: "As of March 2022",
    items: [
      "For Year 2021-22",
      "For Year 2020-21",
      "For Year 2019-20",
      "For Year 2018-19",
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
    ],
  },
  {
    title: "As of March 2021",
    items: [
      "For Year 2020-21",
      "For Year 2019-20",
      "For Year 2018-19",
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
    ],
  },
  {
    title: "As of March 2020",
    items: [
      "For Year 2019-20",
      "For Year 2018-19",
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
      "For Year 2013-14",
    ],
  },
  {
    title: "As of March 2019",
    items: [
      "For Year 2018-19",
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
      "For Year 2013-14-Interim",
      "For Year 2013-14",
      "For Year 2012-13",
    ],
  },
  {
    title: "As of March 2018",
    items: [
      "For Year 2017-18-Interim",
      "For Year 2016-17-Interim",
      "For Year 2016-17",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
      "For Year 2013-14-Interim",
      "For Year 2013-14",
      "For Year 2012-13",
      "For Year 2011-12",
    ],
  },
  {
    title: "As of March 2017",
    items: [
      "For Year 2016-17-Interim",
      "For Year 2015-16-Interim",
      "For Year 2015-16",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
      "For Year 2013-14-Interim",
      "For Year 2013-14",
      "For Year 2012-13",
      "For Year 2011-12",
      "For Year 2010-11",
      "For Year 2009-10",
    ],
  },
  {
    title: "As of March 2016",
    items: [
      "For Year 2015-16-Interim",
      "For Year 2014-15-Interim",
      "For Year 2014-15",
      "For Year 2013-14-Interim",
      "For Year 2013-14",
      "For Year 2012-13",
      "For Year 2011-12",
      "For Year 2010-11",
      "For Year 2009-10",
      "For Year 2008-09",
    ],
  },
  {
    title: "As of March 2015",
    items: [
      "For Year 2014-15-Interim",
      "For Year 2013-14",
      "For Year 2013-14-Interim",
      "For Year 2012-13",
      "For Year 2011-12",
      "For Year 2010-11",
      "For Year 2009-10",
      "For Year 2008-09",
    ],
  },
  {
    title: "As of March 2014",
    items: [
      "For Year 2013-14-Interim",
      "For Year 2012-13",
      "For Year 2011-12",
      "For Year 2010-11",
      "For Year 2009-10",
      "For Year 2008-09",
      "For Year 2007-08",
    ],
  },
  {
    title: "As of March 2013",
    items: [
      "For Year 2011-12",
      "For Year 2010-11",
      "For Year 2009-10",
      "For Year 2008-09",
      "For Year 2007-08",
      "For Year 2006-07",
    ],
  },
  {
    title: "As of March 2012",
    items: [
      "For Year 2010-11",
      "For Year 2009-10",
      "For Year 2008-09",
      "For Year 2007-08",
      "For Year 2006-07",
      "For Year 2005-06",
    ],
  },
  {
    title: "As of March 2011",
    items: [
      "For Year 2009-10",
      "For Year 2008-09",
      "For Year 2007-08",
      "For Year 2006-07",
      "For Year 2005-06",
      "For Year 2004-05",
    ],
  },
];

/* -------------------- SHAREHOLDING & NEWSPAPER DATES -------------------- */

const shareholdingPatterns = [
  "30.09.2025",
  "30.06.2025",
  "31.03.2025",
  "31.12.2024",
  "31.12.2024 – Post Bonus Allotment SHP",
  "30.09.2024",
  "30.06.2024",
  "31.03.2024",
  "31.12.2023",
  "30.09.2023",
  "30.06.2023",
  "31.03.2023",
  "31.12.2022",
  "30.09.2022",
  "30.06.2022",
  "31.03.2022",
  "31.12.2021",
  "30.09.2021",
  "30.06.2021",
  "31.03.2021",
  "31.12.2020",
  "30.09.2020",
  "30.06.2020",
  "31.03.2020",
  "31.12.2019",
  "30.09.2019",
  "30.06.2019",
  "31.03.2019",
  "31.12.2018",
  "30.09.2018",
  "30.06.2018",
  "31.03.2018",
  "31.12.2017",
  "30.09.2017",
  "30.06.2017",
  "31.03.2017",
  "31.12.2016",
  "30.09.2016",
  "30.06.2016",
  "31.03.2016",
  "31.12.2015",
  "30.09.2015",
  "30.06.2015",
  "31.03.2015",
  "31.12.2014",
  "30.09.2014",
  "30.06.2014",
  "31.03.2014",
  "31.12.2013",
  "30.09.2013",
  "30.06.2013",
  "31.03.2013",
  "31.12.2012",
  "30.09.2012",
  "30.06.2012",
  "31.03.2012",
  "31.12.2011",
  "30.09.2011",
  "30.06.2011",
  "31.03.2011",
  "31.12.2010",
  "30.09.2010",
  "30.06.2010",
];

const [shareholdingLeft, shareholdingRight] = splitInTwo(shareholdingPatterns);

const newspaperPublicationDates = [
  "30.09.2025",
  "30.06.2025",
  "31.03.2025",
  "31.12.2024",
  "30.09.2024",
  "30.06.2024",
  "31.03.2024",
  "31.12.2023",
  "30.09.2023",
  "30.06.2023",
  "31.03.2023",
  "31.12.2022",
  "30.09.2022",
  "30.06.2022",
];

const [newsLeft, newsRight] = splitInTwo(newspaperPublicationDates);

/* -------------------- OUR POLICIES -------------------- */

const policyItems = [
  "Policy on Preservation of Documents",
  "Risk Management Policy",
  "Dividend Distribution Policy",
  "Business Responsibility Policy",
  "Nomination and Remuneration Policy",
  "WHISTLE BLOWER POLICY 2019",
  "INFORMATION REGARDING TRANSFER OF SHARES TO IEPF AUTHORITY (AS PER APPLICABLE IEPF RULES, OCTOBER, 2017)",
  "Policy For Determining Material Subsidiaries",
  "Contact details of Key Managerial Personnel",
  "Details of number of programmes attended and number of hours spent by Independent Directors",
  "Composition of various Committees of Board of Directors",
  "Policy on Determining Materiality of Events",
  "Corporate Social Responsibility Policy",
  "CSR Projects Approved by Board",
  "Code of Practices and Procedures for Fair Disclosure of Unpublished Price Sensitive Information",
  "Familiarization Programmes for Independent Directors",
  "Policy on Related Party Transactions",
  "Vigil Mechanism",
  "Code of Conduct for Board Members and Senior Management of the company",
  "Terms and Conditions of Appointment of Independent Directors",
];

/* -------------------- FINANCIAL RESULTS -------------------- */

const financialResults = [
  {
    year: "2025-2026",
    rows: ["Unaudited Results 30.09.2025", "Unaudited Results 30.06.2025"],
  },
  {
    year: "2024-2025",
    rows: [
      "Audited Results 31.03.2025",
      "Integrated Filing for 31.12.2024",
      "Unaudited Results 31.12.2024",
      "Unaudited Results 30.09.2024",
      "Unaudited Results 30.06.2024",
    ],
  },
  {
    year: "2023-2024",
    rows: [
      "Audited Results 31.03.2024",
      "Unaudited Results 31.12.2023",
      "Unaudited Results 30.09.2023",
      "Unaudited Results 30.06.2023",
    ],
  },
  {
    year: "2022-2023",
    rows: [
      "Audited Results 31.03.2023",
      "Unaudited Results 31.12.2022",
      "Unaudited Results 30.09.2022",
      "Unaudited Results 30.06.2022",
    ],
  },
  {
    year: "2021-2022",
    rows: [
      "Audited Results 31.03.2022",
      "Unaudited Results 31.12.2021",
      "Unaudited Results 30.09.2021",
      "Unaudited Results 30.06.2021",
    ],
  },
  {
    year: "2020-2021",
    rows: [
      "Audited Results 31.03.2021",
      "Unaudited Results 31.12.2020",
      "Unaudited Results 30.09.2020",
      "Unaudited Results 30.06.2020",
    ],
  },
  {
    year: "2019-2020",
    rows: [
      "Audited Results 31.03.2020",
      "Unaudited Results 31.12.2019",
      "Unaudited Results 30.09.2019",
      "Unaudited Results 30.06.2019",
    ],
  },
  {
    year: "2018-2019",
    rows: [
      "Audited Results 31.03.2019",
      "Unaudited Results 31.12.2018",
      "Unaudited Results 30.09.2018",
      "Unaudited Results 30.06.2018",
    ],
  },
  {
    year: "2017-2018",
    rows: [
      "Audited Results 31.03.2018",
      "Unaudited Results 31.12.2017",
      "Unaudited Results 30.09.2017",
      "Unaudited Results 30.06.2017",
    ],
  },
  {
    year: "2016-2017",
    rows: [
      "Audited Results 31.03.2017",
      "Unaudited Results 31.12.2016",
      "Unaudited Results 30.09.2016",
      "Unaudited Results 30.06.2016",
    ],
  },
  {
    year: "2015-2016",
    rows: [
      "Audited Results 31.03.2016",
      "Unaudited Results 31.12.2015",
      "Unaudited Results 30.09.2015",
      "Unaudited Results 30.06.2015",
    ],
  },
  {
    year: "2014-2015",
    rows: [
      "Audited Results 31.03.2015",
      "Unaudited Results 31.12.2014",
      "Unaudited Results 30.09.2014",
      "Unaudited Results 30.06.2014",
    ],
  },
  {
    year: "2013-2014",
    rows: [
      "Audited Results 31.03.2014",
      "Unaudited Results 31.12.2013",
      "Unaudited Results 30.09.2013",
      "Unaudited Results 30.06.2013",
    ],
  },
  {
    year: "2012-2013",
    rows: ["Audited Results 31.03.2013", "Unaudited Results 31.12.2012"],
  },
  {
    year: "2011-2012",
    rows: [
      "Audited Results 31.03.2012",
      "Unaudited Results 31.12.2011",
      "Limited Review Report 31.12.2011",
    ],
  },
  {
    year: "2010-2011",
    rows: [
      "Audited Results 31.03.2011",
      "Unaudited Results 31.12.2010",
      "Unaudited Results 30.06.2010",
    ],
  },
  {
    year: "2009-2010",
    rows: [
      "Unaudited Results 31.03.2010",
      "Audited Results 31.03.2010",
      "Unaudited Results 31.12.2009",
      "Unaudited Results 30.09.2009",
      "Unaudited Results 30.06.2009",
    ],
  },
  {
    year: "2008-2009",
    rows: [
      "Audited Results 31.03.2009",
      "Unaudited Results 31.03.2009",
      "Unaudited Results 31.12.2008",
      "Unaudited Results 30.09.2008",
      "Unaudited Results 30.06.2008",
    ],
  },
  {
    year: "2007-2008",
    rows: ["Audited Results 31.03.2008"],
  },
];

/* -------------------- ANNUAL REPORTS -------------------- */

const annualReports = [
  {
    year: "2024-2025",
    rows: [
      "Draft Annual Return 2024-25",
      "Financial Statements of Banco Products (India) Limited",
      "Financial Statements of NRF Holding B.V. (Formerly known as Nederlandse Radiateuren Fabriek B.V.)",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco New Energy Cooling Systems Limited",
    ],
  },
  {
    year: "2023-2024",
    rows: [
      "Annual Return 2023-24",
      "Financial Statements of Banco New Energy Cooling Systems Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2022-2023",
    rows: [
      "Annual Return 2022-23",
      "Financial Statements of Banco Products (India) Limited",
      "Financial Statements of Banco New Energy Cooling Systems Limited",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
    ],
  },
  {
    year: "2021-2022",
    rows: [
      "Financial Statements of Banco New Energy Cooling Systems Limited",
      "Financial Statements of Banco Products (India) Limited",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Annual Return 2021-22",
    ],
  },
  {
    year: "2020-2021",
    rows: [
      "Annual Return 2020-21",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2019-2020",
    rows: [
      "Addendum of BRR 31.03.2020",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2018-2019",
    rows: [
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2017-2018",
    rows: [
      "Financial Statements of Lake Minerals (Mauritius) Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2016-2017",
    rows: [
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Lake Minerals (Mauritius) Limited",
    ],
  },
  {
    year: "2014-2015",
    rows: [
      "Financial Statements of Lake Minerals (Mauritius) Limited",
      "Financial Statements of Kilimanjaro Biochem Limited",
      "Financial Statements of Nederlandse Radiateuren Fabriek B.V.",
      "Financial Statements of Banco Gaskets (India) Limited",
      "Financial Statements of Banco Products (India) Limited",
    ],
  },
  {
    year: "2013-2014",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
  {
    year: "2012-2013",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
  {
    year: "2011-2012",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
  {
    year: "2010-2011",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
  {
    year: "2009-2010",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
  {
    year: "2008-2009",
    rows: ["Financial Statements of Banco Products (India) Limited"],
  },
];

/* -------------------- DISCLOSURES – REG 46 -------------------- */
/* Updated to match screenshot content */

const disclosuresRows = [
  {
    srNo: "1",
    particular: "Details of Business",
    href: "http://www.bancoindia.com/investor-relations/",
    pageLabel: "http://www.bancoindia.com/investor-relations/",
  },
  {
    srNo: "1.1",
    particular: "MOA/AOA",
    href: "#",
    pageLabel: "BIPL MOA AOA.pdf",
  },
  {
    srNo: "1.2",
    particular: "Brief Profile of Directors",
    href: "#",
    pageLabel: "Board-of-Directors.pdf",
  },
  {
    srNo: "2",
    particular: "Terms & Conditions of Appointment of Independent Director",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/Terms_and_Conditions_of_Appointment_of_Independent_Director.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/Terms_and_Conditions_of_Appointment_of_Independent_Director.pdf",
  },
  {
    srNo: "3",
    particular: "Composition of various committees of board of directors",
    href: "#",
    pageLabel: "Composition-of-Committees.pdf",
  },
  {
    srNo: "4",
    particular:
      "Code of conduct of board of directors and senior management personnel",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/Code_of_Conduct.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/Code_of_Conduct.pdf",
  },
  {
    srNo: "5",
    particular:
      "Details of establishing vigil mechanism/Whistle Blower policy",
    href: "https://www.bancoindia.com/wp-content/uploads/2019/03/WHISTLE_BLOWER_POLICY_2019.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2019/03/WHISTLE_BLOWER_POLICY_2019.pdf",
  },
  {
    srNo: "6",
    particular:
      "Criteria of making payment to non-executive directors, if the same has not been disclosed in annual report",
    href: "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
  },
  {
    srNo: "7",
    particular: "Policy on dealing with related party transactions",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/Policy_on_Related_Party_Transactions.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/Policy_on_Related_Party_Transactions.pdf",
  },
  {
    srNo: "8",
    particular: "Policy on determining material subsidiaries",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/Policy-For-Determining-Material-Subsidiaries-Listing-Regulation.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/Policy-For-Determining-Material-Subsidiaries-Listing-Regulation.pdf",
  },
  {
    srNo: "9",
    particular:
      "Details of familiarization programmes imparted to independent directors including the following details",
    href: "https://www.bancoindia.com/wp-content/uploads/2025/05/Familiarisation-Programmes.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2025/05/Familiarisation-Programmes.pdf",
  },
  {
    srNo: "10",
    particular:
      "The email address for grievance redressal and other relevant details",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "11",
    particular:
      "Contact information of the designated officials of the listed entity who are responsible for assisting and handling investor grievances",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "12",
    particular: "Financial information including:",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "13",
    particular: "Shareholding Pattern",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "14",
    particular:
      "Details of agreement entered into with media company and/or their associates,etc.",
    pageLabel: "Not Applicable",
  },
  {
    srNo: "15",
    particular:
      "Schedule of analysis or institutions/ investors meet and presentation made to analysts or institutional investors. Explanation: For the purpose of this clause meet shall mean a meeting by one or group conference calls,conducted physical or through digital means simultaneously with submission to the recognized stock exchange(s) in the following manner.",
    pageLabel: "Not Applicable",
  },
  {
    srNo: "16",
    particular:
      "New name and the old name of the listed entity for a conclusion period of one year from the date of the last name change",
    pageLabel: "Not Applicable",
  },
  {
    srNo: "17",
    particular: "Items published the newspaper:",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "18",
    particular:
      "All credit ratingobtained by the entity for all its outstanding instruments updated immediately as and when there is any revision in any other things",
    pageLabel: "Not Applicable",
  },
  {
    srNo: "19",
    particular:
      "Separate audited financial statements of each subsidiary of listed entity in respect of a relevant financial year uploaded atleast 21 days prior to the date of the annual general meeting which has been called to inter alia consider accounts of that financial year.",
    href: "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
  },
  {
    srNo: "20",
    particular: "Secretarial compliance report",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "21",
    particular:
      "Disclosure of the policy for determination of materiality of events or information",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/PolicyMateriality.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2017/06/PolicyMateriality.pdf",
  },
  {
    srNo: "22",
    particular:
      "Disclosure of contact details of key managerial personel who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange(s).",
    href: "https://www.bancoindia.com/wp-content/uploads/2017/06/BSE_NSE_Intimation_Materiality.pdf",
    pageLabel: "BSE_NSE_Intimation_Materiality.pdf",
  },
  {
    srNo: "23",
    particular:
      "All such events or informations which has been disclosure to stock exchange(s) under regulation 30 of LODR",
    href: "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920180345-27e46795-2c75",
  },
  {
    srNo: "24",
    particular: "Statement of deviation(s) or variation(s)",
    pageLabel: "Not Applicable",
  },
  {
    srNo: "25",
    particular:
      "Dividend distribution policy by listed entities based on market capitalization",
    href: "https://www.bancoindia.com/wp-content/uploads/2021/08/Div_Distribution_Policy.pdf",
    pageLabel:
      "https://www.bancoindia.com/wp-content/uploads/2021/08/Div_Distribution_Policy.pdf",
  },
  {
    srNo: "26",
    particular:
      "Annual return as provided under section 92 of the Companies Act,2013 and the rules made thereunder.",
    href: "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
    pageLabel:
      "http://www.bancoindia.com/investor-relations/#1496920183159-ffea24ee-ddc9",
  },
];

/* -------------------- COMPONENT -------------------- */

const InvestorRelationsPage = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  return (
    <main className="ir-page">
      <section className="ir-hero">
        {/* removed pill button as requested */}
        <h1 className="ir-hero-title">Investor Relations</h1>
        <div className="ir-hero-underline" />
      </section>

      <div className="ir-tabs">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`ir-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------------- INVESTOR RELATIONS MAIN TAB ---------------- */}
      {activeTab === "Investor Relations" && (
        <div className="ir-tab-panel">
          <section className="ir-section">
            <h2>Gaskets and Heat shields</h2>
            <div className="ir-two-column">
              <ul className="ir-list">
                <li>
                  Five decades of experience has resulted in better
                  understanding of the business
                </li>
                <li>
                  Wide range of products and constant process innovation
                </li>
                <li>
                  Globally competitive price and timely delivery is key to
                  Banco’s international business
                </li>
              </ul>
              <ul className="ir-list">
                <li>
                  One of the largest players in radiator and gasket business in
                  the organized sector
                </li>
                <li>
                  Adopting to change in technology by investing in R&amp;D
                  (Approx USD 5 Million Annually)
                </li>
                <li>
                  Rapid design and proto-typing capabilities, OE quality
                  standards, timely delivery and competitive pricing are major
                  drivers of the business
                </li>
              </ul>
            </div>
          </section>

          <section className="ir-section">
            <h2>Domestic Business India</h2>
            <ul className="ir-list">
              <li>
                Major customers for Gaskets include Maruti, TATA Motors, Hero
                Honda and TVS Group
              </li>
              <li>
                Major customers for Heat Exchangers are TATA Motors, Ashok
                Leyland, M &amp; M, Koel, TAFE, JCB, Indian Railways, among
                others
              </li>
              <li>
                Domestic Market OEM sales accounts for 80-85 % and around 20-15
                % from Aftermarket sales
              </li>
            </ul>
          </section>

          <section className="ir-section">
            <h2>International Business</h2>
            <ul className="ir-list">
              <li>BANCO has set up 100% EOU unit at Baroda, India</li>
              <li>Major export market for the company is the EU</li>
              <li>
                Steady increase in number of OEM players visiting Banco’s
                facilities
              </li>
            </ul>
          </section>

          <section className="ir-section">
            <h2>Communication To Investors</h2>
            <ul className="ir-list">
              <li>Norms for furnishing PAN, KYC details and Nomination</li>
              <li>
                Communication to Shareholders for processing investor’s service
              </li>
            </ul>
          </section>

          <section className="ir-section">
            <h2>Company Announcement To Stock Exchange</h2>
            <div className="ir-two-column">
              <ul className="ir-list">
                {companyAnnouncementsLeft.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <ul className="ir-list">
                {companyAnnouncementsRight.map((item, idx) => (
                  <li key={idx + companyAnnouncementsLeft.length}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ir-section">
            <h2>Details of Unclaimed/Unpaid Dividend</h2>
            {unclaimedDividendSections.map((sec) => (
              <div key={sec.title} className="ir-subsection">
                <h3>{sec.title}</h3>
                <ul className="ir-list">
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="ir-section">
            <h2>Shareholding Patterns</h2>
            <div className="ir-two-column">
              <ul className="ir-list">
                {shareholdingLeft.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <ul className="ir-list">
                {shareholdingRight.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ir-section">
            <h2>Newspaper Publication – Financial Results</h2>
            <div className="ir-two-column">
              <ul className="ir-list">
                {newsLeft.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <ul className="ir-list">
                {newsRight.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="ir-section">
            <h2>Compliance with Corporate Governance</h2>
            <p className="ir-paragraph">
              The Company is in regular compliance of various clauses of
              Corporate Governance as applicable from time to time and the
              necessary information is submitted to Stock Exchanges regularly.
            </p>
          </section>

          <section className="ir-section">
            <h2>
              Contact Information of designated officials responsible for
              assisting and handling investor grievances
            </h2>
            <p className="ir-paragraph">
              Banco Products (India) Ltd.
              <br />
              Secretarial Department,
              <br />
              Regd. Office : Bil, Near Bhaili Railway Station,
              <br />
              Padra Road, Vadodara.
              <br />
              Phone No : 0265-3097226
              <br />
              Email : investor@bancoindia.com / sec@bancoindia.com
            </p>
          </section>

          <section className="ir-section">
            <h2>
              Contact Information of designated Nodal Officer of the Company as
              per IEPF rules:
            </h2>

            <div className="ir-two-column">
              <div>
                <h3>Ms. Preeti Yadav</h3>
                <p className="ir-paragraph">
                  Company Secretary
                  <br />
                  Secretarial Department,
                  <br />
                  Regd. Office : Bil, Near Bhaili Railway Station,
                  <br />
                  Padra Road, Vadodara – 391 410
                  <br />
                  Phone No : 0265-2318226
                  <br />
                  Email : investor@bancoindia.com / sec@bancoindia.com
                </p>
              </div>

              <div>
                <h3>Shri Upendra R. Joshi</h3>
                <p className="ir-paragraph">
                  Secretarial Officer
                  <br />
                  Secretarial Department,
                  <br />
                  Regd. Office : Bil, Near Bhaili Railway Station,
                  <br />
                  Padra Road, Vadodara – 391 410
                  <br />
                  Phone No : 0265-2318226
                  <br />
                  Mobile No. : +91 98250 64820
                  <br />
                  Email : investor@bancoindia.com / sec@bancoindia.com
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ---------------- OUR POLICIES TAB ---------------- */}
      {activeTab === "Our Policies" && (
        <div className="ir-tab-panel">
          <section className="ir-section">
            <h2>Our Policies</h2>
            <div className="ir-list-block">
              {policyItems.map((label) => (
                <a key={label} href="#" className="ir-row">
                  <span>{label}</span>
                  <span className="ir-pdf-icon" aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ---------------- FINANCIAL RESULTS TAB ---------------- */}
      {activeTab === "Financial Results" && (
        <div className="ir-tab-panel">
          <section className="ir-section">
            <h2>Financial Results</h2>
            <div className="ir-financial-years">
              {financialResults.map((block) => (
                <div key={block.year} className="ir-year-block">
                  <h3 className="ir-year-title">{block.year}</h3>
                  <div className="ir-list-block">
                    {block.rows.map((label) => (
                      <a key={label} href="#" className="ir-row">
                        <span>{label}</span>
                        <span className="ir-pdf-icon" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ---------------- ANNUAL REPORT TAB ---------------- */}
      {activeTab === "Annual Report" && (
        <div className="ir-tab-panel">
          <section className="ir-section">
            <h2>Annual Report</h2>
            <div className="ir-financial-years">
              {annualReports.map((block) => (
                <div key={block.year} className="ir-year-block">
                  <h3 className="ir-year-title">{block.year}</h3>
                  <div className="ir-list-block">
                    {block.rows.map((label) => (
                      <a key={label} href="#" className="ir-row">
                        <span>{label}</span>
                        <span className="ir-pdf-icon" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ---------------- DISCLOSURES – REG 46 TAB ---------------- */}
      {activeTab === "Disclosures under Regulation 46 of the SEBI" && (
        <div className="ir-tab-panel">
          <section className="ir-section">
            <h2>Disclosures under Regulation 46 of the SEBI</h2>
            <div className="ir-table-wrapper">
              <table className="ir-disclosures-table">
                <thead>
                  <tr>
                    <th style={{ width: "60px" }}>Sr. No</th>
                    <th>Particulars as per LODR</th>
                    <th style={{ minWidth: "260px" }}>Page</th>
                  </tr>
                </thead>
                <tbody>
                  {disclosuresRows.map((row) => (
                    <tr key={row.srNo}>
                      <td className="ir-disclosures-serial">{row.srNo}</td>
                      <td>{row.particular}</td>
                      <td>
                        {row.href ? (
                          <a
                            href={row.href}
                            target="_blank"
                            rel="noreferrer"
                            className="ir-link"
                          >
                            {row.pageLabel}
                          </a>
                        ) : (
                          row.pageLabel || "Not Applicable"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default InvestorRelationsPage;