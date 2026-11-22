/**
 * Certificates, most important first. The first six show on the home page.
 * `logo` is a Simple Icons name from src/lib/brands.ts, or empty for a text badge.
 */

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  date: string;
  image: string;
  group: 'Core' | 'AI and data' | 'Web' | 'Business and automation';
};

const img = (file: string) => `/img/certificates/${file}`;

export const certifications: Certification[] = [
  { id: 'meta-android', name: 'Introduction to Android Mobile Application Development', issuer: 'Meta', logo: 'meta', date: 'Jul 2025', image: img('Introduction_to_Android_Mobile_Application_Development.webp'), group: 'Core' },
  { id: 'microsoft-cybersecurity', name: 'Cybersecurity Planning, Management and Compliance', issuer: 'Microsoft', logo: 'microsoft', date: 'Aug 2025', image: img('Cybersecurity_Planning_Management_and_Compliance.webp'), group: 'Core' },
  { id: 'ibm-ml', name: 'Machine Learning with Python', issuer: 'IBM', logo: 'ibm', date: 'Jun 2025', image: img('ibm-machine-learning.webp'), group: 'Core' },
  { id: 'uci-blockchain', name: 'The Blockchain', issuer: 'University of California, Irvine', logo: '', date: 'Jun 2025', image: img('The_Blockchain.webp'), group: 'Core' },
  { id: 'ibm-ai-fundamentals', name: 'Artificial Intelligence Fundamentals', issuer: 'IBM', logo: 'ibm', date: 'Aug 2024', image: img('ArtificialIntelligenceFundamentals-IBM.webp'), group: 'Core' },
  { id: 'google-play-listing', name: 'Google Play Store Listing Certificate', issuer: 'Google Play Academy', logo: 'googleplay', date: 'Jul 2024', image: img('GooglePlayStoreListingCertificate-GooglePlayAcademy.webp'), group: 'Core' },
  { id: 'fcc-js', name: 'JavaScript Algorithms and Data Structures', issuer: 'freeCodeCamp', logo: 'freecodecamp', date: 'Jul 2024', image: img('Javascriptalgorithmsanddatastructures.webp'), group: 'Web' },
  { id: 'fcc-responsive', name: 'Responsive Web Design', issuer: 'freeCodeCamp', logo: 'freecodecamp', date: 'Jul 2024', image: img('Responsivewebdesign.webp'), group: 'Web' },
  { id: 'ibm-ai', name: 'Artificial Intelligence', issuer: 'IBM', logo: 'ibm', date: 'Aug 2024', image: img('ArtifificialIntelligence-IBM.webp'), group: 'AI and data' },
  { id: 'linkedin-generative-ai', name: 'What Is Generative AI?', issuer: 'LinkedIn Learning', logo: 'linkedin', date: 'Aug 2025', image: img('GenerativeAILinkedinLearning.webp'), group: 'AI and data' },
  { id: 'google-analytics', name: 'Google Analytics for Beginners', issuer: 'Google Analytics Academy', logo: 'google', date: 'Aug 2024', image: img('GoogleAnalyticsforBeginners-GoogleAnalyticsAcademy.webp'), group: 'AI and data' },
  { id: 'google-ai-ads', name: 'AI-Powered Ads', issuer: 'Google Analytics Academy', logo: 'google', date: 'Aug 2024', image: img('AIpoweredADcertification-GoogleAnalyticsAcademy.webp'), group: 'AI and data' },
  { id: 'accenture-data', name: 'Data Analytics and Visualization Job Simulation', issuer: 'Accenture, Forage', logo: '', date: 'Aug 2024', image: img('dataanalytics-Accenture(Forage).webp'), group: 'AI and data' },
  { id: 'goldman-excel', name: 'Excel Skills for Business Job Simulation', issuer: 'Goldman Sachs, Forage', logo: '', date: 'Aug 2024', image: img('excel_skills-GoldmanSachs(Forage).webp'), group: 'AI and data' },
  { id: 'hp-cybersecurity', name: 'Introduction to Cybersecurity Awareness', issuer: 'HP LIFE', logo: '', date: 'Sep 2025', image: img('introductiontocybersecurity-hp.webp'), group: 'Core' },
  { id: 'airslate-bpa', name: 'Business Process Automation', issuer: 'airSlate', logo: '', date: 'Aug 2025', image: img('BusinessProcessAutomation-airSlate.webp'), group: 'Business and automation' },
  { id: 'airslate-use-cases', name: 'Automation in Action: Industry Use Cases', issuer: 'airSlate', logo: '', date: 'Aug 2025', image: img('AutomationinactionIndustryusecases-airslate.webp'), group: 'Business and automation' },
  { id: 'airslate-analytics', name: 'Workflow Analytics', issuer: 'airSlate', logo: '', date: 'Aug 2025', image: img('AirslateworkflowAnalytics-airSlate.webp'), group: 'Business and automation' },
  { id: 'ibm-project-management', name: 'Project Management Fundamentals', issuer: 'IBM', logo: 'ibm', date: 'Aug 2024', image: img('ProjectManagementFundamentals-IBM.webp'), group: 'Business and automation' },
  { id: 'google-soft-skills', name: 'Soft Skills Program', issuer: 'Google, PAFLA', logo: 'google', date: 'Nov 2024', image: img('google-soft-skills-program_Google(PAFLA).webp'), group: 'Business and automation' },
  { id: 'clickup-novice', name: 'ClickUp Certification', issuer: 'ClickUp', logo: '', date: 'Aug 2025', image: img('ClickUPCertification-ClickUp.webp'), group: 'Business and automation' },
  { id: 'freelancing', name: 'Freelancing Professional Certification', issuer: 'Institute of Management, Technology and Finance', logo: '', date: 'Aug 2025', image: img('FreelancingProfessionalCertification-InstituteOfManagement_technology_and_finance.webp'), group: 'Business and automation' },
];

export const groups: Certification['group'][] = ['Core', 'Web', 'AI and data', 'Business and automation'];
