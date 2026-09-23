import { ServiceItem, ShowcaseProject, ConfiguratorModule } from '../types';

export const content = {
  th: {
    nav: {
      services: 'บริการ 4 ด้าน',
      showcase: 'ระบบจำลอง',
      configurator: 'จัดสเปกระบบ',
      philosophy: 'ทำไมต้อง Gepler',
      contact: 'ติดต่อเรา',
      cta: 'เริ่มคุยงาน',
      systemStatus: 'วิศวกรรมตามสั่ง: พร้อมรับงาน',
    },
    hero: {
      badge: 'Bespoke Engineering Studio',
      titleHighlight: 'Web • App • IoT • AI',
      headline1: 'รับพัฒนาระบบ Web • App • IoT • AI',
      headline2: 'เลือกทำเฉพาะด้าน หรือรวมกันตามโจทย์',
      subheadline:
        'บริการวิศวกรรมเทคโนโลยีสั่งทำ 100% ตอบโจทย์ธุรกิจโดยตรง เลือกพัฒนาเฉพาะระบบที่ต้องการ ไม่บังคับทำรวมเป็นแพ็กเกจ',
      ctaPrimary: '1. เลือกสเปกระบบ',
      ctaSecondary: '2. ปรึกษาวิศวกร',
      fastFacts: [
        { label: 'พัฒนาเฉพาะคุณ', value: '100%' },
        { label: 'บริการหลัก (เลือกได้)', value: '4 ด้าน' },
        { label: 'ความเสถียรระบบ', value: '24/7' },
      ],
    },
    stats: [
      { value: '100% Custom', label: 'สร้างเฉพาะทาง ไร้ขีดจำกัด' },
      { value: '4 บริการ', label: 'เลือกทำเฉพาะด้าน หรือรวมกันได้' },
      { value: 'Enterprise', label: 'มาตรฐานความปลอดภัยสูง' },
      { value: '24/7', label: 'ระบบทำงานต่อเนื่อง' },
    ],
    disciplines: {
      tag: 'Our Services',
      heading: '4 บริการหลักของ Gepler',
      subheading: 'เลือกพัฒนาเฉพาะระบบที่ต้องการ หรือต่อยอดเชื่อมต่อร่วมกันในอนาคต',
    },
    showcase: {
      tag: 'Live Simulators',
      heading: 'ห้องทดลองระบบจำลอง',
      subheading: 'ทดลองใช้งานจริงของแต่ละระบบก่อนตัดสินใจ',
      instruction: 'คลิกหรือปรับสวิตช์ในหน้าจอจำลองด้านล่างเพื่อทดสอบการทำงาน',
    },
    configurator: {
      tag: 'Step 1 • Architecture Builder',
      heading: 'จัดสเปกระบบของคุณ',
      subheading: 'เลือกเฉพาะโมดูลที่ต้องการ เพื่อดูโครงสร้างสถาปัตยกรรมและส่งคุยงานได้ทันที',
      selectTitle: 'เลือกโมดูลที่ต้องการ (เลือกเฉพาะที่ต้องการได้)',
      summaryTitle: 'พิมพ์เขียวสถาปัตยกรรม Gepler Blueprint',
      estimatedScope: 'ขอบเขตระบบ:',
      recommendedStack: 'เทคโนโลยีที่แนะนำ:',
      btnSendSpec: 'ส่งสเปกนี้คุยกับวิศวกร (ขั้นตอนถัดไป)',
    },
    philosophy: {
      tag: 'Why Gepler',
      heading: 'ทำไมต้องเลือก Gepler?',
      subheading: 'สร้างตามโจทย์จริง ไม่ใช้เทมเพลต และดูแลโดยวิศวกรโดยตรง',
      items: [
        {
          title: 'เลือกเฉพาะระบบได้',
          desc: 'ไม่บังคับซื้อแพ็กเกจเหมารวม เลือกระบบที่จำเป็นก่อนได้ตามงบประมาณและความพร้อมของธุรกิจ',
        },
        {
          title: 'เขียนใหม่ 100% ไร้โค้ดส่วนเกิน',
          desc: 'ไม่ใช้ CMS หรือเทมเพลตสำเร็จรูป โค้ดกระชับ โหลดเร็ว ปลอดภัย และรองรับผู้ใช้งานจำนวนมาก',
        },
        {
          title: 'เชี่ยวชาญทั้ง HW & SW',
          desc: 'ครอบคลุมตั้งแต่แผงวงจร เซ็นเซอร์ เกตเวย์ IoT จนถึงคลาวด์ แดชบอร์ด และโมบายแอป',
        },
        {
          title: 'คุยตรงกับวิศวกร',
          desc: 'วางแผนและออกแบบสถาปัตยกรรมร่วมกับทีมวิศวกรผู้เชี่ยวชาญโดยตรง ไม่ผ่านนายหน้า',
        },
      ],
    },
    contact: {
      tag: 'Step 2 • Direct Consultation',
      heading: 'ปรึกษาทีมวิศวกร',
      subheading: 'ส่งความต้องการเบื้องต้นเพื่อประเมินสเปกและเสนอแผนงานฟรี ตอบกลับใน 24 ชั่วโมง',
      form: {
        name: 'ชื่อของคุณ / ตัวแทนบริษัท',
        email: 'อีเมลติดต่อ',
        phone: 'เบอร์โทรศัพท์',
        company: 'ชื่อบริษัท / โครงการ',
        scope: 'ความต้องการเบื้องต้น',
        scopePlaceholder: 'เช่น ต้องการทำเฉพาะระบบเว็บพอร์ทัล, ระบบมอนิเตอร์เครื่องจักร IoT หรือโมบายแอป...',
        submit: 'ส่งข้อมูลให้ทีมวิศวกรประเมิน',
        sending: 'กำลังส่งข้อมูล...',
        success: 'ขอบคุณครับ! ทีมวิศวกรได้รับข้อมูลแล้วและจะติดต่อกลับโดยเร็วที่สุด',
      },
      directChannels: 'ช่องทางติดต่อโดยตรง',
      location: 'Bangkok, Thailand • ให้บริการทั่วประเทศ',
    },
    footer: {
      rights: 'สงวนลิขสิทธิ์ Gepler Industrial. ทุกระบบสร้างขึ้นด้วยความประณีตทางวิศวกรรม',
      builtWith: 'Bespoke Industrial Tech Studio',
    },
  },
  en: {
    nav: {
      services: '4 Services',
      showcase: 'Live Demos',
      configurator: 'Configurator',
      philosophy: 'Why Gepler',
      contact: 'Contact',
      cta: 'Start Project',
      systemStatus: 'Custom Engineering: Available',
    },
    hero: {
      badge: 'Bespoke Engineering Studio',
      titleHighlight: 'Web • App • IoT • AI',
      headline1: 'Engineering Web • App • IoT • AI',
      headline2: 'Choose Standalone or Combined Systems',
      subheadline:
        '100% custom-built engineering for your business. Select only the modules you need—no forced bundles.',
      ctaPrimary: '1. Configure System Specs',
      ctaSecondary: '2. Consult Engineers',
      fastFacts: [
        { label: 'Bespoke Architecture', value: '100%' },
        { label: 'Core Services (Modular)', value: '4' },
        { label: 'High Availability', value: '24/7' },
      ],
    },
    stats: [
      { value: '100% Custom', label: 'Tailored to Client Specs' },
      { value: '4 Services', label: 'Standalone or Combined' },
      { value: 'Enterprise', label: 'Security & Performance' },
      { value: '24/7', label: 'Engineered for Uptime' },
    ],
    disciplines: {
      tag: 'Our Services',
      heading: 'The 4 Engineering Disciplines of Gepler',
      subheading: 'Choose standalone systems or interconnect them as your business expands.',
    },
    showcase: {
      tag: 'Live Simulators',
      heading: 'Interactive Technology Sandbox',
      subheading: 'Test real working simulations of each system before deciding.',
      instruction: 'Interact with switches, sliders, and controls below to observe real-time system behaviors.',
    },
    configurator: {
      tag: 'Step 1 • Architecture Builder',
      heading: 'Custom Architecture Scope Builder',
      subheading: 'Choose only the modules you need to generate an instant architecture blueprint.',
      selectTitle: 'Select Target Modules (Pick Only What You Need)',
      summaryTitle: 'Gepler Architecture Blueprint',
      estimatedScope: 'Architecture Scope:',
      recommendedStack: 'Recommended Stack:',
      btnSendSpec: 'Send Specs to Engineers (Next Step)',
    },
    philosophy: {
      tag: 'Why Gepler',
      heading: 'Why Gepler Stands Apart',
      subheading: 'Built to your exact requirements with zero bloated templates and direct engineering access.',
      items: [
        {
          title: 'Modular by Design',
          desc: 'Select only the systems you need right now. Expand and integrate further when ready.',
        },
        {
          title: '100% Bespoke Codebase',
          desc: 'No off-the-shelf templates or bloated CMS. Lean, high-speed, and enterprise secure.',
        },
        {
          title: 'Hardware & Software Convergence',
          desc: 'From custom microcontrollers and industrial IoT buses to responsive cloud portals.',
        },
        {
          title: 'Direct Engineering Access',
          desc: 'Work directly with senior engineers and architects with zero account-manager friction.',
        },
      ],
    },
    contact: {
      tag: 'Step 2 • Direct Consultation',
      heading: 'Talk Directly With Our Engineers',
      subheading: 'Send your initial requirements for a free architectural evaluation within 24 hours.',
      form: {
        name: 'Full Name / Representative',
        email: 'Work Email',
        phone: 'Phone Number',
        company: 'Company / Project Name',
        scope: 'Project Overview & Requirements',
        scopePlaceholder: 'e.g. Standalone web dashboard, machine telemetry IoT gateway, or mobile app...',
        submit: 'Submit Engineering Request',
        sending: 'Transmitting...',
        success: 'Received! Our senior engineering leads will review your specs and reach out promptly.',
      },
      directChannels: 'Direct Channels',
      location: 'Bangkok, Thailand • Nationwide & International',
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
      th: 'เว็บแอป & แพลตฟอร์มคลาวด์',
      en: 'High-Performance Web Platforms',
    },
    subtitle: {
      th: 'แดชบอร์ดมอนิเตอร์และระบบเว็บองค์กร',
      en: 'Mission-Critical Cloud Portals & Dashboards',
    },
    description: {
      th: 'เว็บแอปพลิเคชันความเร็วสูง แดชบอร์ดมอนิเตอร์ข้อมูลสด และพอร์ทัลองค์กร รองรับผู้ใช้งานปริมาณมาก เสถียรและปลอดภัย',
      en: 'Fast, resilient cloud portals, real-time command dashboards, and high-concurrency enterprise web platforms.',
    },
    capabilities: {
      th: ['Real-Time WebSocket & Telemetry', 'แดชบอร์ดมอนิเตอร์ข้อมูลสด', 'Cloud Architecture สเกลสูง', 'มาตรฐานความปลอดภัยระดับองค์กร'],
      en: ['Real-Time WebSockets', 'Live Operations Dashboards', 'Scalable Cloud Architecture', 'Enterprise-grade Security'],
    },
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js / Go', 'PostgreSQL', 'TailwindCSS'],
    metrics: {
      value: '<25ms',
      label: { th: 'ความเร็วตอบสนองข้อมูล', en: 'Live Data Latency' },
    },
  },
  {
    id: 'app',
    number: '02',
    title: {
      th: 'โมบายแอปพลิเคชัน',
      en: 'Mobile Applications',
    },
    subtitle: {
      th: 'iOS & Android เชื่อมต่ออุปกรณ์และระบบหลังบ้าน',
      en: 'iOS & Android for Field Operations & Clients',
    },
    description: {
      th: 'แอปมือถือสั่งการและแสดงผล เชื่อมโยงอุปกรณ์ฮาร์ดแวร์ผ่าน Bluetooth/Wi-Fi พร้อมระบบ Offline-first ใช้งานได้แม้ไม่มีเน็ต',
      en: 'Native and cross-platform apps paired with hardware devices via BLE/Wi-Fi, featuring offline-first data sync.',
    },
    capabilities: {
      th: ['เชื่อมต่อบลูทูธ BLE & อุปกรณ์', 'ระบบ Offline Data Sync', 'แอปปฏิบัติการภาคสนามและคลัง', 'UX/UI เรียบหรู ใช้งานง่าย'],
      en: ['BLE Hardware Integration', 'Offline Data Sync', 'Field & Ops Applications', 'Minimalist, Efficient UX'],
    },
    techStack: ['Flutter', 'React Native', 'Swift / Kotlin', 'SQLite', 'BLE SDK', 'WebSockets'],
    metrics: {
      value: '100%',
      label: { th: 'รองรับการทำงานออฟไลน์', en: 'Offline Capability' },
    },
  },
  {
    id: 'iot',
    number: '03',
    title: {
      th: 'ฮาร์ดแวร์ & Industrial IoT',
      en: 'Industrial IoT & Telemetry',
    },
    subtitle: {
      th: 'เซ็นเซอร์ กล่องเกตเวย์ และมอนิเตอร์เครื่องจักร',
      en: 'Sensors, Edge Gateways & Machine Telemetry',
    },
    description: {
      th: 'ออกแบบบอร์ดไมโครคอนโทรลเลอร์ กล่องเกตเวย์ ดึงค่าเซ็นเซอร์ (อุณหภูมิ แรงดัน สั่นสะเทือน) ขึ้นคลาวด์มอนิเตอร์ 24 ชม.',
      en: 'End-to-end hardware engineering: microcontrollers, edge gateways, industrial buses, and 24/7 telemetry ingestion.',
    },
    capabilities: {
      th: ['กล่อง Edge Gateway & Firmware', 'Modbus, RS485, MQTT, CAN', 'ตรวจจับความผิดปกติเครื่องจักร', 'ระบบแจ้งเตือนอัตโนมัติ 24 ชม.'],
      en: ['Custom Edge Gateways', 'Modbus, RS485, MQTT', 'Automated Anomaly Detection', 'Instant Alerts (LINE / SMS)'],
    },
    techStack: ['ESP32 / STM32', 'Raspberry Pi / Linux Edge', 'MQTT', 'InfluxDB', 'Grafana', 'Custom PCB'],
    metrics: {
      value: '99.99%',
      label: { th: 'ความต่อเนื่องในการส่งข้อมูล', en: 'Data Packet Fidelity' },
    },
  },
  {
    id: 'ai',
    number: '04',
    title: {
      th: 'ปัญญาประดิษฐ์ประยุกต์ (Applied AI)',
      en: 'Applied AI & Automation',
    },
    subtitle: {
      th: 'วิเคราะห์ภาพ กล้องตรวจจับ และการพยากรณ์',
      en: 'Computer Vision & Predictive Models',
    },
    description: {
      th: 'โมเดล AI เฉพาะทาง เช่น กล้องตรวจจับตำหนิชิ้นงาน (Vision QA), ระบบพยากรณ์การซ่อมบำรุง และ AI ผู้ช่วยข้อมูลเทคนิค',
      en: 'Customized AI deployed into operations: computer vision defect inspection, predictive maintenance, and bespoke agents.',
    },
    capabilities: {
      th: ['Computer Vision ตรวจตำหนิชิ้นงาน', 'Predictive Maintenance ป้องกันพัง', 'โมเดลพยากรณ์ข้อมูลหน้างาน', 'AI Assistant ประมวลผลเอกสาร'],
      en: ['Computer Vision QA', 'Predictive Maintenance', 'Operational Forecasting', 'Technical AI Agents'],
    },
    techStack: ['PyTorch / ONNX', 'YOLO / Vision Models', 'TensorRT Edge', 'Python', 'Vector DB', 'Claude / Gemini APIs'],
    metrics: {
      value: '99.8%',
      label: { th: 'ความแม่นยำในการตรวจจับ', en: 'Inspection Precision' },
    },
  },
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'iot-telemetry',
    category: 'iot',
    title: {
      th: 'โหนดตรวจจับการสั่นและสถานะเครื่องจักร',
      en: 'Machine Vibration & Telemetry Node',
    },
    subtitle: {
      th: 'ระบบ Edge Gateway มอนิเตอร์สุขภาพเครื่องจักร 24 ชม.',
      en: '24/7 Edge Telemetry Gateway for Heavy Machinery',
    },
    tagline: {
      th: 'ตรวจจับสัญญาณผิดปกติก่อนที่เครื่องจักรจะชำรุด',
      en: 'Detect micro-faults before equipment downtime',
    },
    description: {
      th: 'ส่งข้อมูลเซ็นเซอร์ความถี่สูงผ่าน MQTT วิเคราะห์การสั่นสะเทือน อุณหภูมิ และแจ้งเตือนอัตโนมัติทันที',
      en: 'Real-time high-frequency sensor ingest analyzing vibration and temperature with automated threshold alerts.',
    },
    metric: {
      label: { th: 'ลดเวลาเครื่องจักรขัดข้อง', en: 'Downtime Reduction' },
      value: '-48%',
    },
    technologies: ['Edge Computing', 'MQTT', 'STM32 / ESP32', 'React Live Graphs', 'InfluxDB'],
    interactiveType: 'telemetry',
    clientIndustry: {
      th: 'โรงงานผลิตชิ้นส่วนยานยนต์ & อุตสาหกรรม',
      en: 'Automotive & Precision Manufacturing',
    },
  },
  {
    id: 'ai-vision-qa',
    category: 'ai',
    title: {
      th: 'AI ตรวจสอบตำหนิชิ้นส่วนอัตโนมัติ',
      en: 'Optical Defect Triage System',
    },
    subtitle: {
      th: 'ตรวจจับรอยขีดข่วน ขนาดผิดสัดส่วน และจุดบกพร่อง',
      en: 'Real-time surface anomaly & defect inspection',
    },
    tagline: {
      th: 'สแกนชิ้นงานบนสายพานด้วยความเร็ว 35 มิลลิวินาที',
      en: 'High-speed automated sorting with 99.8% precision',
    },
    description: {
      th: 'กล้อง AI ประมวลผลภาพชิ้นงานแบบเรียลไทม์ ชี้จุดตำหนิและสั่งคัดแยกชิ้นงานเสียโดยอัตโนมัติ',
      en: 'Computer vision inference detecting surface scratches and defects at line speed with automated ejection.',
    },
    metric: {
      label: { th: 'ความแม่นยำในการคัดกรอง', en: 'Inspection Accuracy' },
      value: '99.8%',
    },
    technologies: ['YOLOv8 Edge', 'OpenCV', 'TensorRT', 'WebGPU Canvas', 'FastAPI'],
    interactiveType: 'vision',
    clientIndustry: {
      th: 'โรงงานโลหะและสายการผลิตบรรจุภัณฑ์',
      en: 'Advanced Metallurgy & Packaging',
    },
  },
  {
    id: 'web-command-center',
    category: 'web',
    title: {
      th: 'ศูนย์ควบคุมคลาวด์องค์กร (Command Portal)',
      en: 'Multi-Site Industrial Command Portal',
    },
    subtitle: {
      th: 'รวมข้อมูลและสถานะสาขาทั่วประเทศไว้ในหน้าจอเดียว',
      en: 'Unified multi-facility telemetry & operations',
    },
    tagline: {
      th: 'อัปเดตข้อมูลสดกว่า 10,000 จุดเซ็นเซอร์ใน <20ms',
      en: 'Zero-latency situational awareness across operations',
    },
    description: {
      th: 'เว็บแดชบอร์ดระดับ Enterprise แสดงผลข้อมูลสดจากทุกสาขา รวดเร็ว ลื่นไหล ปลอดภัยสูง',
      en: 'High-performance web dashboard engineered with WebSockets for instant control room monitoring.',
    },
    metric: {
      label: { th: 'ความเร็วในการซิงค์ข้อมูล', en: 'Sync Latency' },
      value: '<18ms',
    },
    technologies: ['Next.js', 'TypeScript', 'WebSockets', 'TailwindCSS', 'Redis'],
    interactiveType: 'performance',
    clientIndustry: {
      th: 'พลังงานทดแทน & โลจิสติกส์',
      en: 'Renewable Utilities & Smart Logistics',
    },
  },
  {
    id: 'app-field-operator',
    category: 'app',
    title: {
      th: 'แอปแท็บเล็ตสั่งการเครื่องจักร (Field Ops)',
      en: 'Field Operations & Tablet Controller App',
    },
    subtitle: {
      th: 'สั่งการเครื่องจักรผ่านบลูทูธและทำงานออฟไลน์ 100%',
      en: 'Direct BLE controls with resilient offline sync',
    },
    tagline: {
      th: 'ใช้งานง่ายแม้อยู่ในพื้นที่ไร้สัญญาณอินเทอร์เน็ต',
      en: 'Field operator tool with zero connectivity dependency',
    },
    description: {
      th: 'แอปช่างเทคนิคเชื่อมต่อบลูทูธ BLE เพื่ออ่านค่า วิเคราะห์ปัญหา ปรับสปีด และบันทึกงานซ่อมบำรุง',
      en: 'Tactile tablet app for field technicians: Bluetooth pairing, offline diagnostics, and instant parameter tuning.',
    },
    metric: {
      label: { th: 'ลดเวลาบันทึกงานซ่อม', en: 'Work Order Speed' },
      value: '+65%',
    },
    technologies: ['Flutter', 'Native BLE', 'SQLite', 'AES-256', 'Background Sync'],
    interactiveType: 'app-simulator',
    clientIndustry: {
      th: 'วิศวกรรมบำรุงรักษาอาคารและโรงงาน',
      en: 'Heavy Equipment Maintenance & Facilities',
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
