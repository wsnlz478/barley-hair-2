/* ============================================
   Barley Hair Transplant - Main JavaScript
   Global Functions & Interactive Features
   ============================================ */

// Generate Hero Slider with random images from hero folder
function generateHeroSlider() {
    const heroDescriptions = [
        'Complete Hairline Transformation',
        'Dramatic Density Improvement',
        'Natural Before & After Results',
        'Life-Changing Hair Restoration',
        'Amazing Hair Transplant Journey',
        'From Bald to Beautiful',
        'Natural Hairline Design',
        'Premium Density Results',
        'Confidence Restored',
        'Natural Growth Pattern',
        'Artistic Hair Transplant',
        'Remarkable Transformation'
    ];
    
    const container = document.querySelector('.hero-slider');
    if (!container) return;
    
    container.innerHTML = '';
    
    const usedNumbers = new Set();
    const images = [];
    
    while (images.length < 3) {
        const num = Math.floor(Math.random() * 23) + 1;
        if (!usedNumbers.has(num)) {
            usedNumbers.add(num);
            const paddedNum = String(num).padStart(3, '0');
            const desc = heroDescriptions[Math.floor(Math.random() * heroDescriptions.length)];
            images.push({
                src: `/hero/hero-${paddedNum}.jpg`,
                alt: desc
            });
        }
    }
    
    images.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy" width="1920" height="1080">`;
        container.appendChild(slide);
    });
}

// Random Image Gallery Generator - Enhanced
function getRandomImagesFromMultipleFolders(folders, count, descriptions) {
    const images = [];
    const used = new Set();
    
    while (images.length < count) {
        const folder = folders[Math.floor(Math.random() * folders.length)];
        const num = Math.floor(Math.random() * folder.max) + 1;
        const key = `${folder.name}-${num}`;
        
        if (!used.has(key)) {
            used.add(key);
            const paddedNum = String(num).padStart(3, '0');
            const desc = descriptions[Math.floor(Math.random() * descriptions.length)];
            images.push({
                src: `/${folder.name}/${folder.name}-${paddedNum}.jpg`,
                alt: desc,
                description: desc
            });
        }
    }
    
    return images;
}

// Generate Before/After Gallery - Enhanced
function generateBeforeAfterGallery() {
    const allDescriptions = [
        'Natural Hairline Restoration - 12 Months Results',
        'Complete Density Transformation - Professional FUE',
        'Confidence Restored - Full Hair Recovery',
        'Seamless Hairline Design - Natural Look',
        'Advanced Microneedle Technology Results',
        'Life-Changing Hair Transplant Journey',
        'Perfect Hairline Angle & Direction',
        'High Density Planting - Excellent Growth',
        'Scar-Free FUE Hair Restoration',
        'Premium Hair Transplant Results',
        'Natural Hair Pattern Restoration',
        'Expert Surgical Precision Results',
        'Full Coverage Hair Transplant',
        'Youthful Appearance Restored',
        'Professional Hair Density Enhancement',
        'Natural Looking Hair Transplant',
        'Premium Hair Restoration Results',
        'Artistic Hairline Design',
        'Advanced FUE Hair Transplant',
        'Microneedle Hair Transplant Results'
    ];
    
    const folders = [
        { name: 'manHairline', max: 35 },
        { name: 'manBald', max: 26 },
        { name: 'women', max: 33 },
        { name: 'Beard', max: 5 },
        { name: 'Eyebrow', max: 2 }
    ];
    
    const container = document.getElementById('beforeAfterGallery');
    if (!container) return;
    
    container.innerHTML = '';
    
    const selectedImages = getRandomImagesFromMultipleFolders(folders, 6, allDescriptions);
    
    selectedImages.forEach((img, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="1200" height="1200">
            <div class="gallery-overlay">
                <h4>${img.alt}</h4>
                <p>Before & After - Case #${String(index + 1).padStart(2, '0')}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// Generate Doctor-Patient Photos
function generateDoctorPatientPhotos() {
    const descriptions = [
        'Successful Surgery - Happy Patient',
        'Expert Doctor Team - Professional Care',
        'Post-Operation Satisfaction',
        'International Patient Experience',
        'World-Class Medical Team',
        'Trusted Hair Restoration Experts',
        'Confident Smile After Treatment',
        'Professional Medical Staff Excellence',
        'Friendly Nurse Care Team',
        'Patient Consultation Session',
        'Happy Patient Moments',
        'Celebrating Great Results',
        'Professional Treatment Experience',
        'Expert Hair Restoration Team',
        'Premium Patient Care Experience',
        'Medical Excellence in Action'
    ];
    
    const container = document.getElementById('doctorPatientPhotos');
    if (!container) return;
    
    container.innerHTML = '';
    
    const usedNumbers = new Set();
    const images = [];
    
    while (images.length < 8) {
        const num = Math.floor(Math.random() * 76) + 1;
        const paddedNum = String(num).padStart(3, '0');
        
        if (!usedNumbers.has(num)) {
            usedNumbers.add(num);
            const desc = descriptions[Math.floor(Math.random() * descriptions.length)];
            let extension = num === 70 || num === 71 ? '.JPG' : '.jpg';
            images.push({
                src: `/Photos/Photos-${paddedNum}${extension}`,
                alt: desc
            });
        }
    }
    
    images.forEach((img) => {
        const item = document.createElement('div');
        item.className = 'doctor-patient-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="800" height="800">
            <div class="doctor-patient-overlay">
                <p>${img.alt}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// Generate Hospital Environment Photos
function generateHospitalEnvironment() {
    const descriptions = [
        'Modern Surgical Suite - Sterile Environment',
        'Advanced Medical Equipment',
        'Comfortable Patient Recovery Area',
        'Professional Consultation Rooms',
        'State-of-the-Art Facility',
        'Premium Hospital Infrastructure',
        'Clean and Modern Waiting Area',
        'High-Tech Treatment Rooms',
        'Luxury Clinic Environment',
        'Professional Medical Facility',
        'Advanced Surgical Equipment',
        'Comfortable Patient Lounge',
        'Modern Hospital Design',
        'Premium Healthcare Environment'
    ];
    
    const container = document.getElementById('hospitalEnvironment');
    if (!container) return;
    
    container.innerHTML = '';
    
    const usedNumbers = new Set();
    const images = [];
    
    while (images.length < 6) {
        const num = Math.floor(Math.random() * 73) + 1;
        const paddedNum = String(num).padStart(3, '0');
        
        if (!usedNumbers.has(num)) {
            usedNumbers.add(num);
            const desc = descriptions[Math.floor(Math.random() * descriptions.length)];
            images.push({
                src: `/Hospital/Hospital-${paddedNum}.jpg`,
                alt: desc
            });
        }
    }
    
    images.forEach((img) => {
        const item = document.createElement('div');
        item.className = 'hospital-env-item';
        item.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="982" height="509">
            <div class="hospital-env-overlay">
                <p>${img.alt}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    showSlide(0);
    setInterval(nextSlide, 6000);
}

// Testimonials Generator
function generateTestimonials(pageName) {
    const testimonialsByPage = {
        'index': [
            { name: 'James Anderson', country: 'United States', text: 'Life-changing experience! The micro-needle technology gave me a completely natural hairline. The international patient team made everything seamless.' },
            { name: 'Oliver Thompson', country: 'United Kingdom', text: 'Exceptional service from consultation to final results. The doctors are true professionals and the outcomes are beyond my expectations.' },
            { name: 'Liam O\'Brien', country: 'Canada', text: 'Traveled from Toronto and it was worth every mile. The team understood my concerns and delivered amazing density.' },
            { name: 'Noah Williams', country: 'Australia', text: 'Best investment I\'ve made. Natural results, minimal downtime, and the staff treated me like family.' },
            { name: 'Hans Mueller', country: 'Germany', text: 'Precision and professionalism at its finest. The advanced technology and expert surgical team delivered perfect results.' },
            { name: 'Dmitri Volkov', country: 'Russia', text: 'Outstanding clinic with world-class facilities. My hair looks thick and natural. Highly recommend to everyone.' },
            { name: 'Ahmed Al-Rashid', country: 'UAE', text: 'Premium service and exceptional results. The hairline design is perfect and matches my facial features beautifully.' },
            { name: 'Wei Chen', country: 'Singapore', text: 'Professional team with artistic vision. They created a natural hairline that looks completely undetectable.' },
            { name: 'Raj Patel', country: 'Malaysia', text: 'Excellent experience from start to finish. The recovery was quick and the results exceeded my expectations.' }
        ],
        'about': [
            { name: 'Michael Brown', country: 'United States', text: 'Barley\'s reputation is well-deserved. 18+ years of excellence shows in every aspect of their service.' },
            { name: 'George Harris', country: 'United Kingdom', text: 'The scale of their operations with 40+ clinics demonstrates their expertise. Trusted them completely and got perfect results.' },
            { name: 'Jack Martin', country: 'Canada', text: 'Their patents and technology speak for themselves. Innovation combined with medical excellence.' },
            { name: 'Ethan Taylor', country: 'Australia', text: 'A clinic that truly cares about patient outcomes. The follow-up care was exceptional.' },
            { name: 'Stefan Johansson', country: 'Sweden', text: 'World-class organization with a personal touch. Every staff member was professional and caring.' },
            { name: 'Pierre Dubois', country: 'France', text: 'The reputation of Barley is international for good reason. Superior quality and results.' },
            { name: 'Kim Min-jun', country: 'South Korea', text: 'As someone from Korea with high standards, I was impressed by their precision and artistry.' },
            { name: 'Tanaka Hiroshi', country: 'Japan', text: 'Meticulous attention to detail and outstanding medical standards. Truly a world leader in hair transplantation.' },
            { name: 'Alessandro Rossi', country: 'Italy', text: 'The combination of technology and artistic skill is remarkable. My results are natural and beautiful.' }
        ],
        'services': [
            { name: 'Daniel White', country: 'United States', text: 'The range of services is impressive. From hairline to beard transplant, everything is done with precision.' },
            { name: 'Harry Davies', country: 'United Kingdom', text: 'Got my hairline and eyebrow transplant done. Both results are incredibly natural looking.' },
            { name: 'Benjamin Clark', country: 'Canada', text: 'Their comprehensive approach to hair loss treatment is excellent. Combined transplant with medical therapy for best results.' },
            { name: 'Lucas Martin', country: 'Australia', text: 'The micro-needle technology for my baldness restoration was amazing. High density and natural growth pattern.' },
            { name: 'Viktor Petrov', country: 'Russia', text: 'Beard transplant transformed my appearance. The follicle placement was perfect for natural look.' },
            { name: 'Ibrahim Hassan', country: 'UAE', text: 'Eyebrow transplant gave me the masculine look I wanted. Precise angulation and natural growth.' },
            { name: 'Lee Sung-min', country: 'South Korea', text: 'Hair thickening procedure exceeded expectations. The density improvement is remarkable.' },
            { name: 'Nguyen Van Anh', country: 'Vietnam', text: 'Complete hair restoration service. They addressed all my concerns with professional care.' },
            { name: 'Carlos Rodriguez', country: 'Spain', text: 'Full service from consultation to aftercare. Every step was handled with expertise.' }
        ],
        'technology': [
            { name: 'William Johnson', country: 'United States', text: 'The micro-needle technology is revolutionary. Minimal trauma and incredibly fast healing.' },
            { name: 'Thomas Wright', country: 'United Kingdom', text: 'FUE with micro-needle gave me amazing density. The precision of follicle placement is unmatched.' },
            { name: 'Alexander King', country: 'Canada', text: 'Their patented technology delivers superior results. The follicle survival rate is clearly very high.' },
            { name: 'Max Schmidt', country: 'Germany', text: 'Engineering precision meets medical artistry. The technology behind their success is impressive.' },
            { name: 'Andrei Kozlov', country: 'Russia', text: 'Advanced equipment and innovative techniques. The results speak for the quality of technology.' },
            { name: 'Yuki Yamamoto', country: 'Japan', text: 'The precision of their micro-needle system is remarkable. Natural results with minimal scarring.' },
            { name: 'Park Ji-hoon', country: 'South Korea', text: 'Cutting-edge technology combined with skilled surgeons. Perfect combination for excellent outcomes.' },
            { name: 'Mohammad Ali', country: 'Iran', text: 'The technological advantage is clear in the results. High density with natural appearance.' },
            { name: 'Jan Kowalski', country: 'Poland', text: 'Modern technology and expert application. The best investment for my confidence.' }
        ],
        'doctors': [
            { name: 'Robert Miller', country: 'United States', text: 'The surgical team is incredibly skilled. You can trust them with complete confidence.' },
            { name: 'David Wilson', country: 'United Kingdom', text: 'Expert doctors with artistic vision. They designed a hairline that perfectly suits my face.' },
            { name: 'Christopher Lee', country: 'Canada', text: 'The medical team\'s experience is evident. Professional, skilled, and caring throughout.' },
            { name: 'Andrew Mitchell', country: 'Australia', text: 'World-class surgeons who truly understand aesthetics. My results are natural and age-appropriate.' },
            { name: 'Erik Larsen', country: 'Norway', text: 'Highly qualified doctors with steady hands. The precision of their work is outstanding.' },
            { name: 'François Martin', country: 'France', text: 'Medical excellence combined with artistic sensibility. True masters of their craft.' },
            { name: 'Chen Wei', country: 'Taiwan', text: 'The doctors\' expertise gave me confidence. Natural results that exceed expectations.' },
            { name: 'Tan Boon', country: 'Singapore', text: 'Skilled surgeons who prioritize natural outcomes. Very pleased with my transplant.' },
            { name: 'Samuel Okafor', country: 'Nigeria', text: 'Excellent medical team with international standards. Professional care from start to finish.' }
        ],
        'cases': [
            { name: 'Matthew Taylor', country: 'United States', text: 'My before and after photos speak for themselves. Complete transformation in just 12 months.' },
            { name: 'Joshua Anderson', country: 'United Kingdom', text: 'From Norwood 5 to full head of hair. The transformation is incredible and natural.' },
            { name: 'Ryan Thomas', country: 'Canada', text: 'The case photos showed what was possible. Now I\'m one of their success stories too.' },
            { name: 'Jacob Jackson', country: 'Australia', text: 'Saw similar cases to mine and trusted the process. Best decision I ever made.' },
            { name: 'Lars Andersen', country: 'Denmark', text: 'The gallery of results convinced me. My outcome matches the quality shown.' },
            { name: 'Ahmed Ibrahim', country: 'Egypt', text: 'Real patients, real results. Now I\'m part of their success gallery.' },
            { name: 'Kevin O\'Connor', country: 'Ireland', text: 'The transformation photos were impressive. Mine turned out even better than expected.' },
            { name: 'Patrick Murphy', country: 'Ireland', text: 'Documented journey from consultation to final results. Every stage was handled professionally.' },
            { name: 'Simon Peters', country: 'Netherlands', text: 'The case studies showed natural results. My transplant followed the same high standards.' }
        ],
        'hair-loss': [
            { name: 'Paul Henderson', country: 'United States', text: 'Combined medical treatment with transplant for best results. Comprehensive approach to hair loss.' },
            { name: 'Mark Coleman', country: 'United Kingdom', text: 'They addressed the root cause of my hair loss. Treatment plan was personalized and effective.' },
            { name: 'Donald Barnes', country: 'Canada', text: 'Not just a transplant, but a complete hair loss solution. Long-term thinking and planning.' },
            { name: 'Steven Fisher', country: 'Australia', text: 'Medical therapy plus surgical restoration. The dual approach gave me excellent outcomes.' },
            { name: 'Kenneth Russell', country: 'New Zealand', text: 'They treated my progressive hair loss strategically. Planned for future needs as well.' },
            { name: 'Anthony Griffin', country: 'Ireland', text: 'Comprehensive diagnosis and treatment plan. Addressed both existing loss and future prevention.' },
            { name: 'Frank Diaz', country: 'Spain', text: 'Medical management combined with surgical excellence. Complete solution for baldness.' },
            { name: 'Raymond Hayes', country: 'Netherlands', text: 'They understood the pattern of my loss and planned accordingly. Very professional approach.' },
            { name: 'Gregory Myers', country: 'Sweden', text: 'Long-term hair loss management with excellent results. Strategic and effective treatment.' }
        ],
        'hair-care': [
            { name: 'Peter Ford', country: 'United States', text: 'The post-transplant care program is comprehensive. My grafts grew beautifully with their guidance.' },
            { name: 'Douglas Hamilton', country: 'United Kingdom', text: 'Excellent aftercare instructions and products. The maintenance program keeps my results optimal.' },
            { name: 'Henry Graham', country: 'Canada', text: 'They taught me how to care for my transplanted hair. Long-term results are excellent.' },
            { name: 'Carl Sullivan', country: 'Australia', text: 'The hair care regimen they provided is easy to follow. My hair stays thick and healthy.' },
            { name: 'Arthur Wallace', country: 'New Zealand', text: 'Professional guidance on hair maintenance. The care program is worth following.' },
            { name: 'Roger West', country: 'Ireland', text: 'Quality products and expert advice. The aftercare support is outstanding.' },
            { name: 'Joe Cole', country: 'South Africa', text: 'They provide ongoing support for hair health. My results keep improving with their care program.' },
            { name: 'Albert Reynolds', country: 'Singapore', text: 'Comprehensive hair care guidance. The maintenance plan ensures long-term success.' },
            { name: 'Willie Porter', country: 'Malaysia', text: 'Great advice on protecting and nurturing transplanted hair. Excellent long-term outcomes.' }
        ],
        'faq': [
            { name: 'Russell Long', country: 'United States', text: 'All my questions were answered thoroughly. The FAQ section and consultation were very helpful.' },
            { name: 'Roy Hughes', country: 'United Kingdom', text: 'Clear answers to all concerns. The team was patient and informative throughout.' },
            { name: 'Eugene Price', country: 'Canada', text: 'Transparent information and honest advice. They set realistic expectations and delivered.' },
            { name: 'Philip Bennett', country: 'Australia', text: 'Every question was answered professionally. No pressure, just facts and expertise.' },
            { name: 'Ralph Wood', country: 'New Zealand', text: 'Comprehensive information helped me make the right decision. Very grateful for their guidance.' },
            { name: 'Lawrence Barnes', country: 'Ireland', text: 'They took time to explain everything. Informed consent and clear communication.' },
            { name: 'Jeremy Ross', country: 'South Africa', text: 'Honest answers about what to expect. The results matched their explanations perfectly.' },
            { name: 'Howard Henderson', country: 'Singapore', text: 'Professional consultation answered all my concerns. Clear and detailed information.' },
            { name: 'Louis Coleman', country: 'Malaysia', text: 'They addressed every question with patience. Excellent patient education and support.' }
        ],
        'contact': [
            { name: 'Gerald Jenkins', country: 'United States', text: 'Easy to reach and quick to respond. The international patient team made everything simple.' },
            { name: 'Harold Perry', country: 'United Kingdom', text: 'Prompt responses via WhatsApp. Communication was excellent throughout my journey.' },
            { name: 'Keith Powell', country: 'Canada', text: '24/7 support is real! They answered my calls at any time. Very professional service.' },
            { name: 'Samuel Butler', country: 'Australia', text: 'The contact team was helpful and responsive. Made scheduling my procedure easy.' },
            { name: 'Willie Russell', country: 'New Zealand', text: 'Great communication from first contact to surgery. Everything was well coordinated.' },
            { name: 'Lawrence Griffin', country: 'Ireland', text: 'Responsive and professional. They made the whole process stress-free.' },
            { name: 'Sean Diaz', country: 'South Africa', text: 'Easy to get in touch and get answers. The support team is excellent.' },
            { name: 'Craig Hayes', country: 'Singapore', text: 'Quick responses and clear communication. The coordination was seamless.' },
            { name: 'Marc Myers', country: 'Malaysia', text: 'Professional communication throughout. They made everything easy to understand.' }
        ],
        'pricing': [
            { name: 'Todd Richardson', country: 'United States', text: 'Transparent pricing with no hidden costs. Great value compared to US clinics.' },
            { name: 'Nathan Cox', country: 'United Kingdom', text: 'Much more affordable than London clinics with better results. Excellent value for money.' },
            { name: 'Aaron Ward', country: 'Canada', text: 'The cost savings were significant. Paid less than half of Canadian prices for superior quality.' },
            { name: 'Jeremy Torres', country: 'Australia', text: 'Best investment for the price. The results are worth every dollar and more.' },
            { name: 'Justin Peterson', country: 'New Zealand', text: 'Affordable luxury. World-class service at a fraction of Western prices.' },
            { name: 'Brandon Gray', country: 'Ireland', text: 'Clear pricing structure with no surprises. Excellent quality at reasonable cost.' },
            { name: 'Adam Ramirez', country: 'Spain', text: 'Competitive pricing for premium service. The value is unmatched in Europe.' },
            { name: 'Tyler James', country: 'South Africa', text: 'Affordable excellence. Got premium results without premium price tag.' },
            { name: 'Zachary Watson', country: 'Singapore', text: 'Great pricing for the technology and expertise. Best value in Asia.' }
        ],
        'fue': [
            { name: 'Kyle Brooks', country: 'United States', text: 'FUE with micro-needle gave me incredible density. No linear scar and fast recovery.' },
            { name: 'Walter Kelly', country: 'United Kingdom', text: 'The FUE technique is minimally invasive. Back to work in a week with great results.' },
            { name: 'Harold Sanders', country: 'Canada', text: 'Scar-free extraction was important to me. The FUE results are perfect.' },
            { name: 'Victor Price', country: 'Australia', text: 'FUE technology at its finest. Natural hairline and excellent graft survival.' },
            { name: 'Dennis Bennett', country: 'New Zealand', text: 'Minimal downtime with FUE. The results exceeded my expectations.' },
            { name: 'Larry Wood', country: 'Ireland', text: 'Clean extraction sites and perfect placement. FUE is the way to go.' },
            { name: 'Eugene Barnes', country: 'South Africa', text: 'The precision of FUE extraction is remarkable. Excellent outcomes.' },
            { name: 'Frank Ross', country: 'Singapore', text: 'Modern FUE technique with great results. Very satisfied with my transplant.' },
            { name: 'Patrick Henderson', country: 'Malaysia', text: 'FUE gave me natural density without visible scarring. Highly recommend.' }
        ],
        'fut': [
            { name: 'Clarence Coleman', country: 'United States', text: 'FUT was perfect for my extensive baldness. High graft count with excellent survival.' },
            { name: 'Sean Jenkins', country: 'United Kingdom', text: 'For large areas, FUT is ideal. Got maximum coverage and density.' },
            { name: 'Philip Perry', country: 'Canada', text: 'The strip method gave me the grafts I needed. Excellent results for advanced baldness.' },
            { name: 'Johnny Powell', country: 'Australia', text: 'FUT provided the density I wanted. Scar is barely visible with short hair.' },
            { name: 'Howard Butler', country: 'New Zealand', text: 'Best option for Norwood 6. Got enough grafts for full restoration.' },
            { name: 'Billy Russell', country: 'Ireland', text: 'FUT gave me maximum grafts in one session. Very efficient and effective.' },
            { name: 'Bobby Griffin', country: 'South Africa', text: 'For extensive work, FUT is the choice. Great density and coverage.' },
            { name: 'Bruce Diaz', country: 'Singapore', text: 'FUT delivered the grafts I needed for complete restoration. Excellent technique.' },
            { name: 'Willie Hayes', country: 'Malaysia', text: 'High graft count with FUT. Perfect solution for advanced hair loss.' }
        ],
        'no-shave': [
            { name: 'Roger Myers', country: 'United States', text: 'No-shave was perfect for my business schedule. No one knew I had surgery.' },
            { name: 'Albert Ford', country: 'United Kingdom', text: 'Back to meetings in 2 days. The no-shave technique is truly discreet.' },
            { name: 'Arthur Hamilton', country: 'Canada', text: 'Long hair planting gave me immediate coverage. Amazing technology.' },
            { name: 'Carl Graham', country: 'Australia', text: 'No downtime and natural results. Perfect for public-facing professionals.' },
            { name: 'Roy Sullivan', country: 'New Zealand', text: 'The no-shave approach is revolutionary. Instant results with no visible signs.' },
            { name: 'Joe Wallace', country: 'Ireland', text: 'Celebrity-level discretion. The no-shave technique is incredible.' },
            { name: 'Willie West', country: 'South Africa', text: 'Perfect for women too. No one could tell I had a transplant.' },
            { name: 'Louis Cole', country: 'Singapore', text: 'Immediate aesthetics with long hair planting. Brilliant technique.' },
            { name: 'Ralph Reynolds', country: 'Malaysia', text: 'No-shave FUE is the future. Discreet and effective.' }
        ],
        'minoxidil': [
            { name: 'Jesse Porter', country: 'United States', text: 'Using minoxidil with my transplant enhanced results. Great combination therapy.' },
            { name: 'Craig Hunter', country: 'United Kingdom', text: 'The science behind minoxidil is solid. Saw good growth while waiting for transplant.' },
            { name: 'Phillip Hicks', country: 'Canada', text: 'They explained how to use minoxidil properly. Results improved significantly.' },
            { name: 'Shawn Crawford', country: 'Australia', text: 'Combined minoxidil with transplant for maximum density. Smart approach.' },
            { name: 'Clarence Henry', country: 'New Zealand', text: 'Minoxidil helped maintain existing hair. Good adjunct to surgery.' },
            { name: 'Dennis Boyd', country: 'Ireland', text: 'They taught me the proper application technique. Results have been excellent.' },
            { name: 'Peter Mason', country: 'South Africa', text: 'Minoxidil protocol was clearly explained. Good support for transplant results.' },
            { name: 'Frank Morales', country: 'Singapore', text: 'Using minoxidil as recommended. Hair density continues to improve.' },
            { name: 'Larry Kennedy', country: 'Malaysia', text: 'The combination of minoxidil and transplant is powerful. Very satisfied.' }
        ],
        'finasteride': [
            { name: 'George Warren', country: 'United States', text: 'Finasteride stopped my hair loss. Combined with transplant for perfect results.' },
            { name: 'Edward Dixon', country: 'United Kingdom', text: 'They explained the science clearly. Finasteride protects existing hair effectively.' },
            { name: 'Ronald Reyes', country: 'Canada', text: 'Male-specific treatment that works. Great for preventing further loss.' },
            { name: 'Anthony Webb', country: 'Australia', text: 'Finasteride plus transplant is the gold standard. Excellent long-term strategy.' },
            { name: 'Kevin Tucker', country: 'New Zealand', text: 'They monitored my progress carefully. Finasteride has been very effective.' },
            { name: 'Brian Porter', country: 'Ireland', text: 'Clear explanation of benefits and risks. Finasteride works as advertised.' },
            { name: 'Jason Hunter', country: 'South Africa', text: 'Blocking DHT stopped my loss. Transplant filled in the gaps. Perfect combo.' },
            { name: 'Matthew Hicks', country: 'Singapore', text: 'Finasteride protocol was professional. Great results with minimal side effects.' },
            { name: 'Timothy Crawford', country: 'Malaysia', text: 'They explained everything thoroughly. Finasteride is effective for male pattern loss.' }
        ]
    };
    
    const container = document.getElementById('patientTestimonials');
    if (!container) return;
    
    container.innerHTML = '';
    
    const pageKey = pageName || 'index';
    const testimonials = testimonialsByPage[pageKey] || testimonialsByPage['index'];
    
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 9);
    
    selected.forEach((testimonial) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        const initials = testimonial.name.split(' ').map(n => n[0]).join('');
        card.innerHTML = `
            <div class="stars">★★★★★</div>
            <div class="testimonial-header">
                <div class="testimonial-avatar">${initials}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.country}</p>
                </div>
            </div>
            <p class="testimonial-content">"${testimonial.text}"</p>
        `;
        container.appendChild(card);
    });
}

// Toggle FAQ for static content
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// Copy to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('Copied to clipboard!');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showToast('Copied to clipboard!');
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #2563eb, #10b981);
            color: white;
            padding: 16px 32px;
            border-radius: 24px;
            font-weight: 600;
            z-index: 99999;
            box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            animation: fadeInUp 0.3s ease;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// Generate Cases Gallery with filter functionality
function generateCasesGallery() {
    const galleryData = {
        'men-hairline': { folder: 'manHairline', max: 35, descriptions: [
            'Natural Hairline Restoration', 'Perfect Hairline Design', 'Frontal Hairline Surgery',
            'Natural Growing Hairline', 'Youthful Hairline Look', 'Artistic Hairline Creation'
        ]},
        'men-baldness': { folder: 'manBald', max: 26, descriptions: [
            'Complete Baldness Restoration', 'Crown Density Restoration', 'Full Head Coverage',
            'Norwood Scale Transformation', 'Bald to Full Hair', 'Complete Coverage Results'
        ]},
        'women-hairline': { folder: 'women', max: 33, descriptions: [
            'Female Hairline Restoration', 'Women\'s Hair Transplant', 'Natural Female Hairline',
            'Feminine Hair Design', 'Female Pattern Baldness Treatment', 'Women\'s Hair Restoration'
        ]},
        'beard': { folder: 'Beard', max: 5, descriptions: [
            'Full Beard Transplant', 'Beard Density Enhancement', 'Masculine Beard Design',
            'Natural Beard Growth', 'Beard Restoration', 'Perfect Beard Shape'
        ]},
        'eyebrow': { folder: 'Eyebrow', max: 2, descriptions: [
            'Natural Eyebrow Transplant', 'Perfect Eyebrow Design', 'Eyebrow Restoration',
            'Feminine Eyebrow Look', 'Eyebrow Density', 'Beautiful Eyebrow Shape'
        ]}
    };
    
    const container = document.getElementById('casesGallery');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Generate all images - NO LIMIT on number
    let allImages = [];
    
    for (const [filter, data] of Object.entries(galleryData)) {
        for (let i = 1; i <= data.max; i++) {
            const paddedNum = String(i).padStart(3, '0');
            const desc = data.descriptions[Math.floor(Math.random() * data.descriptions.length)];
            allImages.push({
                filter: filter,
                src: `/${data.folder}/${data.folder}-${paddedNum}.jpg`,
                alt: desc,
                description: desc
            });
        }
    }
    
    // Shuffle and display
    allImages = allImages.sort(() => 0.5 - Math.random());
    
    allImages.forEach((img) => {
        const item = document.createElement('div');
        item.className = `gallery-item case-item ${img.filter}`;
        item.dataset.filter = img.filter;
        item.innerHTML = `
            <img src="${img.src}" alt="${img.alt}" loading="lazy" width="1200" height="1200">
            <div class="gallery-overlay">
                <h4>${img.description}</h4>
                <p>Before & After Results</p>
            </div>
        `;
        container.appendChild(item);
    });
    
    // Initialize filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items - show ALL images for selected filter
            const items = document.querySelectorAll('.case-item');
            items.forEach(item => {
                if (filter === 'all' || item.dataset.filter === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}



// Back to Top Button
function initBackToTop() {
    let btn = document.getElementById('backToTop');
    
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'backToTop';
        btn.className = 'back-to-top';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(btn);
    }
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Service Category Tabs - For services.html
function initServiceTabs() {
    const categories = document.querySelectorAll('.service-category');
    const serviceCards = document.querySelectorAll('.service-card');
    if (categories.length === 0) return;
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active from all
            categories.forEach(cat => cat.classList.remove('active'));
            // Add active to clicked
            this.classList.add('active');
            
            const filter = this.dataset.category;
            
            // Filter service cards
            serviceCards.forEach(card => {
                const cardCategory = card.dataset.category;
                if (filter === 'all' || cardCategory === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileBtn || !navMenu) return;
    
    mobileBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileBtn.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileBtn.classList.remove('active');
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    generateHeroSlider();
    initHeroSlider();
    initBackToTop();
    initServiceTabs();
    initMobileMenu();
    
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);
    const pageName = filename.replace('.html', '') || 'index';
    
    if (pageName !== 'cases') {
        generateBeforeAfterGallery();
    } else {
        generateCasesGallery();
    }
    
    generateDoctorPatientPhotos();
    generateHospitalEnvironment();
    // generateTestimonials(pageName) - disabled, all pages use static testimonials
    
    // Only generate FAQ dynamically for faq.html page
    if (pageName === 'faq') {
        generateFAQ(pageName);
    }
});
