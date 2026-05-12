function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(function(l) { l.classList.toggle('active', l.dataset.page === name); });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(function() {
    document.querySelectorAll('#page-' + name + ' .fade-in').forEach(function(el) {
      el.style.animation = 'none'; el.offsetHeight; el.style.animation = '';
    });
  }, 50);
}
window.addEventListener('scroll', function() { document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40); });

var triviaData = [
  { q: "What is Austin's tech-world nickname, and what inspired it?", a: '"Silicon Hills" \u2014 a nod to Silicon Valley, named for the rolling hills of the Austin area.' },
  { q: "Which Texas-headquartered company currently has the highest market cap?", a: "Tesla (TSLA), headquartered in Austin, at roughly $1.35 trillion as of early 2026." },
  { q: "How many Fortune 500 companies are headquartered in Texas?", a: "54 as of 2025 \u2014 second only to California (58), and ahead of New York (53)." },
  { q: "Which famous tech company was started in a UT Austin dorm room?", a: "Dell \u2014 Michael Dell founded it in 1984 with $1,000 and became the youngest-ever Fortune 500 CEO." },
  { q: "What groundbreaking invention was created at Texas Instruments in 1958?", a: "The integrated circuit \u2014 TI engineer Jack Kilby filed the first patent, enabling all modern computing." },
  { q: "Roughly how many tech companies and startups call the Austin area home?", a: "About 5,500 \u2014 from early-stage startups to giants like Tesla, Oracle, Apple, and Dell." },
  { q: "What was Austin's very first tech startup?", a: "Tracor, a defense electronics firm founded in 1962 by UT researchers. It became Austin's first Fortune 500 company." },
  { q: "How much has Samsung invested in its Austin/Taylor semiconductor operations?", a: "$18B in Austin since 1996, plus $17B+ on a new Taylor fab \u2014 over $40B total." },
  { q: "How large is Apple's footprint in Austin?", a: "Apple's second Austin campus spans 133 acres for up to 15,000 employees, with 10,000+ current team members across Texas." },
  { q: "What share of U.S. venture capital does Texas attract vs. California?", a: "Texas captures ~6% of U.S. VC funding vs. California's ~62%, but Texas's share more than doubled between 2022 and 2023." },
  { q: "Which famous dating app was founded in Austin by a female entrepreneur?", a: "Bumble \u2014 created by Whitney Wolfe Herd in 2014, one of Austin's biggest consumer tech success stories." },
  { q: "Name three top companies founded or led by UT Austin alumni.", a: "Dell Technologies (Michael Dell), Whole Foods Market (John Mackey), and ExxonMobil (led by UT alum Rex Tillerson)." },
  { q: "Which famous annual Austin event became a global tech launchpad?", a: "SXSW \u2014 started as a music fest in 1987, now a premier tech conference. Twitter broke through there in 2007." },
  { q: "How much does UT Austin spend annually on research?", a: "Over $1 billion per year, making it one of the top U.S. research universities." },
  { q: "Which legendary Silicon Valley VC is a McCombs MBA alum who backed Uber, Zillow, and Snapchat?", a: "Bill Gurley (MBA '93) \u2014 general partner at Benchmark. He also gave $5M to launch UT's Texas Robotics program." }
];
var triviaIdx = 0, triviaFlipped = false;
function renderTrivia() {
  document.getElementById('trivia-card').classList.remove('flipped');
  triviaFlipped = false;
  var item = triviaData[triviaIdx];
  document.getElementById('trivia-q-text').textContent = item.q;
  document.getElementById('trivia-a-text').textContent = item.a;
  document.getElementById('trivia-num').textContent = String(triviaIdx + 1).padStart(2, '0') + ' / ' + triviaData.length;
  document.getElementById('trivia-fill').style.width = ((triviaIdx + 1) / triviaData.length * 100) + '%';
  var dots = document.getElementById('trivia-dots');
  dots.innerHTML = '';
  for (var i = 0; i < triviaData.length; i++) {
    var d = document.createElement('div');
    d.className = 'trivia-dot' + (i === triviaIdx ? ' active' : '');
    d.setAttribute('data-idx', i);
    d.onclick = function(e) { e.stopPropagation(); triviaIdx = parseInt(this.getAttribute('data-idx')); renderTrivia(); };
    dots.appendChild(d);
  }
}
function flipTrivia() { triviaFlipped = !triviaFlipped; document.getElementById('trivia-card').classList.toggle('flipped', triviaFlipped); }
function nextTrivia() { triviaIdx = (triviaIdx + 1) % triviaData.length; renderTrivia(); }
function prevTrivia() { triviaIdx = (triviaIdx - 1 + triviaData.length) % triviaData.length; renderTrivia(); }
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') nextTrivia();
  if (e.key === 'ArrowLeft') prevTrivia();
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipTrivia(); }
});
renderTrivia();
