"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const profession = [
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Marketing",
    subcategories: [
      "General Marketing",
      "Brand Marketing",
      "Content Marketing",
      "Digital Marketing",
      "Email Marketing",
      "Marketing Communications",
      "Marketing Research",
      "Partner Marketing",
      "Product Marketing",
      "Social Media Marketing",
      "All of the above",
    ],
  },
  {
    category: "Advertising",
    subcategories: [
      "Illustrator",
      "Web Designer",
      "Graphics Designer",
      "SEO Specialist",
      "Media Planner",
      "Content Producer",
      "Copywriter",
      "Digital Strategist",
      "Ad Traffic Manager",
      "Marketing Manager",
      "Data Analyst",
      "Art Director",
      "Brand Strategist",
      "Application Developer",
    ],
  },
  {
    category: "Arts",
    subcategories: [
      "Fine Artist",
      "Art Gallery Curator",
      "Art Therapist",
      "Art Teacher",
      "Art Lecturer",
      "Art Valuer/auctioneer",
      "Conservator",
      "Arts Admin & Fundraising",
    ],
  },
  {
    category: "Entertainment",
    subcategories: [
      "Artist",
      "Director (Films & Theatre)",
      "Technician (Films & Theatre)",
      "Cinematographer",
      "Dancer",
      "Musician",
      "Casting",
      "Production",
      "Technician",
      "Critic",
      "Makeup artist",
      "Professional speaker",
      "Publicist",
      "Stuntman",
      "Animal trainer",
      "Caterer",
      "Personal Assistant",
      "Theatre Manager",
      "Booking Agent",
      "Photographer",
      "Animator",
      "Video Editor",
      "Producer",
      "Publicist",
      "Choreographer",
      "Audio Engineer",
      "Disk Jockey (DJ)",
      "Video Jockey (VJ)",
      "Voice-over artist",
      "Side Artist",
    ],
  },
  {
    category: "Finance/Banking",
    subcategories: [
      "Investment Banker",
      "Foreign Exchange Trader",
      "Asset Manager",
      "Equity Analyst",
      "Bank Manager",
      "Relationship Manager",
      "Internal Auditor",
      "Budget Analyst",
      "Credit Analyst",
      "Loans Specialist",
      "Loan Officer",
      "Bank Teller",
      "Bank Clerk",
    ],
  },
  {
    category: "Sales & Trading",
    subcategories: [
      "Senior Vice President",
      "Equity Sales Trader",
      "Junior Equity Sales Trader",
      "Sales Assistant (Institutional Sales and Trading)",
      "Equity Sales and Trading Compliance Officer",
      "Investment Specialist",
      "Institutional Global Equities Sales Trader",
      "Cross-Asset Financial Engineer",
      "Trader",
      "Equity Trader",
      "Fixed Income Trader",
      "Head of Trading",
    ],
  },
  {
    category: "Equity Research",
    subcategories: [
      "Equity Analyst",
      "Research Associate",
      "Financial Reporting Specialist",
      "Portfolio Manager",
      "Private Equity Associate (Internship)",
      "Acquisitions Associate",
      "Analyst, Global Equity Products",
      "Senior Analyst – Investment Analytics",
      "Private Equity Analyst – Paid Internship",
      "Research Associate",
      "Research Associate Gold & Precious Minerals",
      "Research Analyst",
      "Research Coordinator",
    ],
  },
  {
    category: "Investment Banking / Private Equity",
    subcategories: [
      "Analyst",
      "Associate",
      "Vice President",
      "Director",
      "Managing Director",
    ],
  },
  {
    category: "Banking",
    subcategories: [
      "Anti-Money Laundering Compliance Specialist I",
      "Anti-Money Laundering Compliance Specialist II (Senior)",
      "Anti-Money Laundering Investigator I",
      "Anti-Money Laundering Investigator II (Senior)",
      "Assistant Branch Manager I",
      "Assistant Branch Manager II (Senior)",
      "ATM Coordinator",
      "ATM Specialist",
      "Auto Remarketing Manager",
      "Auto Remarketing Specialist",
      "Branch Coordinator",
      "Branch Manager",
      "Branch Manager – In-Store",
      "Business Development Manager",
      "Business Development Specialist",
      "Card Operations Manager",
      "Card Operations Specialist",
      "Cash Management Officer I",
      "Cash Management Officer II (Senior)",
      "Check Processing Supervisor",
      "Commercial Credit Analyst I",
      "Commercial Credit Analyst II (Senior)",
      "Commercial Lending Director",
      "Commercial Loan Manager",
      "Commercial Loan Officer I",
      "Commercial Loan Officer II (Senior)",
      "Commercial Loan Officer III (Lead)",
      "Commercial Loan Processor I",
      "Commercial Loan Processor II (Senior)",
      "Commercial Loan Processor III (Lead)",
      "Commercial Loan Servicing Representative",
      "Compliance Officer – Banking I",
      "Compliance Officer – Banking II (Senior)",
      "Compliance Research Analyst",
      "Compliance Research Manager",
      "Consumer Loan Manager",
      "Consumer Loan Officer I",
      "Consumer Loan Officer II (Senior)",
      "Consumer Loan Officer III (Lead)",
      "Consumer Loan Processor I",
      "Consumer Loan Processor II (Senior)",
      "Consumer Loan Processor III (Lead)",
      "Consumer Loan Servicing Representative",
      "Credit Card Fraud Analyst",
      "Credit Card Fraud Investigator",
      "Credit Card Manager",
      "EFT/ACH Manager",
      "EFT/ACH Specialist",
      "Electronic Banking Manager",
      "Electronic Banking Officer I",
      "Electronic Banking Officer II (Senior)",
      "Financial Planner",
      "Financial Services Representative I",
      "Financial Services Representative II (Senior)",
      "Foreclosure Specialist I",
      "Foreclosure Specialist II (Senior)",
      "Foreign Exchange Trader",
      "Fraud Analyst",
      "Fraud Analyst II (Senior)",
      "Fraud ATM/Debit Card Analyst I",
      "Fraud ATM/Debit Card Analyst II (Senior)",
      "Fraud ATM/Debit Card Director",
      "Fraud ATM/Debit Card Investigation Specialist I",
      "Fraud ATM/Debit Card Investigation Specialist II (Senior)",
      "Fraud ATM/Debit Card Manager",
      "Fraud Credit Analyst I",
      "Fraud Credit Analyst II (Senior)",
      "Fraud Credit Card Analyst II (Senior)",
      "Fraud Credit Card Investigation Specialist II (Senior)",
      "Fraud Credit Director",
      "Fraud Credit Investigations Specialist I",
      "Fraud Credit Investigations Specialist II (Senior)",
      "Fraud Credit Manager",
      "Fraud Detection Director",
      "Fraud Detection Manager",
      "Fraud Detection Specialist",
      "Fraud Detection Specialist II (Senior)",
      "Fraud Director",
      "Fraud Internet Banking Analyst I",
      "Fraud Internet Banking Analyst II (Senior)",
      "Fraud Internet Banking Director",
      "Fraud Internet Banking Manager",
      "Fraud Investigations Director",
      "Fraud Investigations Manager",
      "Fraud Investigations Specialist I",
      "Fraud Investigations Specialist II (Senior)",
      "Fraud Manager",
      "Fraud Payments Director",
      "Fraud Payments Manager",
      "Fraud Payments Specialist I",
      "Fraud Payments Specialist II (Senior)",
      "Fraud Policy Manager",
      "Fraud Prevention Director",
      "Fraud Prevention Manager",
      "Fraud Prevention Specialist",
      "Fraud Prevention Specialist II (Senior)",
      "Fraud Risk Director",
      "Fraud Risk Manager",
      "Fraud Risk Specialist I",
      "Fraud Risk Specialist II (Senior)",
      "Funds Transfer Clerk",
      "Investment Sales Manager",
      "Investment Sales Specialist",
      "Loan Clerk",
      "Loan Officer I",
      "Loan Officer II (Senior)",
      "Loan Officer III (Lead)",
      "Loan Operations Officer",
      "Loan Origination Manager",
      "Loan Processor I",
      "Loan Processor II (Senior)",
      "Loan Processor III (Lead)",
      "Loan Reviewer",
      "Loan Servicing Manager",
      "Loss Mitigation Specialist",
      "Loss Mitigation Supervisor",
      "Management Trainee – Banking",
      "Merchant Representative",
      "Mortgage Lending Director",
      "Mortgage Loan Closer",
      "Mortgage Loan Closing Manager",
      "Mortgage Loan Officer I",
      "Mortgage Loan Officer II (Senior)",
      "Mortgage Loan Officer III (Lead)",
      "Mortgage Loan Processor I",
      "Mortgage Loan Processor II (Senior)",
      "Mortgage Loan Processor III (Lead)",
      "Mortgage Loan Underwriter",
      "New Accounts Representative I",
      "New Accounts Representative II (Senior)",
      "Operations Manager – Banking",
      "Operations Supervisor – Banking",
      "Optical Imaging Manager",
      "Optical Imaging Specialist",
      "Personal Banker",
      "Personal Banking Manager",
      "Personal Financial Advisor I",
      "Personal Financial Advisor II (Senior)",
      "Personal Trust Administrator",
      "Personal Trust Officer I",
      "Personal Trust Officer II (Senior)",
      "Portfolio Manager – Equity Funds",
      "Proof Operations Supervisor",
      "Proof Operator I",
      "Proof Operator II (Senior)",
      "Regional Manager",
      "REO (Real Estate Owned) Manager",
      "Research/Returns Clerk",
      "Residential Construction Loan Officer I",
      "Residential Construction Loan Officer II (Senior)",
      "Residential Construction Loan Specialist",
      "Retirement Plans Specialist",
      "Retirement Plans Supervisor",
      "Securities Trader",
      "Small Business Banker",
      "Teller – Vault",
      "Teller I",
      "Teller II (Senior)",
      "Teller III (Lead)",
      "Teller Supervisor",
      "Trust Assistant",
      "Trust Investment Officer",
      "Trust New Business Officer",
      "Trust Officer I",
      "Trust Officer II (Senior)",
      "Trust Operations Manager",
    ],
  },
  {
    category: "Treasury",
    subcategories: [
      "Group Treasurer",
      "SVP/VP Treasury",
      "Corporate Treasurer",
      "Treasurer",
      "Head of Treasury and Risk (and Tax and Insurance)",
      "Assistant Treasurer",
      "Director of Treasury",
      "Manager of Treasury",
      "Director of Corporate Finance & Treasury",
      "Front-office",
      "Chief Dealer",
      "Head of Trading",
      "VP Treasury",
      "Deputy Treasurer, Head of Treasury Operations",
      "Middle-office",
      "Head of Risk",
      "Risk Manager/Director",
      "Head of Treasury Control",
      "Head of Treasury Risk Management",
      "Treasury Control Manager/Director",
      "Treasury IT or IS Director",
      "Systems Analyst",
      "Cash Management",
      "(Global) Cash Manager",
      "Head of (Global) Cash",
      "Director of (Global) Cash",
      "Back-office",
      "Treasury Operations Manager/Director",
      "Settlement Manager",
      "Payments Analyst",
      "Payment Manager",
      "Accounts Manager",
      "Other",
      "Head of Financial Supply Chain",
      "Director of International Treasury",
      "MD/President of Corporate Treasury Center Inc/Ltd",
      "Treasury Manager",
      "Cash Manager",
      "Treasury Dealer",
      "Treasury Accountant",
      "Treasury Systems Manager",
      "Treasury Analyst",
      "Treasury Assistant",
    ],
  },
  {
    category: "Accounting",
    subcategories: [
      "Accountant – Cost I",
      "Accountant – Cost II (Senior)",
      "Accountant – Cost Manager",
      "Accountant – Tax",
      "Accountant I",
      "Accountant II (Senior)",
      "Accounting Analyst I",
      "Accounting Analyst II (Senior)",
      "Accounting Assistant",
      "Accounting Clerk I",
      "Accounting Clerk II (Senior)",
      "Accounting Director",
      "Accounting Manager – General",
      "Accounting Specialist",
      "Accounting Supervisor",
      "Accounts Payable/Receivable Clerk",
      "Accounts Payable/Receivable Coordinator",
      "Accounts Payable/Receivable Manager",
      "Accounts Payable/Receivable Supervisor",
      "Auditing Director",
      "Auditing Manager",
      "Auditor I",
      "Auditor II (Senior)",
      "Auditor III (Lead)",
      "Billing Analyst I",
      "Billing Analyst II (Senior)",
      "Bookkeeper I",
      "Bookkeeper II (Senior)",
      "Bookkeeping Supervisor",
      "Budget Analyst",
      "Budget Director",
      "Budget Manager",
      "Collections Manager",
      "Collections Supervisor",
      "Collector I",
      "Collector II (Senior)",
      "Controller",
      "Controller – Assistant",
      "Credit Analyst I",
      "Credit Analyst II (Senior)",
      "Credit Analyst Supervisor",
      "Economist",
      "Finance Director",
      "Finance Manager",
      "Financial Analysis Director",
      "Financial Analyst I",
      "Financial Analyst II (Senior)",
      "Financial Analyst III (Lead)",
      "Financial Planning Manager",
      "Financial Systems Manager",
      "Payroll Clerk I",
      "Payroll Clerk II (Senior)",
      "Payroll Coordinator",
      "Payroll Manager",
      "Payroll Supervisor",
      "Risk Management Coordinator",
      "Risk Management Director",
      "Risk Management Specialist",
      "Risk Management Supervisor",
      "Risk Manager",
      "Accountant",
      "Accountant-controller",
      "Accountant supervisor",
      "Accounting controller",
      "Analyst-accountant",
      "Assistant controller",
      "Auditor-CA (chartered accountant)",
      "Auditor-chartered accountant (CA)",
      "Auditor – finance",
      "Auditors supervisor",
      "Audit unit head – taxation",
      "Bank branch accountant",
      "Bank reserves auditor",
      "Bankruptcy trustee",
      "Branch accountant, bank",
      "Budget Accountant",
      "CA (chartered accountant)",
      "CA (chartered accountant) student",
      "Certified general accountant (CGA)",
      "Certified management accountant (CMA)",
      "CGA (certified general accountant)",
      "Chartered accountant (CA)",
      "Chartered accountant (CA) student",
      "Chief Accountant",
      "Claims Accountant",
      "CMA (certified management accountant)",
      "Computer audit specialist",
      "Cost accountant",
      "Cost accounting supervisor",
      "Departmental accountant",
      "Division controller – accounting",
      "Field auditor – finances",
      "Financial accountant",
      "Financial auditor",
      "Financial control officer",
      "General accountant",
      "Income tax adjuster",
      "Income tax advisor",
      "Income tax consultant",
      "Income tax expert",
      "Income tax investigator",
      "Income tax specialist",
      "Industrial accountant",
      "Industrial auditor",
      "Intermediate accountant",
      "Internal auditor",
      "Internal auditor – finances",
      "Internal auditors supervisor – finances",
      "Internal audit project manager",
      "Internal audit supervisor – finances",
      "Machine processing accountant",
      "Management accountant",
      "Management accounting chief",
      "Manufacturing accountant",
      "Officer, financial control",
      "Plant accountant",
      "Plant controller",
      "Production accountant",
      "Project accountant",
      "Property accountant",
      "Public accountant",
      "Public accountants chief",
      "Public accountants supervisor",
      "Reinsurance analyst",
      "Rulings officer, taxation",
      "Sales auditor – finances",
      "Senior accounting analyst",
      "Senior cost accountant",
      "Senior intern auditor",
      "Supervisor, accountants",
      "Supervisor, auditors",
      "Supervisor, cost accounting",
      "Supervisor, internal audit – finances",
      "Supervisor, internal auditors – finances",
      "Supervisor, public accountants",
      "Tax accountant",
      "Tax adviser",
      "Tax analyst",
      "Taxation rulings officer",
      "Tax auditor",
      "Tax consultant",
      "Tax evaluator",
      "Tax examiner",
      "Tax expert",
      "FP&A analyst",
      "FP&A associate",
      "FP&A manager",
      "FP&A director",
      "VP FP&A",
      "Head of FP&A",
    ],
  },
  {
    category: "Sales",
    subcategories: [
      "Sales Development Rep",
      "Account Executive",
      "Outside Salesperson",
      "Account Manager",
      "Regional Sales Manager",
      "Sales Engineer",
      "Director of Sales",
      "VP of Sales",
      "Sales Agent",
      "Commissions Agent",
      "Sales Manager",
      "Field Sales",
    ],
  },
  {
    category: "Medical",
    subcategories: [
      "Surgeon",
      "Veterinarian",
      "Pediatrician",
      "Optometrist",
      "Medical surgery nurse",
      "Chiropractor",
      "Psychiatrist",
      "Podiatrist",
      "Physician",
      "Oncologist",
      "Dentist",
      "Home health aide",
      "Nursing assistant",
      "Medical assistant",
      "Occupational therapist",
      "Physical therapist",
      "Physician assistant",
      "Nurse practitioner",
      "Assistant director of nursing",
      "Bereavement coordinator",
      "Medical transcriptionist",
      "Medical biller",
      "Director of nursing",
      "Medical records director",
      "Medical receptionist",
      "Patient services representative",
      "Health services manager",
      "Surgical technologist",
      "Cardiovascular technologist",
      "Pharmacy technician",
      "MRI technologist",
      "Veterinary technician",
      "Diagnostic medical sonographer",
      "Phlebotomist",
      "Dental lab technician",
      "Cytotechnologist",
      "Healthcare web developer",
      "Psychologist",
      "Biomedical engineer",
      "Speech language pathologist",
      "Nutritionist",
      "Genetic counselor",
      "Histology technician",
      "Human resource specialist",
      "Paramedic",
      "Clinical social worker",
      "General Physician",
      "Practising Doctor",
      "Medical Director",
      "Resident Doctor",
      "Medical Student",
      "Intern Doctor",
      "Fellow Doctor",
      "Head of Department Doctor",
      "Chief Resident Doctor",
      "Specialist Doctor",
    ],
  },
  {
    category: "Manufacturing",
    subcategories: [
      "Production Supervisor",
      "Field Engineer",
      "Software Engineer",
      "Assembler",
      "Boiler Operator",
      "Boilermaker",
      "Bookbinder and Bindery Worker",
      "Electronic Assembler",
      "Expediter",
      "Fabricator",
      "Fiberglass Laminator/Fabricator",
      "Floor Assembler",
      "General Laborer",
      "Material Handler",
      "Precision Assembler",
      "Processing Worker",
      "Production Painter",
      "Production Worker",
      "Warehouse Associate",
      "Warehouse Worker",
      "Woodworker",
      "Brazer",
      "Cutter",
      "Metal Worker",
      "Solderer",
      "Structural Metal Fabricator",
      "Welder",
      "Aircraft Mechanic",
      "Chemical Plant Operator",
      "CNC Machinist",
      "CNC Operator",
      "Coating, Painting, and Spraying Machine Operator",
      "Computer Control Programmer/Operator",
      "Configuration Analyst",
      "Controller",
      "Dairy Processing Equipment Operator",
      "Design Engineer",
      "Designer",
      "Electrician",
      "Electromechanical Technician",
      "Electronic Technician",
      "Equipment Technician",
      "Field Service Technician",
      "Food Technologist",
      "Industrial Engineering Technician",
      "Machine Operator",
      "Machine Tool Cutting Operator/Tender",
      "Machinist",
      "Manufacturing Technician",
      "Mechanical Technician",
      "Millwright",
      "Operator",
      "Plant Operator",
      "Plastic Machine Worker",
      "Power Plant Operator",
      "Printing Machine Operator",
      "Process Operator",
      "Production Technician",
      "Safety Technician",
      "Silicon Wafer Fabrication Operator",
      "Surface Mount Technology Machine Operator",
      "Wafer Processing Technician",
      "Waste Treatment Plant Operator",
      "Assembly Supervisor",
      "Assistant Plant Manager",
      "Chief Manufacturing Executive",
      "Chief Quality Control Executive",
      "Civil Engineering Supervisor",
      "Controls Engineer",
      "Director of Quality Management",
      "Distribution Manager",
      "Division Manager",
      "Engineer",
      "Estimating Manager",
      "Facilities Manager",
      "Floor Assembly Supervisor",
      "General Manager",
      "Industrial Engineer",
      "Machine Shop Maintenance Supervisor",
      "Machine Shop Production Supervisor",
      "Manager or Supervisor",
      "Manufacturing Engineer",
      "Manufacturing Process Engineer",
      "Manufacturing Production Manager",
      "Master Scheduler",
      "Materials Management Supervisor",
      "Materials Manager",
      "Materials Planner",
      "Mechanical Designer",
      "Mechanical Engineer",
      "Operations Clerk",
      "Operations Manager",
      "Plant Accountant",
      "Plant Human Resources Manager",
      "Plant Manager",
      "Power Plant Dispatcher",
      "Power Plant Distributor",
      "Powerhouse Supervisor",
      "Process/Product Design Engineer",
      "Process Engineer",
      "Processing Equipment Operations Supervisor",
      "Product Development Engineering Manager",
      "Product Manager",
      "Product Marketing Analyst",
      "Production Control Clerk",
      "Production Control Manager",
      "Production Engineering Manager",
      "Production Foreman",
      "Production Manager",
      "Production Planner/Scheduler",
      "Production Supervisor",
      "Project Manager",
      "Purchasing Agent/Buyer",
      "Safety Manager",
      "Safety Manager/Coordinator",
      "Stationary Engineer",
      "Supplier Quality Engineer",
      "Test Engineer",
      "Tool Room Supervisor",
      "Warehouse Manager",
      "Customer Service Representative",
      "Inspector",
      "Quality Assurance Engineer",
      "Quality Assurance Manager",
      "Quality Control Analyst",
      "Quality Control Inspector",
      "Quality Engineer",
      "Quality Inspector",
      "Quality Manager",
      "Reliability Engineer",
      "Senior Buyer",
      "Shift Supervisor",
      "Shipping and Receiving Manager",
    ],
  },
  {
    category: "Healthcare",
    subcategories: [
      "Acupuncturist",
      "Adult nurse",
      "Anaesthetist",
      "Anatomical pathology technologist",
      "Art therapist",
      "Biomedical engineer",
      "Biomedical scientist",
      "Biotechnologist",
      "Cardiologist",
      "Children's nurse",
      "Chiropractor",
      "Clinical psychologist",
      "Clinical radiologist",
      "Clinical scientist, audiology",
      "Clinical scientist, genomics",
      "Clinical scientist, haematology",
      "Clinical scientist, histocompatibility and immunogenetics",
      "Clinical scientist, immunology",
      "Clinical scientist, physiological sciences",
      "Clinical technologist",
      "Community pharmacist",
      "Counselling psychologist",
      "Dance movement psychotherapist",
      "Dental hygienist",
      "Dental technician",
      "Dental therapist",
      "Dentist",
      "Diagnostic radiographer",
      "Dietitian",
      "Dispensing optician",
      "Dramatherapist",
      "Epidemiologist",
      "Exercise physiologist",
      "Forensic psychologist",
      "General practice doctor",
      "Genetic counsellor",
      "Health improvement practitioner",
      "Health play specialist",
      "Health psychologist",
      "Health service manager",
      "Health visitor",
      "Herbalist",
      "High intensity therapist",
      "Homeopath",
      "Horticultural therapist",
      "Hospital doctor",
      "Hospital pharmacist",
      "Learning disability nurse",
      "Medical sales representative",
      "Mental health nurse",
      "Microbiologist",
      "Midwife",
      "Music therapist",
      "Naturopath",
      "Neurologist",
      "Nutritional therapist",
      "Nutritionist",
      "Occupational hygienist",
      "Occupational psychologist",
      "Occupational therapist",
      "Ophthalmologist",
      "Optometrist",
      "Orthoptist",
      "Osteopath",
      "Paramedic",
      "Pathologist",
      "Physician associate",
      "Physiotherapist",
      "Podiatrist",
      "Prosthetist/orthotist",
      "Psychiatrist",
      "Psychological wellbeing practitioner",
      "Radiation protection practitioner",
      "Speech and language therapist",
      "Sports therapist",
      "Surgeon",
      "Therapeutic radiographer",
    ],
  },
  {
    category: "Law",
    subcategories: [
      "Lawyer",
      "Personal Injury Lawyer",
      "Estate Planning Lawyer",
      "Bankruptcy Lawyer",
      "Intellectual Property Lawyer",
      "Employment Lawyer",
      "Corporate Lawyer",
      "Immigration Lawyer",
      "Criminal Lawyer",
      "Medical Malpractice Lawyer",
      "Tax Lawyer",
      "Family Lawyer",
      "Workers Compensation Lawyer",
      "Contract Lawyer",
      "Marriage Dispute Lawyer",
      "Divorce Lawyer",
      "Criminal Defense Lawyer",
      "Traffic or DUI-DWI Lawyer",
      "Government Lawyer",
      "Customs Related Lawyer",
      "Military Lawyer",
      "Defence Lawyer",
      "Finance & Securities Lawyer",
      "Digital Media & Internet Lawyer",
      "Paralegal",
      "Records Clerk",
      "Legal Secretary",
      "Staff Attorney",
      "Associate Attorney",
      "Senior Associate Attorney",
      "Litigation Attorney",
      "Magistrate",
      "District Judge",
      "Employment Judge",
      "Tribunal Judge",
      "Circuit Judge",
      "Judge - Supreme Court",
      "Judge - High Court",
      "Judge - Court of Appeal",
      "Judge - Tribunal",
      "Judge",
      "Court Clerk",
      "Barristers Clerk",
      "Court Administrative Officer",
      "Court Clerk",
      "Court Reporter",
      "Court Usher",
      "Stenographer",
    ],
  },
  {
    category: "Accounting",
    subcategories: [
      "Accounting manager",
      "Accounting officer",
      "Business analyst",
      "General accountant",
      "CPA",
      "Accounting supervisor",
      "Project accountant",
      "Staff accountant",
      "Chief Accountant",
      "Senior Accountant",
      "Junior Accountant",
      "Accountant",
      "Cost Accountant",
      "Accounting Clerk",
      "Administrative assistant",
      "Accounting secretary",
      "Revenue tax specialist",
      "Audit partner",
      "Internal auditor",
      "Assurance senior",
      "Assurance manager",
      "Internal audit director",
      "Audit manager",
      "Auditor-in-charge",
      "Chief Financial Officer",
      "Controller",
      "Comptroller",
      "Treasurer",
      "Finance vice president",
      "Director of finance",
      "School treasurer",
      "Finance manager",
      "Financial Analyst",
      "Trust officer",
      "Equity research analyst",
      "Planning analyst",
      "Real estate analyst",
      "Credit products officer",
      "Investment analyst",
      "Portfolio manager",
      "Securities analyst",
    ],
  },
  {
    category: "Education",
    subcategories: [
      "Administrator",
      "Admissions Assistant",
      "Admissions Representative",
      "Adjunct Professor",
      "Adviser",
      "After-School Program Aide",
      "After-School Program Coordinator",
      "Assistant Coach",
      "Assistant Dean",
      "Assistant Instructor",
      "Assistant Principal",
      "Assistant Preschool Teacher",
      "Assistant Professor",
      "Assistant Registrar",
      "Career Counselor",
      "Child Care Assistant",
      "Child Care Center Teacher",
      "Coach",
      "Day Care Assistant",
      "Day Care Center Teacher",
      "Dean",
      "Education Coordinator",
      "Education Specialist",
      "Education Technician",
      "Educator",
      "Food Service Coordinator",
      "Guidance Counselor",
      "Instructor",
      "Instructional Assistant",
      "Lead Teacher",
      "Preschool Assistant Teacher",
      "Preschool Director",
      "Preschool Group Leader",
      "Preschool Lead Teacher",
      "Preschool Specialist",
      "Preschool Teacher",
      "Principal",
      "Program Assistant",
      "Program Coordinator",
      "Registrar",
      "Residence Hall Manager",
      "Resource Development Coordinator",
      "School Administrator",
      "School Bus Driver",
      "School Counselor",
      "School Librarian",
      "School Nurse",
      "School Psychologist",
      "School Secretary",
      "School Social Worker",
      "Special Education Assistant",
      "Special Education Coordinator",
      "Substitute Teacher",
      "Superintendent",
      "Superintendent of Schools",
      "Teacher",
      "Teacher Aide",
      "Teacher Assistant",
      "Teaching Assistant",
      "Tutor",
      "Youth Care Worker",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Social Work",
    subcategories: [
      "Child and Family Social Worker",
      "School Social Worker",
      "Mental Health Social Worker",
      "Substance Abuse Social Worker",
      "Healthcare Social Worker",
      "Clinical Social Worker",
      "Social and Community Service Manager",
      "Social Work Teacher",
      "Disabled Social Worker",
      "Community Outreach Worker",
      "Community Support Specialist",
      "Counselor",
      "Crisis Counselor",
      "Director of Social Services",
      "Psychiatric Social Worker",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Sports",
    subcategories: [
      "Athlete",
      "Cricketer",
      "Footballer",
      "Runner",
      "Sport Professional",
      "Coach",
      "Trainer",
      "Athletic director",
      "Athletic scout",
      "Athletic trainer",
      "Athletics coach",
      "Contract negotiator",
      "Event coordinator",
      "Exercise physiologist",
      "Marketing manager",
      "Materials engineer",
      "Nutritionist",
      "Orthopedist",
      "Physical therapist",
      "Referee",
      "Social media manager",
      "Sports anchor",
      "Sports broadcaster",
      "Sports massage therapist",
      "Sports medicine medical assistant",
      "Sports medicine physician",
      "Sports photographer",
      "Sports psychologist",
      "Sports statistician",
      "Sports writer",
      "Umpire",
      "Statisticians",
      "Physical Therapists",
      "General Managers",
      "Sport Psychologists",
      "Sports Agents",
      "Athletic Trainers",
      "Public Relations Specialists",
      "Badminton Player",
      "Tennis Player",
      "Basketball Player",
      "Rugby Player",
      "Hockey Player",
      "Soccer",
      "Basketball",
      "Tennis",
      "Baseball",
      "Golf",
      "Running",
      "Volleyball",
      "Badminton",
      "Swimming",
      "Boxing",
      "Table Tennis",
      "Skiing",
      "Ice Skating",
      "Roller Skating",
      "Cricket",
      "Rugby",
      "Pool",
      "Darts",
      "Football",
      "Bowling",
      "Ice Hockey",
      "Surfing",
      "Karate",
      "Horse Racing",
      "Snowboarding",
      "Skateboarding",
      "Cycling",
      "Archery",
      "Fishing",
      "Gymnastics",
      "Figure Skating",
      "Rock Climbing",
      "Sumo Wrestling",
      "Taekwondo",
      "Fencing",
      "Water Skiing",
      "Jet Skiing",
      "Weight Lifting",
      "Scuba Diving",
      "Judo",
      "Wind Surfing",
      "Kickboxing",
      "Sky Diving",
      "Hang Gliding",
      "Bungee Jumping",
      "Chess",
      "Body Building",
      "Wrestling",
      "MMA",
      "Marshal Arts",
      "Kabaddi",
      "Shooting",
      "Squash",
      "Polo",
      "Snooker",
      "Major League Soccer",
      "Ice Hockey",
      "American Football",
      "Mixed Martial Arts",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Photography",
    subcategories: [
      "Freelance Photographer",
      "Professional Photographer",
      "Award Winning Photographer",
      "Exhibiting Photographer",
      "Travel Photographer",
      "Photojournalist",
      "Press Photographer",
      "Stock Photographer",
      "Paparazzi Photographer",
      "Macro Photographer",
      "Micro Photographer",
      "Film Camera Photographer",
      "Portrait Photography",
      "Product Photography",
      "Aerial Photography",
      "Landscape Photography",
      "Wildlife Photography",
      "Architectural Photography",
      "Wedding Photography/Event Photography",
      "Fashion Photography",
      "Medical Photographer",
      "Food Photographer",
      "Vehicle Photographer",
      "Advertising Photographer",
      "Panoramic Photographer",
      "Underwater Photographer",
      "Storm Photographer",
      "Family Photographer",
      "Baby and Child Photographer",
      "Newborn Photographer",
      "School Photographer",
      "Branding Photographer",
      "Boudoir Photographer",
      "Erotic Photographer",
      "Concert Photographer",
      "Fine Art Photographer",
      "Street Photographer",
      "Astrophotographer",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Videography",
    subcategories: [
      "Films",
      "Brand Documentary",
      "Event Videography",
      "Product Videos",
      "Documentary Films",
      "Wedding Videography",
      "Drone Videography",
      "Promotional Videos",
      "Tutorial Videos",
      "Animation",
      "Interviews",
      "Webinars",
      "Review Videos",
      "B2B Videos",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Trading",
    subcategories: [
      "Brands Trading",
      "Consumer Goods Trading",
      "OEM Trading",
      "Electronics Trading",
      "General Trading",
      "Food & Beverages Trading",
    ],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Business",
    subcategories: ["Owner", "Strategist", "Consultant"],
  },
  {
    _id: "5f47a7d9b5c2af001f4e4167",
    category: "Consultancy",
    subcategories: [
      "Business Consultancy",
      "Marketing Consultancy",
      "Sales Consultancy",
      "Sales & Marketing Consultancy",
      "Branding Consultancy",
      "Real Estate Consultancy",
      "Property Consultancy",
      "Marriage Consultancy",
      "Matchmaking Consultancy",
      "Job Consultancy",
      "Investment Consultancy",
    ],
  },
];

const SkillsComponent = ({
  userId,
  lastDesignation,
  setLastDesignation,
  totalExperience,
  setTotalExperience,
  professionalField,
  setProfessionalField,
  professionalExpertise,
  setProfessionalExpertise,
  personalSkills,
  setPersonalSkills,
  professionalSkills,
  setProfessionalSkills,
  step,
  setStep,
  setShowModal,
}) => {
  const [allSkills, setAllSkills] = useState([]);

  const handleStepUp = () => {
    if (
      !lastDesignation ||
      !totalExperience ||
      !professionalField ||
      !professionalExpertise ||
      personalSkills?.length === 0 ||
      professionalSkills?.length === 0
    ) {
      setShowModal(true);
      return;
    }

    const options = {
      method: "PATCH",
      url: "https://retpro.catax.me/registration-step/3",
      params: { user_id: userId },
      headers: { "Content-Type": "application/json" },
      data: {
        last_designation: lastDesignation,
        total_experience: totalExperience,
        professional_field: professionalField,
        professional_expertise: professionalExpertise,
        skills: {
          personal: personalSkills.map((item) => item.label),
          professional: professionalSkills.map((item) => item.label),
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setStep(step + 1);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleStepDown = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    const options = {
      method: "GET",
      url: "https://retpro.catax.me/get-all-skills",
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setAllSkills(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const displayPersonalSkills = allSkills.filter(
    (skill) => skill.skill_category === "personal"
  );
  const displayProfessionalSkills = allSkills.filter(
    (skill) => skill.skill_category === "professional"
  );

  const transformedPersonalSkills = displayPersonalSkills.map((skill) => {
    return { value: skill._id, label: skill.skill_name };
  });

  const transformedProfessionalSkills = displayProfessionalSkills.map(
    (skill) => {
      return { value: skill._id, label: skill.skill_name };
    }
  );

  const handlePersonalSkill = (selected, selection) => {
    const { action, option } = selection;

    if (action === "clear") {
      setPersonalSkills([]);
    } else if (action === "select-option") {
      if (selected.length < 6) {
        setPersonalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setPersonalSkills(selected);
    } else if (action === "create-option") {
      // Allow creating a new option only if the limit is not reached
      if (selected.length <= 5) {
        const newOption = { value: option.value, label: option.label };
        setAllSkills((prevSkills) => [...prevSkills, newOption]);
        setPersonalSkills((prevSkills) => [...prevSkills, newOption]);
      } else {
        toast.error("Maximum total limit is 5");
      }
    }

    const hasMaximumSkills = selected.length >= 5;

    // if (hasMaximumSkills) {
    //   // toast.error("Maximum selection limit is 5");
    // }
  };

  const handleProfessionalSkill = (selected, selection) => {
    const { action, option } = selection;

    if (action === "clear") {
      setProfessionalSkills([]);
    } else if (action === "select-option") {
      if (selected.length < 6) {
        setProfessionalSkills(selected);
      } else {
        toast.error("Maximum selection limit is 5");
      }
    } else if (action === "remove-value") {
      setProfessionalSkills(selected);
    } else if (action === "create-option") {
      // Allow creating a new option only if the limit is not reached
      if (selected.length <= 5) {
        const newOption = { value: option.value, label: option.label };
        setAllSkills((prevSkills) => [...prevSkills, newOption]);
        setProfessionalSkills((prevSkills) => [...prevSkills, newOption]);
      } else {
        toast.error("Maximum total limit is 5");
      }
    }

    const hasMaximumSkills = selected.length >= 5;

    // if (hasMaximumSkills) {
    //   // toast.error("Maximum selection limit is 5");
    // }
  };

  const handleCategoryChange = (event) => {
    setProfessionalField(event.target.value);
    setProfessionalExpertise("");
  };

  const handleSubcategoryChange = (event) => {
    setProfessionalExpertise(event.target.value);
  };

  const selectedProfessionalField = profession.find(
    (item) => item.category === professionalField
  );

  console.log(professionalField, "pssddddsss");
  console.log(professionalExpertise, "pssddddsss");

  return (
    <div className="mx-20 mb-40 ">
      <div className="flex  flex-col gap-8 ">
        <div>
          <div className="flex">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Most recent Designation*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={lastDesignation}
            onChange={(e) => setLastDesignation(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select Last Designation
            </option>
            <option>Senior Management</option>
            <option>Top-Level Manager</option>
            <option>Middle-Level Manager</option>
            <option>First level Manager/ Employee</option>
            <option>Chief Executive Officer (CEO)</option>
            <option>Chief Operating Officer (COO)</option>
            <option>President</option>
            <option>Director</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              {" "}
              Total Work Experience*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={totalExperience}
            onChange={(e) => setTotalExperience(e.target.value)}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select Total Work Experience
            </option>
            <option>30 to above Years</option>
            <option>20 to 30 Years </option>
            <option>10 to 20 Years</option>
            <option>5 to 10 Years</option>
            <option>5 and less Years</option>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional field*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={professionalField}
            onChange={handleCategoryChange}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <>
              <option value="" disabled>
                Select professional field
              </option>
              {profession.map((item, index) => (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              ))}
            </>
          </select>
        </div>

        <div>
          <div className="flex w-full">
            <h2 className=" text-gray-500 font-medium text-xl">
              Professional expertise*
            </h2>
            <h6 className="font-small text-gray-400 ml-3">
              (Before Retirement)
            </h6>
          </div>
          <select
            value={professionalExpertise}
            onChange={handleSubcategoryChange}
            className="bg-[#f2f1f3] border border-gray-300 h-10 px-2  w-full rounded"
          >
            <option value="" disabled>
              Select professional expertise
            </option>
            {selectedProfessionalField &&
              selectedProfessionalField.subcategories.map(
                (subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                )
              )}
          </select>
        </div>
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Personal Skills*</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <CreatableSelect
          id="personal"
          value={personalSkills}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedPersonalSkills}
          onChange={handlePersonalSkill}
        />
      </div>
      <div className="w-full  mt-5">
        <h1 className="font-bold text-2xl ">Professional Skills*</h1>
        <h6 className="text-sm text-gray-400 mt-3">
          Add 3 to 5 personal skills that you are proud of
        </h6>
        <CreatableSelect
          id="professional"
          value={professionalSkills}
          instanceId="selectSkills"
          isMulti
          name="colors"
          className="basic-multi-select"
          classNamePrefix="select"
          options={transformedProfessionalSkills}
          onChange={handleProfessionalSkill}
        />
      </div>

      <div className=" mt-10 flex w-full gap-10">
        <button
          onClick={handleStepDown}
          className="border border-[#773fc6] p-2 text-[#773fc6] font-medium rounded w-1/2"
        >
          Go back
        </button>
        <button
          onClick={handleStepUp}
          className="bg-[#773fc6] p-2 text-white font-medium rounded w-1/2"
        >
          Submit & Next
        </button>
      </div>
    </div>
  );
};

export default SkillsComponent;
