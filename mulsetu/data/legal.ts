import type { LegalDocument } from "@/lib/types";

const company = "Mulsetu Agrotech Private Limited";
const site = "mulsetu.com";
const email = "founder@mulsetu.com";
const lastUpdated = "21 August 2026";
const counselNotice =
  "This page describes how Mulsetu Agrotech Private Limited operates the Mulsetu website and technology services. It is not legal advice. Where a signed proposal, statement of work, subscription agreement, or data-processing terms apply, those documents take precedence for that engagement.";

export const termsDocument: LegalDocument = {
  slug: "terms",
  title: "Terms & Conditions",
  lastUpdated,
  notice: counselNotice,
  intro: `These Terms & Conditions (“Terms”) govern access to and use of the Mulsetu website at ${site} and, except where a separate written agreement applies, the software and technology services offered under the Mulsetu brand by ${company} (“Mulsetu”, “we”, “us”). By using the website or requesting our services, you agree to these Terms. If you do not agree, do not use the website or services.`,
  sections: [
    {
      id: "acceptance",
      title: "Introduction and acceptance",
      paragraphs: [
        "These Terms form a legally binding agreement between you and Mulsetu Agrotech Private Limited in relation to the website and the technology business operated under the Mulsetu name.",
        "A project proposal, statement of work (SOW), subscription or SaaS agreement, data processing agreement, or other signed contract may contain additional or different terms. Where those documents apply, they take precedence over these website Terms for that engagement.",
      ],
    },
    {
      id: "company",
      title: "Company and service description",
      paragraphs: [
        `Mulsetu’s software and technology business is operated by ${company}. We provide technology and digital solutions, which may include software development, websites and web applications, SaaS and product engineering, custom software and operational systems, mobile applications, AI and automation, and related advisory or support work.`,
        "Information on the website is general. It is not an offer, quotation, or commitment to take on a project until we agree in writing.",
      ],
    },
    {
      id: "eligibility",
      title: "Eligibility and account responsibilities",
      paragraphs: [
        "The website and our services are intended for businesses and professionals. You confirm that you have authority to bind the organisation you represent.",
        "If we issue you login credentials for a product, portal, or staging environment, you must keep them confidential, use them lawfully, and tell us promptly if you believe they have been misused. You are responsible for activity under those credentials unless you have notified us of a compromise.",
      ],
    },
    {
      id: "services",
      title: "Software development and technology services",
      paragraphs: [
        "Custom development, implementation, and related professional services are delivered according to the agreed scope, timeline, and assumptions in the applicable proposal, SOW, or contract.",
        "Changes to scope, third-party dependencies, client delays, or incomplete materials may affect timeline and fees. Those effects are handled under the engagement documents, not by these website Terms.",
        "Unless an engagement document says otherwise, estimates and discussions before signature are indicative only.",
      ],
    },
    {
      id: "saas",
      title: "SaaS, products and subscriptions",
      paragraphs: [
        "Where Mulsetu offers a software product or subscription, access, usage limits, support, and billing are described in the product’s subscription terms, order form, or in-product notices.",
        "Those product-specific terms take precedence over these website Terms for use of that product. We do not state prices, service levels, or uptime guarantees in these Terms.",
      ],
    },
    {
      id: "client-duties",
      title: "Client responsibilities",
      paragraphs: [
        "You will provide timely access, decisions, content, and materials reasonably required for us to perform the work. You confirm you have the rights to provide them.",
        "You remain responsible for your own business decisions, regulatory obligations in your industry, and how you use any software we deliver or operate with you — except where an engagement document assigns a specific duty to us.",
      ],
    },
    {
      id: "payments",
      title: "Payments, fees, refunds and cancellations",
      paragraphs: [
        "Fees, invoicing, payment method, taxes, and due dates are set in the applicable proposal, SOW, order form, or contract. These Terms do not publish a price list.",
        "Refunds, pauses, and cancellations follow the engagement or subscription document. If that document is silent, fees for work already performed or for a committed period are generally non-refundable, to the extent allowed by applicable law.",
        "If consumer, tax, or invoicing rules in your jurisdiction give you additional rights, those rights apply alongside the engagement documents.",
      ],
    },
    {
      id: "ip",
      title: "Intellectual property and ownership",
      paragraphs: [
        "The Mulsetu name, marks, website, and materials we publish remain the property of Mulsetu Agrotech Private Limited or its licensors. You may not copy or commercially reuse them without written permission, except as allowed by law.",
        "Ownership of code, designs, and other deliverables created for a client is defined in the applicable engagement document. Pre-existing tools, libraries, and know-how we bring to a project remain ours unless that document assigns them.",
      ],
    },
    {
      id: "client-data",
      title: "Client-provided content and data",
      paragraphs: [
        "Content, data, and credentials you supply remain yours. You grant us a limited licence to use them solely to respond to an enquiry or to perform agreed work.",
        "You are responsible for the lawfulness and accuracy of what you provide, including any personal data of third parties.",
      ],
    },
    {
      id: "third-parties",
      title: "Third-party services and integrations",
      paragraphs: [
        "Work may depend on third-party platforms, APIs, hosting, stores, or licences. Those providers have their own terms. We are not responsible for their outages, policy changes, fees, or discontinuation.",
        "Links on the website to other sites are for convenience only.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "Each party will treat the other’s non-public business information as confidential and use it only as needed to evaluate or perform the work, unless disclosure is required by law or the information is already public through no fault of the receiving party.",
        "A separate non-disclosure agreement may apply where signed.",
      ],
    },
    {
      id: "warranties",
      title: "Warranties and disclaimers",
      paragraphs: [
        "The website is provided “as is.” To the extent permitted by law, we disclaim warranties that it will be uninterrupted, error-free, or fit for a particular purpose.",
        "Warranties for paid work — if any — appear only in the applicable engagement or subscription document. We do not, in these Terms, offer performance guarantees or certifications.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: [
        "To the extent permitted by applicable law, Mulsetu Agrotech Private Limited is not liable for indirect, incidental, special, or consequential loss, including lost profits or lost data, arising from use of the website or from services except as set out in a signed engagement.",
        "Any cap on liability for paid work will be stated in that engagement or subscription agreement. Nothing in these Terms limits liability that cannot be limited under Indian law.",
      ],
    },
    {
      id: "indemnity",
      title: "Indemnification",
      paragraphs: [
        "You will indemnify and hold harmless Mulsetu Agrotech Private Limited and its officers and employees from claims, losses, and reasonable costs arising from your misuse of the website, your breach of these Terms, or materials you provide that infringe third-party rights — except to the extent caused by our wilful misconduct.",
      ],
    },
    {
      id: "availability",
      title: "Service availability and changes",
      paragraphs: [
        "We may change, suspend, or withdraw website content or features. We do not guarantee uninterrupted access to the website.",
        "Changes to a paid product or project environment are governed by the applicable subscription or project agreement.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "You may stop using the website at any time. We may suspend or restrict website access if these Terms are breached or if we need to protect the site or other users.",
        "Ending a paid engagement or subscription follows the notice, wind-down, and fee provisions in that contract.",
      ],
    },
    {
      id: "law",
      title: "Governing law and jurisdiction",
      paragraphs: [
        "These Terms are governed by the laws of India, without regard to conflict-of-law rules.",
        "Subject to the dispute-resolution section below, courts of competent jurisdiction in India shall have jurisdiction, except where a signed engagement names a different forum.",
      ],
    },
    {
      id: "disputes",
      title: "Dispute resolution",
      paragraphs: [
        "The parties will first attempt to resolve a dispute in good faith through discussion.",
        "If that fails, either party may pursue remedies available under applicable law in the courts described above, unless a signed engagement requires mediation or arbitration — in which case that engagement controls.",
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      paragraphs: [
        "We may update these Terms. The “Last updated” field on this page will change when we do. Continued use of the website after an update constitutes acceptance of the revised Terms, except that signed engagements remain governed by their own change-control clauses.",
      ],
    },
    {
      id: "contact",
      title: "Contact information",
      paragraphs: [
        `Company: ${company}`,
        `Website: ${site}`,
        `Email: ${email}`,
        "You may also use the contact or booking form on the website.",
      ],
    },
  ],
};

export const privacyDocument: LegalDocument = {
  slug: "privacy",
  title: "Privacy Policy",
  lastUpdated,
  notice: counselNotice,
  intro: `This Privacy Policy describes how ${company} (“Mulsetu”, “we”, “us”) handles personal information in connection with the Mulsetu technology business and the website ${site}. It is written with Indian privacy and data-protection law in mind, including the Digital Personal Data Protection Act, 2023. Where a signed client agreement or data-processing terms apply, those documents govern that engagement.`,
  sections: [
    {
      id: "scope",
      title: "Introduction and scope",
      paragraphs: [
        "This policy covers personal information we collect through mulsetu.com, enquiry and booking forms, and related communications about our technology services.",
        "It is important to distinguish two contexts:",
        "1. Website and business-enquiry data — information you give us, or that is generated, when you visit our site or talk to us about work.",
        "2. Client application data — information that end users or a client’s staff may enter into software, products, or platforms that we build or operate for a client. Mulsetu does not claim ownership of that client application data. How it is handled is primarily the client’s responsibility and may also be set out in the client’s agreement, data processing terms, SaaS terms, or project contract.",
      ],
    },
    {
      id: "collect",
      title: "Information we collect",
      paragraphs: [
        "We collect information you provide directly and limited technical information created when you use the website. We do not require an account to browse public pages.",
      ],
    },
    {
      id: "direct",
      title: "Information provided directly by users",
      paragraphs: [
        "If you contact us or book a call, you may provide your name, email address, phone number, organisation, and a description of your enquiry. We use that information to respond.",
        "Please do not send sensitive personal data or other people’s personal data unless it is necessary for the enquiry.",
      ],
    },
    {
      id: "automatic",
      title: "Automatically collected information",
      paragraphs: [
        "Our hosting environment may record technical data such as IP address, browser and device type, pages viewed, and timestamps, typically to operate, secure, and understand use of the site.",
        "This policy does not name a specific analytics, advertising, or session-replay product. If one is added, this section should be updated before it is used.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and similar technologies",
      paragraphs: [
        "The site may use cookies or similar storage that are needed for the site to function (for example to keep a session stable).",
        "This policy does not describe a marketing cookie suite or a named consent platform. If we introduce non-essential cookies, we will update this policy and any consent notice first.",
      ],
    },
    {
      id: "use",
      title: "How information is used",
      paragraphs: [
        "We use website and enquiry information to: respond to you; arrange calls; operate and protect the website; improve the site where we have an operational need; and meet legal obligations if they apply.",
        "We do not sell personal information.",
      ],
    },
    {
      id: "bases",
      title: "Legal bases for processing where applicable",
      paragraphs: [
        "Depending on the context and applicable law, we may process personal data because you have asked us to take steps before a contract, because we have a legitimate operational interest in running the website and our business (balanced against your rights), because you have consented, or because we must comply with the law.",
      ],
    },
    {
      id: "sharing",
      title: "How information is shared",
      paragraphs: [
        "We may share enquiry or technical information with service providers who help us run the website or communicate with you, only as needed for that purpose.",
        "We may also share information if required by law, or to protect Mulsetu, users, or the public where we believe we must.",
      ],
    },
    {
      id: "providers",
      title: "Service providers and third-party integrations",
      paragraphs: [
        "Hosting, email, and similar infrastructure may process data on our behalf. This policy does not list named vendors, payment processors, CRMs, or clouds. Those should be added when they are actually in use and after counsel review.",
        "Client applications may integrate third-party tools chosen by the client. Those tools are governed by the client’s and the provider’s terms, not by this website policy, unless we are contracted to operate them and a data processing agreement says otherwise.",
      ],
    },
    {
      id: "security",
      title: "Data security",
      paragraphs: [
        "We take reasonable technical and organisational measures to protect personal information against unauthorised access, loss, or misuse. No transmission or storage is completely secure.",
        "We do not claim specific security certifications in this policy.",
      ],
    },
    {
      id: "retention",
      title: "Data retention",
      paragraphs: [
        "We keep enquiry information as long as needed to respond, to maintain a business record if a project follows, and as required for legal or accounting reasons. Technical logs are kept only as long as needed for security and operations.",
        "Retention of client application data is set by the client and the relevant contract, not by this website policy.",
      ],
    },
    {
      id: "rights",
      title: "User rights and choices",
      paragraphs: [
        "Subject to applicable law, you may request access to, correction of, or deletion of personal information you have given us through this website, or withdraw consent where processing is based on consent.",
        "We may need to verify the request and may refuse where the law allows or requires us to keep information. For data inside a client’s application, you should contact that client (the organisation that operates the product); we will assist where the contract requires us to.",
      ],
    },
    {
      id: "preferences",
      title: "Account and communication preferences",
      paragraphs: [
        "If we have issued you product or portal access, you may manage certain preferences inside that product where such controls exist, or by emailing us.",
        "You can ask us to stop non-essential follow-up about an enquiry by contacting founder@mulsetu.com. We may still write where needed to complete a request you made or to meet a legal duty.",
      ],
    },
    {
      id: "children",
      title: "Children’s privacy",
      paragraphs: [
        "The website is aimed at businesses and professionals. It is not directed at children. We do not knowingly collect personal data from children through this site. If you believe we have, contact us so we can delete it.",
      ],
    },
    {
      id: "transfers",
      title: "International data transfers where applicable",
      paragraphs: [
        "If hosting or communication tools process data outside India, that depends on the providers we actually use. We do not claim a specific transfer mechanism on this page. If a cross-border arrangement becomes material to this website, we will update this section.",
      ],
    },
    {
      id: "changes",
      title: "Changes to this Privacy Policy",
      paragraphs: [
        "We may update this policy. The “Last updated” field will change when we do. Material changes should be reviewed before they take effect on this site.",
      ],
    },
    {
      id: "contact",
      title: "Contact information",
      paragraphs: [
        `Company: ${company}`,
        `Website: ${site}`,
        `Email: ${email}`,
        "Use this email for privacy questions and requests relating to information collected through the Mulsetu website. For data in a client-operated application, contact that organisation first.",
      ],
    },
  ],
};

export function getLegalDocument(slug: string): LegalDocument | undefined {
  if (slug === "terms") {
    return termsDocument;
  }
  if (slug === "privacy") {
    return privacyDocument;
  }
  return undefined;
}
