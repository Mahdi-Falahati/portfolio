export const translations = {
  en: {
    direction: 'ltr',
    languageName: 'English',
    languagesLabel: 'Choose language',
    quickContactLead: 'Have a project in mind?',
    quickContactAction: 'Let’s build something great',
    emailLabel: 'Email',
    phoneLabel: 'Call',
    navLabel: 'Sections',
    openMenuLabel: 'Open menu',
    closeMenuLabel: 'Close menu',
    nav: { about: 'About', skills: 'Skills', work: 'Experience', contact: 'Contact' },
    sections: {
      about: 'about',
      skills: 'skills',
      work: 'experience',
      method: 'how I work',
      education: 'education',
      learning: 'continuous growth',
      life: 'off the keyboard',
      contact: 'contact'
    },
    about:
      'I’m a computer engineer from Iran who likes building software end to end: the interface, the API and the database behind it. I’m now studying Computer Systems Architecture for my master’s degree, and working as a freelancer.',
    contactLead: 'Open to freelance work and interesting projects. Email is the fastest way to reach me.',
    learning:
      'I make continuous learning part of my work: studying, practicing, and keeping up with changes in software and security. I turn what I learn into practical skills and keep looking for better ways to build reliable products. Right now, I’m focused on Linux, networking, and web security.',
    life:
      'I cook and I work out. Both reward the same habits as programming: follow the method, repeat it, and improve a little every time.',
    skills: [
      { title: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'Go', 'REST APIs'] },
      { title: 'Databases', items: ['MongoDB', 'PostgreSQL'] },
      { title: 'Desktop and scripting', items: ['Python', 'PyQt'] },
      { title: 'Linux & Networking', items: ['Linux', 'LPIC', 'Networking'] },
      { title: 'Security fundamentals', items: ['Web security', 'OWASP Top 10', 'Secure coding', 'Penetration testing basics'] }
    ],
    experience: [
      { title: 'Freelance developer', note: 'Present. Web and desktop projects for clients.' },
      { title: 'Restanvin Raya', note: 'Software development.' },
      { title: 'Behineh Sazan Sarzamin Hooshmand', note: 'Software development.' },
      { title: 'APSignals', note: 'Software development.' }
    ],
    method: [
      { title: 'Thoughtful architecture', text: 'I shape the data model and API around the product’s needs, creating a reliable foundation before building the interface.' },
      { title: 'Security by design', text: 'I validate inputs on the server, handle errors deliberately, and consider security throughout implementation.' },
      { title: 'Quality delivery', text: 'I work in focused iterations, verify behavior as I go, and deliver maintainable software with fewer surprises.' },
      { title: 'Clear collaboration', text: 'I communicate decisions, document important details, and keep project handoffs straightforward.' }
    ],
    education: [
      { title: 'MSc, Computer Systems Architecture', note: 'In progress.' },
      { title: 'BSc, Computer Engineering', note: 'Gonbad Kavous University. Graduated with an A grade average.' },
      { title: 'CS50x', note: 'Harvard University. Completed the online course and bootcamp.' }
    ],
    footer: 'Built by hand with React and CSS.'
  },
  fa: {
    direction: 'rtl',
    languageName: 'فارسی',
    languagesLabel: 'انتخاب زبان',
    quickContactLead: 'برای همکاری یا سفارش پروژه آماده‌ام',
    quickContactAction: 'بیایید یک چیز عالی بسازیم',
    emailLabel: 'ایمیل',
    phoneLabel: 'تماس',
    navLabel: 'بخش‌های سایت',
    openMenuLabel: 'باز کردن منو',
    closeMenuLabel: 'بستن منو',
    nav: { about: 'درباره من', skills: 'مهارت‌ها', work: 'سوابق', contact: 'تماس' },
    sections: {
      about: 'درباره من',
      skills: 'مهارت‌ها',
      work: 'سوابق کاری',
      method: 'روش کار من',
      education: 'تحصیلات',
      learning: 'رشد و یادگیری مستمر',
      life: 'کمی دور از کیبورد',
      contact: 'ارتباط با من'
    },
    about:
      'من مهندس کامپیوتر و علاقه‌مند به ساخت کامل نرم‌افزار هستم؛ از رابط کاربری تا API و پایگاه داده. در حال حاضر در مقطع کارشناسی ارشد معماری سیستم‌های کامپیوتری تحصیل می‌کنم و به‌صورت فریلنسری کار می‌کنم.',
    contactLead: 'برای همکاری فریلنسری و پروژه‌های جذاب آماده‌ام. از طریق ایمیل سریع‌تر پاسخ می‌دهم.',
    learning:
      'یادگیری مداوم را بخشی از کار حرفه‌ای خودم می‌دانم؛ با مطالعه، تمرین و دنبال‌کردن تغییرات دنیای فناوری، دانشم را به‌روز نگه می‌دارم. آموخته‌هایم را به مهارت‌های کاربردی تبدیل می‌کنم و همیشه به‌دنبال راه‌های بهتر برای ساخت محصولات قابل‌اعتماد هستم. تمرکز فعلی‌ام روی لینوکس، شبکه و امنیت وب است.',
    life:
      'آشپزی می‌کنم و ورزش می‌کنم. هر دو مثل برنامه‌نویسی به نظم، تکرار و بهترشدن قدم‌به‌قدم نیاز دارند.',
    skills: [
      { title: 'فرانت‌اند', items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS'] },
      { title: 'بک‌اند', items: ['Node.js', 'Express', 'Go', 'REST APIs'] },
      { title: 'پایگاه داده', items: ['MongoDB', 'PostgreSQL'] },
      { title: 'دسکتاپ و اسکریپت‌نویسی', items: ['Python', 'PyQt'] },
      { title: 'لینوکس و شبکه', items: ['Linux', 'LPIC', 'Networking'] },
      { title: 'مبانی امنیت', items: ['امنیت وب', 'OWASP Top 10', 'کدنویسی امن', 'مبانی تست نفوذ'] }
    ],
    experience: [
      { title: 'توسعه‌دهنده فریلنسر', note: 'اکنون. پروژه‌های وب و دسکتاپ برای مشتریان.' },
      { title: 'رستانوین رایا', note: 'توسعه نرم‌افزار.' },
      { title: 'بهینه‌سازان سرزمین هوشمند', note: 'توسعه نرم‌افزار.' },
      { title: 'APSignals', note: 'توسعه نرم‌افزار.' }
    ],
    method: [
      { title: 'معماری سنجیده', text: 'مدل داده و API را متناسب با نیاز محصول طراحی می‌کنم تا پیش از ساخت رابط کاربری، پایه‌ای قابل‌اتکا داشته باشیم.' },
      { title: 'امنیت از ابتدا', text: 'ورودی‌ها را در سمت سرور اعتبارسنجی می‌کنم، خطاها را آگاهانه مدیریت می‌کنم و امنیت را در تمام مراحل توسعه در نظر می‌گیرم.' },
      { title: 'تحویل باکیفیت', text: 'در گام‌های متمرکز پیش می‌روم، رفتار نرم‌افزار را پیوسته بررسی می‌کنم و محصولی قابل‌نگهداری تحویل می‌دهم.' },
      { title: 'همکاری شفاف', text: 'تصمیم‌ها را روشن بیان می‌کنم، نکات مهم را مستند می‌کنم و فرایند تحویل و ادامهٔ پروژه را ساده نگه می‌دارم.' }
    ],
    education: [
      { title: 'کارشناسی ارشد معماری سیستم‌های کامپیوتری', note: 'در حال تحصیل.' },
      { title: 'کارشناسی مهندسی کامپیوتر', note: 'دانشگاه گنبد کاووس؛ فارغ‌التحصیل با معدل الف.' },
      { title: 'CS50x', note: 'دانشگاه هاروارد؛ دوره آنلاین و بوت‌کمپ را گذرانده‌ام.' }
    ],
    footer: 'با React و CSS، با دقت ساخته شده است.'
  },
  ar: {
    direction: 'rtl',
    languageName: 'العربية',
    languagesLabel: 'اختر اللغة',
    quickContactLead: 'هل لديك مشروع؟ أنا مستعد للتعاون',
    quickContactAction: 'لنبنِ شيئًا رائعًا',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'اتصل',
    navLabel: 'أقسام الموقع',
    openMenuLabel: 'فتح القائمة',
    closeMenuLabel: 'إغلاق القائمة',
    nav: { about: 'نبذة عني', skills: 'المهارات', work: 'الخبرة', contact: 'اتصل بي' },
    sections: {
      about: 'نبذة عني',
      skills: 'المهارات',
      work: 'الخبرة العملية',
      method: 'أسلوبي في العمل',
      education: 'التعليم',
      learning: 'التطور والتعلم المستمر',
      life: 'بعيدًا عن لوحة المفاتيح',
      contact: 'تواصل معي'
    },
    about:
      'أنا مهندس حاسوب من إيران، أحب بناء البرمجيات من البداية إلى النهاية: الواجهة وواجهة API وقاعدة البيانات. أدرس حاليًا ماجستير هندسة أنظمة الحاسوب وأعمل مستقلًا.',
    contactLead: 'متاح للعمل المستقل والمشاريع المميزة. البريد الإلكتروني هو أسرع طريقة للتواصل معي.',
    learning:
      'أجعل التعلم المستمر جزءًا من عملي؛ أدرس وأتدرب وأتابع تطورات البرمجيات والأمن لأحافظ على تحديث معرفتي. أحول ما أتعلمه إلى مهارات عملية وأبحث دائمًا عن طرق أفضل لبناء منتجات موثوقة. أركز حاليًا على لينكس والشبكات وأمن الويب.',
    life:
      'أحب الطبخ وممارسة الرياضة. كلاهما يكافئ عادات تشبه البرمجة: اتباع المنهج والتكرار والتحسن قليلًا في كل مرة.',
    skills: [
      { title: 'الواجهة الأمامية', items: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS'] },
      { title: 'الواجهة الخلفية', items: ['Node.js', 'Express', 'Go', 'REST APIs'] },
      { title: 'قواعد البيانات', items: ['MongoDB', 'PostgreSQL'] },
      { title: 'تطبيقات سطح المكتب والبرمجة النصية', items: ['Python', 'PyQt'] },
      { title: 'لينكس والشبكات', items: ['Linux', 'LPIC', 'Networking'] },
      { title: 'أساسيات أمن المعلومات', items: ['أمن الويب', 'OWASP Top 10', 'البرمجة الآمنة', 'أساسيات اختبار الاختراق'] }
    ],
    experience: [
      { title: 'مطور مستقل', note: 'حاليًا. مشاريع ويب وسطح مكتب للعملاء.' },
      { title: 'Restanvin Raya', note: 'تطوير البرمجيات.' },
      { title: 'Behineh Sazan Sarzamin Hooshmand', note: 'تطوير البرمجيات.' },
      { title: 'APSignals', note: 'تطوير البرمجيات.' }
    ],
    method: [
      { title: 'هندسة مدروسة', text: 'أصمم نموذج البيانات وواجهة API وفق احتياجات المنتج لتوفير أساس موثوق قبل بناء الواجهة.' },
      { title: 'الأمان منذ البداية', text: 'أتحقق من المدخلات على الخادم، وأتعامل مع الأخطاء بعناية، وأراعي الأمان خلال مراحل التطوير.' },
      { title: 'تسليم بجودة عالية', text: 'أعمل على مراحل مركزة، وأتحقق من السلوك باستمرار، وأسلم برمجيات سهلة الصيانة.' },
      { title: 'تعاون واضح', text: 'أوضح القرارات، وأوثق التفاصيل المهمة، وأجعل تسليم المشروع ومتابعته أمرًا سلسًا.' }
    ],
    education: [
      { title: 'ماجستير هندسة أنظمة الحاسوب', note: 'قيد الدراسة.' },
      { title: 'بكالوريوس هندسة الحاسوب', note: 'جامعة غونبد كاووس. تخرجت بتقدير ممتاز.' },
      { title: 'CS50x', note: 'جامعة هارفارد. أتممت الدورة عبر الإنترنت والمعسكر التدريبي.' }
    ],
    footer: 'صُنع بعناية باستخدام React وCSS.'
  }
}
