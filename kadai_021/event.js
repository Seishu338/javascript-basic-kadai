const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
  setTimeout(()=>{  const h2 = document.createElement('h2');
  h2.textContent = 'ボタンをクリックしました';
  document.querySelector('body').insertBefore(h2,btn);
  text.style.display ='none';
 },2000)
});

