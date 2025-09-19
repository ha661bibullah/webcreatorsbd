// content-manager.js
document.addEventListener('DOMContentLoaded', function() {
    // localStorage থেকে কন্টেন্ট লোড করার ফাংশন
    function loadContent() {
        const elementsToUpdate = {
            // হিরো সেকশন
            'heroTitle': '.hero-bg h1',
            'heroDescription': '.hero-bg p',
            'heroBtn1': '.hero-bg button:first-child',
            'heroBtn2': '.hero-bg button:last-child',
            
            // উদ্ধৃতি সেকশন
            'quote1Title': '.bg-green-50 .bg-white:first-child h3',
            'quote1Desc': '.bg-green-50 .bg-white:first-child p',
            'quote2Title': '.bg-green-50 .bg-white:last-child h3',
            'quote2Desc': '.bg-green-50 .bg-white:last-child p',
            
            // বিভাগ সমূহ
            'categoriesTitle': 'section:nth-child(4) h2',
            'category1': '.grid-cols-6 > div:nth-child(1) h3',
            'category2': '.grid-cols-6 > div:nth-child(2) h3',
            'category3': '.grid-cols-6 > div:nth-child(3) h3',
            'category4': '.grid-cols-6 > div:nth-child(4) h3',
            'category5': '.grid-cols-6 > div:nth-child(5) h3',
            'category6': '.grid-cols-6 > div:nth-child(6) h3',
            
            // পরিসংখ্যান
            'stat1': '.bg-green-600 > div > div:nth-child(1) > div:first-child',
            'stat2': '.bg-green-600 > div > div:nth-child(2) > div:first-child',
            'stat3': '.bg-green-600 > div > div:nth-child(3) > div:first-child',
            'stat4': '.bg-green-600 > div > div:nth-child(4) > div:first-child',
            
            // ফুটার
            'footerLink1': 'footer ul:first-child li:first-child a',
            'footerLink2': 'footer ul:first-child li:nth-child(2) a',
            'footerLink3': 'footer ul:first-child li:nth-child(3) a',
            'footerLink4': 'footer ul:first-child li:nth-child(4) a',
            'footerLink5': 'footer ul:first-child li:nth-child(5) a',
            'footerLink6': 'footer ul:first-child li:nth-child(6) a',
            'footerAddress': 'footer > div > div:nth-child(4) > p:nth-child(1)',
            'footerPhone': 'footer > div > div:nth-child(4) > p:nth-child(2)',
            'footerEmail': 'footer > div > div:nth-child(4) > p:nth-child(3)',
            'footerCopyright': 'footer > div > div:last-child > p:first-child',
            
            // ছবি এবং লিংক
            'heroImage': '.hero-bg',
            'category1Icon': '.grid-cols-6 > div:nth-child(1) i',
            'category2Icon': '.grid-cols-6 > div:nth-child(2) i',
            'category3Icon': '.grid-cols-6 > div:nth-child(3) i',
            'category4Icon': '.grid-cols-6 > div:nth-child(4) i',
            'category5Icon': '.grid-cols-6 > div:nth-child(5) i',
            'category6Icon': '.grid-cols-6 > div:nth-child(6) i',
            'course1Image': '.grid-cols-4 > div:nth-child(1) img',
            'course2Image': '.grid-cols-4 > div:nth-child(2) img',
            'course3Image': '.grid-cols-4 > div:nth-child(3) img',
            'course4Image': '.grid-cols-4 > div:nth-child(4) img',
            'facebookLink': 'footer a:nth-child(1)',
            'youtubeLink': 'footer a:nth-child(2)',
            'instagramLink': 'footer a:nth-child(3)',
            'twitterLink': 'footer a:nth-child(4)'
        };

        for (const [key, selector] of Object.entries(elementsToUpdate)) {
            const savedValue = localStorage.getItem(key);
            if (savedValue) {
                const elements = document.querySelectorAll(selector);
                
                elements.forEach(element => {
                    if (selector.includes('img')) {
                        // ছবি আপডেট
                        element.src = savedValue;
                    } else if (selector.includes('i') && !selector.includes('a i')) {
                        // আইকন ক্লাস আপডেট
                        element.className = savedValue;
                    } else if (selector.includes('a') && !selector.includes('button a')) {
                        // লিংক আপডেট
                        if (key.includes('Link') && !key.includes('footerLink')) {
                            element.href = savedValue;
                        } else {
                            element.textContent = savedValue;
                        }
                    } else if (selector.includes('bg-')) {
                        // ব্যাকগ্রাউন্ড ইমেজ আপডেট
                        element.style.backgroundImage = `url('${savedValue}')`;
                    } else {
                        // টেক্সট আপডেট
                        element.textContent = savedValue;
                    }
                });
            }
        }
    }

    // পৃষ্ঠা লোড হলে কন্টেন্ট লোড করুন
    loadContent();

    // localStorage পরিবর্তন শুনুন (অন্য ট্যাব থেকে আপডেটের জন্য)
    window.addEventListener('storage', function(e) {
        if (e.key && e.newValue) {
            loadContent();
        }
    });
});