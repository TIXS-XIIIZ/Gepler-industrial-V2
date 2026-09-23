import { ServiceItem, ShowcaseProject, ConfiguratorModule } from '../types';

export const content = {
  th: {
    nav: {
      services: 'ความเชี่ยวชาญ',
      showcase: 'ผลงานอินเทอร์แอคทีฟ',
      configurator: 'จัดสเปกระบบตามสั่ง',
      philosophy: 'ปรัชญาวิศวกรรม',
      contact: 'ติดต่อเรา',
      cta: 'เริ่มสร้างโปรเจกต์',
      systemStatus: 'ระบบวิศวกรรม: พร้อมรับงานตามสั่ง',
    },
    hero: {
      badge: 'Bespoke Engineering Studio',
      titleHighlight: 'Web • App • IoT • AI',
      headline1: 'รับพัฒนาระบบเทคโนโลยีตามโจทย์',
      headline2: 'เลือกทำเฉพาะด้าน หรือผสมผสานได้ตามต้องการ',
      subheadline:
        'Gepler Industrial รับพัฒนาระบบเฉพาะทาง 4 ด้าน: Web Platform, Mobile App, Industrial IoT และ Applied AI ไม่บังคับทำรวมเป็นก้อนเดียว ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ หรือต่อยอดเชื่อมโยงกันได้ตามความเหมาะสมของธุรกิจ',
      ctaPrimary: 'คำนวณสเปกระบบทันที',
      ctaSecondary: 'ทดลองเล่นผลงานจริง',
      fastFacts: [
        { label: 'สถาปัตยกรรมเฉพาะบุคคล', value: '100%' },
        { label: 'ความเร็วตอบสนองระบบ', value: '<25ms' },
        { label: 'ความเสถียรระดับอุตสาหกรรม', value: '99.98%' },
      ],
    },
    stats: [
      { value: 'Custom', label: 'สร้างเฉพาะทาง ไร้ขีดจำกัด' },
      { value: '4 บริการ', label: 'เลือกทำเฉพาะด้าน หรือรวมกันได้' },
      { value: 'Tier-1', label: 'มาตรฐานความปลอดภัยระดับองค์กร' },
      { value: '24/7', label: 'รองรับการทำงานอัตโนมัติไม่หยุดนิ่ง' },
    ],
    disciplines: {
      tag: 'Core Disciplines',
      heading: '4 รูปแบบบริการทางวิศวกรรมของ Gepler',
      subheading: 'เราเชี่ยวชาญทั้ง 4 ด้านอย่างลึกซึ้ง ลูกค้าสามารถเลือกพัฒนาเฉพาะระบบที่ต้องการ ไม่ว่าจะเป็นเว็บ แอป IoT หรือ AI โดยไม่ต้องผูกมัดสร้างทั้งหมดพร้อมกัน',
    },
    showcase: {
      tag: 'Interactive Showcase',
      heading: 'ห้องทดลองผลงานเชิงโต้ตอบ',
      subheading: 'สัมผัสการทำงานจริงของระบบทั้ง 4 ด้าน แต่ละบริการสามารถพัฒนาเป็นโปรเจกต์เดี่ยวหรือต่อยอดทำงานร่วมกันได้ตามที่คุณเลือก',
      instruction: 'คลิกหรือปรับสวิตช์ในหน้าจอจำลองด้านล่างเพื่อทดสอบการตอบสนองแบบเรียลไทม์',
    },
    configurator: {
      tag: 'Tailored Solution Builder',
      heading: 'ระบบจัดสเปกตามโจทย์ธุรกิจคุณ',
      subheading: 'เพราะทุกธุรกิจมีโจทย์ไม่เหมือนกัน คุณสามารถเลือกพัฒนาเฉพาะระบบเดี่ยว (เช่น เว็บอย่างเดียว หรือ IoT อย่างเดียว) หรือเลือกหลายระบบร่วมกันเพื่อประเมินสเปกเบื้องต้นได้ทันที',
      selectTitle: 'เลือกองค์ประกอบที่ต้องการพัฒนา (เลือกเฉพาะที่ต้องการได้)',
      summaryTitle: 'พิมพ์เขียวสถาปัตยกรรม Gepler Blueprint',
      estimatedScope: 'ขอบเขตสถาปัตยกรรม:',
      recommendedStack: 'เทคโนโลยีที่แนะนำ:',
      btnSendSpec: 'ส่งสเปกนี้เพื่อปรึกษาวิศวกร Gepler',
    },
    philosophy: {
      tag: 'Engineering Standard',
      heading: 'ทำไม Gepler จึงแตกต่างจากบริษัททั่วไป?',
      subheading: 'ความเรียบหรู ประณีต และความทนทานระดับเครื่องจักรอุตสาหกรรม',
      items: [
        {
          title: 'เชี่ยวชาญ 4 ด้านชัดเจน ไม่ผูกมัดแบบเหมารวม',
          desc: 'เรามีความพร้อมทั้งด้าน Web, Mobile App, ฮาร์ดแวร์ IoT ตลอดจน AI คุณจึงสามารถเลือกพัฒนาเฉพาะระบบที่จำเป็นได้ตรงจุด หรือเชื่อมต่อเพิ่มเติมได้เมื่อธุรกิจเติบโต',
        },
        {
          title: 'ไม่มีเทมเพลตสำเร็จรูป ทุกบรรทัดถูกออกแบบเพื่อคุณ',
          desc: 'เราไม่นำ CMS หรือเทมเพลตช้าๆ มาดัดแปลง แต่เขียน Source Code ที่กระชับ เสถียรสูง และปลอดภัยระดับ Enterprise',
        },
        {
          title: 'ดีไซน์เรียบหรู มินิมอล อ่านง่าย',
          desc: 'ความหรูหราที่แท้จริงคือความคมชัด ใช้งานง่าย ข้อมูลชัดเจน ไม่รกตา และตอบสนองรวดเร็วในเสี้ยววินาที',
        },
        {
          title: 'วิศวกรรมปัญญาประดิษฐ์ที่ใช้งานได้จริง',
          desc: 'ไม่ใช่แค่เรียกใช้ API ทั่วไป แต่ปรับจูนโมเดล Vision และ Predictive Analytics ให้สอดคล้องกับหน้างานและธุรกิจของคุณโดยตรง',
        },
      ],
    },
    contact: {
      tag: 'Direct Connection',
      heading: 'พร้อมเปลี่ยนวิสัยทัศน์ของคุณให้เป็นจริงหรือยัง?',
      subheading: 'คุยตรงกับทีมวิศวกรผู้เชี่ยวชาญ รับการประเมินสถาปัตยกรรมระบบภายใน 24 ชั่วโมง',
      form: {
        name: 'ชื่อของคุณ / ตัวแทนบริษัท',
        email: 'อีเมลติดต่อ',
        phone: 'เบอร์โทรศัพท์',
        company: 'ชื่อบริษัท / โครงการ',
        scope: 'ความต้องการเบื้องต้น',
        scopePlaceholder: 'ระบุรายละเอียดคร่าวๆ เช่น ต้องการทำเฉพาะระบบเว็บพอร์ทัล, ระบบกล่อง IoT มอนิเตอร์เครื่องจักร, โมบายแอป หรือเลือกผสมผสานหลายระบบ...',
        submit: 'ส่งข้อมูลให้ทีมวิศวกรวิเคราะห์',
        sending: 'กำลังส่งข้อมูล...',
        success: 'ขอบคุณครับ! ทีมวิศวกร Gepler ได้รับข้อมูลแล้วและจะติดต่อกลับโดยเร็วที่สุด',
      },
      directChannels: 'ช่องทางติดต่อด่วน',
      location: 'Bangkok, Thailand • บริการทั่วประเทศและระหว่างประเทศ',
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์ Gepler Industrial. ทุกระบบสร้างขึ้นด้วยความประณีตทางวิศวกรรม',
      builtWith: 'Bespoke Industrial Tech Studio',
    },
  },
  en: {
    nav: {
      services: 'Disciplines',
      showcase: 'Interactive Showcase',
      configurator: 'Tailored Builder',
      philosophy: 'Philosophy',
      contact: 'Contact',
      cta: 'Start Project',
      systemStatus: 'System: Active / Ready for Custom Scope',
    },
    hero: {
      badge: 'Bespoke Engineering Studio',
      titleHighlight: 'Web • App • IoT • AI',
      headline1: 'Tailored Engineering Across 4 Domains',
      headline2: 'Choose Exactly What Your Project Needs',
      subheadline:
        'Gepler Industrial provides bespoke engineering across 4 distinct disciplines: Web Platforms, Mobile Apps, Industrial IoT, and Applied AI. You don’t need an all-in-one package—choose standalone systems or combine them flexibly as your business grows.',
      ctaPrimary: 'Configure Your System',
      ctaSecondary: 'Test Live Simulators',
      fastFacts: [
        { label: 'Bespoke Architecture', value: '100%' },
        { label: 'Sub-millisecond Latency', value: '<25ms' },
        { label: 'Industrial-grade Uptime', value: '99.98%' },
      ],
    },
    stats: [
      { value: 'Bespoke', label: '100% Tailored to Client Specs' },
      { value: '4 Disciplines', label: 'Standalone or Combined as You Need' },
      { value: 'Tier-1', label: 'Enterprise Security Architecture' },
      { value: '24/7', label: 'Engineered for Zero Downtime' },
    ],
    disciplines: {
      tag: 'Core Disciplines',
      heading: 'The 4 Engineering Disciplines of Gepler',
      subheading: 'Deep expertise across four specialized fields. Choose precisely the solution your project requires—whether standalone web, mobile, IoT, or AI—without unnecessary bundle overhead.',
    },
    showcase: {
      tag: 'Interactive Showcase',
      heading: 'Interactive Technology Sandbox',
      subheading: 'Experience live simulators of our 4 disciplines. Each system can be developed as an independent standalone solution or interconnected as you see fit.',
      instruction: 'Interact with switches, sliders, and controls below to observe real-time system behaviors.',
    },
    configurator: {
      tag: 'Tailored Solution Builder',
      heading: 'Custom Architecture Scope Builder',
      subheading: 'Every organization has unique demands. Choose only the individual modules you need—standalone or multi-system—to generate an instant architecture blueprint.',
      selectTitle: 'Select Target Modules (Pick Only What You Need)',
      summaryTitle: 'Gepler Architecture Blueprint',
      estimatedScope: 'Architecture Scope:',
      recommendedStack: 'Recommended Stack:',
      btnSendSpec: 'Consult With Gepler Engineers',
    },
    philosophy: {
      tag: 'Engineering Standard',
      heading: 'Why Gepler Stands Apart From Generic Agencies',
      subheading: 'Luxury in digital engineering means extreme clarity, resilience, and micro-precision.',
      items: [
        {
          title: '4 Distinct Disciplines, Fully Modular',
          desc: 'Whether you require a standalone web portal, a native mobile app, an industrial IoT gateway, or a dedicated AI model, we build exactly what you need without forcing an unwanted all-in-one bundle.',
        },
        {
          title: 'Zero Bloat, Zero Templates',
          desc: 'We never wrap slow CMS or off-the-shelf templates. Every codebase is crafted clean, strictly typed, performant, and maintainable.',
        },
        {
          title: 'Minimalist Luxury & High Contrast',
          desc: 'Pure visual sophistication: bold typography, mathematical spacing, instant load times, and intuitive interfaces that reduce operator cognitive load.',
        },
        {
          title: 'Applied AI Tailored to Your Edge',
          desc: 'From custom computer vision inspection to automated operational agents, our AI systems run directly where your business thrives.',
        },
      ],
    },
    contact: {
      tag: 'Direct Connection',
      heading: 'Ready to Engineer Your Next Leap?',
      subheading: 'Connect directly with our engineering team for an architecture assessment within 24 hours.',
      form: {
        name: 'Full Name / Representative',
        email: 'Work Email',
        phone: 'Phone Number',
        company: 'Company / Project Name',
        scope: 'Project Overview & Requirements',
        scopePlaceholder: 'Briefly describe your objectives (e.g. standalone web portal, IoT telemetry gateway, mobile app, or combined solution)...',
        submit: 'Submit Engineering Request',
        sending: 'Transmitting...',
        success: 'Received! Our senior engineering leads will review your specs and reach out promptly.',
      },
      directChannels: 'Direct Channels',
      location: 'Bangkok, Thailand • Deploying Nationwide & Internationally',
    },
    footer: {
      rights: 'All rights reserved Gepler Industrial. Engineered with precision.',
      builtWith: 'Bespoke Industrial Tech Studio',
    },
  },
};

export const serviceItems: ServiceItem[] = [
  {
    id: 'web',
    number: '01',
    title: {
      th: 'เว็บแอปพลิเคชัน & แพลตฟอร์มคลาวด์',
      en: 'High-Performance Web Platforms',
    },
    subtitle: {
      th: 'ระบบเว็บสำหรับองค์กรและการควบคุมระดับสูง',
      en: 'Mission-Critical Cloud Portals & Dashboards',
    },
    description: {
      th: 'ออกแบบและพัฒนาระบบเว็บความเร็วสูง ทั้ง Dashboard ควบคุมอัจฉริยะ, แพลตฟอร์ม B2B/B2C ขนาดใหญ่ และ Real-time Command Centers ที่ทำงานได้ลื่นไหล ไม่กระตุก',
      en: 'Custom full-stack web platforms engineered for extreme responsiveness, micro-second telemetry feeds, and resilient enterprise workloads.',
    },
    capabilities: {
      th: ['ระบบ Real-Time WebSocket & Telemetry', 'แดชบอร์ดควบคุมโรงงานและธุรกิจ', 'High-Concurrency Cloud Architecture', 'การปกป้องข้อมูลระดับความปลอดภัยสูงสุด'],
      en: ['Real-Time WebSocket & Telemetry Streams', 'Industrial & Executive Command Centers', 'High-Concurrency Cloud Architecture', 'Zero-Trust Enterprise Data Security'],
    },
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js / Go', 'PostgreSQL', 'TailwindCSS'],
    metrics: {
      value: 'Sub-30ms',
      label: { th: 'ความเร็วตอบสนองข้อมูล', en: 'Live Data Latency' },
    },
  },
  {
    id: 'app',
    number: '02',
    title: {
      th: 'โมบายแอปพลิเคชันเฉพาะทาง',
      en: 'Specialized Mobile Applications',
    },
    subtitle: {
      th: 'iOS & Android สำหรับปฏิบัติการและผู้ใช้งานจริง',
      en: 'iOS & Android for Field Operations & Clients',
    },
    description: {
      th: 'แอปพลิเคชันมือถือที่เชื่อมโยงกับฮาร์ดแวร์โดยตรงผ่าน Bluetooth Low Energy (BLE), Wi-Fi หรือ Cellular พร้อมระบบ Offline-first ทำงานได้แม้อยู่ในพื้นที่ไร้สัญญาณ',
      en: 'Native and cross-platform mobile apps engineered to pair seamlessly with hardware devices via BLE, NFC, and sensors, featuring robust offline-first synchronization.',
    },
    capabilities: {
      th: ['การเชื่อมต่อฮาร์ดแวร์ BLE & IoT ไร้รอยต่อ', 'สถาปัตยกรรม Offline-First Data Sync', 'แอปปฏิบัติการภาคสนามและคลังสินค้า', 'UX/UI เรียบหรู ใช้งานง่ายทุกสภาพแวดล้อม'],
      en: ['Seamless BLE & IoT Hardware Interfacing', 'Offline-First Local Storage & Sync', 'Field Operations & Warehouse Tools', 'Luxury Minimalist High-Efficiency UX'],
    },
    techStack: ['Flutter', 'React Native', 'Swift / Kotlin', 'SQLite', 'BLE SDK', 'WebSockets'],
    metrics: {
      value: '100%',
      label: { th: 'ความพร้อมทำงานแม้ออฟไลน์', en: 'Offline Capability' },
    },
  },
  {
    id: 'iot',
    number: '03',
    title: {
      th: 'ระบบอินเทอร์เน็ตของสรรพสิ่ง (Industrial IoT)',
      en: 'Industrial IoT & Hardware Telemetry',
    },
    subtitle: {
      th: 'เชื่อมต่อเครื่องจักร เซ็นเซอร์ และข้อมูลขึ้นสู่คลาวด์',
      en: 'Connecting Physical Assets, Machines & Sensors to Cloud',
    },
    description: {
      th: 'ออกแบบทั้งบอร์ดควบคุม กล่อง Gateway และระบบรับส่งข้อมูลเซ็นเซอร์ (อุณหภูมิ, แรงดัน, การสั่นสะเทือน, กระแสไฟฟ้า) เพื่อมอนิเตอร์และสั่งการเครื่องจักรแบบเรียลไทม์',
      en: 'End-to-end hardware-to-cloud engineering: customized microcontrollers, edge gateways, sensor bus integrations, and instant telemetry ingestion pipelines.',
    },
    capabilities: {
      th: ['บอร์ด Edge Gateway & Microcontroller', 'การสื่อสาร MQTT, Modbus, RS485, CAN Bus', 'ระบบตรวจจับความผิดปกติเครื่องจักรอัตโนมัติ', 'ระบบแจ้งเตือนฉุกเฉินผ่าน LINE / SMS / Push'],
      en: ['Custom Edge Gateways & Firmware', 'Industrial Protocol Bridges (Modbus/RS485/MQTT)', 'Predictive Vibration & Thermal Tracking', 'Instant Multi-Channel Alert Pipelines'],
    },
    techStack: ['ESP32 / STM32', 'Raspberry Pi / Linux Edge', 'MQTT / Broker', 'InfluxDB', 'Grafana', 'Custom PCB'],
    metrics: {
      value: '99.99%',
      label: { th: 'ความต่อเนื่องในการส่งข้อมูล', en: 'Data Packet Fidelity' },
    },
  },
  {
    id: 'ai',
    number: '04',
    title: {
      th: 'ปัญญาประดิษฐ์ประยุกต์ (Applied Industrial AI)',
      en: 'Applied AI & Intelligent Automation',
    },
    subtitle: {
      th: 'วิเคราะห์ภาพ กล้องตรวจจับ และการพยากรณ์อัจฉริยะ',
      en: 'Computer Vision, Predictive Analytics & Autonomous Agents',
    },
    description: {
      th: 'ปรับแต่งโมเดล AI ให้เข้ากับธุรกิจของคุณ ไม่ว่าจะเป็นระบบตรวจจับตำหนิชิ้นงานจากกล้องความเร็วสูง (Defect Inspection), การพยากรณ์การซ่อมบำรุง หรือ AI Assistant จัดการคลังข้อมูล',
      en: 'Customized artificial intelligence deployed directly into operational workflows: high-speed vision defect triage, automated predictive maintenance, and bespoke generative agents.',
    },
    capabilities: {
      th: ['Computer Vision ตรวจจับตำหนิชิ้นงาน 99.8%', 'ระบบ Predictive Maintenance ป้องกันเครื่องจักรพัง', 'โมเดลพยากรณ์ยอดขายและการใช้พลังงาน', 'Custom LLM Agent สำหรับเอกสารทางเทคนิค'],
      en: ['Real-Time Computer Vision QA Inspection', 'Predictive Equipment Failure Prevention', 'Energy & Production Yield Optimization', 'Bespoke Private Technical LLM Agents'],
    },
    techStack: ['PyTorch / ONNX', 'YOLO / Vision Models', 'TensorRT Edge', 'Python Fast-Inference', 'Vector DB', 'Gemini / Claude APIs'],
    metrics: {
      value: '99.8%',
      label: { th: 'ความแม่นยำในการตรวจจับ', en: 'Inference Precision' },
    },
  },
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'iot-telemetry',
    category: 'iot',
    title: {
      th: 'โหนดตรวจจับการสั่นและพลังงานมอเตอร์อุตสาหกรรม',
      en: 'Industrial Motor Vibration & Telemetry Node',
    },
    subtitle: {
      th: 'ระบบ Edge Gateway ตรวจสอบสุขภาพเครื่องจักร 24 ชม.',
      en: '24/7 Edge Telemetry Gateway for Heavy Machinery',
    },
    tagline: {
      th: 'ตรวจจับการสึกหรอก่อนที่เครื่องจักรจะหยุดทำงานกะทันหัน',
      en: 'Detect micro-faults weeks before physical catastrophic failure',
    },
    description: {
      th: 'ระบบส่งข้อมูลเซ็นเซอร์ความถี่สูง 100Hz ผ่าน MQTT วิเคราะห์การสั่นสะเทือน อุณหภูมิแกน และกระแสไฟ พร้อมจำลองการแจ้งเตือนทันทีเมื่อตรวจพบสัญญาณผิดปกติ',
      en: 'Sub-millisecond sensor ingest analyzing 3-axis vibration FFT, core temperatures, and current draw with automated edge anomaly scoring.',
    },
    metric: {
      label: { th: 'ลดเวลาเครื่องจักรขัดข้อง', en: 'Downtime Reduction' },
      value: '-48%',
    },
    technologies: ['Edge Computing', 'MQTT', 'STM32 / ESP32', 'React Live Graphs', 'InfluxDB'],
    interactiveType: 'telemetry',
    clientIndustry: {
      th: 'โรงงานผลิตชิ้นส่วนยานยนต์ & อาหาร',
      en: 'Automotive & Precision Manufacturing',
    },
  },
  {
    id: 'ai-vision-qa',
    category: 'ai',
    title: {
      th: 'ระบบ AI Vision ตรวจสอบตำหนิชิ้นส่วนอัตโนมัติ',
      en: 'Autonomous Optical Defect Triage System',
    },
    subtitle: {
      th: 'ตรวจจับรอยขีดข่วน ขนาดผิดสัดส่วน และจุดบกพร่อง',
      en: 'Real-time surface anomaly & dimensional tolerance inspection',
    },
    tagline: {
      th: 'สแกนทุกชิ้นงานบนสายพานด้วยความเร็ว 35 มิลลิวินาที',
      en: 'Instant automated sorting with 99.8% precision confidence',
    },
    description: {
      th: 'กล้อง AI ประมวลผลภาพชิ้นงานแบบเรียลไทม์ ชี้จุดตำหนิด้วย Bounding Box แยกชิ้นงานเสียออกจากสายพานโดยอัตโนมัติ ลดภาระการตรวจด้วยสายตามนุษย์',
      en: 'Integrated vision inference classifying surface scratches, fractures, and dimensional variances at line speed with automated servo ejection triggers.',
    },
    metric: {
      label: { th: 'ความแม่นยำในการคัดกรอง', en: 'Inspection Accuracy' },
      value: '99.8%',
    },
    technologies: ['YOLOv8 Edge', 'OpenCV', 'TensorRT', 'WebGPU Canvas', 'FastAPI'],
    interactiveType: 'vision',
    clientIndustry: {
      th: 'โรงงานโลหะและบรรจุภัณฑ์',
      en: 'Advanced Metallurgy & Packaging',
    },
  },
  {
    id: 'web-command-center',
    category: 'web',
    title: {
      th: 'ศูนย์ควบคุมคลาวด์มัลติไซต์ (Command Cloud)',
      en: 'Multi-Site Industrial Command Portal',
    },
    subtitle: {
      th: 'ควบคุมสถานะสาขาและสายการผลิตพร้อมกันทั่วประเทศ',
      en: 'Unified multi-facility telemetry & resource orchestration',
    },
    tagline: {
      th: 'โหลดข้อมูล 10,000 จุดเซ็นเซอร์ในเวลาไม่ถึง 20 มิลลิวินาที',
      en: 'Real-time operational awareness across distributed operations',
    },
    description: {
      th: 'เว็บแอปพลิเคชันเกรดอุตสาหกรรมที่รวมระบบควบคุม พยากรณ์การผลิต และสิทธิ์การเข้าถึงแบบละเอียดไว้ในหน้าจอเดียว ออกแบบให้สะอาดตา ชัดเจน อ่านค่าง่าย',
      en: 'Zero-latency enterprise web dashboard engineered with WebSockets, virtualized data tables, and high-contrast ergonomic layout for control room engineers.',
    },
    metric: {
      label: { th: 'ความเร็วในการซิงค์ข้อมูล', en: 'Sync Latency' },
      value: '<18ms',
    },
    technologies: ['Next.js', 'TypeScript', 'WebSockets', 'TailwindCSS', 'Distributed Redis'],
    interactiveType: 'performance',
    clientIndustry: {
      th: 'พลังงานทดแทน & สมาร์ทโลจิสติกส์',
      en: 'Renewable Utilities & Smart Logistics',
    },
  },
  {
    id: 'app-field-operator',
    category: 'app',
    title: {
      th: 'แอปแท็บเล็ตสั่งการเครื่องจักรภาคสนาม (Field Ops)',
      en: 'Field Operations & Tablet Controller App',
    },
    subtitle: {
      th: 'ควบคุมอุปกรณ์ผ่านบลูทูธและทำงานออฟไลน์ได้ 100%',
      en: 'Direct-to-hardware BLE controls with resilient offline sync',
    },
    tagline: {
      th: 'ใช้งานง่ายแม้อยู่ในโรงงานที่ไร้อินเทอร์เน็ต',
      en: 'Empowering field technicians with zero signal dependency',
    },
    description: {
      th: 'แอปพลิเคชันสำหรับช่างเทคนิค เชื่อมต่อกับเครื่องจักรในระยะใกล้ผ่าน BLE เพื่ออ่านค่า Diagnostic, ปรับตั้งค่า Parameter และบันทึกประวัติการซ่อมบำรุง',
      en: 'Tactile, high-durability tablet application designed for harsh environments with large touch targets, offline SQLite storage, and instant beacon pairing.',
    },
    metric: {
      label: { th: 'ลดเวลาบันทึกงานซ่อม', en: 'Work Order Speed' },
      value: '+65%',
    },
    technologies: ['Flutter', 'Native BLE', 'SQLite', 'AES-256 Encryption', 'Background Sync'],
    interactiveType: 'app-simulator',
    clientIndustry: {
      th: 'วิศวกรรมบำรุงรักษาอาคารและโรงงาน',
      en: 'Heavy Equipment Maintenance & Infrastructure',
    },
  },
];

export const configuratorModules: ConfiguratorModule[] = [
  // Web
  {
    id: 'web-dashboard',
    category: 'web',
    name: { th: 'แดชบอร์ดบริหาร & มอนิเตอร์', en: 'Executive & Ops Dashboard' },
    description: { th: 'แสดงกราฟ ข้อมูลแบบเรียลไทม์ และสถิติเชิงลึก', en: 'Real-time telemetry, charts, and metrics' },
    icon: 'LayoutDashboard',
    complexity: 'Standard',
  },
  {
    id: 'web-portal',
    category: 'web',
    name: { th: 'พอร์ทัลลูกค้า & ระบบ B2B', en: 'Customer & B2B Portal' },
    description: { th: 'ระบบจัดการออเดอร์ บัญชีผู้ใช้ และเอกสารออนไลน์', en: 'Secure client accounts, ordering & billing' },
    icon: 'Globe',
    complexity: 'Advanced',
  },

  // App
  {
    id: 'app-mobile',
    category: 'app',
    name: { th: 'แอปมือถือ iOS & Android', en: 'iOS & Android Mobile App' },
    description: { th: 'สำหรับลูกค้าทั่วไปหรือพนักงาน พร้อม Push Notification', en: 'Native touch experience & alerts' },
    icon: 'Smartphone',
    complexity: 'Standard',
  },
  {
    id: 'app-ble',
    category: 'app',
    name: { th: 'แอปเชื่อมต่อฮาร์ดแวร์ BLE/NFC', en: 'BLE Hardware Controller App' },
    description: { th: 'ควบคุมอุปกรณ์ไร้สายในระยะใกล้และทำงานออฟไลน์', en: 'Wireless device control & offline buffer' },
    icon: 'Radio',
    complexity: 'Advanced',
  },

  // IoT
  {
    id: 'iot-gateway',
    category: 'iot',
    name: { th: 'กล่อง Edge Gateway & เซ็นเซอร์', en: 'Edge Gateway & Sensor Kit' },
    description: { th: 'อ่านค่าเครื่องจักร อุณหภูมิ แรงดัน สั่นสะเทือน', en: 'Physical sensor ingestion & bus adapter' },
    icon: 'Cpu',
    complexity: 'Advanced',
  },
  {
    id: 'iot-automation',
    category: 'iot',
    name: { th: 'ระบบควบคุมสั่งการอัตโนมัติ (Relay)', en: 'Autonomous Relays & Actuators' },
    description: { th: 'สั่งเปิด-ปิดวาล์ว มอเตอร์ หรือเครื่องจักรจากคลาวด์', en: 'Remote valve/motor actuation & safety stops' },
    icon: 'Zap',
    complexity: 'Enterprise',
  },

  // AI
  {
    id: 'ai-vision',
    category: 'ai',
    name: { th: 'AI ตรวจสอบภาพและตำหนิ (Vision)', en: 'Computer Vision Defect Inspection' },
    description: { th: 'กล้องจับภาพชิ้นงาน คัดแยกของเสียด้วยความเร็วสูง', en: 'High-speed optical defect sorting' },
    icon: 'Eye',
    complexity: 'Enterprise',
  },
  {
    id: 'ai-predictive',
    category: 'ai',
    name: { th: 'AI พยากรณ์และเตือนล่วงหน้า', en: 'Predictive Anomaly Engine' },
    description: { th: 'พยากรณ์การพังของอุปกรณ์และช่วยประหยัดพลังงาน', en: 'Machine degradation early warning' },
    icon: 'Brain',
    complexity: 'Enterprise',
  },
];
