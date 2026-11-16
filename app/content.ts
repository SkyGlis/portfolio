// Everything on the site lives here. Edit this file to update the portfolio.

export const langs = ["pt", "en"] as const;
export type Lang = (typeof langs)[number];
type T = Record<Lang, string>;

export const links = {
  email: "daniel.santos15@ua.pt",
  github: "https://github.com/SkyGlis",
  linkedin: "https://www.linkedin.com/in/daniel-santos15/",
  cv: { pt: "/CV_Daniel_Santos_PT.pdf", en: "/CV_Daniel_Santos.pdf" } as T,
};

// Newest first. Dates are YYYY-MM; formatted per language at render time.
// `points` lines written as "Label: text" get the label in bold.
type Entry = { from: string; to: string; title: T; place: T; note?: T; points?: Record<Lang, string[]> };

export const experience: Entry[] = [
  {
    from: "2026-02",
    to: "2026-06",
    title: {
      pt: "Full Stack Developer, estágio (IA e visão computacional)",
      en: "Full Stack Developer Intern (AI and computer vision)",
    },
    place: { pt: "Vivify Digital, Aveiro (híbrido)", en: "Vivify Digital, Aveiro (hybrid)" },
    note: {
      pt: "Estágio de 680 horas com 6 projetos de IA aplicada para a indústria e empresas. Microsserviços com IA em Python/FastAPI, aplicações web em Laravel/Vue.js e Docker Compose.",
      en: "680-hour internship with 6 applied AI projects for industrial and business use cases. Microservices with Python/FastAPI AI services, Laravel/Vue.js web apps and Docker Compose.",
    },
    points: {
      pt: [
        "Inspeção de defeitos: plataforma de inspeção visual de peças industriais, com captura de vídeo USB/RTSP, anotação de datasets no browser, treino YOLO e inferência em tempo real em GPU com ONNX Runtime.",
        "Códigos de contentores: pipeline ISO 6346 com YOLOX e OCR com PARSeq, incluindo validação do dígito de controlo.",
        "Extração de dados de PDFs: tabelas de faturas e orçamentos, com pipeline local (Docling/OCR) para documentos confidenciais, pipeline cloud (GPT-4o) e processamento assíncrono em PostgreSQL.",
        "Chatbot com LLM: Qwen 2.5 7B local via Ollama que responde em português sobre dados da empresa, com text-to-SQL em SQL Server, tool calling, streaming SSE, integração com osTicket e guardrails (só leitura, deteção de prompt injection, confirmação de escritas).",
        "Guiamento robótico: OpenCV para detetar lentes em tabuleiros e gerar coordenadas para um braço robótico (RoboDK), com calibração de câmara por marcadores ArUco.",
        "Deteção de LEDs: microsserviço Flask com YOLOv8n para detetar LEDs por cor em tempo real. Exportar o modelo para ONNX cortou o tempo de inferência em CPU em cerca de 27%.",
      ],
      en: [
        "Defect inspection: visual inspection platform for industrial parts, with USB/RTSP video capture, in-browser dataset annotation, YOLO training and real-time GPU inference with ONNX Runtime.",
        "Container codes: ISO 6346 recognition pipeline with YOLOX and PARSeq OCR, including check digit validation.",
        "PDF data extraction: product tables from invoices and quotes, with a local Docling/OCR pipeline for confidential documents, a cloud GPT-4o pipeline and asynchronous processing on PostgreSQL.",
        "LLM chatbot: local Qwen 2.5 7B on Ollama that answers business questions in Portuguese, with text-to-SQL on SQL Server, tool calling, SSE streaming, osTicket integration and guardrails (read-only SQL, prompt injection detection, confirmation of writes).",
        "Robotic guidance: OpenCV to detect lenses on trays and generate coordinates for a robotic arm (RoboDK), with camera calibration using ArUco markers.",
        "LED detection: Flask microservice with YOLOv8n for real-time LED colour detection. Exporting the model to ONNX cut CPU inference time by about 27%.",
      ],
    },
  },
  {
    from: "2024-04",
    to: "2024-10",
    title: { pt: "Software Developer, estágio", en: "Software Developer Intern" },
    place: { pt: "Origami Hub", en: "Origami Hub" },
    points: {
      pt: [
        "Websites: website da empresa em PHP, criação de novos websites e manutenção e melhoria dos existentes.",
        "IoT: programação de dispositivos IoT com Arduino (C/C++).",
        "Automação: fluxos em Node-RED para receber, processar e encaminhar dados dos dispositivos IoT.",
      ],
      en: [
        "Websites: built the company website in PHP, created new websites and maintained and improved existing ones.",
        "IoT: programmed IoT devices with Arduino (C/C++).",
        "Automation: built Node-RED flows to receive, process and forward data from IoT devices.",
      ],
    },
  },
  {
    from: "2023-01",
    to: "2023-02",
    title: { pt: "Técnico de hardware, estágio curricular", en: "Hardware Technician, curricular internship" },
    place: { pt: "Inforlândia S.A.", en: "Inforlândia S.A." },
    note: {
      pt: "Montagem e configuração de computadores em linha de produção.",
      en: "Assembled and configured computers on a production line.",
    },
  },
];

export const education: Entry[] = [
  {
    from: "2024-09",
    to: "2026-07",
    title: { pt: "CTeSP em Programação de Sistemas de Informação", en: "CTeSP in Information Systems Programming" },
    place: { pt: "ESTGA, Universidade de Aveiro", en: "ESTGA, University of Aveiro" },
    note: { pt: "Média final de 17,5 valores.", en: "Final grade 17.5/20." },
    points: {
      pt: ["Prémio Caixa Mais Mundo: 7.ª edição, prémio de mérito académico atribuído pela Caixa Geral de Depósitos."],
      en: ["Caixa Mais Mundo Award: 7th edition, an academic merit award from Caixa Geral de Depósitos."],
    },
  },
  {
    from: "2021-09",
    to: "2024-07",
    title: {
      pt: "Curso Profissional de Gestão de Equipamentos Informáticos",
      en: "Vocational Diploma in IT Equipment Management",
    },
    place: { pt: "Escola Dr. Jaime Magalhães Lima", en: "Escola Dr. Jaime Magalhães Lima" },
    note: { pt: "Média final de 18,7 valores.", en: "Final grade 18.7/20." },
    points: { pt: ["Distinção: Prémio de Mérito."], en: ["Distinction: Merit Award."] },
  },
];

export const projects: {
  title: T;
  kind: T;
  tech: string[];
  desc: T;
  links: { label: T; href: string }[];
}[] = [
  {
    title: { pt: "Health Preventive", en: "Health Preventive" },
    kind: { pt: "Web app full-stack", en: "Full-stack web app" },
    tech: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Gemini", "Docker"],
    desc: {
      pt: "App para acompanhar a saúde: registo diário de sono, stress e exercício, métricas como tensão arterial e glicose, um mapa do corpo para registar dores e conselhos gerados por IA. Login com Google, gráficos de tendências e monorepo Turborepo. Projeto final do CTeSP.",
      en: "Health tracking app: daily logs for sleep, stress and exercise, metrics like blood pressure and glucose, a body map to log pain, and AI-generated advice. Google sign-in, trend charts and a Turborepo monorepo. Final project of my CTeSP.",
    },
    links: [{ label: { pt: "código", en: "code" }, href: "https://github.com/SkyGlis/health-preventive" }],
  },
  {
    title: { pt: "Testes à API de uma biblioteca", en: "Library API test suite" },
    kind: { pt: "Testes automáticos", en: "Automated testing" },
    tech: ["Java", "TestNG", "Retrofit", "Gradle"],
    desc: {
      pt: "Suite de testes automáticos a uma API REST de livros, sócios e reservas, cobrindo os casos que funcionam e os que devem falhar: dados inválidos, duplicados, reservar um livro já reservado. Trabalho da cadeira de Testes de Sistemas.",
      en: "Automated tests for a REST API of books, members and reservations, covering both what should work and what should fail: invalid data, duplicates, reserving a book that's already taken. Built for my Systems Testing course.",
    },
    links: [{ label: { pt: "código", en: "code" }, href: "https://github.com/SkyGlis/library-api-test-suite" }],
  },
  {
    title: { pt: "Calculadora Echo Unify", en: "Echo Unify Calculator" },
    kind: { pt: "Web app", en: "Web app" },
    tech: ["PHP", "jQuery", "MySQL"],
    desc: {
      pt: "Calculadora de hardware para sistemas de videovigilância. Trabalhei no backend e na gestão das APIs, durante o estágio na Origami Hub.",
      en: "Hardware calculator for video surveillance systems. I worked on the backend and managed the APIs during my internship at Origami Hub.",
    },
    links: [{ label: { pt: "ver online", en: "live site" }, href: "https://echounify.com/calculator/" }],
  },
  {
    title: { pt: "Smart Locker", en: "Smart Locker" },
    kind: { pt: "IoT + web app", en: "IoT + web app" },
    tech: ["Arduino (C)", "PHP", "CSS", "MySQL"],
    desc: {
      pt: "Fechadura para cofres com cartão RFID e PIN, mais uma web app para gerir contas e consultar o registo de acessos. Projeto de Aptidão Profissional.",
      en: "Safe lock using an RFID card plus PIN, with a web app to manage accounts and review the access log. Final project of my vocational course.",
    },
    links: [
      { label: { pt: "código", en: "code" }, href: "https://github.com/SkyGlis/smart-locker" },
      { label: { pt: "vídeo", en: "video" }, href: "https://www.youtube.com/watch?v=RLugrnCRbE4" },
    ],
  },
  {
    title: { pt: "Wordle Tuga", en: "Wordle Tuga" },
    kind: { pt: "Jogo web", en: "Web game" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    desc: {
      pt: "Wordle em português europeu, com número de letras e tentativas à escolha. As palavras são validadas na API do Dicionário Aberto.",
      en: "Wordle in European Portuguese, with adjustable word length and number of guesses. Words are checked against the Dicionário Aberto API.",
    },
    links: [{ label: { pt: "código", en: "code" }, href: "https://github.com/SkyGlis/Wordle-Tuga" }],
  },
  {
    title: { pt: "Next Store", en: "Next Store" },
    kind: { pt: "Loja online", en: "Online store" },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
    desc: {
      pt: "Montra de e-commerce com carrinho em estado global, tema claro e escuro e layout responsivo. Trabalho da cadeira de Desenvolvimento Web.",
      en: "E-commerce storefront with a global cart state, light and dark themes and a responsive layout. Built for my Web Development course.",
    },
    links: [{ label: { pt: "código", en: "code" }, href: "https://github.com/SkyGlis/next-store" }],
  },
];

export const stack: { group: T; items: string[] }[] = [
  { group: { pt: "linguagens", en: "languages" }, items: ["Python", "PHP", "JavaScript", "TypeScript", "SQL", "Java", "C/C++", "HTML", "CSS"] },
  { group: { pt: "backend", en: "backend" }, items: ["FastAPI", "Flask", "Laravel", "Django", "NestJS", "Node.js", "Express", "REST APIs", "SSE", "microservices"] },
  { group: { pt: "frontend", en: "frontend" }, items: ["Vue.js", "Inertia.js", "React", "Next.js", "Tailwind CSS"] },
  { group: { pt: "ia e visão", en: "ai and vision" }, items: ["YOLO", "YOLOX", "PARSeq", "OpenCV", "PyTorch", "ONNX Runtime", "PaddlePaddle", "OCR", "Docling"] },
  { group: { pt: "llms", en: "llms" }, items: ["Ollama", "Hugging Face", "GPT-4o", "text-to-SQL", "tool calling"] },
  { group: { pt: "dados", en: "data" }, items: ["PostgreSQL", "SQL Server", "MySQL", "MongoDB", "Prisma"] },
  { group: { pt: "testes", en: "testing" }, items: ["TestNG", "Vitest", "Postman"] },
  { group: { pt: "devops e iot", en: "devops and iot" }, items: ["Docker", "Docker Compose", "Git", "Arduino", "Node-RED"] },
];

export const ui = {
  pt: {
    meta: {
      title: "Daniel Santos · Full Stack Developer",
      description: "Full stack developer júnior em Aveiro. Aplicações web, APIs REST e IA aplicada: visão computacional e LLMs.",
    },
    nav: { experience: "experiência", education: "estudos", projects: "projetos", about: "sobre", contact: "contacto" },
    tagline: "Full stack developer júnior em Aveiro. Aplicações web, APIs e IA aplicada: visão computacional e LLMs.",
    status: "À procura de uma posição júnior, em Aveiro ou remoto",
    cmd: {
      projects: "ls projetos/",
      experience: "git log experiencia",
      education: "git log estudos",
      stack: "cat stack.txt",
      about: "cat sobre.md",
      contact: "./contacto.sh",
    },
    about: [
      "Comecei a programar sozinho aos 11 anos e nunca mais parei. Hoje construo aplicações web e APIs REST com PHP, Laravel, Vue.js, Python e FastAPI, com bases de dados SQL e Docker, e já integrei modelos de visão computacional e LLMs em aplicações reais.",
      "No estágio na Vivify Digital entreguei 6 projetos de IA aplicada para a indústria, da inspeção visual de peças com YOLO a um chatbot com LLM local que responde sobre os dados da empresa. Terminei o CTeSP em Programação de Sistemas de Informação na Universidade de Aveiro com 17,5 valores e o Prémio Caixa Mais Mundo.",
    ],
    contact: "Procuro uma posição júnior como Software Developer ou Full Stack Developer, em Aveiro ou remoto.",
    cv: "currículo (PDF)",
    term: {
      label: "Terminal: escreve um comando e carrega Enter",
      hint: "escreve help e carrega Enter",
      whoami: "daniel santos, full stack developer júnior. web, apis e ia aplicada. programa desde os 11.",
      help: [
        ["whoami", "quem sou"],
        ["ls", "o que há por aqui"],
        ["experiencia", "estágios e trabalho"],
        ["estudos", "formação"],
        ["projetos", "salta para os projetos"],
        ["stack", "com o que trabalho"],
        ["contacto", "onde me encontrar"],
        ["cv", "abre o currículo"],
        ["lang en", "switch to English"],
        ["clear", "limpa o ecrã"],
      ],
      ls: "experiencia/  estudos/  projetos/  stack.txt  sobre.md  contacto.sh  cv.pdf",
      going: "a abrir…",
      sudo: "permissão negada. boa tentativa.",
      notFound: (c: string) => `${c}: comando não encontrado. escreve help`,
    },
  },
  en: {
    meta: {
      title: "Daniel Santos · Full Stack Developer",
      description: "Junior full stack developer in Aveiro, Portugal. Web apps, REST APIs and applied AI: computer vision and LLMs.",
    },
    nav: { experience: "experience", education: "education", projects: "projects", about: "about", contact: "contact" },
    tagline: "Junior full stack developer in Aveiro, Portugal. Web apps, APIs and applied AI: computer vision and LLMs.",
    status: "Looking for a junior role, in Aveiro or remote",
    cmd: {
      projects: "ls projects/",
      experience: "git log experience",
      education: "git log education",
      stack: "cat stack.txt",
      about: "cat about.md",
      contact: "./contact.sh",
    },
    about: [
      "I taught myself to code at 11 and never stopped. Today I build web apps and REST APIs with PHP, Laravel, Vue.js, Python and FastAPI, on SQL databases and Docker, and I've integrated computer vision models and LLMs into real applications.",
      "During my internship at Vivify Digital I delivered 6 applied AI projects for industry, from visual inspection of parts with YOLO to a local LLM chatbot that answers questions about company data. I finished my CTeSP in Information Systems Programming at the University of Aveiro with a 17.5/20 grade and the Caixa Mais Mundo award.",
    ],
    contact: "I'm looking for a junior Software Developer or Full Stack Developer role, in Aveiro or remote.",
    cv: "résumé (PDF)",
    term: {
      label: "Terminal: type a command and press Enter",
      hint: "type help and press Enter",
      whoami: "daniel santos, junior full stack developer. web, apis and applied ai. coding since age 11.",
      help: [
        ["whoami", "who I am"],
        ["ls", "what's around here"],
        ["experience", "internships and work"],
        ["education", "studies"],
        ["projects", "jump to projects"],
        ["stack", "what I work with"],
        ["contact", "where to find me"],
        ["cv", "open my résumé"],
        ["lang pt", "mudar para português"],
        ["clear", "clear the screen"],
      ],
      ls: "experience/  education/  projects/  stack.txt  about.md  contact.sh  cv.pdf",
      going: "opening…",
      sudo: "permission denied. nice try.",
      notFound: (c: string) => `${c}: command not found. type help`,
    },
  },
} satisfies Record<Lang, unknown>;
