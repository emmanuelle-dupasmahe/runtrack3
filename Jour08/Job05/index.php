<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>National Park Foundation - Entraînement</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;700&display=swap');
        
        .font-serif { font-family: 'Playfair+Display', serif; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes fadeInUp {
        from {
        opacity: 0;
        transform: translateY(30px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
        }

        .animate-fade-up {
        animation: fadeInUp 0.8s ease-out forwards;
        }


        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
    </style>

</head>
<body class="bg-gray-900 text-white">

    <header class="relative min-h-screen flex flex-col">
        
        <div class="absolute inset-0 z-0">
            <img src="assets/images/park_national.avif" 
                 class="w-full h-full object-cover" 
                 alt="Montagnes">
            <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <nav class="relative z-20 flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
          <a href="index.php" class="flex items-center">
                <img src="assets/images/nparkf-logo.png" 
                alt="National Park Foundation Logo" 
                class="h-8 md:h-10 w-auto object-contain brightness-0 invert">
        </a>  
        
        

    <ul class="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-[0.2em]">
    <li class="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">
        About
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </li>

    <li class="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">
        Our Work
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </li>

    <li class="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">
        Stories
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </li>

    <li class="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">
        Support
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
    </li>
</ul>

            <div class="flex items-center gap-4 md:gap-6">
    
    <ul class="hidden lg:flex items-center gap-6 font-bold uppercase text-[10px] tracking-widest text-gray-100">
        <li class="hover:text-gray-300 cursor-pointer flex items-center gap-1">
            Partnerships
            <svg xmlns="http://www.w3.org/2000/center" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </li>
        <li class="hover:text-gray-300 cursor-pointer">News</li>
    </ul>

    <button class="hidden md:block hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </button>

    <button class="bg-[#004877] hover:bg-[#00365a] transition px-6 py-3 font-bold uppercase text-xs tracking-widest">
        Donate
    </button>
    
    <button id="menu-btn" class="md:hidden block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
    </button>
    </div>

            <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-black/95 p-8 flex flex-col gap-6 text-center md:hidden border-t border-white/10">
                <a href="#" class="text-lg uppercase tracking-widest">About</a>
                <a href="#" class="text-lg uppercase tracking-widest">Our Work</a>
                <a href="#" class="text-lg uppercase tracking-widest">Stories</a>
                <a href="#" class="text-lg uppercase tracking-widest text-blue-400">Support</a>
            </div>
        </nav>

        <main class="relative z-10 flex-1 flex flex-col justify-start pt-48 px-6 md:px-20 max-w-7xl mx-auto w-full">
    
    <h1 class="text-4xl md:text-6xl font-serif mb-6 leading-[1.1] opacity-0 animate-fade-up">
        Together, We Make <br> Parks Possible
    </h1>

    <p class="text-sm md:text-base max-w-2xl mb-4 leading-relaxed text-gray-100 opacity-0 animate-fade-up delay-200">
        It takes all of us to help sustain the vast landscapes and history of our national parks. 
        The National Park Foundation helps guide charitable giving to the greatest needs within 
        the National Park Service. See how your gift can help make the parks possible.
    </p>
    
    <div class="relative w-full opacity-0 animate-fade-up delay-400">
        <button class="md:absolute md:bottom-0 md:right-0 bg-white text-[#004877] px-10 py-5 font-bold uppercase text-sm tracking-[0.2em] hover:bg-gray-200 transition-colors shadow-xl">
            Support Our Parks
        </button>
    </div>

</main>

    </header>
    <section class="bg-white py-20 px-6 md:px-20 text-gray-900">
    <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-serif mb-6">Protecting the Places You Love</h2>
        <p class="text-lg text-gray-600">
           
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div class="group cursor-pointer">
            <div class="overflow-hidden mb-4">
                <img src="assets/images/4b3e9fae4220457daa97b1aa00f01dc2.avif"
                     alt="preservation" class="w-full h-64 object-cover group-hover:scale-105 transition duration-500">
            </div>
            <h3 class="font-bold text-xl mb-2">Preserving Wildlife</h3>
            <p class="text-gray-600 mb-4 text-sm">The National Park Foundation (NPF) is helping to protect the very things that draw us to national parks: the shared land and natural wonders of our parks.</p>
            <a href="#" class="text-[#004877] font-bold uppercase text-xs tracking-widest hover:underline">Learn More</a>
        </div>

        <div class="group cursor-pointer">
            <div class="overflow-hidden mb-4">
                <img src="assets/images/trail.avif" 
                     alt="trail" class="w-full h-64 object-cover group-hover:scale-105 transition duration-500">
            </div>
            <h3 class="font-bold text-xl mb-2">Restoring Trails</h3>
            <p class="text-gray-600 mb-4 text-sm">Improving access to parks for future generations.</p>
            <a href="#" class="text-[#004877] font-bold uppercase text-xs tracking-widest hover:underline">Learn More</a>
        </div>

        <div class="group cursor-pointer">
            <div class="overflow-hidden mb-4">
                <img src="assets/images/education.avif" 
                     alt="Education" class="w-full h-64 object-cover group-hover:scale-105 transition duration-500">
            </div>
            <h3 class="font-bold text-xl mb-2">Educational Programs</h3>
            <p class="text-gray-600 mb-4 text-sm">Our national parks are America’s largest classroom, providing our children with eye-opening and hands-on learning experiences. By supporting the National Park Foundation, you’re helping the next generation engage with the places that have connected us to nature and with our history.</p>
            <a href="#" class="text-[#004877] font-bold uppercase text-xs tracking-widest hover:underline">Learn More</a>
        </div>

    </div>
    </section>


    <footer class="bg-white text-[#004877] py-16 px-6 md:px-20 border-t border-gray-200">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div class="space-y-8">
            <img src="assets/images/nparkf-logo.png" alt="Logo NPF" class="h-12 w-auto">
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="text-sm space-y-4 text-gray-700">
                    <p class="font-medium">National Park Foundation<br>1500 K Street NW, Suite 700<br>Washington, D.C. 20005</p>
                    <p>Phone: (202) 796-2500<br>Toll-Free: (888) 467-2757</p>
                    <p>Donate by Mail<br>National Park Foundation<br>Attn: Gift Processing<br>P.O. Box 17394<br>Baltimore, MD 21298-9450</p>
                </div>
                <ul class="uppercase font-bold text-xs tracking-widest space-y-4">
                    <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" class="hover:underline">Terms of Use</a></li>
                    <li><a href="#" class="hover:underline">Grant Applications</a></li>
                    <li><a href="#" class="hover:underline">Financial Report</a></li>
                    <li><a href="#" class="hover:underline">Careers</a></li>
                    <li><a href="#" class="hover:underline">Contact NPF</a></li>
                    <li><a href="#" class="hover:underline">Donate</a></li>
                </ul>
            </div>

            <div class="flex gap-4 text-gray-600">
                <a href="#" class="hover:text-[#004877]"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="hover:text-[#004877]"><i class="fab fa-instagram"></i></a>
                <a href="#" class="hover:text-[#004877]"><i class="fab fa-twitter"></i></a>
                <a href="#" class="hover:text-[#004877]"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <div class="bg-gray-50 p-8 rounded-sm">
            <h3 class="text-3xl font-serif mb-4">Stay Inspired</h3>
            <p class="text-sm text-gray-600 mb-8">Connect with the parks you love. Sign up to receive the latest NPF news, information on how you can support our national treasures, and travel ideas for your next trip to the parks.</p>
            
            <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" class="p-3 border border-gray-300 focus:border-[#004877] outline-none">
                <input type="text" placeholder="Last Name *" class="p-3 border border-gray-300 focus:border-[#004877] outline-none">
                <input type="email" placeholder="Email *" class="p-3 border border-gray-300 md:col-span-2 focus:border-[#004877] outline-none">
                
                <div class="md:col-span-2">
                    <button type="submit" class="bg-[#004877] text-white px-8 py-3 font-bold uppercase text-xs tracking-widest hover:bg-blue-900 transition">
                        Sign up for the newsletter
                    </button>
                </div>
            </form>
            <p class="text-[10px] text-gray-500 mt-4 leading-tight">
                By submitting my email, I agree to receive correspondence from the National Park Foundation.
            </p>
        </div>
    </div>

    <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-[11px] text-gray-500">© 2025 National Park Foundation. The National Park Foundation is a 501(c)3 non-profit organization. Tax identification number: 52-1086761.</p>
        <div class="flex items-center gap-6">

            <img src="https://npf-prod.imgix.net/uploads/ba-ribbon-logo.png?auto=compress%2Cformat&amp;fit=max&amp;h=160&amp;q=80" alt="Best in America certified by Independent Charities of America" loading="lazy" style="aspect-ratio: 97 / 160;">
    
            <img src="https://npf-prod.imgix.net/uploads/candid-seal-platinum-2023.png?auto=compress%2Cformat&amp;fit=max&amp;h=160&amp;q=80" alt="Square with grey-blue border. Text reads &quot;Platinum Transparency 2023 - Candid.&quot;" loading="lazy" style="aspect-ratio: 109 / 109;">
    
            <img src="https://npf-prod.imgix.net/uploads/charity-nav-logo.png?auto=compress%2Cformat&amp;fit=max&amp;h=160&amp;q=80" alt="NPF is a Charity Navigator" loading="lazy" style="aspect-ratio: 84 / 84;">
        </div>
    </div>
    </footer>

    <script>
        const btn = document.getElementById('menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    </script>

</body>
</html>