let language = 'en';
try { language = localStorage.getItem('onur-language') === 'tr' ? 'tr' : 'en'; } catch {}
function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en][data-tr]').forEach(el => { el.textContent = el.dataset[lang].replaceAll('\\n', '\n'); });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === lang)));
  document.querySelector('nav').setAttribute('aria-label', lang === 'tr' ? 'Ana menü' : 'Main navigation');
  document.querySelector('.languages').setAttribute('aria-label', lang === 'tr' ? 'Dil' : 'Language');
  document.querySelector('.logo').setAttribute('aria-label', lang === 'tr' ? 'Onur Yılmaz ana sayfa' : 'Onur Yılmaz home');
  document.title = lang === 'tr' ? 'Onur Yılmaz — Mühendis & Yazar' : 'Onur Yılmaz — Engineer & Author';
  document.getElementById('copy-status').textContent = '';
  try { localStorage.setItem('onur-language', lang); } catch {}
}
document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText('mail@onuryilmaz.me'); status.textContent = language === 'tr' ? 'E-posta adresi kopyalandı.' : 'Email address copied.'; }
  catch { status.textContent = language === 'tr' ? 'Adres: mail@onuryilmaz.me' : 'Email: mail@onuryilmaz.me'; }
});
document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(language);
