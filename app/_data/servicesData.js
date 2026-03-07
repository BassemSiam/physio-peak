import {
  Zap,
  Trophy,
  Stethoscope,
  Activity,
  Move,
  Dumbbell,
  Waves,
  ShieldAlert,
  Accessibility,
  Bandage,
  RotateCcw,
  UserRoundCheck,
  Hand,
  BrainCircuit,
  CreditCard,
  Home,
  ShieldCheck,
  Briefcase,
  UserRound,
  Landmark,
  CheckCircle2,
  Award,
} from "lucide-react";

export const services = [
  {
    id: "dry-needling-cupping",
    title: "Dry Needling & Cupping Therapy",
    image: "/servicesImages/dry.jpg",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Targeted muscle relief using sterile needles to release trigger points and traditional cupping to improve blood flow.",
  },
  {
    id: "work-sport-injury",
    title: "Work & Sport Injury Management",
    image: "/servicesImages/Work-sport.jpg",
    icon: <Trophy className="h-6 w-6" />,
    description:
      "Specialized recovery plans designed to get athletes and professionals back to peak performance through biomechanical analysis.",
  },
  {
    id: "post-surgical-rehab",
    title: "Post-Surgical Injury Rehabilitation",
    image: "/servicesImages/Post-Surgical.jpg",
    icon: <Stethoscope className="h-6 w-6" />,
    description:
      "Carefully structured recovery protocols for post-op patients to restore range of motion and build strength.",
  },
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    image: "/servicesImages/Manual-Therapy.jpg",
    icon: <Activity className="h-6 w-6" />,
    description:
      "Hands-on techniques including joint mobilization and manipulation to reduce stiffness and alleviate pain.",
  },
  {
    id: "soft-tissue-release",
    title: "Soft Tissue Release",
    image: "/servicesImages/SoftTissue.jpg",
    icon: <Move className="h-6 w-6" />,
    description:
      "Advanced massage and stretching techniques focused on breaking down scar tissue and releasing chronic muscle tension.",
  },
  {
    id: "exercise-rehab",
    title: "Exercise Rehabilitation",
    image: "/servicesImages/Exercise-Rehabilitation.jpg",
    icon: <Dumbbell className="h-6 w-6" />,
    description:
      "Customized movement programs that empower you to take control of your recovery through functional training.",
  },
  {
    id: "electrotherapy-ultrasound",
    title: "Electrotherapy & Ultrasound",
    image: "/servicesImages/electrotherapy.jpg",
    icon: <Waves className="h-6 w-6" />,
    description:
      "Non-invasive technologies that use electrical pulses and sound waves to reduce inflammation and stimulate cellular repair.",
  },
  {
    id: "chronic-pain",
    title: "Chronic Pain Management",
    image: "/servicesImages/Chronic.jpeg",
    icon: <ShieldAlert className="h-6 w-6" />,
    description:
      "A holistic approach to long-term pain, focusing on desensitizing the nervous system and improving quality of life.",
  },
  {
    id: "mobility-support",
    title: "Mobility Support",
    image: "/servicesImages/Mobility.png",
    icon: <Accessibility className="h-6 w-6" />,
    description:
      "Dedicated assistance and training to improve your independence, gait, and overall ease of movement.",
  },
  {
    id: "taping-strapping",
    title: "Taping & Strapping",
    image: "/servicesImages/Taping.jpg",
    icon: <Bandage className="h-6 w-6" />,
    description:
      "Strategic application of Kinesio-tape or rigid strapping to provide joint stability and support weak muscles.",
  },
  {
    id: "vertigo-balance",
    title: "Vertigo & Balance Management",
    image: "/servicesImages/Vertigo.jpg",
    icon: <RotateCcw className="h-6 w-6" />,
    description:
      "Specialized vestibular rehabilitation to treat dizziness, vertigo, and inner-ear issues, helping you feel grounded.",
  },
  {
    id: "fall-prevention",
    title: "Fall Prevention Strategies",
    image: "/servicesImages/Strategies.jpg",
    icon: <UserRoundCheck className="h-6 w-6" />,
    description:
      "Proactive safety assessments and strength training designed for seniors to reduce fall risks and build confidence.",
  },
  {
    id: "therapeutic-massage",
    title: "Therapeutic Massage",
    image: "/servicesImages/massage.jpg",
    icon: <Hand className="h-6 w-6" />,
    description:
      "Clinical massage therapy aimed at reducing stress, improving circulation, and soothing tired muscles.",
  },
  {
    id: "neuro-physiotherapy",
    title: "Neuro Physiotherapy",
    image: "/servicesImages/Neuro.jpg",
    icon: <BrainCircuit className="h-6 w-6" />,
    description:
      "Expert care for neurological conditions like Stroke or MS, focusing on neuroplasticity to regain motor control.",
  },
];

export const coverage = [
  {
    name: "Medicare",
    desc: "Bulk billing available for GP Management Plans (CDM).",
    icon: <Landmark />,
  },
  {
    name: "Private Health",
    desc: "HICAPS on-site for instant rebates from all major funds.",
    icon: <CreditCard />,
  },
  {
    name: "NDIS",
    desc: "Support for self-managed and plan-managed participants.",
    icon: <UserRound />,
  },
  {
    name: "WorkCover",
    desc: "Expert management for workplace injury claims and return-to-work.",
    icon: <Briefcase />,
  },
  {
    name: "DVA",
    desc: "Proudly supporting our veterans with gold and white card services.",
    icon: <ShieldCheck />,
  },
  {
    name: "Home Visits",
    desc: "Professional physiotherapy care in the comfort of your own home.",
    icon: <Home />,
  },
];

export const funding = [
  "Medicare",
  "WorkCover",
  "Private Health Funds",
  "DVA",
  "NDIS",
  "Home Visits",
];

export const qualifications = [
  {
    text: "Bachelor of Physiotherapy (2011)",
    icon: <Award className="h-5 w-5" />,
  },
  {
    text: "12+ Years Clinical Experience",
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    text: "Specialist in Orthopedic & Pain Care",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    text: "Fully Insured & ABN Registered",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export const workGallery = [
  {
    description:
      "Hands-on techniques for joint and soft tissue mobilization to restore painless movement.",
    size: "h-[420px]",
    img: "/ourWork/1.jpg",
  },
  {
    description:
      "Specialized geriatric care focusing on mobility, fall prevention, and independence.",
    size: "h-[260px]",
    img: "/ourWork/8.jpg",
  },
  {
    description:
      "Personalized clinical exercise programs designed for long-term functional recovery.",
    size: "h-[480px]",
    img: "/ourWork/3.jpg",
  },
  {
    description:
      "Comprehensive support and physical therapy for NDIS plan-managed participants.",
    size: "h-[310px]",
    img: "/ourWork/4.jpg",
  },
  {
    description:
      "Targeted intramuscular stimulation to alleviate deep muscular tension and chronic pain.",
    size: "h-[220px]",
    img: "/ourWork/5.jpg",
  },
  {
    description:
      "Professional in-home assessments and treatment for those unable to visit the clinic.",
    size: "h-[440px]",
    img: "/ourWork/6.jpg",
  },
  {
    description:
      "Evidence-based balance training to reduce injury risk in high-risk environments.",
    size: "h-[350px]",
    img: "/ourWork/7.jpg",
  },
  {
    description:
      "Expert navigation and treatment for workplace injury recovery and return-to-work plans.",
    size: "h-[220px]",
    img: "/ourWork/2_.jpg",
  },
  {
    description:
      "Providing high-quality rehabilitative care for our veterans and their families.",
    size: "h-[290px]",
    img: "/ourWork/9.png",
  },
  {
    description:
      "Advanced neurological rehabilitation for stroke recovery and chronic conditions.",
    size: "h-[460px]",
    img: "/ourWork/10.jpg",
  },
  {
    description:
      "Critical early-stage rehabilitation following major orthopedic surgical procedures.",
    size: "h-[330px]",
    img: "/ourWork/11.jpg",
  },
  {
    description:
      "Integrated chronic disease management through Medicare-supported healthcare plans.",
    size: "h-[400px]",
    img: "/ourWork/12.jpg",
  },
  {
    description:
      "Sports-specific injury prevention and performance optimization for local athletes.",
    size: "h-[320px]",
    img: "/ourWork/2.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Post-Surgical Patient",
    content:
      "After my knee replacement, I was worried about my mobility. The post-surgical care I received was exceptional. Their evidence-based approach and constant encouragement got me back on my feet faster than I ever expected.",
    avatar: "/avatars/james.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Margaret Thompson",
    role: "Aged Care Resident",
    content:
      "The home visit services have been a godsend. The team is patient, professional, and has significantly improved my balance and confidence. It’s rare to find a practice so dedicated to geriatric independence.",
    avatar: "/avatars/margaret.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "NDIS Participant",
    content:
      "Navigating chronic pain with NDIS can be complex, but PhysioPeak made it simple. The integrated care plan and neurological rehab techniques have genuinely changed my daily quality of life.",
    avatar: "/avatars/david.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Local Athlete",
    content:
      "The sports-specific injury prevention and dry needling sessions are top-tier. This clinic understands the mechanics of movement perfectly. I’m performing at my peak thanks to their tailored maintenance programs.",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Robert Evans",
    role: "WorkCover Claimant",
    content:
      "Returning to work after a back injury was daunting. The staff managed my WorkCover claim and treatment with total professionalism, ensuring my recovery was sustainable and safe.",
    avatar: "/avatars/robert.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    role: "Chronic Pain Management",
    content:
      "I had been living with chronic neck pain for years. Through a combination of manual therapy and targeted exercises, the clinicians helped me regain full range of motion. Truly life-changing care.",
    avatar: "/avatars/elenaa.jpg",
    rating: 5,
  },
];