const CONTACT_EMAIL = 'hello@tomoshibi-design.jp';
document.querySelectorAll('#year').forEach(el=>{el.textContent=new Date().getFullYear()});
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;if(CONTACT_EMAIL==='YOUR_EMAIL@example.com'){alert('サイト管理者向け：script.js にお問い合わせ先のメールアドレスを設定してください。');return;}const name=form.elements.name.value.trim(),mail=form.elements.mail.value.trim(),message=form.elements.message.value.trim();const subject=encodeURIComponent('【ともしび意匠室】Webサイトからのお問い合わせ');const body=encodeURIComponent(`お名前：${name}\nメールアドレス：${mail}\n\nお問い合わせ内容：\n${message}`);window.location.href=`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;});}
