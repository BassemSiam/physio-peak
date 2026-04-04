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
    id: "manual-therapy",
    title: "Manual Therapy",
    image: "/servicesImages/Manual-Therapy.jpg",
    icon: <Activity className="h-6 w-6" />,
    description:
      "Hands-on techniques including joint mobilization and manipulation to reduce stiffness and alleviate pain.",
  },
  {
    id: "therapeutic-massage",
    title: "Therapeutic Massage and Soft Tissue Release",
    image: "/servicesImages/massage.jpg",
    icon: <Hand className="h-6 w-6" />,
    description:
      "Clinical massage therapy aimed at reducing stress, improving circulation, and soothing tired muscles.",
  },

  {
    id: "Exercise-Therapy-Prescription",
    title: "Exercise Therapy and Prescription",
    image: "/servicesImages/Exercise-Rehabilitation.jpg",
    icon: <Dumbbell className="h-6 w-6" />,
    description:
      "Customized, evidence-based movement programs designed to restore function, build strength, and prevent future injuries.",
  },

  {
    id: "fall-prevention",
    title: "Full Prevention Strategies and mobility Support",
    image: "/servicesImages/Strategies.jpg",
    icon: <UserRoundCheck className="h-6 w-6" />,
    description:
      "Proactive safety assessments and strength training designed for seniors to reduce fall risks and build confidence.",
  },
  {
    id: "work-sport-injury",
    title: "Work and Sports Injury Management",
    image: "/servicesImages/Work-sport.jpg",
    icon: <Trophy className="h-6 w-6" />,
    description:
      "Specialized recovery plans designed to help athletes and professionals recovering from workplace injuries return to peak performance, supported by comprehensive programs that provide a safe recovery.",
  },

  {
    id: "post-surgical-rehab",
    title: "Post-Surgical Rehabilitation",
    image: "/servicesImages/Post-Surgical.jpg",
    icon: <Stethoscope className="h-6 w-6" />,
    description:
      "Carefully structured recovery protocols for post-op patients to restore range of motion and build strength.",
  },

  {
    id: "dry-needling-cupping",
    title: "Dry Needling and Cupping Therapy",
    image: "/servicesImages/dry.jpg",
    icon: <Zap className="h-6 w-6" />,
    description:
      "Targeted muscle relief using sterile needles to release trigger points and traditional cupping to improve blood flow.",
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
    id: "Lymphedema-management ",
    title: "Lymphedema management ",
    image: "/servicesImages/SoftTissue.jpg",
    icon: <Move className="h-6 w-6" />,
    description:
      "Expert decongestive therapy and manual drainage to reduce swelling, improve circulation, and help you regain comfort and mobility.",
  },
  {
    id: "neuro-physiotherapy",
    title: "Neurophysiotherapy",
    image: "/servicesImages/Neuro.jpg",
    icon: <BrainCircuit className="h-6 w-6" />,
    description:
      "Expert care for neurological conditions like Stroke or MS, focusing on neuroplasticity to regain motor control.",
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

  // {
  //   id: "mobility-support",
  //   title: "Mobility Support",
  //   image: "/servicesImages/Mobility.png",
  //   icon: <Accessibility className="h-6 w-6" />,
  //   description:
  //     "Dedicated assistance and training to improve your independence, gait, and overall ease of movement.",
  // },
];

export const coverage = [
  {
    name: "Medicare",
    desc: "Bulk billing available for eligible patients under GP Management Care Plans (CDM).",
    icon: <Landmark />,
  },
  {
    name: "Private Health",
    desc: "HICAPS on-site for instant rebates from all major funds.",
    icon: <CreditCard />,
  },
  {
    name: "NDIS",
    desc: "Personalised physiotherapy services for self-managed and plan-managed NDIS participants, delivered in-clinic or in the comfort of your home.",
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
    name: "Aged Care",
    desc: "Supporting clients under Home Care Packages (HCP) with tailored physiotherapy services, available both in-clinic and at home.",
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

export const therapists = [
  {
    name: "Mohamed",
    surname: "Mahdy",
    image: "/IMG_2656.jpg",
    description:
      "Mohamed Mahdy has over 12 years of clinical experience, delivering patient-centered, evidence-based care across WorkCover and CTP schemes, Medicare, and in-home physiotherapy (HCP & NDIS). He specializes in orthopedic, neurological, post-surgical, and chronic pain rehabilitation.",
  },
  {
    name: "Abdel",
    surname: "Abouzed",
    image: "/IMG_2655.jpg",
    description:
      "Abdel Abouzed is an experienced physiotherapist with advanced training in musculoskeletal care. He specialises in spinal conditions, Workcover and CTP Claims, vertigo, fracture care, and rehabilitation. He is committed to helping clients move better and live pain-free.",
  },
];

export const workGallery = [
  {
    title: "Manual Therapy",
    description:
      "Hands-on techniques for joint and soft tissue mobilization to restore painless movement.",
    size: "aspect-[3/4]",
    img: "/ourWork/1.jpg",
  },
  {
    title: "Geriatric Care",
    description:
      "Specialized geriatric care focusing on mobility, fall prevention, and independence.",
    size: "aspect-square",
    img: "/ourWork/8..jpg",
  },
  {
    title: "Clinical Exercise",
    description:
      "Personalized clinical exercise programs designed for long-term functional recovery.",
    size: "aspect-[2/3]",
    img: "/ourWork/3.jpg",
  },
  {
    title: "NDIS Support",
    description:
      "Comprehensive support and physical therapy for NDIS plan-managed participants.",
    size: "aspect-[4/3]",
    img: "/ourWork/4..jpg",
  },
  {
    title: "Dry Needling",
    description:
      "Targeted intramuscular stimulation to alleviate deep muscular tension and chronic pain.",
    size: "aspect-video",
    img: "/ourWork/5.jpg",
  },
  {
    title: "In-Home Physio",
    description:
      "Professional in-home assessments and treatment for those unable to visit the clinic.",
    size: "aspect-[3/4]",
    img: "/ourWork/6.jpg",
  },
  {
    title: "Balance Training",
    description:
      "Evidence-based balance training to reduce injury risk in high-risk environments.",
    size: "aspect-square",
    img: "/ourWork/7..jpg",
  },
  {
    title: "WorkCover Claims",
    description:
      "Expert navigation and treatment for workplace injury recovery and return-to-work plans.",
    size: "aspect-video",
    img: "/ourWork/2_.jpg",
  },
  {
    title: "Veterans Care",
    description:
      "Providing high-quality rehabilitative care for our veterans and their families.",
    size: "aspect-square",
    img: "/ourWork/9.jpg",
  },
  {
    title: "Neuro Rehab",
    description:
      "Advanced neurological rehabilitation for stroke recovery and chronic conditions.",
    size: "aspect-[2/3]",
    img: "/ourWork/10.jpg",
  },
  {
    title: "Post-Surgical",
    description:
      "Critical early-stage rehabilitation following major orthopedic surgical procedures.",
    size: "aspect-[4/3]",
    img: "/ourWork/11.jpg",
  },
  {
    title: "Medicare Plans",
    description:
      "Integrated chronic disease management through Medicare-supported healthcare plans.",
    size: "aspect-[3/4]",
    img: "/ourWork/12.jpg",
  },
  {
    title: "Patient Comfort",
    description:
      "Adapting treatment positions to suit each patient's needs for maximum comfort.",
    size: "aspect-square",
    img: "/ourWork/2.jpg",
  },
  {
    title: "Clinical Pilates",
    description:
      "Integrating Clinical Pilates techniques to optimize movement, control, and recovery.",
    size: "aspect-square",
    img: "/ourWork/13.jpg",
  },
  {
    title: "Electrotherapy",
    description:
      "Utilizing electrotherapy and ultrasound to support healing and reduce pain.",
    size: "aspect-square",
    img: "/ourWork/14.jpg",
  },
  {
    title: "Trigger Point Release",
    description:
      "Myofascial trigger points release with dry needling to improve muscle function.",
    size: "aspect-square",
    img: "/ourWork/15.jpg",
  },
  {
    title: "Taping & Strapping",
    description:
      "Using taping techniques to support joints and enhance functional movement.",
    size: "aspect-square",
    img: "/ourWork/16.jpg",
  },
  {
    title: "Ultrasound Therapy",
    description:
      "Advanced ultrasound applications to enhance deep tissue recovery outcomes.",
    size: "aspect-square",
    img: "/ourWork/17.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Bartolo Lavalle",
    role: "80+ Years Old",
    content:
      "Having physio at home has made a big difference for me At my age, I was really struggling with walking and dealing with constant back pain. But since starting, I feel like I'm moving better and getting more confident step by step I actually look forward to the sessions, I always feel better after, like I've done something good for myself",
    avatar: "/avatars/jamess.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Karen Lee Thompson",
    role: "Work-Related Back Injury",
    content:
      "I hurt my back at work and was really struggling to do my job, With physio, things slowly started to improve. I got stronger, my pain settled, and I was able to get back to work feeling more confident, Really grateful for the support through my recovery.",
    avatar: "/avatars/margarett.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Angela Britz",
    role: "Right Knee Replacement",
    content:
      "I started physio late after complications from my knee replacement, and I was told I might even need another surgery, But once I began treatment, things started to improve quickly. I'm moving better, feeling stronger, and honestly didn't expect this progress in such a short time, Really grateful I kept go",
    avatar: "/avatars/Angela.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Stephen Hartnett",
    role: "Neck arthritis with radicular pain",
    content:
      "After experiencing neck stiffness, radicular pain, and reduced mobility following a two-week hospital stay for COVID-19, I started physiotherapy as recommended. The treatment greatly reduced my pain, improved my movement, and now I can do simple daily activities like walking to a coffee shop. I'm very happy with the results and keep working on my back strength.",
    avatar: "/avatars/Stephen.jpg",
    rating: 4,
  },
  // {
  //   id: 6,
  //   name: "Elena Rodriguez",
  //   role: "Chronic Pain Management",
  //   content:
  //     "I had been living with chronic neck pain for years. Through a combination of manual therapy and targeted exercises, the clinicians helped me regain full range of motion. Truly life-changing care.",
  //   avatar: "/avatars/elenaa.jpg",
  //   rating: 5,
  // },
];

export const informationData = [
  {
    place: "PhysioPeak Wollongong",
    number1: "(02) 4217 6000",
    dial1: "+61242176000",
    number2: "(02) 8313 5799",
    dial2: "+61283135799",
    fax: "0283135799",
    address: "LG W005, Wollongong Central 200 Crown, Wollongong, NSW 2500",
    lat: -34.4250325,
    lng: 150.8931133,
    landmark: "Opposite Coles & Beside Chemist Warehouse",
  },
  {
    place: "PhysioPeak Bomaderry",
    number1: "(02) 4421 4655",
    dial1: "+61244214655",
    number2: "(02) 4423 5814",
    dial2: "+61244235814",
    fax: "0244235814",
    address: "1-3 Meroo Street, Bomaderry, NSW 2541",
    lat: -34.8569,
    lng: 150.6033,
  },
  {
    place: "PhysioPeak Albion Park",
    number1: "(02) 4208 0100",
    dial1: "+61242080100",
    number2: "(02) 4208 0120",
    dial2: "+61242080120",
    fax: "0242080120",
    address: "144 Terry Street, Albion Park, NSW 2527",
    lat: -34.5658,
    lng: 150.7765,
  },
  {
    place: "PhysioPeak Nowra",
    number1: "(02) 8043 5333",
    dial1: "+61280435333",
    number2: "(02) 8043 5444",
    dial2: "+61280435444",
    fax: "0280435444",
    address: "132 Junction Street, Nowra, NSW 2541",
    lat: -34.8748622,
    lng: 150.6025378,
  },
];
