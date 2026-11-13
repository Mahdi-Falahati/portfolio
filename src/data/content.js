export const profile = {
  name: 'Mahdi Falahati',
  logo: 'mahdi',
  role: 'Full-stack developer. I build web apps with React, Next.js, Node.js and Go, and desktop tools with Python.',
  about:
    'I’m a computer engineer from Iran who likes building software end to end: the interface, the API and the database behind it. I’m now studying Computer Systems Architecture for my master’s degree, and working as a freelancer.',
  email: 'falahatimahdi@gmail.com',
  phone: '+989021571617',
  phoneLabel: '+98 902 157 1617',
  contactLead: 'Open to freelance work and interesting projects. Email is the fastest way to reach me.',
  life: 'I cook and I work out. Both reward the same habits as programming: follow the method, repeat it, and improve a little every time.',
  learning:
    'I’m learning how systems fail so I can build ones that hold up: Linux, networking, and how the web is attacked and defended. My longer-term goal is red team work, and I’m starting with the fundamentals.'
}

export const terminal = {
  command: 'ls work/',
  denied: "ls: cannot open 'work/': protected by NDA. Ask me about it instead."
}

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Experience' },
  // { href: '#selected-work', label: 'Selected work' },
  { href: '#contact', label: 'Contact' }
]

export const skills = [
  { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'Go', 'REST APIs'] },
  { title: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
  { title: 'Desktop and scripting', items: ['Python', 'PyQt'] },
  { title: 'Linux & Networking', items: ['Linux', 'LPIC', 'Networking'] },
  { title: 'Fundamentals I’m building', items: ['HTTP', 'Auth'] }
]

export const experience = [
  { title: 'Freelance developer', note: 'Present. Web and desktop projects for clients.' },
  { title: 'Restanvin Raya', note: 'Software development.' },
  { title: 'Behineh Sazan Sarzamin Hooshmand', note: 'Software development.' },
  { title: 'APSignals', note: 'Software development.' }
]

export const selectedWork = {
  lead:
    'Most of my client work is under NDA, so I can’t show the code or name the companies. In a call I can walk you through the architecture, the decisions and the results.',
  cards: [
    { redactWidth: '7rem', domain: 'Add the industry', part: 'Add what you owned', stack: ['React', 'Node.js', 'MongoDB'] },
    { redactWidth: '5rem', domain: 'Add the industry', part: 'Add what you owned', stack: ['Next.js', 'Go', 'PostgreSQL'] },
    { redactWidth: '8.5rem', domain: 'Add the industry', part: 'Add what you owned', stack: ['Python', 'PyQt'] }
  ]
}

export const method = [
  { title: 'Data model first', text: 'I design the schema and the API before the screens, so the UI has solid ground.' },
  { title: 'Distrust input', text: 'Every request is validated on the server, whatever the client says.' },
  { title: 'Small releases', text: 'Short cycles, working software each time, and fewer surprises at the end.' },
  { title: 'Write it down', text: 'Clear READMEs and handover notes, so the next developer isn’t guessing.' }
]

export const education = [
  { title: 'MSc, Computer Systems Architecture', note: 'In progress.' },
  { title: 'BSc, Computer Engineering', note: 'Gonbad Kavous University. Graduated with an A grade average.' },
  { title: 'CS50x', note: 'Harvard University. Completed the online course and bootcamp.' }
]
